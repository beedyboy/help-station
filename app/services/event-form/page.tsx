"use client";

import React, { useState } from "react";

import FormTemplate from "@/components/formTemplate";
import EventFormOne from "@/domain/our-services/event-form/event-form-stepOne";
import EventFormTwo from "@/domain/our-services/event-form/event-form-stepTwo";

export type EventProps = {
  email: string;
  phoneNumber: string;
  clientOrCompanyName: string;
  eventType: string;
  eventLocation: string;
  eventDate: "";
  eventCapacity: string;
  eventStart: string;
  eventDuration: string;
  NumberOfAmbulanceParamedic: number;
  eventDays: number;
  otherInformation: string;
  standByAmbulance: string;
  standByParamedic: string;
};

function EventForm() {
  const [eventForm, setEvenForm] = useState<EventProps>({
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
      console.log("EventForm", eventForm);
      return setEvenForm((prev: EventProps) => ({
        ...prev,
        [name]: value == "No" ? "Yes" : "No",
      }));
    }
    return setEvenForm((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="w-full flex justify-center items-center">
      <div className="md:w-[90%] w-full p-4 md:p-0">
        <FormTemplate
          componentOne={
            <EventFormOne eventForm={eventForm} handleChange={handleChange} />
          }
          componentTwo={
            <EventFormTwo eventForm={eventForm} handleChange={handleChange} />
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
