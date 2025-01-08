"use client";
import FormTemplate from "@/components/formTemplate";
import { HSETrainingProps } from "@/constants/types";
import HSEFormOne from "@/domain/our-services/HSETraining-form/HSEFormOne";
import HSEFormTwo from "@/domain/our-services/HSETraining-form/HSEFormTwo";
import React, { useState } from "react";

function HSETrainingForm({}) {
  const [input, setInput] = useState<HSETrainingProps>({
    email: "",
    phoneNumber: "",
    cleintOrCompanyName: " ",
    prefferredLocation: "No",
    specificHSETraining: {
      specialHSELevel1_AwardHealthAndSafety: "No",
      specialHSELevel2_RiskAssessmentPractical: "No",
      specialHSELevel3_AwardEnvironmentalManagement: "No",
      specialfireSafetyAwarenessPrinciples: "No",
      specialHSEforConstructionSiteWorkers: "No",
      specialHSEforConstructionSiteManagers: "No",
      specialHSECompetence: "No",
      specialHIRA: "No",
      specialFSH: "No",
      specialofficeSafety: "No",
    },
    locationAddress: "",
    firstTimeCourseOrRefresherCourse: {
      firstTimeCourse: "No",
      refresherCourse: "No",
      bothCourse: "No",
    },
    modeOfCommunication: "Yes",
    preferredDate: new Date(),
    preferredTime: "",
    otherInformation: "",
  });

  const handleHSETraining = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "modeOfCommunication") {
      return setInput((prev) => ({
        ...prev,
        modeOfCommunication: input.modeOfCommunication === "Yes" ? "No" : "Yes",
      }));
    }

    if (name === "prefferredLocation") {
      return setInput((prev) => ({
        ...prev,
        prefferredLocation: input.prefferredLocation === "Yes" ? "No" : "Yes",
      }));
    }

    if (name.includes("Course")) {
      if (name === "firstTimeCourse") {
        return setInput((prev) => ({
          ...prev,
          firstTimeCourseOrRefresherCourse: {
            ...prev.firstTimeCourseOrRefresherCourse,
            firstTimeCourse: "Yes",
            refresherCourse: "No",
            bothCourse: "No",
          },
        }));
      } else if (name === "refresherCourse") {
        return setInput((prev) => ({
          ...prev,
          firstTimeCourseOrRefresherCourse: {
            ...prev.firstTimeCourseOrRefresherCourse,
            firstTimeCourse: "No",
            refresherCourse: "Yes",
            bothCourse: "No",
          },
        }));
      } else {
        return setInput((prev) => ({
          ...prev,
          firstTimeCourseOrRefresherCourse: {
            ...prev.firstTimeCourseOrRefresherCourse,
            firstTimeCourse: "No",
            refresherCourse: "No",
            bothCourse: "Yes",
          },
        }));
      }
    }

    if (name.includes("special")) {
      return setInput((prev) => ({
        ...prev,
        specificHSETraining: {
          ...prev.specificHSETraining,
          [name]:
            input.specificHSETraining[
              name as keyof typeof input.specificHSETraining
            ] === "Yes"
              ? "No"
              : "Yes",
        },
      }));
    }

    return setInput((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-full flex justify-center items-ce nter">
      <div className="md:w-[90%] w-full p-4 md:p-0">
        <FormTemplate
          componentOne={
            <HSEFormOne formInput={input} onchange={handleHSETraining} />
          }
          componentTwo={
            <HSEFormTwo formInput={input} onchange={handleHSETraining} />
          }
          handleSubmit={() => console.log(input)}
          bg="#E7F7EB"
          heading="Request Form For HSE Training"
          headingText="Thank you for choosing HelpStation for your HSE (Health, Safety and Environment) Training."
          formHeading="HSE "
          formText="Discover a new level of preparedness with Helpstation"
        />
      </div>
    </div>
  );
}

export default HSETrainingForm;
