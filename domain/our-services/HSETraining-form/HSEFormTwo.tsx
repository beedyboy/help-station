import { HSETrainingProps } from "@/constants/types";
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
              value={formInput.locationAddress}
              labelName="If location is on site kindly provide the address"
              name="locationAddress"
              onchange={onchange}
              placeholder="Enter Location"
              type="text"
            />
          </div>
          <div className="flex flex-col justify-start gap-5 md:h-[200px]">
            <p className="md:text-lg text-base font-semibold leading-6 md:leading-7">
              Is this training a first time course or a refresher course?
            </p>
            <RadioInputTemplate
              labelName="First Time"
              name="firstTimeCourse"
              value={
                formInput.firstTimeCourseOrRefresherCourse.firstTimeCourse ===
                "Yes"
                  ? "Yes"
                  : "NO"
              }
              onchange={onchange}
            />
            <RadioInputTemplate
              labelName="Refresher Course"
              name="refresherCourse"
              value={
                formInput.firstTimeCourseOrRefresherCourse.refresherCourse ===
                "Yes"
                  ? "Yes"
                  : "NO"
              }
              onchange={onchange}
            />

            <RadioInputTemplate
              labelName="Both First time and Refresher"
              name="bothCourse"
              value={
                formInput.firstTimeCourseOrRefresherCourse.bothCourse === "Yes"
                  ? "Yes"
                  : "NO"
              }
              onchange={onchange}
            />
          </div>

          <div className="flex flex-col justify-start gap-5 md:h-[200px]">
            <p className="md:text-lg text-base font-semibold leading-6 md:leading-7">
              What is your preferred mode of communication for follow-up?
            </p>
            <RadioInputTemplate
              labelName="Email"
              name="modeOfCommunication"
              value={formInput.modeOfCommunication === "Yes" ? "Yes" : "NO"}
              onchange={onchange}
            />
            <RadioInputTemplate
              labelName="Call/Text"
              name="modeOfCommunication"
              value={formInput.modeOfCommunication === "Yes" ? "No" : "Yes"}
              onchange={onchange}
            />
          </div>
        </div>

        {/*  */}
        <div className="w-full flex flex-col md:w-[50%] gap-5">
          <div>
            <InputTemplate
              value={formInput.preferredDate.toLocaleDateString()}
              labelName=" Preferred Date"
              name="preferredDate"
              onchange={onchange}
              placeholder="Enter preferred date"
              type="date"
            />
          </div>

          <div className="">
            <InputTemplate
              value={formInput.preferredTime}
              labelName="Preferred Time"
              name="preferredTime"
              onchange={onchange}
              placeholder="Enter preferred time"
              type="text"
            />
          </div>

          <div className="md:h-[200px]">
            <InputTemplate
              value={formInput.otherInformation}
              labelName="Any other information"
              name="otherInformation"
              onchange={onchange}
              placeholder="Enter any other information"
              type="text"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default HSEFormTwo;
