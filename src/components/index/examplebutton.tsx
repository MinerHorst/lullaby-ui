import React from "react";

export default function ExampleButtonComponent() {
  return (
    <button className="relative z-[100] inline-flex h-12 overflow-hidden rounded-full p-[1px]">
      <span className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_0deg_at_50%_50%,#333_0%,#333_50%,#fff_100%)]" />
      <span className="z-[20] inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white">
        Animated Border
      </span>
    </button>
  );
}
