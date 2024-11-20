"use client";
import SwiperComponent from "@/components/swiper";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import { clientsImages } from "@/constants/homepageItems";

function BrandClients() {
  return (
    <div className="flex flex-col w-full justify-center py-10 gap-5 md:justify-between md:flex-row items-center">
      <div className="md:w-[50%] flex flex-col justify-start gap-3 items-start md:pr-36">
        <p className="font-semibold text-base leading-6 md:leading-8 text-btnColor ">
          Meet our clients
        </p>
        <p className="font-bold md:text-4xl text-3xl leading-10 ">
          Our Clients{" "}
        </p>
        <p className="text-base leading-6 md:text-lg md:leading-8 font-normal">
          Some Clients we have provided services to. Join the ranks of satisfied
          clients who have experienced our exceptional services.
        </p>
      </div>

      <div className="md:w-[50%] flex gap-2 flex-col">
        <SwiperComponent>
          <div className="flex justify-center items-center">
            {clientsImages.map(
              (image: string | StaticImport, index: number) => (
                <SwiperSlide key={index} className="flex justify-center">
                  <div className="relative w-full flex justify-center items-center ">
                    <Image
                      src={image}
                      alt={`Slide image ${index + 1}`}
                      style={{ maxWidth: "100%", height: "100%" }}
                      className="rounded-lg client-swiper"
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
  );
}

export default BrandClients;
