import React, { ReactElement, ReactNode } from "react";

export interface Component {
  id: number;
  name: string;
  slug: string;
  description: string;
  sampleCode: string;
  component: (color: string) => ReactNode;
  image: string;
  image_alt: string;
}

const components: Component[] = [
  {
    id: 1,
    name: "Text Generate Effect",
    slug: "button",
    description: "The popular text generating Effect from ChatGPT",
    sampleCode: `somethig`,
    component: () => (
      <button onClick={() => console.log("Button clicked")}>Click me</button>
    ),
    image: "button-image-url.jpg",
    image_alt: "Button Image",
  },
  {
    id: 2,
    name: "Typewriter Effect",
    slug: "input",
    description: "A text input component.",
    sampleCode: `import React from 'react';

const PrimaryButton = ({ onClick, label }: { onClick: () => void; label: string }) => {
  return <button className="primary-button" onClick={onClick}>{label}</button>;
};

const SecondaryButton = ({ onClick, label }: { onClick: () => void; label: string }) => {
  return <button className="secondary-button" onClick={onClick}>{label}</button>;
};

export { PrimaryButton, SecondaryButton };`,
    component: (color: string) => (
      <>
        <button style={{ backgroundColor: color }}>
          bg-{"["}
          {color}
          {"]"}
        </button>
      </>
    ),
    image: "input-image-url.jpg",
    image_alt: "Input Image",
  },
];

export default components;
