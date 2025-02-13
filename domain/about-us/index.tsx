import Image from "next/image";
import aboutImg from "@/public/images/help_station_about.svg";
import ImageTemplate from "@/components/image";
import helpBgImg from "@/public/images/about_background_image.svg";
import helpImg from "@/public/images/help_station_help.svg";
import { MdOutlineAirplanemodeActive } from "react-icons/md";
import { IoMdEye } from "react-icons/io";
import { aboutImages } from "@/constants/about";

function AboutUsPage() {
  return (
    <main className="w-full flex justify-center flex-col md:gap-12 items-center -mt-4 ">
      <section className="relative h-[600px] flex justify-center items-center w-full">
        <div className=" absolute inset-0 top-0 left-0 right-0 bottom-0 w-full h-[600px]">
          <Image
            src={aboutImg}
            alt="about_us"
            style={{
              width: "100%",
              background: "#3BAD6B",
              objectFit: "contain",
              height: "600px",
            }}
          />
        </div>

        <div className="z-10 md:w-[55%] w-[90%] text-white text-center flex justify-center items-center flex-col gap-2  md:gap-3">
          <h4 className="md:text-2xl text-base font-semibold md:leading-7 ">
            About{" "}
          </h4>
          <h2 className="leading-4 pb-3 md:pb-0 font-bold md:text-6xl text-[36px] md:leading-[80px]">
            About Our Company
          </h2>
          <div className="flex text-center flex-col gap-3 md:text-xl text-base font-normal md:leading-7 leading-6">
            <p className="">
              A healthcare logistics company leveraging smart technology to
              provide quality emergency care and creating synergies between the
              various stakeholders in the healthcare ecosystem. The HELP
              platform provides improved access to emergency medical services in
              a timely and efficient manner with affordability options. We also
              provide healthcare navigation services which includes hospital
              mapping and service directory, laboratory and diagnostic center
              inventory and a pharmacy database.{" "}
            </p>
            <p>
              Our management team is deeply invested in sustaining and building
              on the existing emergency services framework. We aim to create
              solutions that will drive quality, improve cross communication and
              provider affordability options.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-[#D7F1DE] w-full flex justify-center items-center ">
        <div className="py-10 w-[80%] text-center text-[#1B1C20] flex flex-col items-center ">
          <h3 className="font-bold  text-5xl leading-[60px] font-br-firma">
            Our Gallery
          </h3>
          <p className="text-lg leading-[30px] font-normal text-[#1B1C20]">
            Explore moments of excellence and dedication captured in our work.
          </p>

          <div className="grid md:grid-cols-3 grid-cols-1 gap-5 py-10 w-full ">
            {aboutImages.map((image, i) => {
              return (
                <div key={i} className="rounded-xl overflow-hidden">
                  <ImageTemplate src={image} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className=" w-full flex justify-center items-center pb-4">
        <div className="md:w-[80%] w-[85%] flex flex-col gap-4 py-10">
          {/*  */}
          <div className="flex W-[100%]   md:flex-row flex-col justify-start gap-3 md:gap-8">
            <div className="md:w-[50%]">
              <h3 className="font-bold text-[30px] leading-10  font-br-firma md:text-5xl md:leading-[60px] ">
                We are focused on making the world a safer place. HELP is on the
                way
              </h3>
            </div>

            {/*  */}
            <div className="md:w-[50%] md:px-5">
              <p className=" text-[#70727F] text-base text-[20px] leading-6 md:leading-[30px] ">
                Here at HELP, we are passionate about easing the bottlenecks
                around medical emergencies. We are creating better access to
                ambulances and more visibility for appropriate health facilities
              </p>
            </div>
          </div>
          {/*  */}

          <div className="flex  md:flex-row flex-col md:justify-between items-center gap-32 md:gap-7 ">
            {/*  */}
            <div className="relative md:w-[40%] flex flex-col gap-5 items-center justity-center mt-7">
              <div className="absolute md:-top-2 left-5 md:left-4 -z-10 bottom-0 border-dashed border-2 border-btnColor h-[200px] "></div>
              <div className="-left-36 flex justify-between gap-5 w-full  ">
                <div className="md:w-7 md:h-7 p-4 w-12 h-12 bg-btnColor flex  justify-center items-center rounded-full">
                  <div className="">
                    <MdOutlineAirplanemodeActive size={24} color="white" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold text-[20px] leading-8 text-[#1B1C20]">
                    Mission
                  </h3>
                  <p>
                    To be the leading healthcare logistic company providing
                    solutions that ensure access to quality healthcare services.
                  </p>
                </div>
              </div>

              <div className="-left-36 flex justify-between gap-5 w-full ">
                <div className="md:w-7 md:h-7 p-4 w-12 h-12 bg-btnColor flex  justify-center items-center rounded-full">
                  <div className="">
                    <IoMdEye size={24} color="white" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold text-[20px] leading-8 text-[#1B1C20]">
                    Vission
                  </h3>
                  <p>
                    To become a one-stop portal for medical services in Africa
                    by 2030.
                  </p>
                </div>
              </div>
            </div>

            {/*  */}
            <div className="md: md:w-[50%] relative flex  flex-col justify-end items-center">
              <div className="absolute right-4 left-0 ">
                <ImageTemplate src={helpBgImg} />
              </div>
              <div className="w-[40%] top md:-top-10 h-[40%]">
                <ImageTemplate src={helpImg} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutUsPage;
