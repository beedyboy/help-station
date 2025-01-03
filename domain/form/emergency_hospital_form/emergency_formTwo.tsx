import InputTemplate from "@/components/input";
import { EmergencyHositalProps } from "@/constants/types";
import RadioInputTemplate from "@/components/input/radio";

function EmergencyFormTwo({
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
              labelName="Location"
              name="location"
              value={emergencyInput.location}
              onchange={handleChange}
              placeholder="Enter location"
            />
          </div>

          <div className="flex flex-col justify-start gap-3 md:h-[200px]">
            <p className="md:text-lg text-base font-semibold leading-6 md:leading-7">
              Other Location(s)
            </p>
            <RadioInputTemplate
              labelName="Yes"
              name="standByAmbulance"
              value={emergencyInput.otherLocation}
              onchange={handleChange}
            />
            <RadioInputTemplate
              labelName="Paramedic on standby"
              name="standByParamedic"
              value={!emergencyInput.otherLocation}
              onchange={handleChange}
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
          <div className="flex flex-col justify-start gap-3 md:h-[200px]">
            <p className="md:text-lg text-base font-semibold leading-6 md:leading-7">
              HEFAMAA Accreditation
            </p>
            <RadioInputTemplate
              labelName="Yes"
              name="standByAmbulance"
              value={emergencyInput.otherLocation}
              onchange={handleChange}
            />
            <RadioInputTemplate
              labelName="Paramedic on standby"
              name="standByParamedic"
              value={!emergencyInput.otherLocation}
              onchange={handleChange}
            />
          </div>

          <div className="w-full flex flex-col  md:w-[50%] gap-3">
            <div className="flex flex-col justify-start gap-3 md:h-[200px]">
              <p className="md:text-lg text-base font-semibold leading-6 md:leading-7">
                Check all that applies to your facility
              </p>
              <RadioInputTemplate
                labelName="Operating Theatre"
                name="OperatingTheatre"
                value={emergencyInput.checkfacility.operatingTheatre}
                onchange={handleChange}
              />
              <RadioInputTemplate
                labelName="Intensive Care Unit"
                name="intensiveCareUnit"
                value={emergencyInput.checkfacility.intensiveCareUnit}
                onchange={handleChange}
              />
              <RadioInputTemplate
                labelName="High Dependency Unit"
                name="standByParamedic"
                value={emergencyInput.checkfacility.highDependencyUnit}
                onchange={handleChange}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EmergencyFormTwo;
