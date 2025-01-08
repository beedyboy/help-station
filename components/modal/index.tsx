"use client";

import { useModal } from "@/context/ModalContext";
import Image from "next/image";
import React, { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
}

const Modal = ({ children }: ModalProps) => {
  const { isOpen, closeModal } = useModal();

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={closeModal}
    >
      <div
        className="flex flex-col md:w-[895px] w-[350px] md:h-[470px] h-auto bg-white p-6 rounded-lg shadow-lg "
        onClick={(e) => e.stopPropagation()}
      >
        <div className="hidden md:flex justify-end items-start gap-6 ml-auto cursor-pointer ">
          <Image
            src="icons/close_round.svg"
            width={29}
            height={29}
            onClick={closeModal}
            className="py-2 text-white rounded"
            alt={"close_modal"}
          />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
