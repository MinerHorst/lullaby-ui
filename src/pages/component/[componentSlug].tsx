import { hsvaToHex } from "@uiw/color-convert";
import Wheel from "@uiw/react-color-wheel";
import { color, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import NavbarComponent from "~/components/Navbar";
import CodeBlockComponent from "~/components/codeBlock";

import components, { Component } from "~/content/components";

const findComponentById = (componentSlug: string): Component | undefined => {
  return components.find(
    (component) => component.slug.toString() === componentSlug,
  );
};

const ComponentPage: React.FC = () => {
  const [color, setColor] = useState("");
  const [text, setText] = useState("Hello World!");
  const [delay, setDelay] = useState(0.2);

  const [sliderPos, setSliderPos] = useState(50);
  console.log(sliderPos);

  const handleSliderChange = (event: any) => {
    setSliderPos(event.target.value);
  };

  useEffect(() => {
    const currentUrl =
      typeof window !== "undefined" ? window.location.href : "";
    const queryString = currentUrl.split("?")[1];
    const urlParams = new URLSearchParams(queryString);

    const color = urlParams.get("color");

    if (color) {
      setColor(color);
    }
  }, []);

  const router = useRouter();
  const { componentSlug } = router.query;

  const component = componentSlug
    ? findComponentById(componentSlug as string)
    : undefined;

  const [hsva, setHsva] = useState({ h: 200, s: 100, v: 100, a: 1 });

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
              <div className="w-full flex-col space-y-4 rounded-lg bg-slate-500/10 px-4 py-4 text-white">
                <div className="flex h-[80vh] flex-col justify-between">
                  <div className="space-y-4">
                    <h1 className="font-bold leading-none [font-size:_clamp(3.5em,3.5vw,8em)]">
                      {component.name}
                    </h1>
                    <p className="text-muted-foreground">
                      {component.description}
                    </p>
                  </div>

                  <div className="grid w-full grid-cols-3 gap-4 rounded-md bg-violet-500/10 px-4 py-4">
                    <div className="col-span-1 aspect-square h-full rounded-md">
                      {component.component(hsvaToHex(hsva), text, delay)}
                    </div>
                    <div className="relative col-span-2 flex aspect-[1/0.492] flex-col items-center justify-start">
                      <CodeBlockComponent
                        code={component.sampleCode(hsvaToHex(hsva), delay)}
                      />
                      ;
                    </div>
                  </div>
                </div>

                <h1 className="font-bold leading-none [font-size:_clamp(2em,2.5vw,8em)]">
                  Customization
                </h1>
                <div className="grid h-screen grid-cols-3 gap-4">
                  <div className="col-span-2 flex aspect-[1/0.492] flex-col space-y-2 rounded-md bg-violet-500/10 p-4">
                    <input
                      type="text"
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                      placeholder="Text"
                      className="flex h-9 w-fit items-center rounded-md bg-[rgb(17,18,26)] p-1 px-2"
                    />
                    <input
                      type="range"
                      value={delay}
                      min="0"
                      max="1"
                      step={0.1}
                      onChange={(e) => setDelay(parseFloat(e.target.value))}
                      placeholder="Delay"
                      className="flex h-9 w-fit items-center rounded-md bg-[rgb(17,18,26)]"
                    />
                    <input
                      type="text"
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                      placeholder="Text"
                      className="flex h-9 w-fit items-center rounded-md bg-[rgb(17,18,26)] p-1 px-2"
                    />
                  </div>
                  <div className="relative col-span-1 flex aspect-square flex-col items-center justify-center space-y-4 rounded-md bg-violet-500/10 px-4">
                    <Wheel
                      color={hsva}
                      onChange={(color) => setHsva({ ...hsva, ...color.hsva })}
                      className="relative z-[500] flex-shrink-0"
                    />
                    <div className="flex items-center gap-2 rounded-md bg-[rgb(17,18,26)] p-1 px-2">
                      <div
                        className="h-3 w-3"
                        style={{ backgroundColor: hsvaToHex(hsva) }}
                      ></div>
                      {hsvaToHex(hsva)}
                    </div>

                    <div className="relative h-3 w-full rounded-full bg-gradient-to-r from-black to-white">
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={hsva.v}
                        onChange={(e) =>
                          setHsva({ ...hsva, v: parseInt(e.target.value) })
                        }
                        className="absolute z-20 h-full w-full opacity-0"
                      />
                      <div
                        id="sliderButton"
                        className="pointer-events-none absolute z-10 h-7 w-0.5 border border-gray-100 bg-white"
                        style={{
                          left: `calc(${hsva.v}%)`,
                          top: "calc(50% - 14px)",
                        }}
                      ></div>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <span className="rounded-md bg-[rgb(17,18,26)] p-1 px-2">
                        h: {hsva.h}
                      </span>
                      <span className="rounded-md bg-[rgb(17,18,26)] p-1 px-2">
                        s: {hsva.s}
                      </span>
                      <span className="rounded-md bg-[rgb(17,18,26)] p-1 px-2">
                        v: {hsva.v}
                      </span>
                      <span className="rounded-md bg-[rgb(17,18,26)] p-1 px-2">
                        a: {hsva.a}
                      </span>
                    </div>
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
