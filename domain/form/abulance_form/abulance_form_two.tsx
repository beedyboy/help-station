"use client";

import InputTemplate from "@/components/input";
import RadioInputTemplate from "@/components/input/radio";
import { AmbulanceProps } from "@/constants/types";

function AmbulanceFormTwo({
  ambulanceInput,
  handleChange,
}: {
  ambulanceInput: AmbulanceProps;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="w-full ">
      <form
        action=""
        className="flex md:flex-row flex-col  gap-3 md:gap-16 items-start"
      >
        <div className="w-full flex flex-col gap-3 md:w-[50%] ">
          <div>
            <InputTemplate
              type="text"
              labelName="Availability (24/7, specific hours)"
              name="avalability"
              value={ambulanceInput.avalability}
              onchange={handleChange}
              placeholder="Enter availability"
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-3 md:w-[50%]">
          <div className="flex flex-col justify-start gap-3 md:h-[200px]">
            <p className="md:text-lg text-base font-semibold leading-6 md:leading-7">
              HEFAMAA Accreditation
            </p>
            <RadioInputTemplate
              labelName="No"
              name="HEFAMAAAccreditation"
              value={ambulanceInput.HEFAMAAAccreditation ? "true" : "false"}
              onchange={handleChange}
            />
            <RadioInputTemplate
              labelName="Yes"
              name="HEFAMAAAccreditation"
              value={ambulanceInput.HEFAMAAAccreditation ? "true" : "false"}
              onchange={handleChange}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default AmbulanceFormTwo;
