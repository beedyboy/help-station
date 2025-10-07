"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";

type FormTemplateProps = {
  componentOne: React.ReactNode;
  componentTwo: React.ReactNode;
  bg?: string;
  heading?: string;
  headingText?: string;
  formHeading?: string;
  formText?: string;
  status?: boolean | string;
  handleSubmit: () => void;
};

const FormTemplate: React.FC<FormTemplateProps> = ({
  componentOne,
  status,
  componentTwo,
  bg = "#ffffff",
  heading,
  headingText,
  formHeading,
  formText,
  handleSubmit,
}) => {
  const [view, setView] = useState<number>(1);
  const router = useRouter();
  const year = new Date().getFullYear();
  return (
    <div className="flex flex-col gap-4 w-full pb-5 z-40 ">
      {/* Header Section */}
      <div className="flex flex-col gap-2 md:gap-4 md:py-10">
        <div
          className="cursor-pointer"
          onClick={() => {
            if (
              document.referrer &&
              document.referrer.includes(window.location.origin)
            ) {
              router.back();
            } else {
              router.back();
            }
          }}
        >
          <IoIosArrowRoundBack size={34} />
        </div>
        <div className="w-full gap-2 flex flex-col items-center md:justify-center">
          <div className=" md:w-[70%] md:text-center flex justify-center items-center flex-col">
            {heading && (
              <h3 className="md:text-[48px] text-[28px] font-bold">
                {heading}
              </h3>
            )}
            <div className="md:w-[65%]">
              {headingText && (
                <p className=" text-xs md:text-sm text-gray-500">
                  {headingText}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Form Area */}
      <div className="shadow-[0px_40px_70px_0px_rgba(176,183,195,0.22)] border-[1px] border-[#CCCEDB] rounded-md z-10 bg-white">
        {/* Step Indicator */}
        <div className="flex flex-col justify-between items-center w-full">
          <div className="md:px-6 md:py-4 p-2 flex justify-between items-center w-full">
            <p className="font-normal md:text-lg text-sm leading-6 md:leading-7">
              Step {view} of 2
            </p>
            <div className="flex gap-2">
              <div className="border-[2px]  border-[#3BAD6B] w-6 h-1 rounded"></div>
              <div
                className={`border-[2px] w-6 h-1 rounded ${
                  view === 2 ? "border-[#3BAD6B]" : "border-[#CCCEDB]"
                }`}
              ></div>
            </div>
          </div>

          {/*Bg-heading  */}

          <div
            className="border-[1px] border-[#CCCEDB] md:px-6 md:py-4 p-2 w-full"
            style={{ backgroundColor: bg }}
          >
            <p className="font-semibold md:text-xl md:leading-7 leading-6 text-base">
              {formHeading}
            </p>
            <p className="md:text-base text-xs leading-6 font-normal  ">
              {formText}
            </p>
          </div>
        </div>

        {/* Content Area */}
        <div className={`md:px-6 md:py-10 px-2 py-4`}>
          {view === 1 ? componentOne : componentTwo}
        </div>
      </div>

      {/* Navigation Button */}
      <div className="w-full flex justify-between items-center">
        <button
          onClick={() => setView((prev) => (prev === 1 ? 2 : 1))}
          className={`self-start w-[150px] md:px-6 py-2 p-2 ${
            view === 2
              ? "bg-[#fff] border-[1px] text-[#3BAD6B] border-[#3BAD6B]"
              : " bg-[#3BAD6B] text-[#fff] "
          }  shadow-md rounded-lg `}
        >
          {view === 1 ? "Next" : "Previous"}
        </button>
        {view === 2 ? (
          <button
            type="submit"
            onClick={() => handleSubmit()}
            className={`w-[150px] self-end md:px-6 py-2 p-2 bg-[#3BAD6B] text-white rounded-lg shadow-md `}
          >
            {status ? "Sending" : "Submit"}
          </button>
        ) : null}
      </div>

      <div className=" text-[#70727F] text-[14px] font-normal flex flex-col md:flex-row md:justify-between w-full mt-10 justify-start gap-4  md:items-center">
        <p>© Help Station {year}</p>
        <div className="flex items-center gap-2">
          <MdOutlineMail color="#70727F" />
          <p>info@helpstation.ng</p>
        </div>
      </div>
    </div>
  );
};

export default FormTemplate;
