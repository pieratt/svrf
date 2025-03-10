import React from "react";

export default function Gradient() {
  return (
    <div className="fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 h-[300vh]">
        <div className="w-full h-full bg-gradient-to-b from-[#0b0713] to-[#cbc5a3]" />
      </div>
    </div>
  );
}
