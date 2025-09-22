"use client";
import { useState } from "react";
import { IoIosCall } from "react-icons/io";
import { AiOutlineInbox } from "react-icons/ai";
import { RiSendPlaneFill } from "react-icons/ri";
import { LuMapPin } from "react-icons/lu";
import Image from "next/image";
import getInTouchImg from "@/public/images/help_station_get_in_touch.svg";
import aboutImg from "@/public/images/help_station_about.svg";
import MapEmbed from "@/components/map";
const contactInfo = [
  {
    icon: <IoIosCall size={24} fill="white" color="white" />,
    heading: "Call Centre  (24/7)",
    description: "09132000013 or 09132000014",
    otherText: "",
    //  "+2349132000014",
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
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    message: "",
    email: "",
  });

  const [status, setStatus] = useState<boolean>(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setStatus(true);
    try {
      const payload = {
        name: `${form.firstName} ${form.lastName}`,
        email: form.email,
        message: form.message,
      };
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setStatus(false);
        setForm({ firstName: "", lastName: "", email: "", message: "" });
      } else {
        setStatus(result.message || "Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      setStatus(false);
    }
  };

  return (
    <main className="w-full flex justify-center flex-col md:gap-12 items-center ">
      <section className="relative h-[400px] flex justify-center items-center w-full">
        <div className="absolute inset-0 top-0 left-0 right-0 bottom-0 w-full h-[400px]">
          <Image
            src={aboutImg}
            alt="contact_us"
            style={{
              width: "100%",
              background: "#3BAD6B",
              objectFit: "contain",
              height: "400px",
            }}
          />
        </div>

        <div className="z-10 md:w-[55%] w-[90%] text-white text-center flex justify-center items-center flex-col gap-2  md:gap-3">
          <h2 className="leading-10 pb-3 md:pb-0 font-bold font-br-firma md:text-6xl text-[32px] md:leading-[80px]">
            Contact Us
          </h2>
          <div className="flex text-center flex-col gap-3 md:w-[95%]">
            <p className="md:text-[20px] md:leading-[30px] font-normal text-base leading-6">
              Our dedicated team are available to assist you. Whether you have
              questions, need support, or simply want to chat, we&apos;re here
              for you 24/7.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full gap-4 md:gap-8 flex justify-center items-center">
        <div className="md:w-[80%] text-center flex justify-center flex-col items-center">
          <div className="flex flex-col py-4 ">
            <p className="md:text-lg  md:leading-[30px] text-base text-primary-6 font-semibold leaidng-6">
              Stay In Touch With Us
            </p>
            <h3 className="font-bold text-[28px] leading-[35px] px-2 md:px-0 md:text-[32px] md:leading-10 text-[#1B1C20]">
              We&apos;d love to hear from you
            </h3>
          </div>

          <div className="flex flex-col md:flex-row py-4 gap-3 w-[80%] md:w-full">
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
                <h4 className="text-neutral-1 md:text-2xl font-semibold leading-[30px] text-xl">
                  {info.heading}
                </h4>
                <p className="text-base  font-normal leading-6">
                  {info.description}
                </p>
                <p className="text-base font-normal leading-6">
                  {info.otherText === "info@helpstation.ng" ? (
                    <span className="font-bold">{info.otherText}</span>
                  ) : (
                    info.otherText
                  )}
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
            {/* <p className="text-primary-6 md:text-lg font-semibold md:leading-[30px] text-base leading-6">
              Contact us
            </p> */}
            <h3 className="text-primary-5 font-br-firma font-semibold md:text-[32px] md:leading-10 text-2xl leading-[30px]">
              Get in touch
            </h3>
            <p className="text-neutral-3 font-normal leading-6 text-base">
              We’d love to hear from you. Please fill out this form.
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center gap-3 py-2"
            >
              <div className="flex w-full items-center gap-7">
                <div className="flex flex-col gap-2 w-[50%]">
                  <label className="text-base font-semibold leading-6 text-primary-5">
                    First name
                  </label>
                  <input
                    className="w-full p-2 text-sm placeholder:text-[#CCCEDB] outline-none border-[1px] border-[#CCCEDB] rounded-lg"
                    placeholder="First name"
                    name="firstName"
                    onChange={handleChange}
                    value={form.firstName}
                  />
                </div>
                <div className="flex flex-col gap-2 w-[50%]">
                  <label className="text-base font-semibold leading-6 text-primary-5">
                    Last name
                  </label>
                  <input
                    className="w-full p-2 text-sm placeholder:text-[#CCCEDB] outline-none border-[1px] border-[#CCCEDB] rounded-lg"
                    placeholder="Last name"
                    name="lastName"
                    onChange={handleChange}
                    value={form.lastName}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 w-full">
                <label className="text-base font-semibold leading-6 text-primary-5">
                  Email
                </label>
                <input
                  className="w-full p-2 text-sm placeholder:text-[#CCCEDB] outline-none border-[1px] border-[#CCCEDB] rounded-lg"
                  placeholder="you@company.com"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col gap-2 w-full">
                <label className="text-base font-semibold leading-6 text-primary-5">
                  Message
                </label>
                <textarea
                  className="w-full h-[128px] p-2 text-sm placeholder:text-[#CCCEDB] outline-none border-[1px] border-[#CCCEDB] rounded-lg"
                  placeholder=""
                  value={form.message}
                  name="message"
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="w-[100%]">
                <button
                  type="submit"
                  disabled={status}
                  className=" w-[100%] bg-primary-4 p-4 rounded-lg text-white text-center"
                >
                  <div className="flex  justify-center items-center gap-1">
                    <span className="">
                      <RiSendPlaneFill size={20} color="#fff" />
                    </span>
                    <p> {status ? "Sending..." : "Submit"}</p>
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className=" flex justify-center flex-col items-center">
        <div className="md:w-[70%] p-4  md:p-0 text-center gap-2 md:gap-3 flex flex-col justify-center items-center">
          <p className="text-primary-6 leading-6 text-base md:text-lg md:leading-[30px] font-semibold">
            Location Map
          </p>
          <h3 className="text-[#1B1C20] font-br-firma text-[24px] md:leading-[40px] text-2xl leading-[30px] font-bold md:text-[32px]">
            Find Us On Google Map
          </h3>
          <p className="text-[#70727F] p-2 md:p-0 font-normal text-base">
            Easily locate us by using the Google Maps. Get directions and see
            our exact location to visit us conveniently.
          </p>
        </div>
      </section>

      <div className="w-[100%]">
        <MapEmbed />
      </div>
      <div className="w-full p-1"></div>
    </main>
  );
}

export default ContactUsPage;
