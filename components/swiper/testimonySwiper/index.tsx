"use client";
import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./testimony.css";
import { testimonials } from "@/constants/homepageItems";
import testimonyImg from "@/public/icons/help_station_testimony_icon.svg";
import Image from "next/image";
import useWidth from "@/utils/width";
import ImageTemplate from "@/components/image";

export default function CustomSwiper() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { size } = useWidth();

  const [sliderWidth, setSliderWidth] = useState(size);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex: number) => (prevIndex + 1) % testimonials.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setSliderWidth(size);

    console.log("checking slider width", sliderWidth);
  }, [size]);

  return (
    <>
      {size && size > 800 ? (
        <div className="container md:flex-row flex-col flex h-full ">
          {testimonials.map((testimonial, index: number) => {
            let className = "items flex justify-center items-center flex-col";
            if (index === currentIndex) className += " item2";
            else if (index === (currentIndex + 1) % testimonials.length)
              className += " item3";
            else if (
              index ===
              (currentIndex - 1 + testimonials.length) % testimonials.length
            )
              className += " item1";

            return (
              <div
                key={index}
                className={`${className}  ${
                  index === currentIndex ? "gap-3 " : " gap-3 text-base"
                }`}
              >
                <div className="text-center px-6 flex flex-col gap-3">
                  <h3
                    className={` ${
                      index === currentIndex ? "text-2xl font-semibold" : ""
                    }  text-neutral-1 `}
                  >
                    {testimonial.title}
                  </h3>
                  <p className="text-base font-normal text-neutral-1">
                    {testimonial.content}
                  </p>
                </div>

                <div className="flex justify-between gap-2  items-center ">
                  <div className=" w-11 h-11 rounded-full">
                    <ImageTemplate src={testimonial.image} />
                  </div>
                  <div className="flex gap-1 flex-col">
                    <p>
                      <strong>{testimonial.author}</strong>{" "}
                    </p>
                    <span>{testimonial.role}</span>
                  </div>
                  <Image
                    src={testimonyImg}
                    alt="testimoy_icon "
                    width={70}
                    height={70}
                  />
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex flex-col gap-5">
          {testimonials.map((testimonial, index) => {
            return (
              <div
                className={`flex shadow-sm rounded-lg gap-3 flex-col items-center p-3 ${
                  index === currentIndex
                    ? "mobile_testimony_card_active_bg"
                    : "mobile_testimony_card_nonacive_bg"
                } `}
                key={index}
              >
                <div className="text-center flex flex-col gap-3 items-center">
                  <h3 className={`text-xl font-semibold leading-10`}>
                    {testimonial.title}
                  </h3>
                  <p className="text-base font-normal text-center text-neutral-1">
                    {testimonial.content}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className=" w-9 h-9 rounded-full ">
                    <ImageTemplate src={testimonial.image} />
                  </div>
                  <div className="flex gap-1 flex-col">
                    <p>
                      <strong className="text-sm font-semibold">
                        {testimonial.author}
                      </strong>
                    </p>
                    <span className="text-xs leading-4">
                      {testimonial.role}
                    </span>
                  </div>
                  <Image
                    src={testimonyImg}
                    alt="testimoy_icon "
                    width={50}
                    height={50}
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
