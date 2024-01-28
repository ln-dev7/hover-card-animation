"use client";
import * as React from "react";
import Image from "next/image";

// 1469  - 954
const data = [
  {
    title: "Exquisite Cuisine",
    description:
      "Indulge in a symphony of flavors, where culinary mastery meets artistry. Experience culinary excellence like never before.",
    image: "/1.png",
  },
  {
    title: "Gastronomic Delights",
    description:
      "Savor every bite with our delectable creations, carefully crafted to elevate your dining experience to new heights.",
    image: "/2.png",
  },
  {
    title: "Culinary Marvels",
    description:
      "Embark on a gastronomic journey, where passion and innovation converge to create extraordinary dishes that tantalize the palate.",
    image: "/3.png",
  },
  {
    title: "Epicurean Adventure",
    description:
      "Discover a world of gastronomic wonders, where each dish tells a story of craftsmanship and dedication to culinary perfection.",
    image: "/4.png",
  },
];

export default function Home() {
  const [active, setActive] = React.useState(0);
  const handleShow = (index: number) => {
    setActive(index);
  };
  return (
    <main className="flex min-h-screen items-center justify-center p-24 bg-white">
      <div className="z-10 max-w-7xl gap-10 flex w-full items-center justify-between">
        <div className="w-5/12 space-y-3">
          {data.map((item, index) => (
            <div
              key={index}
              className={`border border-slate-300 rounded-lg p-4 shadow-sm cursor-pointer duration-300 
            ${active === index ? "bg-green-50 w-full" : "bg-white w-11/12"}
            `}
              onMouseEnter={() => handleShow(index)}
            >
              <h1 className="text-xl font-bold text-gray-800">{item.title}</h1>
              <div
                className={`description
              ${active === index && "active"}
              `}
              >
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-7/12 rounded-3xl overflow-hidden bg-white h-[560px] flex flex-col border border-slate-200">
          {data.map((item, index) => (
            <div
              key={index}
              className="w-full h-full shrink-0 flex items-center justify-center p-4 duration-300"
              style={{
                transform: `translateY(-${active * 100}%)`,
              }}
            >
              <Image
                alt="image"
                src={item.image}
                width={1469}
                height={954}
                className="rounded-2xl w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
