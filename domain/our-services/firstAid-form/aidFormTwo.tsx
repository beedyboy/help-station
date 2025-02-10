import { FirstAidProps } from "@/constants/types";
import InputTemplate from "@/components/input";
import RadioInputTemplate from "@/components/input/radio";

type FirstAidFormProps = {
  input: FirstAidProps;
  onchange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function FirstAidFormTwo({ input, onchange }: FirstAidFormProps) {
  return (
    <div className="w-full">
      <form
        action=""
        className="flex md:flex-row md:justify-start flex-col  gap-4 md:gap-16 items-start"
      >
        <div className="w-full flex flex-col gap-8 md:w-[50%] ">
          <div>
            <InputTemplate
              value={input.trainingDate}
              labelName="Preferred Training DateEmail Address"
              name="trainingDate"
              onchange={onchange}
              placeholder="Selectt a Date"
              type="date"
            />
          </div>
          <div>
            <InputTemplate
              value={input.traineesNumber}
              labelName="Proposed number of Trainees"
              name="traineesNumber"
              onchange={onchange}
              placeholder="Enter number of trainees"
              type="number"
            />
          </div>

          <div className="flex flex-col justify-start gap-4 md:h-[200px]">
            <p className="md:text-lg text-base font-semibold leading-6 md:leading-7">
              What is your preferred mode of communication for follow-up?
            </p>
            <RadioInputTemplate
              labelName="Email"
              name="modeOfCommunication"
              value={input.modeOfCommunication === "Email" ? "Yes" : "No"}
              onchange={onchange}
            />
            <RadioInputTemplate
              labelName="Phone"
              name="modeOfCommunication"
              value={input.modeOfCommunication === "Email" ? "No" : "Yes"}
              onchange={onchange}
            />
          </div>
        </div>

        {/*  */}
        <div className="w-full flex flex-col md:w-[50%] gap-8">
          <div>
            <InputTemplate
              value={input.trainingTime}
              labelName=" Preferred Training Time "
              name="trainingTime"
              onchange={onchange}
              placeholder="Enter prefferred training time"
              type="text"
            />
          </div>

          <div className="flex flex-col justify-start gap-4 ">
            <p className="md:text-lg text-base font-semibold leading-6 md:leading-7">
              Is this training a first time course or a refresher course?*
            </p>
            <RadioInputTemplate
              labelName="First time"
              name="firstTimeCourse"
              value={
                input.firstTimeCourseOrRefresherCourse.firstTimeCourse === "Yes"
                  ? "Yes"
                  : "No"
              }
              onchange={onchange}
            />
            <RadioInputTemplate
              labelName="Refresh Course"
              name="refresherCourse"
              value={
                input.firstTimeCourseOrRefresherCourse.refresherCourse === "Yes"
                  ? "Yes"
                  : "No"
              }
              onchange={onchange}
            />
            <RadioInputTemplate
              labelName="Both First time and Refresher"
              name="bothCourse"
              value={
                input.firstTimeCourseOrRefresherCourse.bothCourse === "Yes"
                  ? "Yes"
                  : "No"
              }
              onchange={onchange}
            />
          </div>

          <div className="md:h-[200px]">
            <InputTemplate
              value={input.lastTrainingConducted}
              labelName=" If it's a refresher course when was the last training conducted"
              name="lastTrainingConducted"
              onchange={onchange}
              placeholder="When last did you took the training"
              type="text"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default FirstAidFormTwo;
