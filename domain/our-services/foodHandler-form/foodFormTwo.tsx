import { FoodHandlerFormProps } from "@/app/services/foodhandler-form/page";
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
        className="flex md:flex-row md:justify-start flex-col  gap-3 md:gap-16 items-start"
      >
        <div className="w-full flex flex-col gap-5 md:w-[50%] ">
          <div>
            <InputTemplate
              value={formInput.email}
              labelName="If location is onsite, kindly provide the address"
              name="email"
              onchange={onchange}
              placeholder="Enter email"
              type="date"
            />
          </div>
          <div>
            <InputTemplate
              value={formInput.email}
              labelName="Preferred Test Time"
              name="traineesNumber"
              onchange={onchange}
              placeholder="Enter prefferred test time"
              type="text"
            />
          </div>

          <div className="flex flex-col justify-start gap-5 md:h-[200px]">
            <p className="md:text-lg text-base font-semibold leading-6 md:leading-7">
              What is your preferred mode of communication for follow-up?
            </p>
            <RadioInputTemplate
              labelName="Email"
              name="standByAmbulance"
              value={formInput.email}
              onchange={onchange}
            />
            <RadioInputTemplate
              labelName="Call/Text"
              name=""
              value={formInput.email}
              onchange={onchange}
            />
          </div>
        </div>

        {/*  */}
        <div className="w-full flex flex-col md:w-[50%] gap-5">
          <div>
            <InputTemplate
              value={formInput.email}
              labelName=" Preferred Test Date "
              name="trainingTime"
              onchange={onchange}
              placeholder="Enter preffered test date"
              type="text"
            />
          </div>

          <div className="flex flex-col justify-start gap-5 ">
            <p className="md:text-lg text-base font-semibold leading-6 md:leading-7">
              Would you be interested in a food safety training for your staff?
            </p>
            <RadioInputTemplate
              labelName="Yes"
              name="standByAmbulance"
              value={formInput.email}
              onchange={onchange}
            />
            <RadioInputTemplate
              labelName="No"
              name=""
              value={formInput.email}
              onchange={onchange}
            />
          </div>

          <div className="md:h-[200px]">
            <InputTemplate
              value={formInput.email}
              labelName=" Additional comment or note"
              name="preferredLocation"
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
