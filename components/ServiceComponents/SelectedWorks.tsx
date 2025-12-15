"use client";
import Image from "next/image";
import React from "react";

type Props = { service: string[] };

export default function SelectedWorks({ service = [] }: Props) {
  const items = Array.isArray(service) ? service.slice(0, 6) : [];

  const isVideo = (src?: string) =>
    !!src?.toLowerCase().split("?")[0].match(/\.(mp4|webm|mov|avi|m4v|mkv)$/);

  const Media = ({ src, alt }: { src?: string; alt: string }) => {
    if (!src) return null;
    return (
      <div className="absolute inset-0 w-full h-full">
        {isVideo(src) ? (
          <video src={src} controls playsInline className="w-full h-full object-cover" />
        ) : (
          <Image src={src} alt={alt} fill unoptimized className="object-cover" />
        )}
      </div>
    );
  };

  const slots = [
    items[0],
    items[1],
    items[2],
    items[3],
    items[4],
    items[5],
  ];

  return (
    <section className="w-full bg-white dark:bg-black py-12">
      <div className="md:max-w-7xl mx-auto px-5 md:px-0">
        <h2 className="text-center text-black dark:text-white text-2xl md:text-3xl font-light tracking-wide mb-8">
          Our Work
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 md:grid-rows-8 gap-4">

          {/* Slot 1 */}
          <div className="relative col-span-1 sm:col-span-1 md:col-span-2 md:row-span-4 overflow-hidden rounded-md min-h-72">
            <Media src={slots[0]} alt="portfolio 1" />
          </div>

          {/* Slot 2 */}
          <div className="relative col-span-1 sm:col-span-1 md:col-start-3 md:col-span-2 md:row-span-3 overflow-hidden rounded-md min-h-40">
            <Media src={slots[1]} alt="portfolio 2" />
          </div>

          {/* Slot 3 */}
          <div className="relative col-span-1 sm:col-span-2 md:col-start-5 md:col-span-1 md:row-span-5 overflow-hidden rounded-md min-h-70">
            <Media src={slots[2]} alt="portfolio 3" />
          </div>

          {/* Slot 4 */}
          <div className="relative col-span-1 sm:col-span-1 md:col-start-3 md:col-span-2 md:row-start-4 md:row-span-2 overflow-hidden rounded-md min-h-32">
            <Media src={slots[3]} alt="portfolio 4" />
          </div>

          {/* Slot 5 */}
          <div className="relative col-span-1 sm:col-span-2 md:col-start-3 md:col-span-3 md:row-start-6 md:row-span-3 overflow-hidden rounded-md min-h-46">
            <Media src={slots[4]} alt="portfolio 5" />
          </div>

          {/* Slot 6 */}
          <div className="relative col-span-1 sm:col-span-2 md:col-start-1 md:col-span-2 md:row-start-5 md:row-span-4 overflow-hidden rounded-md min-h-56">
            <Media src={slots[5]} alt="portfolio 6" />
          </div>

        </div>
      </div>
    </section>
  );
}
