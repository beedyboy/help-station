"use cleint";
import Image from "next/image";
import React from "react";
import { FaWalking } from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";
import { MdCleanHands } from "react-icons/md";
import cupIcon from "@/public/icons/cupIcon.svg";
import ProgressBar from "@/components/progressBar";

const metricsOne = [
  {
    score: 0,
    bg: "#E8E9ED",
    text: "Spend 1 hour doing exercise",
    icon: <FaWalking size={24} />,
  },
  {
    text: "Regular health check up",
    bg: "#D3D9F1B2",
    score: 0,
    icon: <MdHealthAndSafety color="#DA2750" size={24} />,
  },
  {
    text: "No alcohol consumption",
    bg: "#C9EDD8B2",
    score: 0,
    icon: <Image src={cupIcon} alt="" width={24} height={24} />,
  },
  {
    text: "Environmental Sanitation",
    bg: "#F9F7D9B2",
    score: 0,
    icon: <MdCleanHands size={24} />,
  },
];
const metricsTwo = [
  {
    score: 0,
    bg: "#E8E9ED",
    text: "Spend 1 hour doing exercise",
    icon: <FaWalking size={24} />,
  },
  {
    text: "Spend 1 hour doing exercise",
    bg: "#E8E9ED",
    score: 0,
    icon: <FaWalking size={24} />,
  },
];

const LeaderBoard: React.FC = () => {
  return (
    <div className="w-full flex flex-col md:p-8 p-4  gap-3 md:gap-8">
      <div>
        <h3 className="md:text-[48px] font-bold text-[34px] md:leading-[60px] leading-10">
          Thank you for completing the survey
        </h3>
        <p className="text-[#797B89] font-semibold py-1 md:text-xl text-xl">
          See .... you could have taken to have achieved a lower score
        </p>
      </div>

      <p className="text-[#383A47] md:text-2xl font-semibold">Your metrics</p>

      <div className="flex md:flex-row flex-col w-[55%] md:w-[full]">
        {/* Metrics one */}

        <div className="flex p-2 md:flex-row flex-col border-b-[1px] md:border-b-0 md:border-r-[1px] border-[#C6C8D3] gap-2">
          {metricsOne.map((metric, i) => (
            <div
              key={i}
              style={{
                background: metric.bg,
              }}
              className={`shadow-md  p-3 rounded-lg w-[166px] h-[135px] flex flex-col gap-5`}
            >
              <div className="flex justify-between items-center">
                <h4 className="font-bold text-[48px] leading-[60px]">
                  {metric.score}
                </h4>
                {metric.icon}
              </div>
              <p className="text-sm leading-4 font-semibold">{metric.text}</p>
            </div>
          ))}
        </div>
        {/* Metrics two */}
        <div className="flex md:flex-row flex-col gap-2 p-2">
          {metricsTwo.map((metric, i) => (
            <div
              key={i}
              style={{
                background: metric.bg,
              }}
              className={`shadow-md p-3 w-[166px] h-[135px] rounded-lg flex flex-col gap-5`}
            >
              <div className="flex justify-between items-center">
                <h4 className="font-bold text-[48px] leading-[60px]">
                  {metric.score}
                </h4>
                {metric.icon}
              </div>
              <p className="text-sm leading-4 font-semibold">{metric.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <p className="text-[#383A47] md:text-2xl font-semibold">
          Your current progress
        </p>
        <p className="text-lg leading-7 font-semibold">Ayomide Gbolahan</p>
        <div className="flex items-center gap-3">
          <ProgressBar width="30" />
          <p className="md:text-sm font-semibold">30%</p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <p className="text-[#383A47] md:text-2xl font-semibold">
          What your progress can look like after the metrics
        </p>
        <p className="text-lg leading-7 font-semibold">Ayomide Gbolahan</p>
        <div className="flex items-center gap-3">
          <ProgressBar width="50" />
          <p className="md:text-sm font-semibold">30%</p>
        </div>
      </div>
    </div>
  );
};

export default LeaderBoard;
