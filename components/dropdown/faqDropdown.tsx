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
      <div className="flex justify-between ">
        <p className="md:font-semibold font-bold  md:text-[18px] text-sm md:leading-10 leading-5 ">
          {question}
        </p>
        <div
          className="w-[20px] h-[20px] bg-primary-4 rounded-full  flex justify-center items-center"
          onClick={() => onClick(id)}
        >
          {isOpen ? (
            <IoIosArrowDown color="white" size={15} />
          ) : (
            <IoIosArrowUp color="white" size={15} />
          )}
        </div>
      </div>

      {isOpen ? (
        <p className="md:text-base text-xs leading-6 py-2 font-normal">
          {answer}:{" "}
        </p>
      ) : null}
    </div>
  );
}

export default FAQDropdown;
