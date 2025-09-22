"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface ModalContextProps {
  isOpen: boolean;
  openModal: (value: string) => void;
  closeModal: () => void;
  activeModal: string;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeModal, setActiveModal] = useState("modal 1");

  const openModal = (value: string) => {
    setActiveModal(value);
    setIsOpen(true);
  };
  const closeModal = () => setIsOpen(false);

  return (
    <ModalContext.Provider
      value={{ isOpen, openModal, closeModal, activeModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
