export interface Component {
    id: number;
    name: string;
    slug: string;
    description: string;
    sampleCode: string;
    image: string;
    image_alt: string;
}

const components: Component[] = [
    {
        id: 1,
        name: "Text Generate Effect",
        slug: "button",
        description: "The popular text generating Effect from ChatGPT",
        sampleCode: `
            import React from 'react';

            const Button = ({ onClick, label }: { onClick: () => void; label: string }) => {
                return <button onClick={onClick}>{label}</button>;
            };

            export default Button;
        `,
        image: "button-image-url.jpg",
        image_alt: "Button Image" // Add image_alt value for Button component
    },
    {
        id: 2,
        name: "Typewriter Effect",
        slug: "input",
        description: "A text input component.",
        sampleCode: `
            import React, { useState } from 'react';

            const Input = () => {
                const [value, setValue] = useState('');

                const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
                    setValue(event.target.value);
                };

                return <input type="text" value={value} onChange={handleChange} />;
            };

            export default Input;
        `,
        image: "input-image-url.jpg",
        image_alt: "Input Image"
    },
    {
        id: 3,
        name: "Radio Group",
        slug: "card",
        description: "A card component for displaying content.",
        sampleCode: `
            import React from 'react';

            interface CardProps {
                title: string;
                content: string;
            }

            const Card = ({ title, content }: CardProps) => {
                return (
                    <div>
                        <h2>{title}</h2>
                        <p>{content}</p>
                    </div>
                );
            };

            export default Card;
        `,
        image: "card-image-url.jpg",
        image_alt: "Card Image"
    },
    {
        id: 4,
        name: "Search ⌘K",
        slug: "card",
        description: "A card component for displaying content.",
        sampleCode: `
            import React from 'react';

            interface CardProps {
                title: string;
                content: string;
            }

            const Card = ({ title, content }: CardProps) => {
                return (
                    <div>
                        <h2>{title}</h2>
                        <p>{content}</p>
                    </div>
                );
            };

            export default Card;
        `,
        image: "card-image-url.jpg",
        image_alt: "Card Image"
    },
    {
        id: 5,
        name: "Bento Grid",
        slug: "card",
        description: "A card component for displaying content.",
        sampleCode: `
            import React from 'react';

            interface CardProps {
                title: string;
                content: string;
            }

            const Card = ({ title, content }: CardProps) => {
                return (
                    <div>
                        <h2>{title}</h2>
                        <p>{content}</p>
                    </div>
                );
            };

            export default Card;
        `,
        image: "card-image-url.jpg",
        image_alt: "Card Image"
    },
    {
        id: 6,
        name: "Select Menu",
        slug: "card",
        description: "A card component for displaying content.",
        sampleCode: `
            import React from 'react';

            interface CardProps {
                title: string;
                content: string;
            }

            const Card = ({ title, content }: CardProps) => {
                return (
                    <div>
                        <h2>{title}</h2>
                        <p>{content}</p>
                    </div>
                );
            };

            export default Card;
        `,
        image: "card-image-url.jpg",
        image_alt: "Card Image"
    },
    {
        id: 7,
        name: "Code Component",
        slug: "code",
        description: "A component for displaying code snippets with syntax highlighting.",
        sampleCode: `
            import React from 'react';
    
            const Code = ({ code }: { code: string }) => {
                return <code>{code}</code>;
            };
    
            export default Code;
        `,
        image: "code-image-url.jpg",
        image_alt: "Code Image"
    },
    {
        id: 8,
        name: "FAQ Component",
        slug: "faq",
        description: "A component for displaying frequently asked questions with collapsible answers.",
        sampleCode: `
            import React, { useState } from 'react';
    
            const FAQ = ({ question, answer }: { question: string; answer: string }) => {
                const [isOpen, setIsOpen] = useState(false);
    
                const toggleOpen = () => {
                    setIsOpen(!isOpen);
                };
    
                return (
                    <div>
                        <button onClick={toggleOpen}>{question}</button>
                        {isOpen && <p>{answer}</p>}
                    </div>
                );
            };
    
            export default FAQ;
        `,
        image: "faq-image-url.jpg",
        image_alt: "FAQ Image"
    },
    {
        id: 9,
        name: "Navbar Component",
        slug: "navbar",
        description: "A navigation bar component for website navigation.",
        sampleCode: `
            import React from 'react';
    
            const Navbar = () => {
                return (
                    <nav>
                        {/* Navbar content here */}
                    </nav>
                );
            };
    
            export default Navbar;
        `,
        image: "navbar-image-url.jpg",
        image_alt: "Navbar Image"
    },
    {
        id: 10,
        name: "Custom Cursor Component",
        slug: "custom-cursor",
        description: "A component for implementing custom cursor effects on web pages.",
        sampleCode: `
            import React from 'react';
    
            const CustomCursor = () => {
                // Custom cursor implementation code here
                return <div className="custom-cursor"></div>;
            };
    
            export default CustomCursor;
        `,
        image: "custom-cursor-image-url.jpg",
        image_alt: "Custom Cursor Image"
    },
    {
        id: 11,
        name: "Buttons Component",
        slug: "buttons",
        description: "A collection of customizable button components.",
        sampleCode: `
            import React from 'react';
    
            const PrimaryButton = ({ onClick, label }: { onClick: () => void; label: string }) => {
                return <button className="primary-button" onClick={onClick}>{label}</button>;
            };
    
            const SecondaryButton = ({ onClick, label }: { onClick: () => void; label: string }) => {
                return <button className="secondary-button" onClick={onClick}>{label}</button>;
            };
    
            export { PrimaryButton, SecondaryButton };
        `,
        image: "buttons-image-url.jpg",
        image_alt: "Buttons Image"
    }
];

export default components;
