"use client";
import Image from "next/image";
// import ImageSpotlight from "../image-spotlight";
import data from "@/data/data";
import dynamic from "next/dynamic";
const ImageSpotlight = dynamic(()=>import("../image-spotlight"),{
  ssr:false});
export default function SixItemsGrid() {
  const images = data["home"].images;

  return (
    <section className="bg-white dark:bg-black py-16 transition-colors">
      <div className="relative! max-w-xl md:max-w-7xl w-full mx-auto">
        <h2 className="text-center font-medium text-black dark:text-white text-2xl md:text-3xl font-light tracking-wide mb-12 transition-colors">
          Featured Works
        </h2>

        <div className="relative! mx-auto h-full px-5 md:px-0">
          {/* FIRST ROW */}
          <div className="relative! grid md:grid-cols-[35%_30%_35%] gap-4">
            <ImageSpotlight
              src={images[0]}
              alt="Portfolio item"
              config={{
                className:
                  "max-sm:max-h-[300px]! max-sm:max-w-[300px]! max-md:max-h-[400px]! max-md:max-w-[400px]!",
              }}
            />

            <ImageSpotlight
              src={images[1]}
              alt="Portfolio item"
              config={{
                className:
                  "max-sm:max-h-[300px]! max-sm:max-w-[300px]! max-md:max-h-[400px]! max-md:max-w-[400px]!",
              }}
            />

            <ImageSpotlight
              src={images[2]}
              alt="Portfolio item"
              config={{
                className:
                  "max-sm:max-h-[300px]! max-sm:max-w-[300px]! max-md:max-h-[400px]! max-md:max-w-[400px]!",
              }}
            />
          </div>

          {/* SECOND ROW */}
          <div className="grid md:grid-cols-[25%_50%_25%] gap-4 h-full mt-4">
            <ImageSpotlight
              src={images[3]}
              alt="Portfolio item"
              config={{
                className:
                  "max-sm:max-h-[300px]! max-sm:max-w-[300px]! max-md:max-h-[400px]! max-md:max-w-[400px]!",
              }}
            />

            <ImageSpotlight
              src={images[4]}
              alt="Portfolio item"
              config={{
                className:
                  "max-sm:max-h-[300px]! max-sm:max-w-[300px]! max-md:max-h-[400px]! max-md:max-w-[400px]!",
              }}
            />

            <ImageSpotlight
              src={images[5]}
              alt="Portfolio item"
              config={{
                className:
                  "max-sm:max-h-[300px]! max-sm:max-w-[300px]! max-md:max-h-[400px]! max-md:max-w-[400px]!",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
