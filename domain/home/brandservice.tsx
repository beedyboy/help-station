import Image from "next/image";
import helpServiceImg from "@/public/help-station-service-image.svg";
import ButtonGroup from "@/components/button/índex";
import HealthCare from "@/components/icons/healthcare";
function BrandService() {
  return (
    <div className="md:h-[600px] flex flex-col gap-3 md:flex-row items-center">
      <div className="md:w-[50%] flex justify-center items-center">
        <Image
          src={helpServiceImg}
          alt=""
          width={450}
          height={450}
          style={{ width: "450px", height: "450px" }}
        />
      </div>

      <div className="md:w-[50%] flex gap-2 flex-col">
        <div className="bg-[#EFF0F5] rounded-full md:w-[60px] md:h-[60px] flex justify-center items-center ">
          <div className="flex justify-center items-center w-[60%] h-[60%] rounded-full p-2 bg-btnColor">
            <HealthCare size={24} />
          </div>
        </div>
        <p className="font-bold md:text-4xl leading-9">Our Services</p>
        <div>
          <p>
            Building safe spaces that are emergency ready is what drives us.
            With our range of services, we provide 360 cover for families,
            individuals and corporates. 
          </p>
          <p className="py-3">Visit our services page to learn more.</p>
        </div>
        <ButtonGroup
          bgColor="#3BAD6B"
          borderColor="#3BAD6B"
          width="158px"
          paddingX="10px"
          paddingY="5px"
        >
          <p className="text-white">Services</p>
        </ButtonGroup>
      </div>
    </div>
  );
}

export default BrandService;
