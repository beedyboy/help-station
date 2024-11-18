"use client";
import BrandBoard from "@/domain/home/brandboard";
import Image from "next/image";
import framer from "@/public/framer.svg";
import BrandHelpBoard from "@/domain/home/brandhelp";
import BrandService from "./home/brandservice";
import BrandEmergencyAssessment from "./home/brandemergency";
import BrandPartners from "./home/brandpartners";
import BrandClients from "./home/brandclient";
// import CustomSwiper from "@/components/swiper/testimonySwiper";
import ConnectWithUs from "./home/connectwithus";

const HomePage: React.FC = () => (
  <main className=" flex justify-center items-center flex-col ">
    <div className="w-[90%] flex justify-center items-center py-5">
      <BrandBoard />
    </div>

    <div className="w-full md:h-[384px] h-[350px] relative flex justify-center items-center">
      <Image
        src={framer}
        alt="framer"
        width={100}
        height={404}
        className="w-[100%] md:h-[100%] h-[100%]"
        style={{ objectFit: "cover", width: "100%", height: "100%" }}
      />
      <div className="absolute w-[80%] md:w-[61%]  md:top-[30%] md:left-[20%] text-center">
        <p className="text-3xl font-bold leading-10 md:leading-[48px] md:text-[48px] text-white text-center">
          Building the largest network of{""}
          <span className="text-[#FFC91A]">
            {" "}
            first- responders, ambulances
          </span>{" "}
          , and
          <span className="text-[#FFC91A]">emergency- ready hospitals</span>
        </p>
      </div>
    </div>

    <div className="w-full">
      <BrandHelpBoard />
    </div>

    {/* service */}
    <div className="w-full flex py-3 md:py-0 justify-center items-center bg-[#FFF7F7]">
      <div className="w-[90%] ">
        <BrandService />
      </div>
    </div>

    {/* Emergency Assessment */}
    <div className="w-full flex py-3 md:py-0 justify-center items-center bg-[#FFF7F7]">
      <div className="w-[90%] ">
        <BrandEmergencyAssessment />
      </div>
    </div>

    <div className="md:w-full w-full">
      <BrandPartners />
    </div>

    <div className="w-[100%] flex justify-center items-center bg-[#F9F9FC]">
      <div className="w-[90%] flex justify-center items-center px-4 py-8 md:px-0 md:py-0">
        <BrandClients />
      </div>
    </div>

    {/* <div className="w-full flex justify-center items-center bg-[#FFF]">
      <div className="md:w-[85%] md:py-6">
        <CustomSwiper />
      </div>
    </div> */}

    <div className="w-[100%] flex justify-center items-center bg-[#F9F9FC]">
      <div className="w-[90%] flex justify-center items-center px-4 py-8 md:px-0 md:py-0">
        <ConnectWithUs />
      </div>
    </div>
  </main>
);

export default HomePage;
