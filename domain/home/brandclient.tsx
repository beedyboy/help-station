"use client";
import SwiperComponent from "@/components/swiper";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import { clientsImages } from "@/constants/homepageItems";

function BrandClients() {
  return (
    <div className="flex flex-col w-full justify-center py-10 gap-5 md:justify-between md:flex-row items-center">
      <div className="md:w-[50%] w-full flex flex-col justify-start gap-3 items-start md:pr-36">
        {/* <p className="font-semibold text-base leading-6 md:leading-8 text-btnColor ">
          Meet our clients
        </p> */}
        <p className="font-bold md:text-[48px] font-br-firma md:leading-[60px] text-[32px] leading-10 ">
          Our Clients{" "}
        </p>
        <p className="text-base md:text-lg md:leading-[30px] leading-6 text-neutral-1">
          Some Clients we have provided services to. Join the ranks of satisfied
          clients who have experienced our exceptional services.
        </p>
      </div>

      <div className="md:w-[50%] w-full flex h-auto">
        <div className="w-full">
          <SwiperComponent>
            {clientsImages.map(
              (image: string | StaticImport, index: number) => (
                <SwiperSlide key={index} className="flex justify-center">
                  <div className="flex justify-center items-center w-full">
                    <Image
                      src={image}
                      alt={`Slide image ${index + 1}`}
                      width={150} // Adjust based on your image size
                      height={100} // Adjust height for better responsiveness
                      className="rounded-lg w-auto h-auto object-contain"
                      priority={index === 0}
                    />
                  </div>
                </SwiperSlide>
              )
            )}
          </SwiperComponent>
        </div>
      </div>
    </div>
  );
}

export default BrandClients;
