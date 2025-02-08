import { HSETrainingProps } from "@/constants/types";
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
        <div className="w-full flex flex-col gap-8 md:w-[50%] ">
          <div>
            <InputTemplate
              value={formInput.cleintOrCompanyName}
              labelName="Name of the client/company "
              name="cleintOrCompanyName"
              onchange={onchange}
              placeholder="Enter name of client or company"
              type="text"
            />
          </div>

          <div>
            <InputTemplate
              value={formInput.email}
              labelName="Email Address"
              name="email"
              onchange={onchange}
              placeholder="Enter email address"
              type="text"
            />
          </div>

          <div>
            <InputTemplate
              value={formInput.phoneNumber}
              labelName="Phone Number "
              name="phoneNumber"
              onchange={onchange}
              placeholder="Enter phone number (+234)"
              type="text"
            />
          </div>

          <div className="flex flex-col justify-start gap-4 ">
            <p className="md:text-lg text-base font-semibold leading-6 md:leading-7">
              Preferred Location for Training
            </p>
            <RadioInputTemplate
              labelName="Onsite (Client's recommendation)"
              name="prefferredLocation"
              value={formInput.prefferredLocation === "Yes" ? "Yes" : "NO"}
              onchange={onchange}
            />
            <RadioInputTemplate
              labelName="Venue recommended by HelpStation"
              name="prefferredLocation"
              value={formInput.prefferredLocation === "Yes" ? "No" : "Yes"}
              onchange={onchange}
            />
          </div>
        </div>

        {/*  */}
        <div className="w-full flex flex-col md:w-[50%] gap-8">
          <div className="flex flex-col justify-start gap-4 ">
            <p className="md:text-lg text-base font-semibold leading-6 md:leading-7">
              What specific HSE Training(s) are you interested in? (Please
              select all options you are interested in)
            </p>
            <RadioInputTemplate
              labelName="HSE Level 1 - Award in Health and Safety at work"
              name="specialHSELevel1_AwardHealthAndSafety"
              value={
                formInput.specificHSETraining
                  .specialHSELevel1_AwardHealthAndSafety === "Yes"
                  ? "Yes"
                  : "NO"
              }
              onchange={onchange}
            />

            <RadioInputTemplate
              labelName="HSE Level 2 - Risk Assessment Practical Application"
              name="specialHSELevel2_RiskAssessmentPractical"
              value={
                formInput.specificHSETraining
                  .specialHSELevel2_RiskAssessmentPractical === "Yes"
                  ? "Yes"
                  : "NO"
              }
              onchange={onchange}
            />

            <RadioInputTemplate
              labelName="HSE Level 3 - Award in Environmental Management"
              name="specialHSELevel3_AwardEnvironmentalManagement"
              value={
                formInput.specificHSETraining
                  .specialHSELevel3_AwardEnvironmentalManagement === "Yes"
                  ? "Yes"
                  : "NO"
              }
              onchange={onchange}
            />

            <RadioInputTemplate
              labelName="Fire Safety Awareness and Principles Course"
              name="specialfireSafetyAwarenessPrinciples"
              value={
                formInput.specificHSETraining
                  .specialfireSafetyAwarenessPrinciples === "Yes"
                  ? "Yes"
                  : "NO"
              }
              onchange={onchange}
            />

            <RadioInputTemplate
              labelName="HSE for Construction Site Workers"
              name="specialHSEforConstructionSiteWorkers"
              value={
                formInput.specificHSETraining
                  .specialHSEforConstructionSiteWorkers === "Yes"
                  ? "Yes"
                  : "NO"
              }
              onchange={onchange}
            />

            <RadioInputTemplate
              labelName="HSE for Construction Site Managers"
              name="specialHSEforConstructionSiteManagers"
              value={
                formInput.specificHSETraining
                  .specialHSEforConstructionSiteManagers
              }
              onchange={onchange}
            />

            <RadioInputTemplate
              labelName="Health Safety & Environmental Competence Course"
              name="specialHSECompetence"
              value={formInput.specificHSETraining.specialHSECompetence}
              onchange={onchange}
            />

            <RadioInputTemplate
              labelName="Hazard Identification & risk Assessment (HIRA) Course"
              name="specialHIRA"
              value={formInput.specificHSETraining.specialHIRA}
              onchange={onchange}
            />

            <RadioInputTemplate
              labelName="Food Safety & Hygiene Course"
              name=" specialFSH"
              value={formInput.specificHSETraining.specialFSH}
              onchange={onchange}
            />

            <RadioInputTemplate
              labelName="Office Safety Course"
              name="specialofficeSafety"
              value={formInput.specificHSETraining.specialofficeSafety}
              onchange={onchange}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default HSEFormOne;
