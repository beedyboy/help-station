"use client";

import React, { ReactNode } from "react";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

interface SwiperComponentProps {
  children: ReactNode;
}

const SwiperComponent: React.FC<SwiperComponentProps> = ({ children }) => {
  return (
    <div className="w-full h-auto">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full h-auto"
      >
        <div className="h-auto">{children}</div>
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
