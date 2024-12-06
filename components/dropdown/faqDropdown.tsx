import React from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
function FAQDropdown({
  id,
  question,
  answer,
  isOpen,
  onClick,
}: {
  id: number;
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: (id: number) => void;
}) {
  return (
    <div className="bg-[#F9F9FC] border-[0.5px] border-[#CCCEDB] w-full p-4 flex flex-col rounded-lg">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-[18px] leading-10 ">{question}</p>
        <div
          className="w-[24px] h-[24px] bg-primary-4 rounded-full  flex justify-center items-center"
          onClick={() => onClick(id)}
        >
          {isOpen ? (
            <IoIosArrowDown color="white" size={18} />
          ) : (
            <IoIosArrowUp color="white" size={18} />
          )}
        </div>
      </div>

      {isOpen ? (
        <p className="text-base leading-6 font-normal">{answer}: </p>
      ) : null}
    </div>
  );
}

export default FAQDropdown;
