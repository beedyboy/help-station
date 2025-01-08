"use client";
import { useState } from "react";
import FormTemplate from "@/components/formTemplate";
import EmergencyFormOne from "@/domain/form/emergency_hospital_form/emergency_formOne";
import EmergencyFormTwo from "@/domain/form/emergency_hospital_form/emergency_formTwo";
import { EmergencyHositalProps } from "@/constants/types";

function EmergencyForm() {
  const [input, setInput] = useState<EmergencyHositalProps>({
    companyName: "",
    contactEmail: "",
    website: "",
    contactPersonName: "",
    contactPhoneNumber: "",
    address: "",
    location: "",
    otherLocation: "",
    specifyIfAnyOtherLocation: "",
    HEFAMAAAccreditation: "Yes",
    checkfacility: {
      facilityOperatingTheatre: "No",
      facilityIntensiveCareUnit: "No",
      facilityHighDependencyUnit: "No",
    },
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

    if (name.includes("facility")) {
      return setInput((prev) => ({
        ...prev,
        checkfacility: {
          ...prev.checkfacility,
          [name]:
            input.checkfacility[name as keyof typeof input.checkfacility] ===
            "Yes"
              ? "No"
              : "Yes",
        },
      }));
    }

    return setInput((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="w-full flex justify-center  items-center relative">
      <div className="absolute -z-20 h-[100%] bg-[#f5dddf] md:w-[380px] w-[200px] right-0 top-0"></div>
      <div className="absolute -z-10 h-[100%] bg-[#f7bfc2] md:w-[170px] w-[75px] right-12 md:right-[6rem] top-0"></div>
      <div className="md:w-[90%] w-full p-4 md:p-0 ">
        <FormTemplate
          componentOne={
            <EmergencyFormOne
              emergencyInput={input}
              handleChange={handleChange}
            />
          }
          componentTwo={
            <EmergencyFormTwo
              emergencyInput={input}
              handleChange={handleChange}
            />
          }
          handleSubmit={() => console.log(input)}
          bg="#F9F9FC"
          heading="Emergency  Ready Hospital Partner  Form"
          headingText="Thank you for choosing Help Station as an ambulance partner. To streamline the process and ensure we fulfill your requirements accurately"
          formHeading="Emergency Ready Hopital"
          formText="please fill out the following request form."
        />
      </div>
    </div>
  );
}
export default EmergencyForm;
