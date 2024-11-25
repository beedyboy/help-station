import { HSETrainingProps } from "@/app/services/HSETraining-form/page";
import InputTemplate from "@/components/input";
import RadioInputTemplate from "@/components/input/radio";

type HSEFormTwoProps = {
  formInput: HSETrainingProps;
  onchange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function HSEFormOne({ formInput, onchange }: HSEFormTwoProps) {
  return (
    <div className="w-full">
      <form
        action=""
        className="flex md:flex-row md:justify-start flex-col  gap-8 md:gap-16 items-start"
      >
        <div className="w-full flex flex-col gap-5 md:w-[50%] ">
          <div>
            <InputTemplate
              value={formInput.email}
              labelName="Name of the client/company "
              name="email"
              onchange={onchange}
              type="text"
            />
          </div>

          <div>
            <InputTemplate
              value={formInput.email}
              labelName="Email Address"
              name="email"
              onchange={onchange}
              type="text"
            />
          </div>

          <div>
            <InputTemplate
              value={formInput.email}
              labelName="Phone Number "
              name="email"
              onchange={onchange}
              type="text"
            />
          </div>

          <div className="flex flex-col justify-start gap-8 ">
            <p className="md:text-lg text-base font-semibold leading-6 md:leading-7">
              Preferred Location for Training
            </p>
            <RadioInputTemplate
              labelName="Onsite (Client's recommendation)"
              name="standByAmbulance"
              value={formInput.email}
              onchange={onchange}
            />
            <RadioInputTemplate
              labelName="Venue recommended by HelpStation"
              name=""
              value={formInput.email}
              onchange={onchange}
            />
          </div>
        </div>

        {/*  */}
        <div className="w-full flex flex-col md:w-[50%] gap-8">
          <div className="flex flex-col justify-start gap-8 ">
            <p className="md:text-lg text-base font-semibold leading-6 md:leading-7">
              What specific HSE Training(s) are you interested in? (Please
              select all options you are interested in)
            </p>
            <RadioInputTemplate
              labelName="HSE Level 1 - Award in Health and Safety at work"
              name="standByAmbulance"
              value={formInput.email}
              onchange={onchange}
            />

            <RadioInputTemplate
              labelName="HSE Level 2 - Risk Assessment Practical Application"
              name=""
              value={formInput.email}
              onchange={onchange}
            />

            <RadioInputTemplate
              labelName="HSE Level 3 - Award in Environmental Management"
              name=""
              value={formInput.email}
              onchange={onchange}
            />

            <RadioInputTemplate
              labelName="Fire Safety Awareness and Principles Course"
              name=""
              value={formInput.email}
              onchange={onchange}
            />

            <RadioInputTemplate
              labelName="HSE for Construction Site Workers"
              name=""
              value={formInput.email}
              onchange={onchange}
            />

            <RadioInputTemplate
              labelName="HSE for Construction Site Managers"
              name=""
              value={formInput.email}
              onchange={onchange}
            />

            <RadioInputTemplate
              labelName="Health Safety & Environmental Competence Course"
              name=""
              value={formInput.email}
              onchange={onchange}
            />

            <RadioInputTemplate
              labelName="Hazard Identification & risk Assessment (HIRA) Course"
              name=""
              value={formInput.email}
              onchange={onchange}
            />

            <RadioInputTemplate
              labelName="Food Safety & Hygiene Course"
              name=""
              value={formInput.email}
              onchange={onchange}
            />

            <RadioInputTemplate
              labelName="Office Safety Course"
              name=""
              value={formInput.email}
              onchange={onchange}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default HSEFormOne;
