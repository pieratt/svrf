'use client';

import Head from "next/head";
import Hero from "./Hero";
import PillButton from "./PillButton";
import FeatureList from "./FeatureList";
import SectionHeader from "./SectionHeader";
import { PRIMARY_TEXT, SECONDARY_TEXT, PRICE_BUTTON_COLORS } from "./constants";
import Link from "next/link";
import Gradient from "./Gradient";
import Editors from "./Editors";
import CountdownTimer from "./CountdownTimer";
import { redirectToCheckout } from "@/lib/stripe-client";

export default function Lander() {
  const handleCheckout = async (priceId: string) => {
    console.log('Attempting checkout with price ID:', priceId);
    if (!priceId) {
      console.error('Price ID is undefined!');
      alert('Configuration error: Price ID is missing');
      return;
    }
    await redirectToCheckout(priceId);
  };

  return (
    <>
      <Head>
        <title>SVRF — Beautiful Internet</title>
        <meta
          name="description"
          content="A new social network from the founder of SVPPLY."
        />
      </Head>
      <Gradient />
      <main className="relative min-h-screen">
        <div className="flex flex-col max-w-[600px] mx-auto px-4 py-32 space-y-32">
          <Hero />

          <div className="grid grid-cols-2 gap-8">
            <section className="space-y-3">
              <SectionHeader className="text-left">SVRF Membership - One Year </SectionHeader>
              <PillButton
                colors={PRICE_BUTTON_COLORS.member}
                onClick={() => handleCheckout(process.env.NEXT_PUBLIC_STRIPE_MEMBER_PRICE_ID!)}
                size="lg"
              >
                $99
              </PillButton>
              <p className={SECONDARY_TEXT}>
                Includes:<br />
                1 Editor Application<br />
                One-year SVRF Membership<br />
                Customizable Feed<br />
                Personal Profile<br />
              </p>
              <div className="space-y-4">
                
                <p className="text-zinc-500 italic font-inconsolata">
                  Available for <CountdownTimer />
                </p>
              </div>
            </section>

            <section className="space-y-3">
              <SectionHeader className="text-left">SVRF Membership - Lifetime </SectionHeader>
              <PillButton
                colors={PRICE_BUTTON_COLORS.editor}
                onClick={() => handleCheckout(process.env.NEXT_PUBLIC_STRIPE_EDITOR_PRICE_ID!)}
                size="lg"
              >
                $999
              </PillButton>
              <p className={SECONDARY_TEXT}>
                Includes:<br />
                2 Editor Applications<br />
                Lifetime SVRF Membership<br />
                2 One-Year SVRF Member invites<br />
                Gradient Logo Crew<br />
                Customizable Feed<br />
                Personal Profile<br />
                Zoom with founder<br />
              </p>
              <div className="space-y-4">
                
                <p className="text-zinc-500 italic font-inconsolata">
                  Available for <CountdownTimer />
                </p>
              </div>
            </section>
          </div>

          <Editors />

          <section className="space-y-3">
            <SectionHeader className="text-left">Launch Schedule</SectionHeader>
            <p className={SECONDARY_TEXT}>
              <span className="italic">February 18th</span> - <span className="text-white">Membership closes indefinitely</span><br />
              <span className="italic">February 20th</span> - Full refunds issued to Members who are selected as Editors.<br />
              <span className="italic">February 28th</span> - Editor Applications go out<br />
              <span className="italic">March 2025</span> - Editors reviewed, selected and notified<br />   
              <span className="italic">April 2025</span> - <span className="text-white">Membership fees pooled into a fund, 50% of which will be distributed equally among editors.</span> <br />
              <span className="italic">April 2025</span> - SVRF opens to Editors<br />
              <span className="italic">Fall 2025</span> - SVRF opens to Members<br />
            </p>
          </section>

          <section className="space-y-3">
            <SectionHeader className="text-left">Questions</SectionHeader>
            <p className={SECONDARY_TEXT}>
              <span className="italic">How many Editors will be selected?</span> - Very, very few.<br />
              <span className="italic">How do I learn more?</span> - If the vision doesn't already make sense to you then don't worry about it.<br />
              <span className="italic">Who is building this?</span> - Ben Pieratt, founder of SVPPLY. Follow <Link href="https://x.com/pieratt">Ben</Link> for updates.
            </p>     
          </section>

          <p className="text-zinc-800 text-[10px] font-inconsolata text-center italic">
            the kingdom of heaven is spread out over the earth, and men do not see it.
          </p>
        </div>
      </main>
    </>
  );
}
