import { FoodHandlerFormProps } from "@/constants/types";
import InputTemplate from "@/components/input";
import RadioInputTemplate from "@/components/input/radio";

type FoodHandleFormTwoProps = {
  formInput: FoodHandlerFormProps;
  onchange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function FoodHandlerFormTwo({ formInput, onchange }: FoodHandleFormTwoProps) {
  return (
    <div className="w-full">
      <form
        action=""
        className="flex md:flex-row md:justify-start flex-col  gap-8 md:gap-16 items-start"
      >
        <div className="w-full flex flex-col gap-8 md:w-[50%] ">
          <div>
            <InputTemplate
              value={formInput.locationIsOnsiteProvideAddress}
              labelName="If location is onsite, kindly provide the address"
              name="locationIsOnsiteProvideAddress"
              onchange={onchange}
              placeholder="Provide on site location"
              type="text"
            />
          </div>
          <div>
            <InputTemplate
              value={formInput.preferredTime}
              labelName="Preferred Test Time ( Between 0:00am - 24:00pm )"
              name="preferredTime"
              onchange={onchange}
              placeholder="Enter preferred test time"
              type="text"
            />
          </div>

          <div className="flex flex-col justify-start gap-4 md:h-[200px]">
            <p className="md:text-lg text-base font-semibold leading-6 md:leading-7">
              What is your preferred mode of communication for follow-up?
            </p>
            <RadioInputTemplate
              labelName="Email"
              name="Email/Text"
              value={
                formInput.modeOfCommunicationForFollowUp === "email"
                  ? "Yes"
                  : "No"
              }
              onchange={onchange}
            />
            <RadioInputTemplate
              labelName="Call/Text"
              name="Call/Text"
              value={
                formInput.modeOfCommunicationForFollowUp == "call"
                  ? "Yes"
                  : "No"
              }
              onchange={onchange}
            />
          </div>
        </div>

        {/*  */}
        <div className="w-full flex flex-col md:w-[50%] gap-8">
          <div>
            <InputTemplate
              value={formInput.preferredDate}
              labelName=" Preferred Test Date "
              name="preferredDate"
              onchange={onchange}
              placeholder="Enter preffered test date"
              type="date"
            />
          </div>

          <div className="flex flex-col justify-start gap-4 ">
            <p className="md:text-lg text-base font-semibold leading-6 md:leading-7">
              Would you be interested in a food safety training for your staff?
            </p>
            <RadioInputTemplate
              labelName="Yes"
              name="FSHTraining"
              value={formInput.FSHTraining === "Yes" ? "Yes" : "No"}
              onchange={onchange}
            />
            <RadioInputTemplate
              labelName="No"
              name="FSHTraining"
              value={formInput.FSHTraining === "Yes" ? "No" : "Yes"}
              onchange={onchange}
            />
          </div>

          <div className="md:h-[200px]">
            <InputTemplate
              value={formInput.additionalCommentOrNote}
              labelName=" Additional comment or note"
              name="additionalCommentOrNote"
              onchange={onchange}
              placeholder="Enter additional comment or note"
              type="text"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default FoodHandlerFormTwo;
