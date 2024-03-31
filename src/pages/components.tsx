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
      <main className="flex h-screen w-screen flex-col items-center overflow-hidden bg-gradient-to-b from-[#000] to-[#15162c] pt-4 md:pb-10">
        <NavbarComponent />
        <div className="grid h-full w-full grid-cols-12 grid-rows-12 text-white">
          <div className="col-span-full row-start-1 mx-4 flex h-[5vh] overflow-scroll md:hidden">
            <ul className="flex items-center space-x-2 whitespace-nowrap text-sm text-muted-foreground">
              {components.map((component) => (
                <li key={component.id}>
                  <Link href={`/component/${component.slug}`}>
                    {component.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-start-1 row-span-full row-start-1 hidden space-y-6 overflow-scroll md:col-span-2 md:inline md:px-4">
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
                {components.map((component) => (
                  <li key={component.id}>
                    <Link href={`/component/${component.slug}`}>
                      {component.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-span-full row-span-full row-start-2 mb-8 grid grid-cols-1 gap-4 overflow-scroll px-4 pb-4 md:col-span-10 md:col-start-3 md:row-start-1 md:grid-cols-3 md:pr-4">
            <div className="col-span-full flex flex-col">
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
                  <div className="flex aspect-square w-full items-center justify-center bg-[rgb(17,18,26)]">
                    {component.image ? (
                      <img
                        src={component.image}
                        className="w-full rounded-md"
                        alt={component.image_alt}
                      />
                    ) : (
                      <>{component.name}</>
                    )}
                  </div>

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
