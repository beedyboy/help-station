"use client";

import FormTemplate from "@/components/formTemplate";
import FirstAidFormOne from "@/domain/our-services/firstAid-form/aidFormOne";
import React, { useState } from "react";

export type FirstAidProps = {
  email: string;
  clientOrCompanyName: string;
  phoneNumber: number;
  preferredLocation: string;
  preferredTraining: string;
  onSiteAddress: string;
};

const FirstAidForm = () => {
  const [firstAid, setFirstAid] = useState<FirstAidProps>({
    clientOrCompanyName: "",
    email: "",
    phoneNumber: 234,
    preferredLocation: "on-Site",
    preferredTraining: "on-site",
    onSiteAddress: "",
  });

  const handleFirstAid = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    return setFirstAid((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="w-full flex justify-center items-center">
      <div className="md:w-[90%] w-full p-4 md:p-0">
        <FormTemplate
          componentOne={
            <FirstAidFormOne
              firstAidForm={firstAid}
              onchange={handleFirstAid}
            />
          }
          componentTwo={<div>Form Two</div>}
          bg="#FFEBE4"
          heading="Request Form For First Aid Training "
          headingText="Thank you for choosing HelpStation for your First Aid Training. Our comprehensive training program cover sessential First Aid, CPR, and AED skills."
          formHeading="First Aid Training "
          formText="Be more than just a bystander"
        />
      </div>
    </div>
  );
};

export default FirstAidForm;
