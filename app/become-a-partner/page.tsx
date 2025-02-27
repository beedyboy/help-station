"use client";

import OurPartner from "@/domain/our-partner";
import Modal from "@/components/modal";
import Image from "next/image";
import { useModal } from "@/context/ModalContext";
import { RiAlarmWarningFill } from "react-icons/ri";
import { GiAmbulance } from "react-icons/gi";
import Link from "next/link";

function BecomeApartner() {
  const { openModal } = useModal();
  return (
    <>
      <main className="md:mt-[30px]">
        <OurPartner openModal={() => openModal("modal 1")} />
      </main>

      <Modal>
        <div className="w-full flex md:gap-0 gap-5 justify-center items-center md:flex-row flex-col h-[100%] bg-white rounded-2xl md:shadow relative">
          {/*  */}
          <div className=" md:absolute w-[90%] md:w-[90%] h-[100%] md:h-[50%]  md:top-1/4 md:left-[3rem] left-8 grid gap-6 md:grid-flow-col grid-flow-row md:grid-cols-3  z-30">
            <div className=" bg-white text-center flex flex-col justify-center items-center gap-2 p-3  border-[1px] border-red rounded-lg">
              {/* <Link></Link> */}
              <div className="  cursor-pointer w-8 h-8 z-10">
                <Link href="/services/ambulance-form">
                  <GiAmbulance size={24} color="#5DBA7F" />
                </Link>
              </div>
              <h3 className="font-semibold text-lg text-primary-5">
                <Link href="/services/ambulance-form">Ambulance Partner</Link>
              </h3>
              <p className="font-normal text-sm leading-4 text-primary-5">
                <Link href="/services/ambulance-form">
                  Become an ambulance partner, We aim to leverage existing
                  resources to provide access to ambulance care.
                </Link>
              </p>
            </div>

            {/* 2 */}

            <div className=" bg-white text-center flex flex-col justify-center items-center gap-2 p-3 border-[1px] border-red rounded-lg">
              <div className="  cursor-pointer w-8 h-8 z-10">
                <Link href="/services/HSETraining-form">
                  <RiAlarmWarningFill size={24} color="#5DBA7F" />
                </Link>
              </div>
              <h3 className="font-semibold text-lg text-primary-5">
                <Link href="/services/HSETraining-form">
                  Emergency-Ready Hospital Partner
                </Link>
              </h3>
              <p className="font-normal text-sm leading-4 text-primary-5">
                <Link href="/services/HSETraining-form">
                  Become an emergency hospital partner , we ai, to leverage
                  existing resources to provide access to quality emergency care
                  .
                </Link>
              </p>
            </div>

            {/*  */}
            <div className=" bg-white text-center flex flex-col justify-center items-center gap-2 p-3  border-[1px] border-red rounded-lg">
              <div className="  cursor-pointer w-8 h-8 z-10">
                <Link href="/services/hearse-form">
                  <Image
                    src="icons/site_training.svg"
                    width={29}
                    height={29}
                    className="py-2 text-white rounded md:block"
                    alt={"site_training"}
                  />
                </Link>
              </div>
              <h3 className="font-semibold text-lg text-primary-5">
                <Link href="/services/hearse-form">Hearse Partner</Link>
              </h3>
              <p className="font-normal text-sm leading-4 text-primary-5">
                <Link href="/services/hearse-form">
                  Become a hearse partner We aim to leverage existing resources
                  to provide access to hearse services.
                </Link>
              </p>
            </div>
          </div>
          <div className="md:w-[50%] -z-0  h-full flex justify-center items-center md:bg-[#5DBA7F] rounded-lg relative">
            <div className="hidden md:absolute w-32 h-32 bottom-10  md:flex justify-center items-center bg-white rounded-full -right-20 ">
              <div className="w-[50%] h-[50%] bg-[#5DBA7F] rounded-full"></div>
            </div>
          </div>

          <div className="md:w-[50%] z-20 h-full flex justify-center overflow-hidden items-center  relative">
            <div className="hidden md:block md:absolute w-32 h-32 top-10 bg-[#5DBA7F] rounded-full -right-20"></div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default BecomeApartner;
