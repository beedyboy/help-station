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
    </div>
  );
};
