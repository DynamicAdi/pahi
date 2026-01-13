"use client";

import { useState } from "react";



const ExpandOnHover = ({title, desc, images}: {title: string, desc: string, images: string[]}) => {
  const [expandedImage, setExpandedImage] = useState(3);

  const getImageWidth = (index: number) =>
    index === expandedImage ? "60rem" : "10rem";

  return (
    <div className="w-full h-auto mb-14">
        <h2 className="text-center mt-12 uppercase text-black dark:text-white text-2xl md:text-4xl font-serif italic font-light tracking-wide mb-0 transition-colors duration-300">{title}
        </h2>
        <p className="text-center mt-1 mb-8 text-lg font-serif text-neutral-300">{desc}</p>
      <div className="relative grid min-h-3/4 grid-cols-1 items-center justify-center p-2 transition-all duration-300 ease-in-out lg:flex w-full">  
        <div className="w-full h-full overflow-hidden rounded-3xl">
          <div className="flex h-full w-full items-center justify-center overflow-hidden">
            <div className="relative w-full max-w-6xl px-5">
              <div className="flex w-full items-center justify-center gap-1">
                {images.map((src, idx) => (
                  <div
                    key={idx}
                    className="relative cursor-pointer overflow-hidden rounded-3xl transition-all duration-500 ease-in-out"
                    style={{
                      width: getImageWidth(idx + 1),
                      height: "34rem",
                    }}
                    onMouseEnter={() => setExpandedImage(idx + 1)}
                  >
                    <img
                      className="w-full h-full object-cover"
                      src={src}
                      alt={`Image ${idx + 1}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpandOnHover;
