"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";
import data from "@/data/data";

const ImageSpotlight = dynamic(() => import("../image-spotlight"), {
  ssr: false,
});

const LINKS = [
  "/food-and-drink",
  "/jewellery",
  "/fashion",
  "/brand-campaigns",
  "/ecommerce",
  "/ai-services",
];

export default function BentoGrid() {
  const images = data.home.images;

  return (
    <section className="bg-white dark:bg-black py-16">
      <div className="max-w-7xl mx-auto px-5">

        <h2 className="text-center text-black dark:text-white text-2xl md:text-3xl font-light mb-12">
          Featured Works
        </h2>

        {/* MOBILE: stack | DESKTOP: exact 6x6 grid */}
        <div className="
          grid grid-cols-1 gap-4
          md:grid-cols-6 md:grid-rows-6 md:gap-3
        ">
          {/* 1 */}
          <BentoItem
            src={images[0]}
            href={LINKS[0]}
            className="md:col-span-2 md:row-span-3"
          />

          {/* 2 */}
          <BentoItem
            src={images[1]}
            href={LINKS[1]}
            className="md:col-span-2 md:row-span-3 md:col-start-3"
          />

          {/* 8 */}
          <BentoItem
            src={images[5]}
            href={LINKS[5]}
            className="md:col-span-2 md:row-span-3 md:col-start-5 md:row-start-1"
          />

          {/* 4 */}
          <BentoItem
            src={images[3]}
            href={LINKS[3]}
            className="md:row-span-3 md:col-start-1 md:row-start-4"
          />

          {/* 5 */}
          <BentoItem
            src={images[4]}
            href={LINKS[4]}
            className="md:col-span-3 md:row-span-3 md:col-start-2 md:row-start-4"
          />

          {/* 7 */}
          <BentoItem
            src={images[2]}
            href={LINKS[2]}
            className="md:col-span-2 md:row-span-3 md:col-start-5 md:row-start-4"
          />
        </div>

      </div>
    </section>
  );
}

/* ---------------- ITEM ---------------- */

function BentoItem({
  src,
  href,
  className,
}: {
  src: string;
  href: string;
  className: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      <Link
        href={href}
        className="
          group relative block w-full h-full
          overflow-hidden rounded-xl bg-black
          aspect-[4/5] md:aspect-auto
        "
      >
        {/* IMAGE */}
        <ImageSpotlight
          src={src}
          alt="Featured work"
          config={{
            className:
              "absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",
          }}
        />
                <div className="
          absolute bottom-0 left-0 right-0 h-12
          translate-y-full group-hover:translate-y-0
          bg-white/20 backdrop-blur-sm
          text-white font-serif text-lg
          grid place-items-center
          transition-transform duration-300
        ">
          View More
        </div>
        {/* CTA */}
      </Link>
    </motion.div>
  );
}
