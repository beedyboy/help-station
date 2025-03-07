"use client";

import React, { ReactNode } from "react";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import "./swiper.css";

interface SwiperComponentProps {
  children: ReactNode;
}

const SwiperComponent: React.FC<SwiperComponentProps> = ({ children }) => {
  return (
    <div className="w-full h-auto">
      <Swiper
        autoHeight={true}
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full h-auto flex flex-col "
      >
       {children} 
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
