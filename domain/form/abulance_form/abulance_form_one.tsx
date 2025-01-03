import InputTemplate from "@/components/input";
import { AmbulanceProps } from "@/constants/types";

function AmbulanceFormOne({
  ambulanceInput,
  handleChange,
}: {
  ambulanceInput: AmbulanceProps;
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
              value={ambulanceInput.companyName}
              onchange={handleChange}
              placeholder="Enter company name"
            />
          </div>

          <div>
            <InputTemplate
              type="email"
              labelName="Contact Email"
              name="contactEmail"
              value={ambulanceInput.contactEmail}
              onchange={handleChange}
              placeholder="Enter contact email"
            />
          </div>

          <div>
            <InputTemplate
              type="number"
              labelName="CAC Registration No."
              name="CACRegistrationNumber"
              value={ambulanceInput.CACRegistrationNumber}
              onchange={handleChange}
              placeholder="Enter CAC Registration number"
            />
          </div>

          <div>
            <InputTemplate
              type="text"
              labelName="Type Of Ambulance (Basic Life Support, Advanced Life Support, etc.)"
              name="typeOfAmbulance"
              value={ambulanceInput.typeOfAmbulance}
              onchange={handleChange}
              placeholder="Enter type of ambulance"
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
              value={ambulanceInput.contactPersonName}
              onchange={handleChange}
              placeholder="Enter contact person name"
            />
          </div>

          <div>
            <InputTemplate
              type="number"
              labelName="Contact Phone Number"
              name="contactPhoneNumber"
              value={ambulanceInput.contactPhoneNumber}
              onchange={handleChange}
              placeholder="Enter contact phone number"
            />
          </div>

          <div>
            <InputTemplate
              type="number"
              labelName="Number Of Ambulance"
              name="numberOfAmbulance"
              value={ambulanceInput.numberOfAmbulance}
              onchange={handleChange}
              placeholder="Enter number of ambulance"
            />
          </div>

          <div>
            <InputTemplate
              type="text"
              placeholder="Enter location"
              labelName="Location"
              name="location"
              value={ambulanceInput.location}
              onchange={handleChange}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default AmbulanceFormOne;
