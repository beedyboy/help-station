import ButtonGroup from "@/component/button";
// import SwiperComponent from "@/component/swiper";

function BrandBoard() {
  return (
    <div className="flex w-full gap-4 items-center">
      {/* One */}

      <div className="w-[50%] border-[1px] border-black flex flex-col">
        <h3>happing</h3>
        <p>
          HelpStation is your trusted partner in any medical emergency. We are
          here to provide you with prompt end-to-end emergency care, ensuring
          your safety and peace of mind, always. 
        </p>
        <div className=" flex items-center ">
          <ButtonGroup
            width=""
            borderColor=""
            loading=""
            text=""
            textColor=""
          />
          <ButtonGroup width="" borderColor="" text="" textColor=" " />
        </div>
      </div>

      {/* Two */}
      <div className="w-[50%]">{/* <SwiperComponent /> */}</div>
    </div>
  );
}

export default BrandBoard;
