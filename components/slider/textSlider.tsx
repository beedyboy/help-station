"use client";

import { swiperImages } from "@/constants/homepageItems";
import { useEffect, useState } from "react";

const TextSlider = () => {
  const [data] = useState(swiperImages);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % data.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h3>{data[activeIndex].header}</h3>
      <p>{data[activeIndex].text}</p>
    </div>
  );
};

export default TextSlider;
