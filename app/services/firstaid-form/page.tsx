"use client";

import FormTemplate from "@/components/formTemplate";
import { FirstAidProps } from "@/constants/types";
import FirstAidFormOne from "@/domain/our-services/firstAid-form/aidFormOne";
import FirstAidFormTwo from "@/domain/our-services/firstAid-form/aidFormTwo";
import React, { useState } from "react";

const FirstAidForm = () => {
  const [input, setInput] = useState<FirstAidProps>({
    clientOrCompanyName: "",
    email: "",
    phoneNumber: "",
    preferredLocation: "",
    firstAidTraining: {
      onsite: "No",
      venueRecommendedByHelpStaion: "No",
    },
    firstAidTrainingRequest: {
      onsiteTraning: "No",
      virtualTraining: "No",
    },
    trainingDate: new Date(),
    trainingTime: "",
    traineesNumber: "",
    modeOfCommunication: "Email",
    firstTimeCourseOrRefresherCourse: {
      firstTimeCourse: "No",
      refresherCourse: "No",
      bothCourse: "No",
    },
    lastTrainingConducted: "",
  });

  const handleFirstAid = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (name === "modeOfCommunication") {
      return setInput((prev) => ({
        ...prev,
        modeOfCommunication:
          input.modeOfCommunication === "Email" ? "Phone" : "Email",
      }));
    }

    if (name === "onsite") {
      return setInput((prev) => ({
        ...prev,
        firstAidTraining: {
          ...prev.firstAidTraining,
          [name]: input.firstAidTraining.onsite === "Yes" ? "No" : "Yes",
          venueRecommendedByHelpStaion: "No",
        },
      }));
    }

    if (name === "venueRecommendedByHelpStaion") {
      return setInput((prev) => ({
        ...prev,
        firstAidTraining: {
          ...prev.firstAidTraining,
          [name]:
            input.firstAidTraining.venueRecommendedByHelpStaion === "Yes"
              ? "No"
              : "Yes",
          onsite: "No",
        },
      }));
    }

    if (name === "OnsiteTraning") {
      return setInput((prev) => ({
        ...prev,
        firstAidTrainingRequest: {
          ...prev.firstAidTrainingRequest,
          [name]:
            input.firstAidTrainingRequest.onsiteTraning === "Yes"
              ? "No"
              : "Yes",
          virtualTraining: "No",
        },
      }));
    }

    if (name === "virtualTraining") {
      return setInput((prev) => ({
        ...prev,
        firstAidTrainingRequest: {
          ...prev.firstAidTrainingRequest,
          onsiteTraning: "No",
          [name]:
            input.firstAidTrainingRequest.virtualTraining === "Yes"
              ? "No"
              : "Yes",
        },
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
    return setInput((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="w-full flex justify-center items-center">
      <div className="md:w-[90%] w-full p-4 md:p-0">
        <FormTemplate
          componentOne={
            <FirstAidFormOne firstAidForm={input} onchange={handleFirstAid} />
          }
          componentTwo={
            <FirstAidFormTwo input={input} onchange={handleFirstAid} />
          }
          handleSubmit={() => console.log(input)}
          bg="#FFEBE4"
          heading="Request Form For First Aid Training "
          headingText="Thank you for choosing HelpStation for your First Aid Training. Our comprehensive training program cover sessential First Aid, CPR, and AED skills."
          formHeading="First Aid Training "
          formText="Be more than just a bystander"
        />
      </div>
    </div>
  );
};

export default FirstAidForm;
