import InputTemplate from "@/components/input";
import { HearseProps } from "@/constants/types";

function HearseFormTwo({
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
              placeholder="Enter availability...."
              labelName="availability (24/7, specific hours)"
              name="availability"
              value={hearseInput.availability}
              onchange={handleChange}
            />
          </div>

          <div>
            <InputTemplate
              type="text"
              labelName="Insurance Details"
              placeholder="Enter insurance details"
              name="insuranceDetails"
              value={hearseInput.insuranceDetails}
              onchange={handleChange}
            />
          </div>

          <div>
            <InputTemplate
              type="text"
              placeholder="Enter current contanta with funeral homes"
              labelName="Current Contracts with Funeral Homes/Organizations"
              name="contractWithFuneralHomes"
              value={hearseInput.contractWithFuneralHomes}
              onchange={handleChange}
            />
          </div>
        </div>

        {/*  */}
        <div className="w-full flex flex-col  md:w-[50%] gap-4">
          <div>
            <InputTemplate
              type="text"
              placeholder="Enter existing certificate and accreditation"
              labelName="Existing  Certification and Accreditation "
              name="certificationAndAccreditation"
              value={hearseInput.certificationAndAccreditation}
              onchange={handleChange}
            />
          </div>

          <div>
            <InputTemplate
              type="text"
              placeholder="Enter years of experience"
              labelName="Years Of Experience  In Ambulance "
              name="yearsOfExperienceInAmbulance"
              value={hearseInput.yearsOfExperienceInAmbulance}
              onchange={handleChange}
            />
          </div>

          <div>
            <InputTemplate
              type="text"
              placeholder="Enter any addition service offered"
              labelName="Any Addition Services Offered (Mortuary services , body transport )"
              name="additionServicesOffered"
              value={hearseInput.additionServicesOffered}
              onchange={handleChange}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default HearseFormTwo;
