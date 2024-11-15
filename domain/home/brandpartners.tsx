import ButtonGroup from "@/components/button/índex";

function BrandPartners() {
  return (
    <div className="relative py-7 w-full flex justify-center items-center">
      <div className="absolute -z-20 h-[100%] bg-[#e2e3e8] md:w-[380px] left-0 top-0"></div>
      <div className="absolute -z-10 h-[100%] bg-[#d8dae1] md:w-[190px] md:left-[5rem] top-0"></div>

      <div className=" text-center h-[80%] z-10 w-[85%] flex justify-start items-center gap-3 flex-col">
        <div className="bg-[#EFF0F5] rounded-full md:w-[60px] md:h-[60px] flex justify-center items-center ">
          <div className="flex justify-center items-center w-[60%] h-[60%] rounded-full p-2 bg-btnColor">
            {/* <HealthCare size={24} /> */}
          </div>
        </div>
        <h3 className="font-bold md:text-4xl leading-9">
          Partnership for greater impact
        </h3>
        <div className="md:w-[46%] flex flex-col justify-center items-center gap-3">
          <p>At HELP, we are passionate about </p>
          <p className="text-btnColor">
            Saving lives by ensuring that prompt pre-hospital care is available
            to all and reversing the trends of needless deaths due to lack of
            access.
          </p>
        </div>
        <p className="md:w-[74%] text-center">
          We are doing this, one partner at a time, aggregating emergency ready
          hospitals, first responders and ambulance service providers across
          Africa within a tech ecosystem that breaks the silos and improves
          interconnectivity for better patient outcomes. We are constantly
          looking out for equally passionate partners willing to join us in
          creating this future.
        </p>
        <ButtonGroup
          bgColor="#3BAD6B"
          borderColor="#3BAD6B"
          width="158px"
          paddingX="10px"
          paddingY="5px"
        >
          <p className="text-white">Services</p>
        </ButtonGroup>

        <video className="rounded-lg" width="100%" height="300" controls>
          <source src="/video/sample-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default BrandPartners;
