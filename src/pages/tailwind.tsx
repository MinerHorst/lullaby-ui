import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center text-white [font-size:_clamp(2em,2.5vw,8em)]">
      <h1 className="[font-size:_clamp(2em,2.5vw,8em)]">Coming Soon!</h1>
      <Link href={"/components"} className="text-base underline">
        Browse Components.
      </Link>
    </div>
  );
}