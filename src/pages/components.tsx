import { ArrowRight } from "lucide-react";
import NavbarComponent from "~/components/Navbar";
import { motion } from "framer-motion";
import Link from "next/link";
import components from "~/content/components";
import { useEffect, useState } from "react";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Components - Lullaby UI</title>
        <meta
          name="description"
          content="Lullaby UI is a function react component library with in browser customization and copy/ paste functionality."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen w-screen flex-col items-center overflow-hidden bg-gradient-to-b from-[#000] to-[#15162c]">
        <NavbarComponent />
        <div className="grid h-full w-full grid-cols-12 grid-rows-12 text-white">
          <div className="col-span-2 col-start-1 row-span-full row-start-1 space-y-6 overflow-scroll px-4 md:inline">
            <div className="space-y-4">
              <h1>Installation</h1>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href={"/creating"}>Next.js</Link>
                </li>
                <li>
                  <Link href={"/tailwind"}>Tailwind CSS</Link>
                </li>
                <li>
                  <Link href={"/utilities"}>Utilities</Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h1>Components</h1>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {components.map((component, index) => (
                  <li key={component.id}>
                    <Link href={`/component/${component.slug}`}>
                      {component.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-span-10 col-start-3 row-span-full row-start-1 mb-8 grid grid-cols-3 gap-4 overflow-scroll pb-4 pr-4">
            <div className="col-span-3 flex flex-col">
              <button className="relative z-[100] inline-flex min-h-8 w-fit overflow-hidden rounded-full p-[1px]">
                <span className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_0deg_at_50%_50%,#333_0%,#333_50%,#fff_100%)]" />
                <span className="z-[20] inline-flex h-full w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white">
                  Custom Components <ArrowRight />
                </span>
              </button>
            </div>

            {components.map((component, index) => (
              <Link key={component.id} href={`/component/${component.slug}`}>
                <motion.div
                  key={component.id}
                  initial={{ opacity: 0, y: -4 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1,
                    delay: (Math.floor(index / 3) * 0.1) % 0.3,
                  }}
                  viewport={{ once: true }}
                  className="col-span-1 flex aspect-square flex-col items-start justify-center space-y-4 rounded-xl bg-slate-500/10 p-4 px-4"
                >
                  <img
                    src={component.image}
                    className="h-full w-full rounded-md"
                    alt={component.image_alt}
                  />
                  <p className="w-fit rounded-md bg-[rgb(17,18,26)] p-2">
                    {component.name}
                  </p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
