import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import NavbarComponent from "~/components/Navbar";
import CodeBlockComponent from "~/components/codeBlock";

import components, { Component } from "~/content/components";

const findComponentById = (componentSlug: string): Component | undefined => {
  return components.find(
    (component) => component.slug.toString() === componentSlug,
  );
};

const ComponentPage: React.FC = () => {
  const [currentColor, setCurrentColor] = useState("#000");

  const router = useRouter();
  const { componentSlug } = router.query;
  const component = componentSlug
    ? findComponentById(componentSlug as string)
    : undefined;

  return (
    <>
      {component ? (
        <main className="flex h-screen w-screen flex-col items-center overflow-hidden bg-gradient-to-b from-[#000] to-[#15162c] py-4">
          <NavbarComponent />
          <div className="grid h-full w-full grid-cols-12 grid-rows-12 pt-4 text-white">
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

            <div className="col-span-10 col-start-3 row-span-full row-start-1 mr-4 flex flex-col overflow-scroll">
              <div className="w-full flex-col rounded-lg bg-slate-500/10 px-4 py-4 text-white">
                <div className="flex h-[80vh] flex-col justify-between">
                  <div className="space-y-4">
                    <h1 className="font-bold leading-none [font-size:_clamp(3.5em,3.5vw,8em)]">
                      {component.name}
                    </h1>
                    <p className="text-muted-foreground">
                      {component.description}
                    </p>
                  </div>

                  <div className="grid w-full grid-cols-3 gap-4">
                    <div className="col-span-1 aspect-square border">
                      {component.component(currentColor)}
                    </div>
                    <div className="relative col-span-2 flex aspect-[1/0.492] flex-col items-center justify-start">
                      <CodeBlockComponent code={component.sampleCode} />;
                    </div>
                  </div>
                </div>

                <div className="grid h-screen grid-cols-3 gap-4">
                  <div className="col-span-1 aspect-square border">
                    {component.component(currentColor)}
                  </div>
                  <div className="relative col-span-2 flex aspect-[1/0.492] flex-col items-center justify-start">
                    <CodeBlockComponent code={component.sampleCode} />;
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      ) : (
        <div className="text-white">Component not found</div>
      )}
    </>
  );
};

export default ComponentPage;
