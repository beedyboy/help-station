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
    <div className="md:w-[540px] w-full flex justify-center items-center">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="md:w-[540px] swipper-image"
      >
        {children}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
