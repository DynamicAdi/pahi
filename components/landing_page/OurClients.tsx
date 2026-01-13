"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const OurClients = () => {
  const data = [
    "/cred.png",
    "/jockey.webp",
    "/puma.png",
    "/vision.png"
  ]
  return (
    <section className="w-full bg-white dark:bg-neutral-900 py-10 flex flex-col justify-center items-center text-center transition-colors">
      <h3 className="uppercase text-sm tracking-[0.3em] text-gray-600 dark:text-gray-400 mb-10">
        Our Clients
      </h3>

      <div className="max-w-7xl w-full flex justify-center items-center">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}          
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },   // sm
            768: { slidesPerView: 3 },   // md
            1024: { slidesPerView: 4 },  // lg
          }}
          className="w-full"
        >
          {data.map((src, index) => (
            <SwiperSlide key={index} className="flex justify-center items-center">
                <img
                  src={src}
                  alt={`Client Logo ${index + 1}`}
                  className="h-[120px] max-w-[200px] w-full object-fit transition-transform duration-300 hover:scale-105"
                />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default OurClients;
