import Image from "next/image";
import Link from "next/link";
import helpEmergencyImg from "@/public/images/help-station-emergency.svg";
import { FaStarOfLife } from "react-icons/fa6";
import ButtonGroup from "@/components/button/índex";

function BrandEmergencyAssessment() {
  return (
    <div className="md:h-[600px] flex flex-col md:justify-between gap-3 md:flex-row items-center">
      <div className="md:w-[50%] flex gap-2 flex-col">
        <div className="bg-[#EFF0F5] rounded-full w-[60px] h-[60px] flex justify-center items-center ">
          <div className="flex justify-center items-center w-[60%] h-[60%] rounded-full p-2 bg-btnColor">
            <FaStarOfLife color="#fff" size={24} />
          </div>
        </div>
        <p className="font-bold md:text-[48px] font-br-firma md:leading-[60px]  text-neutral-1 text-[32px]  leading-10">
          Health Emergency Risk Assessment
        </p>

        <p className="text-base md:text-lg md:leading-[30px] leading-6 text-neutral-1">
          Emergencies strike unannounced, catching us off guard when we least
          expect them. Having insights to our health status and how our
          lifestyle predisposes us to medical emergencies helps us make informed
          decisions on safeguarding ourselves and our loved ones against life
          eventualities.
        </p>

        <p className="py-3 text-base md:text-lg md:leading-[30px] leading-6 text-[#DA2750]">
          Know your risk status.
        </p>
        <Link href="/herat">
          <ButtonGroup
            bgColor="#3BAD6B"
            borderColor="#3BAD6B"
            width="198px"
            paddingX="10px"
            paddingY="5px"
          >
            <p className="text-white text-base md:text-[17px] px-2 leading-6  ">
              Take The Survey Now
            </p>
          </ButtonGroup>
        </Link>
      </div>

      <div className="md:w-[45%] lg:w-[400] w-full h-[350px] md:h-[400px] flex justify-center items-center">
        <Image
          src={helpEmergencyImg}
          alt=""
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
}

export default BrandEmergencyAssessment;
