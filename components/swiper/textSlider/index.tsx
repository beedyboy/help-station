"use client";

import { swiperImages } from "@/constants/homepageItems";
import { RiAlarmWarningFill } from "react-icons/ri";
import { SwiperSlide } from "swiper/react";
import SwiperComponent from "..";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import Link from "next/link";

import type { Swiper as SwiperType } from "swiper";

interface TextSliderProps {
  controlledSwiper?: SwiperType | null;
  onSwiperInit?: (swiper: SwiperType) => void;
}

function TextSlider({ controlledSwiper, onSwiperInit }: TextSliderProps) {
  return (
    <div className="w-full h-auto">
      <SwiperComponent
        paginate={false}
        navigate={false}
        controlledSwiper={controlledSwiper}
        onSwiperInit={onSwiperInit}
      >
        {swiperImages.map((content, index) => (
          <SwiperSlide key={index} className="!h-auto">
            <span className="ml-2 bg-[#DFF7E4] inline-flex items-center justify-center rounded-full align-middle md:w-[50px] md:h-[50px] w-[35px] h-[35px]">
              <RiAlarmWarningFill size={24} className="text-[#333]" />
            </span>
            <div className="flex flex-col justify-center items-start h-auto">
              <p className="md:text-[64px] text-[32px] leading-10 font-br-firma font-bold md:leading-[80px]">
                {content.header.includes("HELP") ? (
                  <>
                    Traffic is no barrier, at{" "}
                    <span className="text-[#3BAD6B]">HELP</span> we got you
                    covered
                  </>
                ) : (
                  content.header
                )}
              </p>
              <p className="text-[#70727F] font-normal leading-6 md:leading-[30px] md:text-lg text-base">
                {content.text}
              </p>
            </div>

            <div className="w-full md:w-[70%] flex md:items-center md:justify-start gap-4 py-2 h-auto">
              <div className="w-[54%]">
                <div className="border-[1px] border-[#3BAD6B] py-3 px-2 bg-primary-4 rounded-xl">
                  <Link href={content.action1.href}>
                    <div className="flex gap-4 justify-center items-center md:px-6">
                      <p className="text-white font-semibold md:text-lg text-base">
                        {content.action1.label}
                      </p>
                      <FaArrowRightLong size={18} color="white" />
                    </div>
                  </Link>
                </div>
              </div>

              <div className="w-[50%]">
                <div className="border-[1px] border-[#3BAD6B] py-3 px-2 rounded-xl bg-[#fff]">
                  <a href="tel:+2349132000013">
                    <div className="flex md:px-6 gap-4 justify-center items-center">
                      <IoCall />
                      <p className="text-neutral-1 font-semibold md:text-lg text-base">
                        Call Us Now
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </SwiperComponent>
    </div>
  );
}

export default TextSlider;
