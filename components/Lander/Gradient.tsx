import React from "react";

export default function Gradient() {
  return (
    <div className="fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 h-[calc(100vh_+_1rem)]">
        <div className="w-full h-full bg-gradient-to-t from-[#000000] to-[#000000]" />
      </div>
    </div>
  );
}
