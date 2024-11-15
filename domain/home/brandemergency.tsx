import Image from "next/image";
import helpEmergencyImg from "@/public/help-station-emergency.svg";
import { FaStarOfLife } from "react-icons/fa6";
import ButtonGroup from "@/components/button/índex";

function BrandEmergencyAssessment() {
  return (
    <div className="md:h-[600px] flex flex-col gap-3 md:flex-row items-center">
      <div className="md:w-[50%] flex gap-2 flex-col">
        <div className="bg-[#EFF0F5] rounded-full md:w-[60px] md:h-[60px] flex justify-center items-center ">
          <div className="flex justify-center items-center w-[60%] h-[60%] rounded-full p-2 bg-btnColor">
            <FaStarOfLife color="#fff" size={24} />
          </div>
        </div>
        <p className="font-bold md:text-4xl leading-9">
          Health Emergency Risk Assessment
        </p>

        <p>
          Emergencies strike unannounced, catching us off guard when we least
          expect them. Having insights to our health status and how our
          lifestyle predisposes us to medical emergencies helps us make informed
          decisions on safeguarding ourselves and our loved ones against life
          eventualities.
        </p>

        <p className="py-3 text-[#DA2750]">Know your risk status.</p>

        <ButtonGroup
          bgColor="#3BAD6B"
          borderColor="#3BAD6B"
          width="158px"
          paddingX="1p5x"
          paddingY="7px"
        >
          <p className="text-white">Take The Survey Now</p>
        </ButtonGroup>
      </div>

      <div className="md:w-[50%] flex justify-center items-center">
        <Image
          src={helpEmergencyImg}
          alt=""
          width={450}
          height={450}
          style={{ width: "450px", height: "450px" }}
        />
      </div>
    </div>
  );
}

export default BrandEmergencyAssessment;
