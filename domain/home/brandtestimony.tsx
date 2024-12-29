import CustomSwiper from "@/components/swiper/testimonySwiper";
import Image from "next/image";
function BrandTestimony() {
  return (
    <div className="flex w-full flex-col items-center justify-center py-8 gap-10">
      <div className="md:w-[70%] flex flex-col  justify-center items-center">
        <div className="flex items-centern justify-center w-full">
          <div className="w-[20%] hidden  md:flex justify-center items-center ">
            <Image
              src="/icons/quote-left.svg"
              alt=""
              width={100}
              height={100}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          {/*  */}
          <div className="flex flex-col item-center text-center w-full md:w-[60%] px-2">
            <p className="md:text-lg font-semibold leading-10 text-primary-4">
              Testimonials
            </p>
            <h3 className="text-[34px] font-bold leading-10">
              Discover What Our <span className="text-primary-4">Clients</span>{" "}
              Have to Say
            </h3>
          </div>

          {/*  */}
          <div className="w-[20%] hidden md:flex justify-center items-center ">
            <Image
              src="/icons/quote-right.svg"
              alt=""
              width={100}
              height={100}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>

        {/*  */}
        <div className="md:hidden flex justify-center items-center ">
          <div className="w-[20%] flex md:hidden justify-center items-center ">
            <Image
              src="/icons/quote-left.svg"
              alt=""
              width={100}
              height={100}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="w-[20%] flex md:hidden justify-center items-center ">
            <Image
              src="/icons/quote-right.svg"
              alt=""
              width={100}
              height={100}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div>

      <CustomSwiper />
    </div>
  );
}

export default BrandTestimony;
