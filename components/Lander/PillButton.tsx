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
  ...props
}: PillButtonProps) {
  const sizeClasses = {
    sm: "px-6 py-1.5 md:px-6 md:py-3 text-sm",
    lg: "px-8 py-1.5 md:px-8 md:py-3 text-sm"
  };

  return (
    <button
      className={`transition-colors duration-200 ease-in-out font-inconsolata ${sizeClasses[size]}`}
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
      {props.children}
    </button>
  );
} 