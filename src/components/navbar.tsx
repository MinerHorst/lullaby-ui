import Image from "next/image";
import logo_black from "../../public/logo-black.png";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { Component, File, Menu, Search, X } from "lucide-react";
import components from "~/content/components";

export default function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const down = (e: any) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((isOpen) => !isOpen);
        console.log("Key set href", isOpen);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      {isOpen && (
        <div className="fixed left-0 top-0 z-[200] flex h-screen w-full flex-col items-center justify-center overflow-hidden text-white backdrop-blur-[2px]">
          <div className="relative flex max-h-[50%] min-h-[50%] w-[80%] flex-col overflow-y-scroll rounded-md bg-[rgb(17,18,26)] md:w-[40%]">
            <Command label="Command Menu" className="h-full w-full">
              <div className="sticky top-0 flex w-full items-center justify-center gap-2">
                <div className="flex h-full w-full items-center gap-2 bg-[rgb(17,18,26)] px-3 py-2">
                  <Search size={16} className="text-muted-foreground" />
                  <Command.Input
                    placeholder="Search..."
                    className="flex w-full flex-row items-center justify-between border-transparent bg-transparent shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[rgb(131,131,138)] placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-transparent focus-visible:ring-white disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  <button onClick={(e: any) => setIsOpen(!isOpen)}>
                    <X size={16} />
                  </button>
                </div>
              </div>

              <div className="py-4">
                <Command.List className="py-2">
                  <Command.Empty className="px-2 text-muted-foreground">
                    No results found.
                  </Command.Empty>

                  <Command.Group className="mx-2 text-sm font-light text-muted-foreground">
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

                  <Command.Group className="mx-2 text-sm font-light text-muted-foreground">
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
        className="sticky left-0 top-0 z-[500] flex min-h-[5svh] w-screen items-center justify-between bg-black/10 p-4 text-white backdrop-blur-[2px] md:hidden"
      >
        <Link href={"/"} className="flex items-center gap-4">
          <Image
            src={logo_black}
            alt="logo"
            height={25}
            className="rounded-md border border-muted-foreground"
          ></Image>
        </Link>
        <div className="text-muted-foreground">
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
            <p className="text-muted-foreground">
              <Search size={16} />
            </p>
            <p className="hidden text-muted-foreground lg:inline">
              Search Components
            </p>
            <p className="inline text-muted-foreground lg:hidden">Search...</p>
            <kbd className="pointer-events-none right-[0.3rem] hidden h-5 select-none flex-row items-center justify-center gap-1 rounded border border-muted-foreground p-2 px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100 sm:flex">
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
        className="relative z-[500] m-4 hidden min-h-[5svh] w-screen items-center justify-between px-4 text-white md:flex"
      >
        <Link href={"/"} className="flex items-center gap-4">
          <Image
            src={logo_black}
            alt="logo"
            height={25}
            className="rounded-md border border-muted-foreground"
          ></Image>

          <p className="text-xl font-medium">Lullaby UI</p>
        </Link>
        <div className="text-muted-foreground">
          <ul className="flex gap-4">
            <Link href={`/components`}>
              <li>Components</li>
            </Link>
            <Link href={"/pricing"}>
              <li>Pricing</li>
            </Link>

            <li>Ressources</li>
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <button
            className="flex h-9 w-full items-center gap-4 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm"
            onClick={(e) => setIsOpen(!isOpen)}
          >
            <p className="text-muted-foreground">
              <Search size={16} />
            </p>
            <p className="hidden text-muted-foreground lg:inline">
              Search Components
            </p>
            <p className="inline text-muted-foreground lg:hidden">Search...</p>
            <kbd className="pointer-events-none right-[0.3rem] hidden h-5 select-none flex-row items-center justify-center gap-1 rounded border border-muted-foreground p-2 px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100 sm:flex">
              <span className="text-xs">⌘</span>K
            </kbd>
          </button>
        </div>
      </motion.div>
    </>
  );
}
