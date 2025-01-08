import clsx from "clsx";
import { ComponentProps } from "react";
import { PRIMARY_TEXT } from "./constants";

export default function SectionHeader({
  children,
  className,
  ...props
}: ComponentProps<"h2">) {
  return (
    <h2 className={clsx(PRIMARY_TEXT, className)} {...props}>
      {children}
    </h2>
  );
}
