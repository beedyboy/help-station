import { swiperImages } from "@/constants/homepageItems";
import { SwiperSlide } from "swiper/react";
import SwiperComponent from "..";
function TextSlider() {
  return (
    <div className="w-full h-auto">
      <SwiperComponent>

        {swiperImages.map((content, index) => (
          <SwiperSlide key={index} className="!h-auto">
            <div className="flex flex-col justify-center items-start h-auto">
              <p className="md:text-[64px] text-[32px] leading-10 font-br-firma font-bold md:leading-[80px]">

       
                {content.header.includes("HELP") ? (
                  <span>
                    Traffic is no barrier, at
                    <span className="text-[#3BAD6B]"> HELP </span> we got you
                    covered
                  </span>
                ) : (
                  <span>{content.header}</span>
                )}
              </div>

              <p className="text-[#70727F] font-normal leading-6 md:leading-[30px] md:text-lg text-base">
                {content.text}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </SwiperComponent>
    </div>
  );
}

export default TextSlider;
