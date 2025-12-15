import Image from "next/image";
import React from "react";

const OurClients = () => {
  const data = [
    "/cred.png",
    "/jockey.webp",
    "/puma.png",
    "/vision.png"
  ]
  return (
    <section className="w-full bg-white dark:bg-neutral-900 py-10 flex flex-col items-center text-center transition-colors">
      <h3 className="uppercase text-sm tracking-[0.3em] text-gray-600 dark:text-gray-400 mb-10">
        Our Clients
      </h3>

      <div className="flex max-lg:flex-col flex-wrap justify-center gap-10 md:gap-20 text-gray-700 dark:text-gray-300 text-xl md:text-2xl font-serif">
        {data.map((src, index) => (
          <div key={index} className="w-40 h-40 flex items-center justify-center">
            <Image 
            alt={"Client Logo " + (index + 1)}
            src={src}
            width={120}
            height={120}
            className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurClients;
