import Image from "next/image";
import logo_black from "../../public/logo-black.png";
import Link from "next/link";
import { motion } from "framer-motion";
import { KeyboardEvent, useEffect, useState } from "react";
import { Command } from "cmdk";
import { Component, File, Menu, Search, X } from "lucide-react";
import components from "~/content/components";

export default function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && e.metaKey) || (e.key === "k" && e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((isOpen) => !isOpen);
        console.log("Key set href", isOpen);
      }
    };

    document.addEventListener("keydown", down as unknown as EventListener);
    return () =>
      document.removeEventListener("keydown", down as unknown as EventListener);
  }, []);

  return (
    <>
      {isOpen && (
        <div className="fixed left-0 top-0 z-[200] flex h-screen w-full flex-col items-center justify-center overflow-hidden text-white backdrop-blur-[2px]">
          <div className="relative flex max-h-[50%] min-h-[50%] w-[80%] flex-col overflow-y-scroll rounded-md bg-[rgb(17,18,26)] md:w-[40%]">
            <Command label="Command Menu" className="h-full w-full">
              <div className="sticky top-0 flex w-full items-center justify-center gap-2">
                <div className="flex h-full w-full items-center gap-2 bg-[rgb(17,18,26)] px-3 py-2">
                  <Search size={16} className="text-neutral-400" />
                  <Command.Input
                    placeholder="Search..."
                    className="flex w-full flex-row items-center justify-between border-transparent bg-transparent shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 focus-visible:outline-none focus-visible:ring-transparent focus-visible:ring-white disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  }
                  <button onClick={(e) => setIsOpen(!isOpen)}>
                    <X size={16} />
                  </button>
                </div>
              </div>

              <div className="py-4">
                <Command.List className="py-2">
                  <Command.Empty className="px-2 text-neutral-400">
                    No results found.
                  </Command.Empty>

                  <Command.Group className="mx-2 text-sm font-light text-neutral-400">
                    <h1 className="px-2 py-2 text-xs">Installation</h1>
                    <div className="text-white">
                      <Command.Item className="rounded-md py-2 text-base hover:bg-neutral-300/10">
                        <div className="px-2">
                          <a
                            href={"/docs/quickstart"}
                            className="flex items-center gap-2"
                          >
                            <File size={16} />
                            <p>Next.js</p>
                          </a>
                        </div>
                      </Command.Item>
                      <Command.Item className="rounded-md py-2 text-base hover:bg-neutral-300/10">
                        <div className="px-2">
                          <a
                            href={"/docs/members"}
                            className="flex items-center gap-2"
                          >
                            <File size={16} />
                            <p>Tailwind CSS</p>
                          </a>
                        </div>
                      </Command.Item>
                      <Command.Item className="rounded-md py-2 text-base hover:bg-neutral-300/10">
                        <div className="px-2">
                          <Link
                            href={"/docs/organizations"}
                            className="flex items-center gap-2"
                          >
                            <File size={16} />
                            <p>Utilities</p>
                          </Link>
                        </div>
                      </Command.Item>
                    </div>
                  </Command.Group>

                  <Command.Group className="mx-2 text-sm font-light text-neutral-400">
                    <h1 className="px-2 py-2 text-xs">Components</h1>
                    <div className="text-white">
                      <ul className="space-y-2 text-sm text-white">
                        {components.map((component, index) => (
                          <Command.Item
                            className="rounded-md py-2 text-base hover:bg-neutral-300/10"
                            key={component.id}
                          >
                            <div className="px-2">
                              <a
                                className="flex items-center gap-2"
                                href={`/component/${component.slug}`}
                              >
                                <Component size={16} />
                                {component.name}
                              </a>
                            </div>
                          </Command.Item>
                        ))}
                      </ul>
                    </div>
                  </Command.Group>
                </Command.List>
              </div>
            </Command>
          </div>
        </div>
      )}
      <motion.div
        initial={{ opacity: 0, y: +4 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="sticky left-0 top-0 z-[500] flex h-[10vh] min-h-[5svh] w-screen items-center justify-between bg-black/10 p-4 text-white backdrop-blur-[2px] md:hidden"
      >
        <Link href={"/"} className="col-span-3 flex items-center gap-4">
          <Image
            src={logo_black}
            alt="logo"
            height={25}
            className="rounded-md border border-muted-foreground"
          ></Image>
        </Link>
        <div className="text-neutral-400">
          <ul className="flex gap-4">
            <Link href={"/pricing"}>
              <li>Pricing</li>
            </Link>
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <button
            className="flex h-9 w-full items-center gap-4 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm"
            onClick={(e) => setIsOpen(!isOpen)}
          >
            <p className="text-neutral-400">
              <Search size={16} />
            </p>
            <p className="hidden text-neutral-400 lg:inline">
              Search Components
            </p>
            <p className="inline text-neutral-400 lg:hidden">Search...</p>
            <kbd className="pointer-events-none right-[0.3rem] hidden h-5 select-none flex-row items-center justify-center gap-1 rounded border border-muted-foreground p-2 px-1.5 font-mono text-[10px] font-medium text-neutral-400 opacity-100 sm:flex">
              <span className="text-xs">⌘</span>K
            </kbd>
          </button>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: +4 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-[500] m-4 hidden min-h-[5svh] w-screen grid-cols-12 px-4 text-white md:grid"
      >
        <Link href={"/"} className="col-span-3 flex items-center gap-4">
          <Image
            src={logo_black}
            alt="logo"
            height={25}
            className="rounded-md border border-muted-foreground"
          ></Image>

          <p className="text-xl font-medium">Lullaby UI</p>
        </Link>
        <div className="col-span-4 col-start-5 flex items-center justify-center text-neutral-400">
          <ul className="flex gap-4">
            <Link href={`/components`}>
              <li>Components</li>
            </Link>
            <Link href={"/pricing"}>
              <li>Pricing</li>
            </Link>

            <li className="cursor-not-allowed">Resources</li>
          </ul>
        </div>
        <div className="col-span-3 col-start-10 flex items-center gap-4">
          <button
            className="flex h-9 w-full items-center justify-between gap-4 rounded-md border border-neutral-400 bg-transparent px-3 py-1 text-sm"
            onClick={(e) => setIsOpen(!isOpen)}
          >
            <p className="text-neutral-400">
              <Search size={16} />
            </p>
            <p className="hidden text-neutral-400 lg:inline">
              Search Components
            </p>
            <p className="inline text-neutral-400 lg:hidden">Search...</p>
            <kbd className="pointer-events-none right-[0.3rem] hidden h-5 select-none flex-row items-center justify-center gap-1 rounded border border-muted-foreground p-2 px-1.5 font-mono text-[10px] font-medium text-neutral-400 opacity-100 sm:flex">
              <span className="text-xs">⌘</span>K
            </kbd>
          </button>
        </div>
      </motion.div>
    </>
  );
}
