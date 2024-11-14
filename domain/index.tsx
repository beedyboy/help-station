"use client";
import BrandBoard from "@/domain/home/brandboard";
import Image from "next/image";
import framer from "@/public/framer.svg";
import BrandHelpBoard from "@/domain/home/brandhelp";

const HomePage: React.FC = () => (
  <div className="w-[100%] flex flex-col justify-center items-center">
    {/* B */}
    <div className="w-[85%]">
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
    <div className="w-full">
      <BrandHelpBoard />
    </div>
  </div>
);

export default HomePage;
