import { useEffect, useState } from "react";
import Head from "next/head";
import Wheel from "@uiw/react-color-wheel";

import { motion } from "framer-motion";

import NavbarComponent from "~/components/Navbar";
import CodeBlockComponent from "~/components/codeBlock";

import { hsvaToHex } from "@uiw/color-convert";
import ExampleButtonComponent from "~/components/index/examplebutton";
import ColorChangingComponent from "~/components/index/ColorChangingComponent";
import Link from "next/link";
import Rating from "~/components/ui/rating";
import MentionComponent from "~/components/ui/mentionComponent";
import ToolbarComponent from "~/components/ui/toolbarComponent";
import TextPulse from "~/components/ui/textPulse";
import DrawerComponent from "~/components/ui/drawer";
import OTPComponent from "~/components/ui/otpComponent";
import SocialButton from "~/components/ui/socialButton";
import TextGenerator from "~/components/ui/textGenerator";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const [hsva, setHsva] = useState({ h: 214, s: 43, v: 90, a: 1 });
  const colorashex = hsvaToHex(hsva);

  const codeString = `<div className="flex gap-4">
  <button
    className="h-12"
    style={{
      backgroundColor: ${colorashex})
    }}
   >
    Browse Components
  </button>
</div>
`;

  return (
    <>
      <Head>
        <title>Lullaby UI</title>
        <meta
          name="description"
          content="Lullaby UI is a function react component library with in browser customization and copy/ paste functionality."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex h-[100dvh] w-screen flex-col items-center bg-gradient-to-b from-[#000] to-[#15162c] md:h-fit">
        <NavbarComponent />
        <div className="grid h-[90.6vh] w-screen grid-cols-12 text-white md:h-auto">
          <div className="col-span-full flex h-[10vh] items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-8 w-8 flex-shrink-0 stroke-1 text-neutral-400"
            >
              <path d="M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993"></path>
              <path d="M15 12v-3"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-8 w-8 flex-shrink-0 stroke-1 text-neutral-400"
            >
              <path d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102"></path>
              <path d="M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102"></path>
              <path d="M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2"></path>
              <path d="M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2"></path>
              <path d="M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896"></path>
              <path d="M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897"></path>
              <path d="M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z"></path>
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-8 w-8 flex-shrink-0 stroke-1 text-neutral-400"
            >
              <path d="M18.5 9.51a4.22 4.22 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4 3.23 3.23 0 0 1 3.5-1.49 4.32 4.32 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4 3.2 3.2 0 0 1-3.5 1.51zm-13 4.98a4.22 4.22 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4 3.23 3.23 0 0 1-3.5 1.49 4.32 4.32 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4 3.2 3.2 0 0 1 3.5-1.51z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-8 w-8 flex-shrink-0 stroke-1 text-neutral-400"
            >
              <path d="M12 12l-8 -8v16l16 -16v16l-4 -4"></path>
              <path d="M20 12l-8 8l-4 -4"></path>
            </svg>
          </div>
          <div className="col-span-full flex h-[20vh] w-full flex-col justify-center text-center">
            <motion.h1
              initial={{ opacity: 0, y: -4 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="font-bold [font-size:_clamp(2em,3.5vw,8em)]"
            >
              Streamline your development process.
            </motion.h1>
            <p className="text-neutral-400">
              With copy and paste components that suit all your needs.
            </p>
          </div>
          <div className="col-span-full flex h-[15vh] items-center justify-center gap-4">
            <Link href={"/components"}>
              <button className="mr-4 inline h-12 rounded-md border px-2 md:hidden">
                Components
              </button>
            </Link>
            <Link href={"/components"}>
              <button className="mr-4 hidden h-12 w-[180px] rounded-md border px-2 md:inline">
                Browse Components
              </button>
            </Link>

            <button className="h-12 rounded-md border bg-white px-2 text-black md:w-[180px]">
              Resources
            </button>
          </div>
          <div className="rounded-xlp-4 col-span-10 col-start-2 hidden h-[85vh] grid-cols-5 grid-rows-4 gap-4 rounded-xl p-4 lg:grid">
            <div className="col-span-1 col-start-1 row-span-1 row-start-1 rounded bg-slate-500/10">
              <MentionComponent />
            </div>
            <div className="col-span-2 col-start-2 row-span-1 row-start-1 flex flex-col items-center justify-center rounded bg-slate-500/10">
              <ToolbarComponent />
            </div>
            <div className="col-span-2 col-start-4 row-span-2 row-start-1 flex items-center justify-center rounded bg-slate-500/10">
              <DrawerComponent />
            </div>
            <div className="col-span-3 col-start-1 row-span-2 row-start-2 flex flex-col items-center justify-center rounded bg-slate-500/10 px-4">
              <div className="[font-size:_clamp(2.5em,3vw,8em)]">
                <TextPulse text={"Hello, World!"} delay={0.2} />
              </div>
            </div>
            <div className="col-span-2 col-start-4 row-span-1 row-start-3 flex items-center justify-center rounded bg-slate-500/10">
              <OTPComponent length={6} separatorIndex={3} />
            </div>
            <div className="col-span-2 col-start-1 row-span-1 row-start-4 flex flex-col items-center justify-center rounded bg-slate-500/10">
              <SocialButton
                text="Check out my"
                social="twitter"
                socialLink="https://twitter.com/minerhorst"
              />
            </div>
            <div className="col-span-3 col-start-3 row-span-1 row-start-4 flex items-center justify-center rounded bg-slate-500/10">
              <button className="relative z-[100] inline-flex min-h-8 w-fit overflow-hidden rounded-full p-[1px]">
                <span className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_0deg_at_50%_50%,#333_0%,#333_50%,#fff_100%)]" />
                <span className="z-[20] inline-flex h-full w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white">
                  <Link href="/pricing" className="flex items-center gap-2">
                    Check out more <ArrowRight />
                  </Link>
                </span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
