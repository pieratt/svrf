"use client";

import clsx from "clsx";
import { ComponentProps } from "react";

export default function HeroButton({
  children,
  className,
  ...props
}: ComponentProps<"button">) {
  return (
    <button
      className={clsx(
        "rounded-full bg-black px-8 py-4 font-serif text-3xl text-white",
        "transition-all duration-200 ease-in-out",
        "hover:bg-black hover:text-white active:scale-95",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
