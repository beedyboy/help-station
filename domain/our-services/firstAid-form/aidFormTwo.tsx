import { FirstAidProps } from "@/app/services/firstaid-form/page";
import InputTemplate from "@/components/input";
import RadioInputTemplate from "@/components/input/radio";

type FirstAidFormProps = {
  firstAidForm: FirstAidProps;
  onchange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function FirstAidFormTwo({ firstAidForm, onchange }: FirstAidFormProps) {
  return (
    <div className="w-full">
      <form
        action=""
        className="flex md:flex-row md:justify-start flex-col  gap-3 md:gap-16 items-start"
      >
        <div className="w-full flex flex-col gap-5 md:w-[50%] ">
          <div>
            <InputTemplate
              value={firstAidForm.trainingDate}
              labelName="Preferred Training DateEmail Address"
              name="email"
              onchange={onchange}
              type="date"
            />
          </div>
          <div>
            <InputTemplate
              value={firstAidForm.traineesNumber}
              labelName="Proposed number of Trainees"
              name="traineesNumber"
              onchange={onchange}
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
              value={firstAidForm.preferredTraining}
              onchange={onchange}
            />
            <RadioInputTemplate
              labelName="Phone"
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
              value={firstAidForm.trainingTime}
              labelName=" Preferred Training Time "
              name="trainingTime"
              onchange={onchange}
              type="text"
            />
          </div>

          <div className="flex flex-col justify-start gap-5 ">
            <p className="md:text-lg text-base font-semibold leading-6 md:leading-7">
              Is this training a first time course or a refresher course?*
            </p>
            <RadioInputTemplate
              labelName="First time"
              name="standByAmbulance"
              value={firstAidForm.preferredTraining}
              onchange={onchange}
            />
            <RadioInputTemplate
              labelName="Refresh Course"
              name=""
              value={firstAidForm.preferredTraining}
              onchange={onchange}
            />
            <RadioInputTemplate
              labelName="Both First time and Refresher"
              name=""
              value={firstAidForm.preferredTraining}
              onchange={onchange}
            />
          </div>

          <div className="md:h-[200px]">
            <InputTemplate
              value={firstAidForm.preferredLocation}
              labelName=" If it's a refresher course when was the last training conducted"
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

export default FirstAidFormTwo;
