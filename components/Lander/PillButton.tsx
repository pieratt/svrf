'use client';

import { type ComponentProps } from "react";
import type { ColorCombo } from "./constants";

interface PillButtonProps extends ComponentProps<"button"> {
  colors: ColorCombo;
  size?: 'sm' | 'lg';
  disableHover?: boolean;
}

export default function PillButton({
  colors: [bgColor, textColor],
  size = 'sm',
  disableHover = false,
  className,
  children,
  ...props
}: PillButtonProps) {
  const sizeClasses = {
    sm: "px-8 py-1.5 text-sm",
    lg: "px-12 py-1.5 text-sm"
  };

  return (
    <button
      className={`rounded-full transition-colors duration-200 ease-in-out font-inconsolata ${sizeClasses[size]}`}
      style={{
        backgroundColor: bgColor,
        color: textColor,
      }}
      onMouseEnter={e => {
        if (!disableHover) {
          const target = e.currentTarget;
          target.style.backgroundColor = textColor;
          target.style.color = bgColor;
        }
      }}
      onMouseLeave={e => {
        if (!disableHover) {
          const target = e.currentTarget;
          target.style.backgroundColor = bgColor;
          target.style.color = textColor;
        }
      }}
      {...props}
    >
      {children}
    </button>
  );
} 