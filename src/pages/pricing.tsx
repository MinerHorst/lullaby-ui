import { ArrowRight, CircleCheck } from "lucide-react";
import Head from "next/head";
import React from "react";
import NavbarComponent from "~/components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pricing - Lullaby UI</title>
        <meta
          name="description"
          content="Lullaby UI is a function react component library with in browser customization and copy/ paste functionality."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen w-screen flex-col items-center bg-gradient-to-b from-[#000] to-[#15162c]">
        <NavbarComponent />
        <div className="relative z-[50] grid grid-cols-1 gap-4 px-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="col-span-1 flex flex-col justify-between space-y-4 rounded-3xl bg-slate-500/10 p-4 text-white md:h-[80vh] lg:h-full">
            <div className="flex flex-col space-y-8">
              <p className="text-sm font-bold">Existing Components</p>
              <div className="flex flex-col justify-between space-y-4">
                <div className="flex h-[10vh] flex-col justify-end">
                  <h1 className="font-bold leading-[1em] [font-size:_clamp(2em,2vw,8em)]">
                    Free
                  </h1>
                </div>
                <p>
                  All Exisiting Components free for commercial and personal use
                  under the MIT License.
                </p>
              </div>

              <ul className="flex flex-col space-y-4">
                <li className="flex items-center gap-2">
                  <CircleCheck size={16} />
                  <p>MIT Licensing</p>
                </li>
                <li className="flex items-center gap-2">
                  <CircleCheck size={16} />
                  <p>Free to use Component Library</p>
                </li>
                <li className="flex items-center gap-2">
                  <CircleCheck size={16} />
                  <p>React / TailwindCSS / Next.js code</p>
                </li>
              </ul>
            </div>

            <button className="relative z-[100] inline-flex min-h-8 w-fit overflow-hidden rounded-full p-[1px]">
              <span className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_0deg_at_50%_50%,#333_0%,#333_50%,#fff_100%)]" />
              <span className="z-[20] inline-flex h-full w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white">
                Browse Components <ArrowRight />
              </span>
            </button>
          </div>
          <div className="col-span-1 flex flex-col justify-between space-y-4 rounded-3xl bg-slate-500/10 p-4 text-white md:h-[80vh] lg:h-full">
            <div className="flex flex-col space-y-8">
              <p className="text-sm font-bold">Custom Components</p>
              <div className="flex flex-col justify-between space-y-4">
                <div className="flex h-[10vh] flex-col justify-end">
                  <p>Starting at</p>
                  <h1 className="font-bold leading-[1em] [font-size:_clamp(2em,2vw,8em)]">
                    $500
                  </h1>
                </div>
                <p>
                  A custom tailored component that will easily integrate into
                  your exisitng system or design.
                </p>
              </div>

              <ul className="flex flex-col space-y-4">
                <li className="flex items-center gap-2">
                  <CircleCheck size={16} />
                  <p>Fully Custom Component</p>
                </li>
                <li className="flex items-center gap-2">
                  <CircleCheck size={16} />
                  <p>Design + Development</p>
                </li>
                <li className="flex items-center gap-2">
                  <CircleCheck size={16} />
                  <p>React / TailwindCSS / Next.js code</p>
                </li>
                <li className="flex items-center gap-2">
                  <CircleCheck size={16} />
                  <p>7 Day Delivery</p>
                </li>
              </ul>
            </div>

            <button className="relative z-[100] inline-flex min-h-8 w-fit overflow-hidden rounded-full p-[1px]">
              <span className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_0deg_at_50%_50%,#333_0%,#333_50%,#fff_100%)]" />
              <span className="z-[20] inline-flex h-full w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white">
                Buy Now <ArrowRight />
              </span>
            </button>
          </div>

          <div className="col-span-1 flex flex-col justify-between space-y-4 rounded-3xl bg-slate-500/10 p-4 text-white md:h-[80vh] lg:h-full">
            <div className="flex flex-col space-y-8">
              <p className="text-sm font-bold">3 or more Components</p>
              <div className="flex flex-col justify-between space-y-4">
                <div className="flex h-[10vh] flex-col justify-end">
                  <p>Starting at</p>
                  <h1 className="font-bold leading-[1em] [font-size:_clamp(2em,2vw,8em)]">
                    $1000
                  </h1>
                </div>
                <p>
                  3 custom made components for a base price of $1000 and $400
                  for each additional component.
                </p>
              </div>

              <ul className="flex flex-col space-y-4">
                <li className="flex items-center gap-2">
                  <CircleCheck size={16} />
                  <p>Fully Custom Components</p>
                </li>
                <li className="flex items-center gap-2">
                  <CircleCheck size={16} />
                  <p>Bulk discount</p>
                </li>
                <li className="flex items-center gap-2">
                  <CircleCheck size={16} />
                  <p>Design + Development</p>
                </li>
                <li className="flex items-center gap-2">
                  <CircleCheck size={16} />
                  <p>React / TailwindCSS / Next.js code</p>
                </li>
                <li className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <CircleCheck size={16} />
                    <p>10-14 Day Delivery</p>
                  </div>

                  <p className="text-muted-foreground">
                    *Delivery time varies with component quantity.
                  </p>
                </li>
              </ul>
            </div>

            <button className="relative z-[100] inline-flex min-h-8 w-fit overflow-hidden rounded-full p-[1px]">
              <span className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_0deg_at_50%_50%,#333_0%,#333_50%,#fff_100%)]" />
              <span className="z-[20] inline-flex h-full w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white">
                Buy now <ArrowRight />
              </span>
            </button>
          </div>

          <div className="col-span-1 flex flex-col justify-between space-y-4 rounded-3xl bg-slate-500/10 p-4 text-white md:h-[80vh] lg:h-full">
            <div className="flex flex-col space-y-8">
              <p className="text-sm font-bold">Custom Multi Page Website</p>
              <div className="flex flex-col justify-between space-y-4">
                <div className="flex h-[10vh] flex-col justify-end">
                  <p>Starting at</p>
                  <h1 className="font-bold leading-[1em] [font-size:_clamp(2em,2vw,8em)]">
                    $5000
                  </h1>
                </div>
                <p>
                  3 custom made components for a base price of $1000 and $400
                  for each additional component.
                </p>
              </div>

              <ul className="flex flex-col space-y-4">
                <li className="flex items-center gap-2">
                  <CircleCheck size={16} />
                  <p>Multi Page Website Development</p>
                </li>
                <li className="flex items-center gap-2">
                  <CircleCheck size={16} />
                  <p>Personal and Business Websites</p>
                </li>
                <li className="flex items-center gap-2">
                  <CircleCheck size={16} />
                  <p>Design + Development</p>
                </li>
                <li className="flex items-center gap-2">
                  <CircleCheck size={16} />
                  <p>React / TailwindCSS / Next.js code</p>
                </li>
                <li className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <CircleCheck size={16} />
                    <p>20-30 Day Delivery</p>
                  </div>

                  <p className="text-muted-foreground">
                    *Delivery time varies with complexity.
                  </p>
                </li>
              </ul>
            </div>

            <button className="relative z-[100] inline-flex min-h-8 w-fit overflow-hidden rounded-full p-[1px]">
              <span className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_0deg_at_50%_50%,#333_0%,#333_50%,#fff_100%)]" />
              <span className="z-[20] inline-flex h-full w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white">
                Contact now <ArrowRight />
              </span>
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
