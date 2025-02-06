"use client";
import FormTemplate from "@/components/formTemplate";
import { AmbulanceProps } from "@/constants/types";
import AmbulanceFormOne from "@/domain/form/abulance_form/abulance_form_one";
import AmbulanceFormTwo from "@/domain/form/abulance_form/abulance_form_two";
import { useState } from "react";

function AmbulanceForm() {
  const [status, setStatus] = useState<boolean>(false);
  const [input, setInput] = useState<AmbulanceProps>({
    companyName: "",
    contactEmail: "",
    CACRegistrationNumber: "",
    typeOfAmbulance: "",
    contactPersonName: "",
    contactPhoneNumber: "",
    location: "",
    avalability: "",
    HEFAMAAAccreditation: "No",
    numberOfAmbulance: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (name === "HEFAMAAAccreditation") {
      return setInput((prev) => ({
        ...prev,
        HEFAMAAAccreditation:
          input.HEFAMAAAccreditation === "Yes" ? "No" : "Yes",
      }));
    }
    return setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    const payload = {
      companyName: input.companyName,
      contactEmail: input.contactEmail,
      CACRegistrationNumber: input.CACRegistrationNumber, // Fixed: Access the correct property
      typeOfAmbulance: input.typeOfAmbulance,
      contactPersonName: input.contactPersonName,
      contactPhoneNumber: input.contactPhoneNumber,
      location: input.location,
      avalability: input.avalability,
      HEFAMAAAccreditation: input.HEFAMAAAccreditation,
      numberOfAmbulance: input.numberOfAmbulance,
    };

    try {
      setStatus(true);

      const response = await fetch("/api/ambulance", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      // Check if the response is OK (status code 200-299)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();

      // Handle the API response
      if (result.success) {
        // Reset form fields on success
        setInput({
          companyName: "",
          contactEmail: "",
          CACRegistrationNumber: "",
          typeOfAmbulance: "",
          contactPersonName: "",
          contactPhoneNumber: "",
          location: "",
          avalability: "",
          HEFAMAAAccreditation: "No",
          numberOfAmbulance: "",
        });

        setStatus(false);
      } else {
        setStatus(result.message || "Failed to send message.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus(false);
    }
  };

  return (
    <div className="w-full flex justify-center  items-center relative">
      <div className="absolute -z-20 h-[100%] bg-[#e1efe6] md:w-[380px] w-[200px] right-0 top-0"></div>
      <div className="absolute -z-10 h-[100%] bg-[#c4d9cc] md:w-[170px] w-[75px] right-12 md:right-[6rem] top-0"></div>
      <div className="md:w-[90%] w-full p-4 md:p-0 ">
        <FormTemplate
          componentOne={
            <AmbulanceFormOne
              ambulanceInput={input}
              handleChange={handleChange}
            />
          }
          componentTwo={
            <AmbulanceFormTwo
              ambulanceInput={input}
              handleChange={handleChange}
            />
          }
          handleSubmit={() => handleSubmit()}
          status={status}
          bg="#F9F9FC"
          heading="Ambulance Partner Form"
          headingText="Thank you for choosing Help Station as an ambulance partner. To streamline the process and ensure we fulfill your requirements accurately, please fill out the following request form."
          formHeading="Ambulance"
          formText="Please fill out the following request form."
        />
      </div>
    </div>
  );
}

export default AmbulanceForm;
