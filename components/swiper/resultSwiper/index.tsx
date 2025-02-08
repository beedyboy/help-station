"use client";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

import { useRef } from "react";
import Link from "next/link";

const results = [
  {
    id: 1,
    text: "Hey, based on your responses, you are rated low risk for 'Your Health and You' section. ",
    text2:
      "Well done! Continue your routine checks to maintain your status and subscribe to our Ambucycle Service to fully cover your risks.",
  },
  {
    id: 2,
    text: "Hey, based on your responses, you are rated medium risk for 'Your lifestyle choices' section. Be more intentional about your habits. Start by speaking with a professional and subscribing to our Ambucycle Service.",
  },
  {
    id: 3,
    text: "Hey, based on your responses, you are rated high risk for 'Your diet and fitness' section. It's time to take action and make better health choices!",
  },
];

export default function ResultsSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full  mx-auto flex flex-col gap-8  mt-10">
      <div className=" px-8 flex md:flex-row flex-col md:justify-center md:items-center gap-10 md:gap-7">
        <p className="text-xl font-semibold ">FINAL RESULTS</p>

        {/* button */}
        <div className="flex items-center gap-2">
          <div
            className=" flex justify-center items-center  w-[56px] h-[56px] border-[1px] border-[#C6C8D3] rounded-full scroll-smooth no-scrollbar hover:bg-gray-300 z-10"
            onClick={scrollLeft}
          >
            <FaArrowLeft className="w-5 h-5" />
          </div>

          <div
            className=" flex justify-center items-center  w-[56px] h-[56px] border-[1px] border-[#C6C8D3] rounded-full hover:bg-gray-300 z-10"
            onClick={scrollRight}
          >
            <FaArrowRight className="w-5 h-5" />
          </div>
        </div>
      </div>

      <div className="relative flex items-center">
        <div
          ref={scrollRef}
          className="flex flex-col md:flex-row md:space-x-4 md:overflow-x-auto scroll-smooth no-scrollbar w-full px-8 gap-3"
        >
          {results.map((result) => (
            <div
              key={result.id}
              className="w-full md:max-w-[960px] shadow-md flex flex-col justify-center items-center p-6 bg-white rounded-lg flex-shrink-0 border-[#D9EFE5] border-[1px]"
            >
              <p className="text-[#383A47] font-bold md:text-[32px] text-[24px] ">
                {result.text}
              </p>
              <p className="text-[#383A47] font-bold md:text-[32px] text-[24px] ">
                {result?.text2}
              </p>
            </div>
          ))}
        </div>
      </div>
      <p className="mt-4 text-sm text-gray-600 text-center">
        Click{" "}
        <Link href="/herat/leaderboard" className="text-green-600 underline">
          here
        </Link>{" "}
        to view your metrics.
      </p>
    </div>
  );
}
