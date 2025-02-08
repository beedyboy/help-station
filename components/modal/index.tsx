"use client";

import { useModal } from "@/context/ModalContext";
import Image from "next/image";
import React, { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
  width?: number;
}

const Modal = ({ children, width = 895 }: ModalProps) => {
  const { isOpen, closeModal } = useModal();

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-30"
      onClick={closeModal}
    >
      {/* Overflow should not be hidden because of drop down  */}
      <div
        className="flex justify-center flex-col gap-4 items-center  relative z-50 w-[350px] md:h-[470px] h-auto bg-white p-6 md:p-0 rounded-lg md:shadow-lg"
        style={{ width: `${width}px` }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="md:absolute flex justify-end items-end top-4 right-6 cursor-pointer md:w-8 w-full h-8 z-10">
          <Image
            src="/icons/close_round.svg"
            width={29}
            height={29}
            onClick={closeModal}
            className="py-2 text-white rounded md:block"
            alt="Close modal"
            aria-label="Close modal"
          />
        </div>
        <div className=" w-full h-full flex justify-center items-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
