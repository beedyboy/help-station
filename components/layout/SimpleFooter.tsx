import Image from "next/image";
import React from "react";

export const SimpleFooter = () => {
  return (
    <div className="flex md:flex-row flex-col w-full h-[70px] px-8 pb-8 justify-between items-end font-sans">
      <span className="text-[#797a88] text-sm font-normal">
        © Help Station 2022
      </span>
      <div className="justify-start items-center gap-2 flex">
        <Image src="/icons/mail.svg" alt="Phone" width={20} height={20} />
        <span className="text-[#797a88] text-sm font-normal">
          info@helpstation.ng
        </span>
      </div>

       <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50">
            <a
              href="tel:+2349132000013"
              className="flex justify-center items-center w-14 h-14 rounded-full bg-[#3BAD6B] shadow-lg hover:bg-[#2e9458] transition"
            >
              <Image
                src="icons/call_icon.svg"
                alt="Call Icon"
                width={32}
                height={32}
              />
            </a>
          </div>
    </div>
  );
};
