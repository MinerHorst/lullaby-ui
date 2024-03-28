import { hsvaToHex } from "@uiw/color-convert";
import Wheel from "@uiw/react-color-wheel";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { ChangeEvent, useEffect, useState } from "react";
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

  const [key, setKey] = useState(0);

  const remountComponent = () => {
    setKey((prevKey) => prevKey + 1);
  };

  const [sliderPos, setSliderPos] = useState(50);
  console.log(sliderPos);

  const handleSliderChange = (event: any) => {
    setSliderPos(event.target.value);
  };

  type ComponentProps = {
    [key: string]: any;
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

  const [customizationStates, setCustomizationStates] = useState<string[]>(
    component ? component.customizations.map(() => "") : [],
  );

  const handleCustomizationChange = (
    e: ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const value = e.target.value;
    const newCustomizationStates = [...customizationStates];
    newCustomizationStates[index] = value;
    setCustomizationStates(newCustomizationStates);
  };

  if (!component) {
    return null;
  }

  const componentProps: ComponentProps = {};

  console.log(componentProps);

  component.customizations.forEach((customization, index) => {
    componentProps[customization] = customizationStates[index];
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    handleCustomizationChange(e, index);
    remountComponent();
  };

  return (
    <>
      {component ? (
        <main className="flex h-full w-screen flex-col items-center overflow-auto bg-gradient-to-b from-[#000] to-[#15162c] md:overflow-hidden">
          <NavbarComponent />
          <div className="mb-4 flex h-fit w-full flex-col text-white md:grid md:h-full md:grid-cols-12 md:grid-rows-12 md:pt-4">
            <div className="inline h-[5vh] border md:hidden"></div>
            <div className="col-start-1 row-span-full row-start-1 hidden space-y-6 overflow-scroll px-4 md:col-span-2 md:inline">
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

            <div className="flex flex-col md:col-span-10 md:col-start-3 md:row-span-full md:row-start-1 md:mr-4 md:overflow-scroll">
              <div className="h-fit w-full flex-col space-y-4 border bg-slate-500/10 px-4 pt-4 text-white md:h-full md:max-h-[83.8vh] md:overflow-scroll md:rounded-lg">
                <div className="flex flex-col justify-between md:h-[60vh]">
                  <div className="space-y-4">
                    <h1 className="font-bold leading-none [font-size:_clamp(3.5em,3.5vw,8em)]">
                      {component.name}
                    </h1>
                    <p className="text-muted-foreground">
                      {component.description}
                    </p>
                  </div>

                  <div className="grid w-full grid-cols-3 gap-4 rounded-md bg-violet-500/10 p-4">
                    <div
                      key={key}
                      className="col-span-full aspect-square h-full w-full rounded-md md:col-span-1"
                    >
                      {component.component({ ...componentProps })}
                    </div>
                    <div className="relative col-span-full flex aspect-[1/0.492] flex-col items-center justify-start md:col-span-2">
                      <CodeBlockComponent
                        code={component.sampleCode({ ...componentProps })}
                      />
                    </div>
                  </div>
                </div>
                <h1 className=" font-bold leading-none [font-size:_clamp(2em,2.5vw,8em)]">
                  Customization
                </h1>

                <div className="col-span-full w-full rounded-md bg-violet-500/10 p-4">
                  There's no customization options available on mobile.
                </div>

                <div className="hidden h-fit grid-cols-3 gap-4 md:grid">
                  {component.customization ? (
                    <>
                      <div className="col-span-2 flex aspect-[1/0.583] flex-col space-y-2 rounded-md bg-violet-500/10 p-4">
                        {component.customizations.map(
                          (customization, index) => (
                            <input
                              key={index}
                              type="text"
                              value={customizationStates[index]}
                              onChange={(e) => handleChange(e, index)}
                              placeholder={`${customization}`}
                              className="w-full rounded-md bg-[rgb(17,18,26)] px-2 py-1 text-white"
                              style={{ marginRight: "5px" }}
                            />
                          ),
                        )}
                      </div>

                      <div className="relative col-span-1 hidden aspect-square flex-col items-center justify-center space-y-4 rounded-md bg-violet-500/10 p-4 px-4 md:flex">
                        <Wheel
                          color={hsva}
                          onChange={(color) =>
                            setHsva({ ...hsva, ...color.hsva })
                          }
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
                    </>
                  ) : (
                    <div className="col-span-full w-full rounded-md bg-violet-500/10 p-4">
                      <p className="rounded-md bg-[rgb(17,18,26)] p-4">
                        There's no customization for this component.
                      </p>
                    </div>
                  )}
                  <h1 className="hidden font-bold leading-none [font-size:_clamp(2em,2.5vw,8em)] md:inline">
                    Installation
                  </h1>
                  <div className="col-span-3 mb-10 hidden aspect-[1/0.5] flex-col space-y-4 rounded-md bg-violet-500/10 p-4  md:flex">
                    <h2>Install dependencies</h2>
                    <div className="relative flex flex-col items-center justify-center">
                      <CodeBlockComponent
                        code={`npm i framer-motion ${component.dependencies.join(" ")} clsx tailwind-merge`}
                      />
                    </div>
                    <div>
                      <h2>Add utils file</h2>
                      <h3 className="text-sm text-muted-foreground">
                        utils/cn.ts
                      </h3>
                    </div>
                    <div className="relative flex flex-col items-center justify-center">
                      <CodeBlockComponent
                        code={`import { ClassValue, clsx } from "clsx";
                        import { twMerge } from "tailwind-merge";
                          
                        export function cn(...inputs: ClassValue[]) {
                          return twMerge(clsx(inputs));
                        }`}
                      />
                    </div>
                    <div>
                      <h2>Copy the Source Code</h2>
                      <h3 className="text-sm text-muted-foreground">
                        /components/ui/{component.slug.toLowerCase()}.tsx
                      </h3>
                    </div>

                    <div className="relative flex flex-col items-center justify-center">
                      <CodeBlockComponent
                        code={component.sampleCode({ ...componentProps })}
                      />
                    </div>
                  </div>
                </div>
                <h1 className="font-bold leading-none [font-size:_clamp(2em,2.5vw,8em)] md:hidden">
                  Installation
                </h1>
                <div className="col-span-3 mb-10 flex aspect-[1/0.5] flex-col space-y-4 rounded-md bg-violet-500/10 p-4 md:hidden">
                  <h2>Install dependencies</h2>
                  <div className="relative flex flex-col items-center justify-center">
                    <CodeBlockComponent
                      code={`npm i framer-motion ${component.dependencies.join(" ")} clsx tailwind-merge`}
                    />
                  </div>
                  <div>
                    <h2>Add utils file</h2>
                    <h3 className="text-sm text-muted-foreground">
                      utils/cn.ts
                    </h3>
                  </div>
                  <div className="relative flex flex-col items-center justify-center">
                    <CodeBlockComponent
                      code={`import { ClassValue, clsx } from "clsx";
                        import { twMerge } from "tailwind-merge";
                          
                        export function cn(...inputs: ClassValue[]) {
                          return twMerge(clsx(inputs));
                        }`}
                    />
                  </div>
                  <div>
                    <h2>Copy the Source Code</h2>
                    <h3 className="text-sm text-muted-foreground">
                      /components/ui/{component.slug.toLowerCase()}.tsx
                    </h3>
                  </div>

                  <div className="relative flex flex-col items-center justify-center">
                    <CodeBlockComponent
                      code={component.sampleCode({ ...componentProps })}
                    />
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
