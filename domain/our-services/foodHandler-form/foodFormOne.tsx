import { FoodHandlerFormProps } from "@/constants/types";
import InputTemplate from "@/components/input";
import RadioInputTemplate from "@/components/input/radio";

type FoodHandleFormOneProps = {
  formInput: FoodHandlerFormProps;
  onchange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function FoodHandlerFormOne({ formInput, onchange }: FoodHandleFormOneProps) {
  return (
    <div className="w-full">
      <form
        action=""
        className="flex md:flex-row md:justify-start flex-col  gap-8 md:gap-16 items-start"
      >
        <div className="w-full flex flex-col gap-8 md:w-[50%] ">
          <div>
            <InputTemplate
              value={formInput.email}
              labelName="Email Address"
              name="email"
              onchange={onchange}
              placeholder="Enter email"
              type="text"
            />
          </div>
          <div>
            <InputTemplate
              value={formInput.phoneNumber}
              labelName="Phone Number"
              name="phoneNumber"
              onchange={onchange}
              placeholder="Enter phone number"
              type="text"
            />
          </div>

          {/*  */}
          <div className="flex flex-col justify-start gap-4 ">
            <p className="md:text-lg text-base font-semibold leading-6 md:leading-7">
              What specific tests are you interested in? (Please select all
              options you are interested in)
            </p>
            <div className="grid grid-cols-2 justify-between items-center">
              <RadioInputTemplate
                labelName="HIV"
                name="HIVTest"
                value={formInput.testsinterestedIn.HIVTest}
                onchange={onchange}
              />
              <RadioInputTemplate
                labelName="Pregnancy Test"
                name="PregnancyTest"
                value={formInput.testsinterestedIn.PregnancyTest}
                onchange={onchange}
              />
              <RadioInputTemplate
                labelName="Hepatitis B"
                name="HepatitisBTest"
                value={formInput.testsinterestedIn.HepatitisBTest}
                onchange={onchange}
              />
              <RadioInputTemplate
                labelName="Urinalysis"
                name="UrinalysisTest"
                value={formInput.testsinterestedIn.UrinalysisTest}
                onchange={onchange}
              />
              <RadioInputTemplate
                labelName="Hepatitis C"
                name="HepatitisCTest"
                value={formInput.testsinterestedIn.HepatitisCTest}
                onchange={onchange}
              />
              <RadioInputTemplate
                labelName="Widal Test"
                name="WidalTest"
                value={formInput.testsinterestedIn.WidalTest}
                onchange={onchange}
              />
              <RadioInputTemplate
                labelName="Serum Tuberculosis"
                name="SerumTuberculosisTest"
                value={formInput.testsinterestedIn.SerumTuberculosisTest}
                onchange={onchange}
              />
              <RadioInputTemplate
                labelName="Stool Analysis"
                name="StoolAnalysisTest"
                value={formInput.testsinterestedIn.StoolAnalysisTest}
                onchange={onchange}
              />
            </div>
          </div>
          {/*  */}
        </div>

        {/*  */}
        <div className="w-full flex flex-col md:w-[50%] gap-8">
          <div>
            <InputTemplate
              value={formInput.clientOrcompanyName}
              labelName=" Name of the client/company "
              name="clientOrCompanyName"
              onchange={onchange}
              placeholder="Enter client or company name"
              type="text"
            />
          </div>

          <div className="">
            <InputTemplate
              value={formInput.numberOfIndividualsTakingFoodHandlers}
              labelName="How many individuals need to take the Food Handlers Test?"
              name="numberOfIndividualsTakingFoodHandlers"
              onchange={onchange}
              placeholder="Enter prefferred location"
              type="text"
            />
          </div>

          <div className="flex flex-col justify-start gap-4 md:h-[200px]">
            <p className="md:text-lg text-base font-semibold leading-6 md:leading-7">
              Preferred Location for Test
            </p>
            <div className="grid grid-col-2 gap-2">
              <RadioInputTemplate
                labelName="Collect Sample at clients’ location"
                name="clientsLocation"
                value={
                  formInput.preferredLocation.clientsLocation === "Yes"
                    ? "Yes"
                    : "No"
                }
                onchange={onchange}
              />
              <RadioInputTemplate
                labelName="Medical Laboratory recommended by HELP Station"
                name="recommendedByHELPStation"
                value={
                  formInput.preferredLocation.recommendedByHELPStation === "Yes"
                    ? "Yes"
                    : "No"
                }
                onchange={onchange}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FoodHandlerFormOne;
