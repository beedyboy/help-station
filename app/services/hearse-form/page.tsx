"use client";

import { useState } from "react";
import { HearseProps } from "@/constants/types";
import FormTemplate from "@/components/formTemplate";
import HearseFormOne from "@/domain/form/hearse_form/hearse_formOne";
import HearseFormTwo from "@/domain/form/hearse_form/hearse_formTwo";

function HearseForm() {
  const [input, setInput] = useState<HearseProps>({
    companyName: "",
    contactEmail: "",
    website: "",
    contactPersonName: "",
    contactPhoneNumber: "",
    typeOfHearse: "",
    numberOfHearse: "",
    geographicCoverageArea: "",
    availability: "",
    insuranceDetails: "",
    contractWithFuneralHomes: "",
    certificationAndAccreditation: "",
    yearsOfExperienceInAmbulance: "",
    additionServicesOffered: "",
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="w-full flex justify-center  items-center relative">
      <div className="absolute -z-20 h-[100%] bg-[#f5e6c3] md:w-[380px] w-[200px] right-0 top-0"></div>
      <div className="absolute -z-10 h-[100%] bg-[#f9dc99] md:w-[170px] w-[75px] right-12 md:right-[6rem] top-0"></div>
      <div className="md:w-[90%] w-full p-4 md:p-0 ">
        <FormTemplate
          componentOne={
            <HearseFormOne hearseInput={input} handleChange={handleChange} />
          }
          componentTwo={
            <HearseFormTwo hearseInput={input} handleChange={handleChange} />
          }
          bg="#F9F9FC"
          heading="Hearse Partner Form"
          headingText="Thank you for choosing Help Station as an ambulance partner. To streamline the process and ensure we fulfill your requirements accurately, please fill out the following request form."
          formHeading="Hearse"
          formText="Please fill out the following request form."
        />
      </div>
    </div>
  );
}

export default HearseForm;
