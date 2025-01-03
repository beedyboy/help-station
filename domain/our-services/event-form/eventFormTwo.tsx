import InputTemplate from "@/components/input";
import RadioInputTemplate from "@/components/input/radio";
import { EventProps } from "@/constants/types";
import React from "react";

function EventFormTwo({
  eventForm,
  handleChange,
}: {
  eventForm: EventProps;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className=" w-full">
      <form
        action=""
        className="flex md:flex-row flex-col gap-3 md:gap-16 items-center"
      >
        <div className="w-full flex flex-col justify-start gap-3 md:w-[50%] ">
          <div>
            <InputTemplate
              labelName="Event Duration (e.g 10am-10pm)"
              name="eventDuration"
              type="text"
              value={eventForm.eventDuration}
              onchange={handleChange}
            />
          </div>

          <div>
            <InputTemplate
              labelName="How many days is your event? "
              name="eventDays"
              type="number"
              value={eventForm.eventDays}
              onchange={handleChange}
            />
          </div>
          <div className="flex flex-col justify-start gap-3 md:h-[200px]">
            <p className="md:text-lg text-base font-semibold leading-6 md:leading-7">
              Type of services required
            </p>
            <RadioInputTemplate
              labelName="Ambulance on standby"
              name="standByAmbulance"
              value={eventForm.standByAmbulance}
              onchange={handleChange}
            />
            <RadioInputTemplate
              labelName="Paramedic on standby"
              name="standByParamedic"
              value={eventForm.standByParamedic}
              onchange={handleChange}
            />
          </div>
        </div>

        <div className="w-full flex flex-col justify-start  md:w-[50%] gap-3">
          <div>
            <InputTemplate
              labelName="Number of Ambulance/Paramedic required "
              name="NumberOfAmbulanceParamedic"
              type="number"
              value={eventForm.NumberOfAmbulanceParamedic}
              onchange={handleChange}
            />
          </div>

          <InputTemplate
            labelName="Any other information"
            name="otherInformation"
            type="text"
            value={eventForm.otherInformation}
            onchange={handleChange}
          />

          <div className="flex flex-col justify-start gap-3 md:h-[200px]">
            <p className="md:text-lg text-base font-semibold leading-6 md:leading-7">
              Do you need an extra nurse / doctor / paramedic.
            </p>
            <RadioInputTemplate
              labelName="Yes"
              name="standByAmbulance"
              value={eventForm.standByAmbulance}
              onchange={handleChange}
            />
            <RadioInputTemplate
              labelName="No"
              name="standByAmbulance"
              value={eventForm.standByAmbulance}
              onchange={handleChange}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default EventFormTwo;
