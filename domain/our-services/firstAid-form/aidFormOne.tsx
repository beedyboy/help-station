"use client";

import { FirstAidProps } from "@/app/services/firstaid-form/page";
import InputTemplate from "@/components/input";
import RadioInputTemplate from "@/components/input/radio";

type FirstAidFormProps = {
  firstAidForm: FirstAidProps;
  onchange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function FirstAidFormOne({ firstAidForm, onchange }: FirstAidFormProps) {
  return (
    <div className="w-full">
      <form
        action=""
        className="flex md:flex-row md:justify-start flex-col  gap-3 md:gap-16 items-start"
      >
        <div className="w-full flex flex-col gap-3 md:w-[50%] ">
          <div>
            <InputTemplate
              value={firstAidForm.email}
              labelName="Email Address"
              name="email"
              onchange={onchange}
              type="text"
            />
          </div>
          <div>
            <InputTemplate
              value={firstAidForm.phoneNumber}
              labelName="Phone Number"
              name="phoneNumber"
              onchange={onchange}
              type="text"
            />
          </div>

          <div className="flex flex-col justify-start gap-3 md:h-[200px]">
            <p className="md:text-lg text-base font-semibold leading-6 md:leading-7">
              If Physical, choose your preferred location for training
            </p>
            <RadioInputTemplate
              labelName="On-site  (Client's recommendation)"
              name="standByAmbulance"
              value={firstAidForm.preferredTraining}
              onchange={onchange}
            />
            <RadioInputTemplate
              labelName="Venue recommended by HELP Station"
              name=""
              value={firstAidForm.preferredTraining}
              onchange={onchange}
            />
          </div>
        </div>

        {/*  */}
        <div className="w-full flex flex-col md:w-[50%] gap-3">
          <div>
            <InputTemplate
              value={firstAidForm.clientOrCompanyName}
              labelName=" Name of the client/company "
              name="clientOrCompanyName"
              onchange={onchange}
              type="text"
            />
          </div>

          <div className="flex flex-col justify-start gap-3 ">
            <p className="md:text-lg text-base font-semibold leading-6 md:leading-7">
              Which type of First Aid Training are you requesting?
            </p>
            <RadioInputTemplate
              labelName="On-site"
              name="standByAmbulance"
              value={firstAidForm.preferredTraining}
              onchange={onchange}
            />
            <RadioInputTemplate
              labelName="vitual"
              name=""
              value={firstAidForm.preferredTraining}
              onchange={onchange}
            />
          </div>

          <div className="md:h-[200px]">
            <InputTemplate
              value={firstAidForm.preferredLocation}
              labelName=" If location is onsite, kindly provide the address"
              name="preferredLocation"
              onchange={onchange}
              type="text"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default FirstAidFormOne;
