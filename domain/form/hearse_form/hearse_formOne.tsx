import InputTemplate from "@/components/input";
import { HearseProps } from "@/constants/types";

function HearseFormOne({
  hearseInput,
  handleChange,
}: {
  hearseInput: HearseProps;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="w-full">
      <form
        action=""
        className="flex md:flex-row flex-col  gap-4 md:gap-16 items-start"
      >
        <div className="w-full flex flex-col gap-4 md:w-[50%] ">
          <div>
            <InputTemplate
              type="text"
              placeholder="Enter company name"
              labelName="Company Name"
              name="companyName"
              value={hearseInput.companyName}
              onchange={handleChange}
            />
          </div>

          <div>
            <InputTemplate
              type="email"
              labelName="Contact Email"
              placeholder="Enter contact email"
              name="contactEmail"
              value={hearseInput.contactEmail}
              onchange={handleChange}
            />
          </div>

          <div>
            <InputTemplate
              type="text"
              labelName="Website"
              placeholder="Enter website"
              name="website"
              value={hearseInput.website}
              onchange={handleChange}
            />
          </div>

          <div>
            <InputTemplate
              type="text"
              labelName="Type Of Hearse ( Stand, Custom, Area)"
              placeholder="Enter type of hearse"
              name="typeOfHearse"
              value={hearseInput.typeOfHearse}
              onchange={handleChange}
            />
          </div>
        </div>

        {/*  */}
        <div className="w-full flex flex-col  md:w-[50%] gap-4">
          <div>
            <InputTemplate
              type="text"
              labelName="Contact Person Name"
              placeholder="Enter contact person name"
              name="contactPersonName"
              value={hearseInput.contactPersonName}
              onchange={handleChange}
            />
          </div>

          <div>
            <InputTemplate
              type="text"
              labelName="Contact Phone Number"
              placeholder="Enter contact phone number"
              name="contactPhoneNumber"
              value={hearseInput.contactPhoneNumber}
              onchange={handleChange}
            />
          </div>

          <div>
            <InputTemplate
              type="text"
              labelName="Number Of Hearse"
              placeholder="Enter number of hearse"
              name="numberOfHearse"
              value={hearseInput.numberOfHearse}
              onchange={handleChange}
            />
          </div>

          <div>
            <InputTemplate
              type="text"
              labelName="Geographic Coverage Area"
              placeholder="Enter geographic coverage"
              name="geographicCoverageArea"
              value={hearseInput.geographicCoverageArea}
              onchange={handleChange}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default HearseFormOne;
