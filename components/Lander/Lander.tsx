'use client';

import Head from "next/head";
import Hero from "./Hero";
import Gradient from "./Gradient";

export default function Lander() {
  return (
    <>
      <Head>
        <title>SVRF — Beautiful Internet</title>
        <meta
          name="description"
          content="SVRF Local Web"
        />
      </Head>
      <Gradient />
      <main className="relative min-h-screen">
        <div className="flex flex-col max-w-[700px] mx-auto px-4 py-32 space-y-32">
          <Hero />
        </div>
        <p className="absolute bottom-32 left-1/2 -translate-x-1/2 text-zinc-800 text-xs font-inconsolata italic">
          The kingdom of heaven is spread out upon the earth, and we do not see it. 
          — Gospel of Thomas 113
        </p>
      </main>
    </>
  );
}
