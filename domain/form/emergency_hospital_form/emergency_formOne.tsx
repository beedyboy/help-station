import InputTemplate from "@/components/input";
import { EmergencyHositalProps } from "@/constants/types";

function EmergencyFormOne({
  emergencyInput,
  handleChange,
}: {
  emergencyInput: EmergencyHositalProps;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="w-full">
      <form
        action=""
        className="flex md:flex-row flex-col  gap-3 md:gap-16 items-start"
      >
        <div className="w-full flex flex-col gap-3 md:w-[50%] ">
          <div>
            <InputTemplate
              type="text"
              labelName="Company Name"
              name="companyName"
              value={emergencyInput.facilityName}
              onchange={handleChange}
              placeholder="Enter comapny name "
            />
          </div>

          <div>
            <InputTemplate
              type="email"
              labelName="Contact Email"
              name="contactEmail"
              value={emergencyInput.contactEmail}
              onchange={handleChange}
              placeholder="Enter contact email"
            />
          </div>

          <div>
            <InputTemplate
              type="text"
              labelName="Website"
              name="website"
              value={emergencyInput.Website}
              onchange={handleChange}
              placeholder="Enter website"
            />
          </div>
        </div>

        {/*  */}
        <div className="w-full flex flex-col  md:w-[50%] gap-3">
          <div>
            <InputTemplate
              type="text"
              labelName="Contact Person Name"
              name="contactPersonName"
              value={emergencyInput.contactPersonName}
              onchange={handleChange}
              placeholder="Enter contact person name"
            />
          </div>

          <div>
            <InputTemplate
              type="text"
              labelName="Contact Phone Number"
              name="contactPhoneNumber"
              value={emergencyInput.contactPhoneNumber}
              onchange={handleChange}
              placeholder="Enter contact person number"
            />
          </div>

          <div>
            <InputTemplate
              type="text"
              labelName="Facility Address"
              name="facilityAddress"
              value={emergencyInput.facilityAddress}
              onchange={handleChange}
              placeholder="Enter facility addresss"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default EmergencyFormOne;
