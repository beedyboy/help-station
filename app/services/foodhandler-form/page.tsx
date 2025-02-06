"use client";
import React, { useState } from "react";
import FormTemplate from "@/components/formTemplate";
import { FoodHandlerFormProps } from "@/constants/types";
import FoodHandlerFormOne from "@/domain/our-services/foodHandler-form/foodFormOne";
import FoodHandlerFormTwo from "@/domain/our-services/foodHandler-form/foodFormTwo";

function FoodHandleForm() {
  const [status, setStatus] = useState(false);
  const [input, setInput] = useState<FoodHandlerFormProps>({
    email: "",
    phoneNumber: "",
    testsinterestedIn: {
      HIVTest: "No",
      HepatitisBTest: "No",
      HepatitisCTest: "No",
      SerumTuberculosisTest: "No",
      PregnancyTest: "No",
      UrinalysisTest: "No",
      WidalTest: "No",
      StoolAnalysisTest: "No",
    },
    clientOrcompanyName: "",
    numberOfIndividualsTakingFoodHandlers: "",
    preferredLocation: {
      clientsLocation: "No",
      recommendedByHELPStation: "No",
    },
    locationIsOnsiteProvideAddress: "",
    preferredTime: "",
    modeOfCommunicationForFollowUp: "Call/Text",
    preferredDate: new Date(),
    FSHTraining: "No",
    additionalCommentOrNote: "",
  });

  const handleSubmit = async () => {
    try {
      setStatus(true);
      const response = await fetch("/api/firstaid", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(input),
      });

      const result = await response.json();
      if (!result.success) {
        return new Error(`HTTP error! Status: ${response.status}`);
      }

      setStatus(false);

      return setInput({
        email: "",
        phoneNumber: "",
        testsinterestedIn: {
          HIVTest: "No",
          HepatitisBTest: "No",
          HepatitisCTest: "No",
          SerumTuberculosisTest: "No",
          PregnancyTest: "No",
          UrinalysisTest: "No",
          WidalTest: "No",
          StoolAnalysisTest: "No",
        },
        clientOrcompanyName: "",
        numberOfIndividualsTakingFoodHandlers: "",
        preferredLocation: {
          clientsLocation: "No",
          recommendedByHELPStation: "No",
        },
        locationIsOnsiteProvideAddress: "",
        preferredTime: "",
        modeOfCommunicationForFollowUp: "",
        preferredDate: new Date(),
        FSHTraining: "No",
        additionalCommentOrNote: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus(false);
    }
  };

  const handleFoodHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name.includes("Test")) {
      return setInput((prev) => ({
        ...prev,
        testsinterestedIn: {
          ...prev.testsinterestedIn,
          [name]:
            input.testsinterestedIn[
              name as keyof typeof input.testsinterestedIn
            ] === "Yes"
              ? "No"
              : "Yes",
        },
      }));
    }

    if (name === "FSHTraining") {
      return setInput((prev) => ({
        ...prev,
        FSHTraining: input.FSHTraining === "Yes" ? "No" : "Yes",
      }));
    }

    if (name === "Call/Text") {
      return setInput((prev) => ({
        ...prev,
        modeOfCommunicationForFollowUp: "call",
      }));
    }
    if (name === "Email/Text") {
      return setInput((prev) => ({
        ...prev,
        modeOfCommunicationForFollowUp: "email",
      }));
    }

    if (name === "emailAddress") {
      return setInput((prev) => ({
        ...prev,
        modeOfCommunicationForFollowUp: "Email",
      }));
    }

    if (name === "clientsLocation") {
      return setInput((prev) => ({
        ...prev,
        preferredLocation: {
          ...prev.preferredLocation,
          clientsLocation: "Yes",
          recommendedByHELPStation: "No",
        },
      }));
    }

    if (name === "recommendedByHELPStation") {
      return setInput((prev) => ({
        ...prev,
        preferredLocation: {
          ...prev.preferredLocation,
          clientsLocation: "No",
          recommendedByHELPStation: "Yes",
        },
      }));
    }

    return setInput((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className="md:w-[90%] w-full p-4 md:p-0">
        <FormTemplate
          componentOne={
            <FoodHandlerFormOne
              onchange={handleFoodHandler}
              formInput={input}
            />
          }
          componentTwo={
            <FoodHandlerFormTwo
              onchange={handleFoodHandler}
              formInput={input}
            />
          }
          handleSubmit={() => handleSubmit()}
          status={status}
          bg="#FFF4D2"
          heading="Request Form For Food Handlers Test"
          headingText="Thank you for choosing HelpStation for your Food Handlers Test. To streamline the process and ensure we fulfil your requirements accurately, please fill out the following request form."
          formHeading="Food Handlers’ Screening "
          formText="Be more than just a bystander"
        />
      </div>
    </div>
  );
}

export default FoodHandleForm;
