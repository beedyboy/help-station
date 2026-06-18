"use client";

import Modal from "@/components/modal";
import { useModal } from "@/context/ModalContext";
import OurService from "@/domain/our-services";
import { TrainingOptionsModal } from "@/components/modals/TrainingOptionsModal";

function Service() {
  const { openModal } = useModal();

  return (
    <>
      <OurService openModal={() => openModal("modal 1")} />

      <Modal>
        <TrainingOptionsModal />
      </Modal>
    </>
  );
}

export default Service;
