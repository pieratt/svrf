'use client';

import Link from "next/link";
import Logo from "./Logo";
import { SECONDARY_TEXT } from "./constants";

export default function Hero() {
  return (
    <div className="space-y-16">
      <div>
        <Link href="/">
          <Logo />
        </Link>
      </div>

      <div className="space-y-8 pt-4">
        <p className={SECONDARY_TEXT}>
          <span className="text-white">SVRF is a</span> human-made, link-friendly, profit-sharing, soul-searching, invitation-only, not-for-everyone, independently-owned, business-model-having, personal-hero-following, <span className="text-white">new social network of the web&apos;s best editors and members.</span>
        </p>

        <p className={SECONDARY_TEXT}>
          <span className="text-white">Membership and Editor Applications are open for 30 days then will close indefinitely</span>. If this sounds good to you, I hope you&apos;ll apply.
        </p>

        <p className={SECONDARY_TEXT}>
          — Ben Pieratt<br />
          1/20/25
        </p>
      </div>
    </div>
  );
}
