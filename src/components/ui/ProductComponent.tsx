import React, { useState } from "react";

export interface Product {
  id: number;
  name: string;
  description: string;
  image: string[];
  colorvalues: string[];
  colors: string[];
  price: string;
}

export default function ProductComponent() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const productData: Product[] = [
    {
      id: 1,
      name: "iPhone 15 Silicone Case with MagSafe -",
      description: "iPhone 15 Silicone Case with Magsafe",
      image: [
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWNC3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1708125476826",
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWNA3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1708123923316",
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWND3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1708125477348",
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MT0N3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1692999418841",
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MT0Q3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1692999652464",
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWN93?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1708123923139",
      ],
      colorvalues: [
        "rgb(213,233,213)",
        "rgb(246,206,103)",
        "rgb(179,195,216)",
        "rgb(81,89,100)",
        "rgb(169,162,152)",
        "rgb(239,143,163)",
      ],
      colors: [
        "Soft Mint",
        "Sunshine",
        "Light Blue",
        "Storm Blue",
        "Clay",
        "Pink",
      ],
      price: "$69.00",
    },
  ];

  return (
    <div className="h-full w-[90%] rounded-md bg-white text-black">
      {productData.map((product) => (
        <div
          key={product.id}
          className="flex h-full w-full flex-col items-center justify-around"
        >
          <img
            src={product.image[currentIndex]}
            alt={product.name}
            className="h-[45%]"
          />
          <div className="flex gap-3">
            {product.colors.map((color, index) => (
              <button
                key={index}
                style={{ backgroundColor: product.colorvalues[index] }}
                className="h-4 w-4 rounded-full"
                onClick={() => setCurrentIndex(index)}
              ></button>
            ))}
          </div>
          <div>
            <h2 className="flex flex-col font-medium">
              {product.name}
              {product.colors[currentIndex]}
            </h2>
          </div>
          <h2>{product.price}</h2>
        </div>
      ))}
    </div>
  );
}
