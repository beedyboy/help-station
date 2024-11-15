"use client";
import BrandBoard from "@/domain/home/brandboard";
import Image from "next/image";
import framer from "@/public/framer.svg";
import BrandHelpBoard from "@/domain/home/brandhelp";
import BrandService from "./home/brandservice";
import BrandEmergencyAssessment from "./home/brandemergency";
import BrandPartners from "./home/brandpartners";
import BrandClients from "./home/brandclient";

const HomePage: React.FC = () => (
  <div className="w-full flex flex-col justify-center items-center">
    {/* B */}
    <div className="md:w-[85%] w-full">
      <BrandBoard />
    </div>

    <div className="w-[100%] relative ">
      <Image
        src={framer}
        alt="framer"
        width={100}
        height={384}
        style={{ width: "100%", height: "384px" }}
      />
      <div className="absolute w-[61%]  top-[30%] left-[20%] text-center">
        <p className="text-sm md:leading-[48px] md:text-[48px] text-white text-center">
          Building the largest network of{""}
          <span className="text-[#FFC91A]">
            first- responders, ambulances
          </span>{" "}
          , and
          <span className="text-[#FFC91A]">emergency- ready hospitals</span>
        </p>
      </div>
    </div>

    {/* Help */}
    <div className="md:w-full w-full">
      <BrandHelpBoard />
    </div>

    {/* service */}
    <div className="w-full flex justify-center items-center bg-[#FFF7F7]">
      <div className="md:w-[85%]">
        <BrandService />
      </div>
    </div>

    {/* Emergency Assessment */}
    <div className="w-full flex justify-center items-center bg-[#FFF7F7]">
      <div className="md:w-[80%] w-full">
        <BrandEmergencyAssessment />
      </div>
    </div>

    {/* Partners */}
    <div className="md:w-full w-full">
      <BrandPartners />
    </div>

    <div className="w-full flex justify-center items-center bg-[#FFF]">
      <div className="md:w-[85%]">
        <BrandClients />
      </div>
    </div>
  </div>
);

export default HomePage;
