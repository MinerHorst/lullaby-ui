import { useEffect, useState } from "react";
import Head from "next/head";
import Wheel from "@uiw/react-color-wheel";

import { motion } from "framer-motion";

import NavbarComponent from "~/components/Navbar";
import CodeBlockComponent from "~/components/codeBlock";

import { hsvaToHex } from "@uiw/color-convert";
import ExampleButtonComponent from "~/components/index/examplebutton";
import ColorChangingComponent from "~/components/ui/ColorChangingComponent";
import Link from "next/link";

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
      <div className="absolute grid h-screen w-screen grid-cols-12 grid-rows-12 px-4">
        <div className="col-span-full row-span-full row-start-8 flex h-full w-full flex-col justify-around rounded-lg bg-violet-950/40 px-4 py-4 md:col-span-6 md:col-start-7 md:row-span-8 md:row-start-3">
          <div className="flex h-[40%] items-center justify-between">
            <div className="relative z-[40] flex h-full w-[60%] items-center justify-center rounded-md bg-white/10">
              <ColorChangingComponent color={hsvaToHex(hsva)} />
            </div>
            <Wheel
              color={hsva}
              onChange={(color) => setHsva({ ...hsva, ...color.hsva })}
              className="relative z-[500] hidden flex-shrink-0 md:inline"
            />
          </div>

          <div className="relative z-[60] h-[50%] w-full">
            <CodeBlockComponent language="language-jsx" code={codeString} />
          </div>
        </div>
      </div>

      <main className="flex min-h-screen w-screen flex-col items-center bg-gradient-to-b from-[#000] to-[#15162c] md:h-screen">
        <NavbarComponent />
        <div className="relative z-[50] grid h-full w-screen grid-cols-12 grid-rows-12 gap-4 px-4 md:pt-0">
          <div className="col-span-full row-span-6 flex flex-col justify-around space-y-4 rounded-lg bg-slate-500/10 text-white md:col-span-7 md:row-span-6 md:row-start-4">
            <motion.h1
              initial={{ opacity: 0, y: -4 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="px-4 pt-4 font-bold leading-[1em] [font-size:_clamp(1.5em,3.5vw,8em)]"
            >
              Streamline your development process
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="w-[80%] px-4 text-muted-foreground"
            >
              With copy and paste components that allow for customization right
              in the browser streamlining your development process allowing for
              faster product launch.
            </motion.p>
            <div className="flex justify-start px-4 pb-4 md:justify-start">
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
                Ressources
              </button>
            </div>
          </div>

          <div className="col-span-full row-start-12 hidden justify-between md:flex">
            <div className="flex items-center">
              <a href="https://twitter.com">
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
                  className="h-4 w-4 flex-shrink-0 stroke-1 text-muted-foreground md:h-8 md:w-8"
                >
                  <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                  <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
                </svg>
              </a>
            </div>
            <div className="flex w-fit items-center gap-4">
              <div className="flex items-center gap-2 text-muted-foreground">
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
                  className="h-4 w-4 flex-shrink-0 stroke-1 text-muted-foreground md:h-8 md:w-8"
                >
                  <path d="M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993"></path>
                  <path d="M15 12v-3"></path>
                </svg>
                <p>Node.JS</p>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground ">
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
                  className="h-4 w-4 flex-shrink-0 stroke-1 text-muted-foreground md:h-8 md:w-8"
                >
                  <path d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102"></path>
                  <path d="M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102"></path>
                  <path d="M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2"></path>
                  <path d="M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2"></path>
                  <path d="M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896"></path>
                  <path d="M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897"></path>
                  <path d="M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z"></path>
                </svg>
                <p>React</p>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground ">
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
                  className="h-4 w-4 flex-shrink-0 stroke-1 text-muted-foreground md:h-8 md:w-8"
                >
                  <path d="M18.5 9.51a4.22 4.22 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4 3.23 3.23 0 0 1 3.5-1.49 4.32 4.32 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4 3.2 3.2 0 0 1-3.5 1.51zm-13 4.98a4.22 4.22 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4 3.23 3.23 0 0 1-3.5 1.49 4.32 4.32 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4 3.2 3.2 0 0 1 3.5-1.51z"></path>
                </svg>
                <p>Tailwind CSS</p>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground ">
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
                  className="h-4 w-4 flex-shrink-0 stroke-1 text-muted-foreground md:h-8 md:w-8"
                >
                  <path d="M12 12l-8 -8v16l16 -16v16l-4 -4"></path>
                  <path d="M20 12l-8 8l-4 -4"></path>
                </svg>
                <p>Framer Motion</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
