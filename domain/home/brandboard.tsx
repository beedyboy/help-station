"use client";

import ButtonGroup from "@/components/button/índex";
import SwiperComponent from "@/components/swiper";
import { helpCount, swiperImages } from "@/constants/constantsValues";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { RiAlarmWarningFill } from "react-icons/ri";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import ClientAvatars from "@/components/avatar";

function BrandBoard() {
  return (
    <div className="w-full flex justify-start items-start gap-5 md:flex-row flex-col">
      <div className="md:w-[50%] w-full flex flex-col gap-3">
        <SwiperComponent>
          {swiperImages.map(
            (
              content: { header: string; text: string; img: string },
              index: number
            ) => (
              <SwiperSlide key={index} className="">
                <div className="flex flex-col justify-start items-center gap-5 md:mt-7">
                  <p className="md:text-[64px] text-3xl leading-9 md:leading-[74px] font-bold">
                    {content.header.includes("HELP") ? (
                      <span>
                        Traffic is no barrier, at{" "}
                        <span className="text-[#3BAD6B]">HELP </span> we got you
                        covered
                      </span>
                    ) : (
                      content.header
                    )}
                    <span className="bg-btnColor flex justify-center items-center rounded-full md:w-[45px] md:h-[45px]  w-[30px] h-[30px]">
                      <RiAlarmWarningFill size={18} />
                    </span>{" "}
                  </p>
                  <p className="text-primary md:text-base text-sm">
                    {content.text}
                  </p>
                </div>
              </SwiperSlide>
            )
          )}
        </SwiperComponent>

        <div className="w-[100%] flex md:items-center md:justify-start gap-4">
          <ButtonGroup bgColor="#3BAD6B" borderColor="#3BAD6B">
            <div className="flex p-2 gap-4 justify-center items-center ">
              <p className="text-white">Get Started</p>
              <FaArrowRightLong size={18} color="white" />
            </div>
          </ButtonGroup>
          <ButtonGroup bgColor="#fff" borderColor="#3BAD6B">
            <div className="flex p-2 gap-4 justify-center items-center">
              <IoCall />
              <p className="text-black">Call Us Now</p>
            </div>
          </ButtonGroup>
        </div>

        <div className="flex justify-start items-center gap-5 py-3">
          <ClientAvatars />
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

      <div className="md:w-[50%] flex justify-end items-end ">
        <div className="">
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
                        width={540}
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
