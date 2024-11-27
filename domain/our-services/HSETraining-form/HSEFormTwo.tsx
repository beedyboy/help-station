import { HSETrainingProps } from "@/app/services/HSETraining-form/page";
import InputTemplate from "@/components/input";
import RadioInputTemplate from "@/components/input/radio";

type HSEFormTwoProps = {
  formInput: HSETrainingProps;
  onchange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function HSEFormTwo({ formInput, onchange }: HSEFormTwoProps) {
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
              labelName="If location is on site kindly provide the address"
              name="email"
              onchange={onchange}
              type="text"
            />
          </div>
          <div className="flex flex-col justify-start gap-5 md:h-[200px]">
            <p className="md:text-lg text-base font-semibold leading-6 md:leading-7">
              Is this training a first time course or a refresher course?
            </p>
            <RadioInputTemplate
              labelName="First Time"
              name="standByAmbulance"
              value={formInput.email}
              onchange={onchange}
            />
            <RadioInputTemplate
              labelName="Refresher Course"
              name=""
              value={formInput.email}
              onchange={onchange}
            />

            <RadioInputTemplate
              labelName="Both First time and Refresher"
              name=""
              value={formInput.email}
              onchange={onchange}
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
              labelName=" Preferred Date"
              name="trainingTime"
              onchange={onchange}
              type="date"
            />
          </div>

          <div className="">
            <InputTemplate
              value={formInput.email}
              labelName="Preferred Time"
              name="preferredLocation"
              onchange={onchange}
              type="text"
            />
          </div>

          <div className="md:h-[200px]">
            <InputTemplate
              value={formInput.email}
              labelName="Any other information"
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

export default HSEFormTwo;
