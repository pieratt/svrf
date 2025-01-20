import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inconsolata } from 'next/font/google';
import "./globals.css";

const panama = localFont({
  src: [
    {
      path: '../public/Panama Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/Panama Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-panama'
});

const panamaMono = localFont({
  src: [
    {
      path: '../public/Panama Monospace Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/Panama Monospace Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-panama-mono'
});

const inconsolata = Inconsolata({ 
  subsets: ['latin'],
  variable: '--font-inconsolata',
});

export const metadata: Metadata = {
  title: "SVRF — Beautiful Internet",
  description: "A new social network from the founder of SVPPLY.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${panama.variable} ${panamaMono.variable} ${inconsolata.variable}`}>
        {children}
      </body>
    </html>
  );
}
