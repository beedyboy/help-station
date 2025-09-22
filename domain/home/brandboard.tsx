"use client";

// import ButtonGroup from "@/components/button/índex";
import SwiperComponent from "@/components/swiper";
import { helpCount, swiperImages } from "@/constants/homepageItems";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import TextSlider from "@/components/swiper/textSlider";
// import ImageTemplate from "@/components/image";

function BrandBoard() {
  return (
    <div className="w-full flex justify-between items-start gap-5 md:flex-row flex-col">
      <div className="md:w-[50%] flex md:gap-2 gap-3 flex-col w-full h-auto">
        <div>
          <TextSlider />
        </div>

        {/* Stats Section */}
        <div className="flex justify-around md:w-[90%] w-full bg-[#B0B7C338] items-center md:mt-5 p-2 rounded-lg shadow-[0px_40px_70px_0px_rgba(0,0,0,0.2)]">
          {helpCount.map(
            (details: { count: string; text: string }, index: number) => (
              <div
                key={index}
                className="flex flex-col items-center py-4 md:px-2"
              >
                <p className="md:text-[32px] text-2xl leading-[30px] md:leading-10 text-[#1B1C20] font-bold">
                  {details.count}
                </p>
                <div className="w-[60%] md:w-full text-center">
                  <p className="text-xs font-normal leading-5 md:leading-6 md:text-base text-[#70727f]">
                    {details.text}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </div>

      <div className="md:w-[45%] w-full md:justify-end items-end flex md:min-h-[544px] ">
        <SwiperComponent paginate={true} navigate={false}>
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
                <div className="relative md:h-[650px] h-[403px] flex justify-center rounded-[20px] overflow-hidden items-center w-full">
                  <Image
                    src={image.img}
                    alt={`Slide image ${index + 1}`}
                    width={544}
                    height={350}
                    className="rounded-lg object-cover w-full h-full"
                    priority={index === 0}
                  />
                </div>
              </SwiperSlide>
            )
          )}
        </SwiperComponent>
      </div>
    </div>
  );
}

export default BrandBoard;
