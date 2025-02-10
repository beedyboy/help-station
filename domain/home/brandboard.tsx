"use client";

import ButtonGroup from "@/components/button/índex";
import SwiperComponent from "@/components/swiper";
import { helpCount, swiperImages } from "@/constants/homepageItems";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

import { FaArrowRightLong } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import TextSlider from "@/components/swiper/textSlider";

function BrandBoard() {
  return (
    <div className="w-full flex justify-start items-start gap-5 md:flex-row flex-col">
      <div className="md:w-[50%] w-full  h-auto">
        <div className="h-auto">
          <TextSlider />
        </div>

        <div className="w-[100%] flex md:items-center md:justify-start gap-4 py-2">
          <div>
            <ButtonGroup
              bgColor="#3BAD6B"
              borderColor="#3BAD6B"
              link="subscriptions"
            >
              <div className="flex p-2 gap-4 justify-center items-center ">
                <p className="text-white font-semibold text-lg leading-9">
                  Get Started
                </p>
                <FaArrowRightLong size={18} color="white" />
              </div>
            </ButtonGroup>
          </div>

          <div className="">
            <ButtonGroup bgColor="#fff" borderColor="#3BAD6B">
              <div className="flex p-2 gap-4 justify-center items-center">
                <IoCall />
                <p className="text-neutral-1 font-semibold text-lg leading-9">
                  Call Us Now
                </p>
              </div>
            </ButtonGroup>
          </div>
        </div>

        <div className="flex justify-start items-center gap-5 py-3">
          <Image
            src="/images/group_avatars.png"
            width={100}
            height={100}
            alt="satisfied client"
          />
          <p className="font-semibold text-base leading-6">
            25+ Satisfied Client
          </p>
        </div>

        <div className=" flex justify-around md:w-[90%] w-full bg-[#f8f8f9] items-center md:mt-5 p-2 rounded-lg shadow-[0px_40px_70px_0px_rgba(0,0,0,0.2)]">
          {/*  */}
          {helpCount.map(
            (details: { count: string; text: string }, index: number) => {
              return (
                <div
                  key={index}
                  className="flex flex-col items-center py-4 md:px-2"
                >
                  <p className="md:text-[32px] text-3xl leading-8 text-black font-bold">
                    {details.count}
                  </p>
                  <div className="w-[60%] md:w-full text-center">
                    <p className="text-xs font-normal md:text-base text-[#70727f]">
                      {details.text}
                    </p>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>

      <div className="md:w-[50%] flex md:h-[657px]">
        <div className="w-full">
          <SwiperComponent>
            <div>
              {swiperImages.map(
                (
                  image: {
                    header: string;
                    text: string;
                    img: string | StaticImport;
                  },
                  index: number
                ) => (
                  <SwiperSlide key={index} className="flex justify-center">
                    <div className="relative w-full flex justify-center items-center ">
                      <Image
                        src={image.img}
                        alt={`Slide image ${index + 1}`}
                        width={544}
                        height={400}
                        style={{
                          objectFit: "cover",
                          maxWidth: "100%",
                          height: "auto",
                        }}
                        objectFit="cover"
                        className="rounded-lg"
                        priority={index === 0}
                      />
                    </div>
                  </SwiperSlide>
                )
              )}
            </div>
          </SwiperComponent>
        </div>
      </div>
    </div>
  );
}

export default BrandBoard;
