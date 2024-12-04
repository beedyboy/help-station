import Image from "next/image";
import aboutImg from "@/public/images/help_station_about.svg";
import { IoIosCall } from "react-icons/io";
import { AiOutlineInbox } from "react-icons/ai";
import { LuMapPin } from "react-icons/lu";
import getInTouchImg from "@/public/images/help_station_get_in_touch.svg";
import MapEmbed from "@/components/map";

const contactInfo = [
  {
    icon: <IoIosCall size={24} fill="white" color="white" />,
    heading: "Call Centre  (24/7)",
    description: "+23480123456789",
    otherText: "+23480123456789",
  },
  {
    icon: <AiOutlineInbox color="white" size={24} fill="white" />,
    heading: "Email",
    description: "Our friendly team is here to help.",
    otherText: "info@helpstation.ng",
  },
  {
    icon: <LuMapPin color="white" size={24} />,
    heading: "Office Hours",
    description: "Monday to Friday: 8am to 10pm",
    otherText: "",
  },
];

function ContactUsPage() {
  return (
    <main className="w-full flex justify-center flex-col md:gap-12 items-center ">
      <section className="relative h-[400px] flex justify-center items-center w-[100%]">
        <div className="absolute inset-0 top-0 left-0 right-0 bottom-0 w-full h-[400px]">
          <Image
            src={aboutImg}
            alt="about_us"
            style={{
              width: "100%",
              background: "#3BAD6B",
              objectFit: "contain",
              height: "400px",
            }}
          />
        </div>

        <div className="z-10 md:w-[55%] w-[90%] text-white text-center flex justify-center items-center flex-col gap-2  md:gap-3">
          <h2 className="leading-4 pb-3 md:pb-0 font-bold md:text-6xl text-[36px] md:leading-[80px]">
            Contact Us
          </h2>
          <div className="flex text-center flex-col gap-3">
            <p>
              Our dedicated team are available to assist you. Whether you have
              questions, need support, or simply want to chat, we&apos;re here
              for you 24/7.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full gap-4 md:gap-8 flex justify-center items-center">
        <div className="md:w-[80%] text-center">
          <p className="text-lg text-primary-6 font-semibold leaidng-8">
            Stay In Touch With Us
          </p>
          <h3 className="font-bold py-2 text-3xl leading-10 text-[#1B1C20]">
            We’d love to hear from you
          </h3>

          <div className="flex flex-col md:flex-row py-4 gap-3">
            {contactInfo.map((info, i) => (
              <div
                key={i}
                className=" w-[100%] h-[216px] md:p-8 p-4 bg-background-7 flex flex-col gap-2 items-center rounded-xl"
              >
                <div className="bg-[#AEDEBC] rounded-full w-[50px] h-[50px] flex justify-center items-center ">
                  <div className="flex justify-center items-center w-[65%] h-[65%] rounded-full p-2 bg-[#3BAD6B]">
                    {info.icon}
                  </div>
                </div>
                <h3 className="text-neutral-1 md:text-2xl font-semibold leading-8 text-xl">
                  {info.heading}
                </h3>
                <p className="text-base font-normal leading-6">
                  {info.description}
                </p>
                <p className="text-base font-normal leading-6">
                  {info.otherText}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className=" bg-background-7 w-full gap-4 flex justify-center items-center">
        <div className="md:w-[80%] w-[90%] gap-5 py-8 flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-[45%] w-full">
            <Image
              src={getInTouchImg}
              alt="connect with us"
              style={{ objectFit: "cover", maxWidth: "100%", height: "100%" }}
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="md:w-[45%] flex flex-col w-full gap-2">
            <p className="text-primary-6 text-base">Contact us</p>
            <h3 className="text-primary-5 font-semibold md:text-3xl">
              Get in touch
            </h3>
            <p className="text-[#70727F] text-base">
              We’d love to hear from you. Please fill out this form.
            </p>
            <form className="flex flex-col items-center gap-3">
              <div className="flex w-full items-center gap-7">
                <div className="flex flex-col gap-2 w-[50%]">
                  <label className="text-base leading-6 text-primary-5">
                    First name
                  </label>
                  <input
                    className="w-full p-2 text-sm placeholder:text-[#CCCEDB] outline-none border-[1px] border-[#CCCEDB] rounded-lg"
                    placeholder="First name"
                  />
                </div>
                <div className="flex flex-col gap-2 w-[50%]">
                  <label className="text-base leading-6 text-primary-5">
                    Last name
                  </label>
                  <input
                    className="w-full p-2 text-sm placeholder:text-[#CCCEDB] outline-none border-[1px] border-[#CCCEDB] rounded-lg"
                    placeholder="Last name"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 w-full">
                <label className="text-base leading-6 text-primary-5">
                  Email
                </label>
                <input
                  className="w-full p-2 text-sm placeholder:text-[#CCCEDB] outline-none border-[1px] border-[#CCCEDB] rounded-lg"
                  placeholder="you@company.com"
                />
              </div>

              <div className="flex flex-col gap-2 w-full">
                <label className="text-base leading-6 text-primary-5">
                  Message
                </label>
                <textarea
                  className="w-full h-[128px] p-2 text-sm placeholder:text-[#CCCEDB] outline-none border-[1px] border-[#CCCEDB] rounded-lg"
                  placeholder=""
                ></textarea>
              </div>

              <div className="w-[100%]">
                <button className=" w-[100%] bg-primary-4 p-4 rounded-lg text-white text-center">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className=" flex justify-center flex-col items-center">
        <div className="md:w-[70%] p-4  md:p-0 text-center gap-2 md:gap-3 flex flex-col justify-center items-center">
          <p className="text-primary-6 text-base">Location Map</p>
          <h3 className="text-primary-5 font-semibold md:text-3xl">
            Find Us On Google Map
          </h3>
          <p className="text-[#70727F] text-base">
            Easily locate us by using the Google Maps. Get directions and see
            our exact location to visit us conveniently.
          </p>
        </div>
      </section>

      <div className="w-[100%]">
        <MapEmbed />
      </div>
      <div className="w-full p-2"></div>
    </main>
  );
}

export default ContactUsPage;
