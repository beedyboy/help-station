import Image from "next/image";
import helpServiceImg from "@/public/images/help-station-service-image.svg";
import ButtonGroup from "@/components/button/índex";

import Link from "next/link";

function BrandService() {
  return (
    <div className="md:h-[600px]w-full flex flex-col md:justify-between gap-3 md:flex-row items-center md:p-2 py-3">
      <div className="md:w-[45%] lg:w-[400] w-full h-[350px] md:h-[400px] flex justify-center items-center">
        <Image
          src={helpServiceImg}
          alt=""
          width={100}
          height={100}
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <div className="md:w-[50%] w-full justify-start flex gap-2 flex-col">
        <div className="bg-[#EFF0F5] rounded-full w-[60px] h-[60px] flex justify-center items-center ">
          <div className="flex justify-center items-center w-[60%] h-[60%] rounded-full p-2 bg-btnColor">
            <Image src="/icons/healthcare.svg" alt="" width={50} height={50} />
          </div>
        </div>
        <p className="font-bold md:text-4xl text-neutral-1 text-3xl  leading-9">
          Our Services
        </p>
        <div>
          <p className="text-base md:text-lg leading-6 text-neutral-1">
            Building safe spaces that are emergency ready is what drives us.
            With our range of services, we provide 360 cover for families,
            individuals and corporates. 
          </p>
          <p className="py-3 text-sm md:text-base leading-6 text-neutral-2">
            Visit our services page to learn more.
          </p>
        </div>
        <Link href="/services" className="text-primary-4 space-x-3">
          <ButtonGroup
            bgColor="#3BAD6B"
            borderColor="#3BAD6B"
            width="158px"
            paddingX="10px"
            paddingY="5px"
          >
            <p className="text-white">Services</p>
          </ButtonGroup>
        </Link>
      </div>
    </div>
  );
}

export default BrandService;
