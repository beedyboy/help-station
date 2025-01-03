"use client";

import React, { useState } from "react";

import FormTemplate from "@/components/formTemplate";
import EventFormOne from "@/domain/our-services/event-form/eventFormOne";
import EventFormTwo from "@/domain/our-services/event-form/eventFormTwo";
import { EventProps } from "@/constants/types";

function EventForm() {
  const [input, setInput] = useState<EventProps>({
    email: "",
    phoneNumber: "",
    clientOrCompanyName: "",
    eventType: "",
    eventLocation: "",
    eventDate: "",
    eventCapacity: "",
    eventStart: "",
    eventDuration: "",
    NumberOfAmbulanceParamedic: 0,
    eventDays: 0,
    otherInformation: "",
    standByAmbulance: "No",
    standByParamedic: "No",
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;

    if (name === "standByAmbulance") {
      return setInput((prev: EventProps) => ({
        ...prev,
        [name]: value == "No" ? "Yes" : "No",
      }));
    }
    return setInput((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="w-full flex justify-center items-center">
      <div className="md:w-[90%] w-full p-4 md:p-0">
        <FormTemplate
          componentOne={
            <EventFormOne eventForm={input} handleChange={handleChange} />
          }
          componentTwo={
            <EventFormTwo eventForm={input} handleChange={handleChange} />
          }
          bg="#FFEAEA"
          heading="Request Form For Event"
          headingText="When you choose us, you’re not just renting an ambulance; you’re choosing peace of mind."
          formHeading="Emergency Coverage at Event"
          formText="Creating memories with peace of mind, secure that event!"
        />
      </div>
    </div>
  );
}

export default EventForm;
