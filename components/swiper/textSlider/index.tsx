import { swiperImages } from "@/constants/homepageItems";
import { RiAlarmWarningFill } from "react-icons/ri";
import { SwiperSlide } from "swiper/react";
import SwiperComponent from "..";

function TextSlider() {
  return (
    <div className={`w-full h-auto`}>
      <SwiperComponent>
        {swiperImages.map(
          (
            content: { header: string; text: string; img: string },
            index: number
          ) => (
            <SwiperSlide key={index}>
              <p className="md:text-[64px] text-[32px] leading-10 font-br-firma font-bold md:leading-[80px]">
                {content.header.includes("HELP") ? (
                  <span>
                    Traffic is no barrier, at
                    <span className="text-[#3BAD6B]">HELP </span> we got you
                    covered
                  </span>
                ) : (
                  <span>{content.header}</span>
                )}
                <span
                  className="ml-2 bg-[#DFF7E4] inline-flex items-center justify-center rounded-full align-middle md:w-[50px] md:h-[50px] w-[35px] h-[35px]"
                  style={{ verticalAlign: "middle" }}
                >
                  <RiAlarmWarningFill
                    size={24}
                    className="text-[#333] text-[14px]"
                  />
                </span>
              </p>

              <p className="text-[#70727F] font-normal leading-6 md:leading-[30px] md:text-lg text-base">
                {content.text}
              </p>
            </SwiperSlide>
          )
        )}
      </SwiperComponent>
    </div>
  );
}

export default TextSlider;
