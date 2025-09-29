"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { swiperImages } from "@/constant";
import Image from "next/image";

const SwiperComponent = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      autoplay={{ delay: 1000, disableOnInteraction: false }}
      loop={true}
      className=" w-full"
    >
      {swiperImages.map((image, index) => (
        <SwiperSlide key={index}>
          <Image src={image} alt="images" className="bg-cover bg-center" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;
