"use client";
import BrandBoard from "@/domain/home/brandboard";
import Image from "next/image";
import framer from "@/public/framer.svg";
import BrandHelpBoard from "@/domain/home/brandhelp";
import BrandService from "./home/brandservice";
import BrandEmergencyAssessment from "./home/brandemergency";
import BrandPartners from "./home/brandpartners";
import BrandClients from "./home/brandclient";
import ConnectWithUs from "./home/connectwithus";
import MainLayout from "@/components/layout/MainLayout";
import BrandTestimony from "./home/brandtestimony";
import Modal from "@/components/modal";
import { useEffect } from "react";
import { useModal } from "@/context/ModalContext";
import Link from "next/link";
import { ROUTES } from "@/constant";

const HomePage: React.FC = () => {
  const { openModal } = useModal();

  useEffect(() => {
    openModal("modal 1");
  }, []);

  return (
    <MainLayout>
      <main className=" flex justify-center items-center flex-col  md:mt-7">
        <div className="w-[90%] flex justify-center items-center py-5">
          <BrandBoard />
        </div>

        {/* Slider Text */}

        <div className="w-full md:h-[384px] h-[350px] relative flex justify-center items-center">
          <Image
            src={framer}
            alt="framer"
            width={100}
            height={404}
            className="w-[100%] md:h-[100%] h-[100%]"
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
          <div className="absolute w-[80%] md:w-[70%]  md:top-[30%] md:left-[13%] text-center">
            <p className="text-[32px] font-br-firma font-bold leading-10 md:leading-[60px] md:text-[48px] text-white text-center">
              Building the largest network of{""}
              <span className="text-[#FFC91A]">
                {" "}
                first- responders, ambulances
              </span>{" "}
              , and
              <span className="text-[#FFC91A]">
                {" "}
                emergency- ready hospitals
              </span>
            </p>
          </div>
        </div>

        <div className="w-full">
          <BrandHelpBoard />
        </div>

        <div className="w-full flex py-3 md:py-0 justify-center items-center bg-[#FFF7F7]">
          <div className="w-[90%] ">
            <BrandService />
          </div>
        </div>

        <div className="w-full flex py-3 md:py-0 justify-center items-center bg-[#FFF7F7]">
          <div className="w-[90%] md:w-[85%] ">
            <BrandEmergencyAssessment />
          </div>
        </div>

        <div className="w-[100%] flex justify-center items-center bg-[#F9F9FC]">
          <div className=" flex justify-center items-center px-4 py-8 md:px-0 md:py-0">
            <BrandPartners />
          </div>
        </div>

        <div className="w-[100%] flex justify-center items-center bg-[#F9F9FC]">
          <div className="w-[95%] md:w-[90%] flex justify-center items-center px-4 py-8 md:px-0 md:py-0">
            <BrandClients />
          </div>
        </div>

        <div className="w-[100%] flex justify-center items-center bg-[#F9F9FC]">
          <div className="w-[95%] md:w-[90%] flex justify-center items-center px-4 py-8 md:px-0 md:py-0">
            <BrandTestimony />
          </div>
        </div>

        <div className="w-[100%] flex justify-center items-center bg-[#F9F9FC]">
          <div className="w-[90%] flex justify-center items-center px-4 py-8 md:px-0 md:py-0">
            <ConnectWithUs />
          </div>
        </div>
      </main>

      <Modal>
        <div className="flex w-full h-full justify-center items-center bg-white rounded-2xl md:shadow relative">
          <div className="hidden md:flex justify-center items-center w-[357px] h-full bg-[#f9f9fc] absolute left-0 top-0">
            <Image
              src="images/emergency_call_pana.svg"
              alt="framer"
              width={357}
              height={470}
            />
          </div>

          <div className="md:h-[268px] h-[300px]  flex flex-col gap-6 md:absolute left-[369px] top-[101px]">
            <div className="flex flex-col gap-2">
              <div className="">
                <Link
                  href={ROUTES.home}
                  className="flex items-center space-x-3"
                >
                  <Image
                    src="/images/help_station_logo.svg"
                    alt="Help Station Logo"
                    width={100}
                    height={100}
                  />
                </Link>{" "}
              </div>
              <h1 className="text-[#1b1c20] text-5xl font-bold font-['BR Firma']">
                How prepared are you for an emergency
              </h1>
              <p className="text-[#70727f] text-base font-['Source Sans Pro']">
                Take our risk assessment to find out.
              </p>
            </div>
            <Link href={ROUTES.herat}>
              <button className="w-[158px] h-14 bg-[#3bad6b] text-white text-lg font-bold rounded-xl">
                Find out
              </button>
            </Link>
          </div>
        </div>
      </Modal>
    </MainLayout>
  );
};

export default HomePage;
