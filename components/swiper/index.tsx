"use client";

import React, { ReactNode } from "react";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

interface SwiperComponentProps {
  children: ReactNode;
  paginate?: boolean;
  navigate?: boolean;
}

const SwiperComponent: React.FC<SwiperComponentProps> = ({
  children,
  paginate = false,
  navigate = false,
}) => {
  // Build modules dynamically
  const modules = [Autoplay];
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
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop
        navigation={navigate || undefined} // only add if true
        pagination={paginate ? { clickable: true } : undefined} // only add if true
        className="w-full h-auto flex flex-col"
      >
        {children}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
