'use client';

import { useState } from "react";
import Content from "./Content";
import Link from "next/link";
import Logo from "./Logo";

export default function Hero() {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  return (
    <div className="space-y-16">
      <Content />

      <div className="space-y-8">
        <div 
          onClick={() => setIsDescriptionVisible(!isDescriptionVisible)}
          className="cursor-pointer"
        >
          <Link href="/" onClick={(e) => e.preventDefault()}>
            <Logo />
          </Link>
        </div>

        <div 
          className={`overflow-hidden transition-all duration-300 ${
            isDescriptionVisible 
              ? 'max-h-[500px] opacity-100' 
              : 'max-h-0 opacity-0'
          }`}
        >
          <div className="space-y-4">
            <div className="grid grid-cols-[100px,1fr] gap-x-4 gap-y-2">
              <span></span>
              <p className="text-[#cbc5a3] font-dm-sans text-lg">
                SVRF is a new home for web locals. Membership is closed until further notice, there is no mailing list. Thank you for visiting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
