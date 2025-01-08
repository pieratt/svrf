import React from "react";

export default function Gradient() {
  return (
    <div className="fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 h-[100vh_+_20rem] translate-y-80">
        <div className="w-full h-full bg-gradient-to-t from-[#525252] to-[#000000]" />
      </div>
    </div>
  );
}
