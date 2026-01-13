import React from "react";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const CustomSwiper = ({ children }: React.PropsWithChildren) => {
  return (
    <Swiper
      spaceBetween={20}
      navigation
      loop
      className="mt-5 justify-center py-3!"
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      breakpoints={{
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1040: { slidesPerView: 3 },
      }}
    >
      {children}
    </Swiper>
  );
};

export default CustomSwiper;