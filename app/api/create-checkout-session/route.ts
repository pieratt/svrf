import { NextResponse } from 'next/server';
import Stripe from 'stripe';

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is not set in environment variables');
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2024-12-18.acacia',
});

type StripeError = {
  message?: string;
  type?: string;
  code?: string;
};

export async function POST(req: Request) {
  try {
    const { priceId } = await req.json();

    if (!priceId) {
      return NextResponse.json(
        { error: 'Price ID is required' },
        { status: 400 }
      );
    }

    console.log('Creating checkout session with price ID:', priceId);

    // Get the price details to determine if it's recurring
    const price = await stripe.prices.retrieve(priceId);
    const isSubscription = price.type === 'recurring';

    const session = await stripe.checkout.sessions.create({
      mode: isSubscription ? 'subscription' : 'payment',
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}`,
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (error: unknown) {
    const stripeError = error as StripeError;
    console.error('Stripe error:', {
      message: stripeError.message,
      type: stripeError.type,
      code: stripeError.code,
    });

    return NextResponse.json(
      { 
        error: stripeError.message || 'Error creating checkout session',
        code: stripeError.code,
        type: stripeError.type
      },
      { status: 500 }
    );
  }
} 