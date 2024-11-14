"use client";

import ButtonGroup from "@/component/button/índex";
import SwiperComponent from "@/component/swiper";
import { helpCount, swiperImages } from "@/constant";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";

function BrandBoard() {
  return (
    <div className="w-[100%] flex justify-start items-start gap-5 md:flex-row flex-col md:mb-10">
      <div className="md:w-[50%] flex flex-col gap-5 h-auto">
        <SwiperComponent>
          {swiperImages.map(
            (
              content: { header: string; text: string; img: string },
              index: number
            ) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col gap-5 md:mt-7">
                  <h3 className="text-[64px] leading-[74px] font-bold">
                    {content.header.includes("HELP") ? (
                      <span>
                        Traffic is no barrier, at{" "}
                        <span className="text-[#3BAD6B]">HELP </span> we got you
                        covered
                      </span>
                    ) : (
                      content.header
                    )}
                  </h3>
                  <p className="text-primary">{content.text}</p>
                </div>
              </SwiperSlide>
            )
          )}
        </SwiperComponent>

        <div className="flex items-center gap-5">
          <ButtonGroup bgColor="#3BAD6B" borderColor="#3BAD6B" width="204px">
            <div className="flex p-4 justify-center items-center ">
              <p className="text-white">Get Started</p>
            </div>
          </ButtonGroup>
          <ButtonGroup bgColor="#fff" borderColor="#3BAD6B" width="204px">
            <div className="flex p-4 justify-center items-center">
              <p className="text-black">Call Us Now</p>
            </div>
          </ButtonGroup>
        </div>

        <div className=" flex justify-between w-[90%] bg-[#f8f8f9] items-center md:mt-5 rounded-lg shadow-[0px_40px_70px_0px_rgba(0,0,0,0.2)]">
          {/*  */}
          {helpCount.map(
            (details: { count: string; text: string }, index: number) => {
              return (
                <div
                  key={index}
                  className="flex flex-col items-center py-4 md:px-2"
                >
                  <p className="text-[32px] text-black font-bold">
                    {details.count}
                  </p>
                  <p className="text-[]16px] text-[#70727f]">{details.text}</p>
                </div>
              );
            }
          )}
        </div>
      </div>

      <div className="md:w-[50%] flex justify-end items-end ">
        <div className="w-[544px] h-[100%]">
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
                        width={500}
                        height={400}
                        style={{ maxWidth: "100%", height: "auto" }}
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
