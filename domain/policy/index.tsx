"use client";
import Image from "next/image";
import aboutImg from "@/public/images/help_station_about.svg";
import { useState } from "react";
import PrivacyPolicyPage from "./privacy";

function PolicyPage() {
  const [active, setActive] = useState("privacy");

  return (
    <main className="w-full flex-col gap-7 flex justify-center items-center">
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

        <div className="z-10 w-[75%] text-white text-center flex justify-center items-center flex-col gap-2 md:gap-3 ">
          <div className="flex justify-center items-center flex-col w-[70%]">
            <p className="text-base">Privacy Policy</p>
            <h2 className="pb-3 md:pb-0 leading-10 font-bold md:text-5xl text-[36px] md:leading-[80px]">
              We care about your privacy
            </h2>
            <div className="flex text-center flex-col gap-3">
              <p className="font-normal md:text-[16px] leading-6 md:px-6">
                Your privacy is important to us at HELP. We respect your privacy
                regarding any information we may collect from you across our
                website.
              </p>
            </div>
          </div>

          <div className="w-[30%] rounded-lg p-2 my-6  bg-[#EFF0F5] flex justify-center cursor-pointer items-center">
            <p
              onClick={() => setActive("privacy")}
              className={`text-center w-[50%]  text-base leading-6 text-neutral-2 ${
                active === "privacy"
                  ? "bg-white px-5 py-2 font-semibold rounded-lg shadow-sm text-primary-5"
                  : " bg-[#EFF0F5] text-neutral-2"
              } `}
            >
              Privacy Policy
            </p>
            <p
              onClick={() => setActive("security")}
              className={`text-center  w-[50%] text-base leading-6 text-neutral-2 ${
                active === "security"
                  ? "bg-white px-5 font-semibold rounded-lg py-2 shadow-sm  text-primary-5"
                  : " bg-[#EFF0F5] text-[#70727F]"
              } `}
            >
              Security Policy
            </p>
          </div>
        </div>
      </section>

      <section className="lg:w-[60%] md:my-7 w-[90%] flex md:justify-between flex-col md:flex-row gap-20 lg:gap-28 items-center">
        {active == "privacy" ? <PrivacyPolicyPage /> : <div></div>}
      </section>
    </main>
  );
}

export default PolicyPage;
