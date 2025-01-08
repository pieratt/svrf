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
        "rounded-full bg-white px-12 py-6 font-serif text-black text-5xl",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
