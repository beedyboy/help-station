import ButtonGroup from "@/components/button/índex";
import { FaHandshakeSimple } from "react-icons/fa6";

function BrandPartners() {
  return (
    <div className="relative py-7 w-full flex justify-center items-center">
      <div className="absolute -z-20 h-[100%] bg-[#e6e7ea] md:w-[380px] w-[200px] left-0 top-0"></div>
      <div className="absolute -z-10 h-[100%] bg-[#d8dae1] md:w-[190px] w-[75px] left-12 md:left-[6rem] top-0"></div>

      <div className=" text-center h-[80%] z-10 w-[85%] flex justify-start items-center gap-3 flex-col">
        <div className="bg-[#EFF0F5] rounded-full w-[60px] h-[60px] flex justify-center items-center ">
          <div className="flex justify-center items-center w-[60%] h-[60%] rounded-full p-2 bg-btnColor">
            <FaHandshakeSimple size={24} color="white" />
          </div>
        </div>
        <h3 className="font-bold md:text-[48px] font-br-firma text-[32px] md:leading-[60px] leading-10">
          Partnership for greater impact
        </h3>

        <div className="md:w-[46%] text-base md:text-lg md:leading-[30px] leading-6 text-neutral-1 p-2 font-semibold flex flex-col justify-center items-center gap-3">
          <p className="text-base md:text-lg md:leading-[30px] leading-6">
            At HELP, we are passionate about{" "}
          </p>
          <p className="text- md:hidden">
            1. Saving lives by ensuring that prompt pre-hospital care is
            available to all
          </p>
          <p className="text-btnColor md:hidden">
            2. Reversing the trends of needless deaths due to lack of access.
          </p>

          <p className="hidden md:block text-btnColor">
            Saving lives by ensuring that prompt pre-hospital care is available
            to all and reversing the trends of needless deaths due to lack of
            access.
          </p>
        </div>
        <p className="md:w-[74%] text-center">
          We are doing this, one partner at a time, aggregating emergency ready
          hospitals, first responders and ambulance service providers across
          Africa within a tech ecosystem that breaks the silos and improves
          interconnectivity for better patient outcomes. We are constantly
          looking out for equally passionate partners willing to join us in
          creating this future.
        </p>

        <div className="py-4">
          <ButtonGroup
            bgColor="#3BAD6B"
            borderColor="#3BAD6B"
            width="158px"
            paddingX="10px"
            paddingY="3px"
            link="/become-a-partner"
          >
            <p className="text-white text-base md:text-lg md:leading-[30px] leading-6 px-2">
              Become a partner
            </p>
          </ButtonGroup>
        </div>

        <video
          className="rounded-lg md:h-[300px] h-[450px] w-full"
          width="100%"
          controls
        >
          <source src="/video/sample-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default BrandPartners;
