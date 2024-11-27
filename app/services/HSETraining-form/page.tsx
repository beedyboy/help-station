"use client";
import FormTemplate from "@/components/formTemplate";
import HSEFormOne from "@/domain/our-services/HSETraining-form/HSEFormOne";
import HSEFormTwo from "@/domain/our-services/HSETraining-form/HSEFormTwo";
import React, { useState } from "react";

export type HSETrainingProps = {
  cleintOrCompanyName: string;
  email: string;
  phoneNumber: number;
  prefferredLocation: string;
};

function HSETrainingForm({}) {
  const [input, setInput] = useState<HSETrainingProps>({
    email: "",
    phoneNumber: 234,
    cleintOrCompanyName: "",
    prefferredLocation: "",
  });

  const handleHSETraining = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    return setInput((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-full flex justify-center items-ce nter">
      <div className="md:w-[90%] w-full p-4 md:p-0">
        <FormTemplate
          componentOne={
            <HSEFormOne formInput={input} onchange={handleHSETraining} />
          }
          componentTwo={
            <HSEFormTwo formInput={input} onchange={handleHSETraining} />
          }
          bg="#E7F7EB"
          heading="Request Form For HSE Training"
          headingText="Thank you for choosing HelpStation for your HSE (Health, Safety and Environment) Training."
          formHeading="HSE "
          formText="Discover a new level of preparedness with Helpstation"
        />
      </div>
    </div>
  );
}

export default HSETrainingForm;
