import { hsvaToHex } from "@uiw/color-convert";
import Wheel from "@uiw/react-color-wheel";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { ChangeEvent, useState } from "react";
import NavbarComponent from "~/components/Navbar";
import CodeBlockComponent from "~/components/codeBlock";

import components, { Component } from "~/content/components";

const findComponentById = (componentSlug: string): Component | undefined => {
  return components.find(
    (component) => component.slug.toString() === componentSlug,
  );
};

const ComponentPage: React.FC = () => {
  const [key, setKey] = useState(0);

  const remountComponent = () => {
    setKey((prevKey) => prevKey + 1);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  type ComponentProps = Record<string, any>;

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

  const componentLinks = Object.entries(component.links);

  return (
    <>
      {component ? (
        <>
          <Head>
            <title>{component.name} - Lullaby UI</title>
            <meta
              name="description"
              content="Lullaby UI is a function react component library with in browser customization and copy/ paste functionality."
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main className="flex h-[100dvh] w-screen flex-col items-center overflow-hidden bg-gradient-to-b from-[#000] to-[#15162c] md:h-[100dvh]">
            <NavbarComponent />
            <div className="flex h-[90vh] w-full flex-col pb-8 text-white lg:grid lg:h-full lg:grid-cols-12 lg:grid-rows-12">
              <div className="mx-4 flex h-[5vh] overflow-scroll md:hidden">
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
              <div className="hidden space-y-6 overflow-scroll px-4 lg:col-span-2 lg:col-start-1 lg:row-span-full lg:row-start-1 lg:inline">
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
              <div className="flex flex-col md:row-start-1 lg:col-span-10 lg:col-start-3 lg:row-span-full lg:mr-4 lg:overflow-scroll lg:pb-10">
                <div className="h-fit w-full flex-col space-y-4 bg-slate-500/10 p-4 pb-4 text-white lg:h-full lg:overflow-scroll lg:rounded-lg">
                  <div className="flex flex-col justify-between space-y-4">
                    <div className="flex flex-col space-y-4">
                      <h1 className="font-bold leading-none [font-size:_clamp(3.5em,3.5vw,8em)]">
                        {component.name}
                      </h1>
                      <p className="text-muted-foreground">
                        {component.description}
                      </p>
                      {component.maintainer && (
                        <div className="flex gap-1">
                          <p>This component is maintained by</p>
                          <a
                            href={component.maintainerlink}
                            target="_blank"
                            className="underline"
                          >
                            {component.maintainer}
                          </a>
                        </div>
                      )}
                    </div>

                    <div className="flex h-fit w-full flex-col gap-4 overflow-hidden rounded-md bg-violet-500/10 p-4">
                      <div
                        key={key}
                        className="aspect-square h-full w-full rounded-md lg:aspect-[1/0.3]"
                      >
                        {component.component({
                          color: "",
                          text: "",
                          delay: 0,
                          Code: "",
                          length: 0,
                          separatorIndex: 0,
                        })}
                      </div>
                      <div className="flex h-[25vh] max-h-[25vh] w-full flex-col items-center justify-start overflow-hidden lg:h-[50vh] ">
                        {
                          <CodeBlockComponent
                            code={component.sampleCode({
                              color: "",
                              text: "",
                              delay: 0,
                              Code: "",
                              length: 0,
                              separatorIndex: 0,
                            })}
                          />
                        }
                      </div>
                    </div>
                  </div>
                  <h1 className="font-bold leading-none [font-size:_clamp(2em,2.5vw,8em)]">
                    Installation
                  </h1>
                  <div className="hidden aspect-[1/0.5] h-full w-full flex-col space-y-4 rounded-md bg-violet-500/10 py-4 md:flex md:px-4">
                    <h2>Install dependencies</h2>
                    <div className="relative flex flex-col items-center justify-center">
                      <CodeBlockComponent
                        code={`npm i ${component.dependencies.join(" ")} clsx tailwind-merge`}
                      />
                    </div>

                    <div>
                      <h2>Copy the Source Code</h2>
                      <h3 className="text-sm text-muted-foreground">
                        /components/ui/{component.slug.toLowerCase()}.tsx
                      </h3>
                    </div>

                    <div className="flex h-[25vh] max-h-[25vh] w-full flex-col items-center justify-start overflow-hidden lg:h-[50vh] ">
                      <CodeBlockComponent
                        code={component.sampleCode({
                          color: "",
                          text: "",
                          delay: 0,
                          Code: "",
                          length: 0,
                          separatorIndex: 0,
                        })}
                      />
                    </div>
                    <div>
                      <h2>Usage</h2>
                      <h3 className="text-sm text-muted-foreground">
                        /pages/index.tsx
                      </h3>
                    </div>
                    <div className="flex h-[25vh] max-h-[25vh] w-full flex-col items-center justify-start overflow-hidden lg:h-[50vh] ">
                      <CodeBlockComponent
                        code={component.usage({
                          color: "",
                          text: "",
                          delay: 0,
                          Code: "",
                          length: 0,
                          separatorIndex: 0,
                        })}
                      />
                    </div>
                  </div>

                  <div className="flex aspect-[1/0.5] h-full w-full flex-col space-y-4 rounded-md bg-violet-500/10 px-4 md:hidden">
                    <h2>Install dependencies</h2>
                    <div className="relative flex flex-col items-center justify-center">
                      <CodeBlockComponent
                        code={`npm i ${component.dependencies.join(" ")}`}
                      />
                    </div>

                    <div>
                      <h2>Copy the Source Code</h2>
                      <h3 className="text-sm text-muted-foreground">
                        /components/ui/{component.slug.toLowerCase()}.tsx
                      </h3>
                    </div>
                    <div className="flex h-[25vh] max-h-[25vh] w-full flex-col items-center justify-start overflow-hidden lg:h-[50vh] ">
                      <CodeBlockComponent
                        code={component.sampleCode({
                          color: "",
                          text: "",
                          delay: 0,
                          Code: "",
                          length: 0,
                          separatorIndex: 0,
                        })}
                      />
                    </div>
                    <div>
                      <h2>Usage</h2>
                      <h3 className="text-sm text-muted-foreground">
                        /pages/index.tsx
                      </h3>
                    </div>
                    <div className="flex h-[25vh] max-h-[25vh] w-full flex-col items-center justify-start overflow-hidden lg:h-[50vh] ">
                      <CodeBlockComponent
                        code={component.usage({
                          color: "",
                          text: "",
                          delay: 0,
                          Code: "",
                          length: 0,
                          separatorIndex: 0,
                        })}
                      />
                    </div>
                  </div>
                  {component.links.length > 0 && (
                    <div className="space-y-4 rounded-md bg-violet-500/10 p-4">
                      <h1 className="font-bold leading-none [font-size:_clamp(2em,2.5vw,8em)]">
                        Links
                      </h1>
                      <div className="flex flex-col text-muted-foreground">
                        {component.links.map((link) => (
                          <a key={link.name} href={link.link}>
                            {link.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                  {component.properties ? (
                    <div className="space-y-4 rounded-md bg-violet-500/10 p-4">
                      <h1 className="font-bold leading-none [font-size:_clamp(2em,2.5vw,8em)]">
                        Properties
                      </h1>
                      <div className="overflow-scroll">
                        {Object.entries(component.properties).map(
                          ([category, properties]) => (
                            <table key={category} className="w-full">
                              <thead>
                                <tr className="m-0 p-0 text-sm">
                                  <th className="py-4 text-start font-medium">
                                    <h2>{category}</h2>
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="border-[0.3px]">
                                <tr className="m-0 border-b-[0.3px] p-0 text-sm">
                                  <th className="border-r-[0.3px] px-4 py-3 text-start font-sans font-medium">
                                    Prop name
                                  </th>
                                  <th className="border-r-[0.3px] px-4 py-3 text-start font-sans font-medium ">
                                    Type
                                  </th>
                                  <th className="border-r-[0.3px] px-4 py-3 text-start font-sans font-medium">
                                    Description
                                  </th>
                                </tr>
                                {properties.map((property, index) => (
                                  <tr
                                    key={index}
                                    className="m-0 border-b-[0.3px] p-0 text-sm"
                                  >
                                    <td className="border-r-[0.3px] px-4 py-3 font-sans">
                                      <code className="relative rounded bg-[rgb(17,18,26)] px-[0.3rem] py-[0.2rem] text-sm">
                                        {property.propertyName}
                                      </code>
                                    </td>
                                    <td className="border-r-[0.3px] px-4 py-3 font-sans md:text-start">
                                      <code className="relative rounded bg-[rgb(17,18,26)] px-[0.3rem] py-[0.2rem] text-sm">
                                        {property.propertyType}
                                      </code>
                                    </td>
                                    <td className="border-r-[0.3px] px-4 py-3 font-sans">
                                      <p className="relative w-fit rounded bg-[rgb(17,18,26)] px-[0.3rem] py-[0.2rem] text-sm">
                                        {property.propertyDescription}
                                      </p>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          ),
                        )}
                      </div>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          </main>
        </>
      ) : (
        <div className="text-white">Component not found</div>
      )}
    </>
  );
};

export default ComponentPage;
