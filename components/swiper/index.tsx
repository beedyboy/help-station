"use client";

import React, { ReactNode } from "react";
import { Swiper } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation, Controller } from "swiper/modules";

interface SwiperComponentProps {
  children: ReactNode;
  paginate?: boolean;
  navigate?: boolean;
  controlledSwiper?: SwiperType | null;
  onSwiperInit?: (swiper: SwiperType) => void;
}

const SwiperComponent: React.FC<SwiperComponentProps> = ({
  children,
  paginate = false,
  navigate = false,
  controlledSwiper,
  onSwiperInit,
}) => {
  const modules = [Autoplay, Controller];
  if (paginate) modules.push(Pagination);
  if (navigate) modules.push(Navigation);

  return (
    <div className="w-full h-auto">
      <Swiper
        autoHeight
        modules={modules}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop
        pagination={paginate ? { clickable: true } : false}
        navigation={navigate || undefined}
        controller={{ control: controlledSwiper }}
        onSwiper={onSwiperInit}
        className="w-full h-auto flex flex-col"
      >
        {children}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
