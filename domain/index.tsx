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
import { EmergencyReadinessModal } from "@/components/modals/EmergencyReadinessModal";
import { TrainingOptionsModal } from "@/components/modals/TrainingOptionsModal";

const HomePage: React.FC = () => {
  const { openModal, activeModal } = useModal();

  useEffect(() => {
    const hasShownModal = sessionStorage.getItem("homeModalShown");
    if (!hasShownModal) {
      openModal("modal 1");
      sessionStorage.setItem("homeModalShown", "true");
    }
  }, [openModal]);

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
        {activeModal === "modal 1" && <EmergencyReadinessModal />}
        {activeModal === "training" && <TrainingOptionsModal />}
      </Modal>
    </MainLayout>
  );
};

export default HomePage;
