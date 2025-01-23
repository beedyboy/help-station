"use client";

import Modal from "@/components/modal";
import Image from "next/image";
import { useModal } from "@/context/ModalContext";
import OurService from "@/domain/our-services";

function Service() {
  const { openModal } = useModal();

  return (
    <>
      <OurService openModal={() => openModal()} />

      <Modal>
        <div className="w-full flex md:gap-0 gap-5  md:flex-row flex-col h-[100%] bg-white rounded-2xl shadow relative">
          <div className="md:w-[50%] -z-0  h-full flex justify-center items-center md:bg-[#5DBA7F] rounded-lg  border-[1px] border-[#70727F] relative">
            <div className="md:w-[74%] bg-white text-center flex flex-col justify-center items-center gap-2 p-6 md:h-[50%] border-[1px] border-red rounded-lg">
              <div className="  cursor-pointer w-8 h-8 z-10">
                <Image
                  src="icons/site_training.svg"
                  width={29}
                  height={29}
                  className="py-2 text-white rounded md:block"
                  alt={"site_training"}
                />
              </div>
              <h3 className="font-semibold text-lg text-primary-5">
                Onsite Training
              </h3>
              <p className="font-normal text-sm leading-4 text-[#70727F]">
                Roll your sleeves and get hands-on with life-saving skills like
                CPR and AED use in our high-impact, on-site training. Learn from
                the best, and gain real-world experience that empowers you to
                act fast when it matters most. Step up, take action, and be the
                hero when every second counts.
              </p>
            </div>
            <div className="hidden md:absolute w-32 h-32 bottom-10  md:flex justify-center items-center bg-white rounded-full -right-20 ">
              <div className="w-[50%] h-[50%] bg-[#5DBA7F] rounded-full"></div>
            </div>
          </div>

          <div className="md:w-[50%] z-50 h-full flex justify-center items-center  relative">
            <div className="md:w-[74%] text-center flex flex-col justify-center items-center gap-2 p-6 md:h-[50%] border-[1px] border-[#70727F] rounded-lg">
              <div className="  cursor-pointer w-8 h-8 z-10">
                <Image
                  src="icons/world_wide.svg"
                  width={29}
                  height={29}
                  className="py-2 text-white rounded md:block"
                  alt={"site_training"}
                />
              </div>
              <h3 className="font-semibold text-lg text-primary-5">
                Digital Training
              </h3>
              <p className="font-normal text-sm leading-4 text-[#70727F]">
                Learn at your own pace with our comprehensive digital training.
                Whether you’re at home or on the go, access critical knowledge,
                quizzes, and real-world scenarios. Our on-demand courses provide
                the flexibility to build life-saving skills on your terms.
                Prepare for emergencies anytime, anywhere.
              </p>
            </div>

            <div className="hidden md:block md:absolute w-32 h-32 top-10 bg-[#5DBA7F] rounded-full -right-20"></div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Service;
