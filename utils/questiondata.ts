import { IQuestion } from "@/constants/types";
import { useState, useEffect } from "react";
import { questionData } from "@/constants/herat";

const LOCAL_STORAGE_KEY = "questionData";

export const useQuestionData = () => {
  const getInitialData = (): IQuestion[] => {
    if (typeof window === "undefined") {
      // If not in a browser environment, return the default questionData
      return questionData;
    }

    const storedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!storedData) {
      // If no data is found in localStorage, return the default questionData
      return questionData;
    }

    try {
      const parsedData: IQuestion[] = JSON.parse(storedData);

      // Convert answerValueCode to functions
      parsedData.forEach((section) => {
        section.questions.forEach((question) => {
          if (typeof question.options[0] === "string") {
            // Convert question.answerValueCode to a function
            if (
              question.answerValue &&
              typeof question.answerValue === "string"
            ) {
              try {
                question.answerValue = new Function(
                  `return ${question.answerValue}`
                )();
              } catch (error) {
                console.error(
                  "Error creating answerValue function for question:",
                  question.id,
                  error
                );
                question.answerValue = () => 0; // Fallback to a default function
              }
            } else {
              console.warn(
                "answerValueCode is missing or invalid for question:",
                question.id
              );
              question.answerValue = () => 0; // Fallback to a default function
            }
          } else if (typeof question.options[0] === "object") {
            // Iterate over each option and convert its answerValueCode to a function
            question.options.forEach((option) => {
              if (
                typeof option === "object" &&
                option.answerValue &&
                typeof option.answerValue === "string"
              ) {
                try {
                  option.answerValue = new Function(
                    "correctAnswer",
                    `return ${option.answerValue}`
                  )();
                } catch (error) {
                  console.error(
                    "Error creating answerValue function for option:",
                    option,
                    error
                  );
                  if (typeof option === "object") {
                    if (typeof option === "object") {
                      if (typeof option === "object") {
                        option.answerValue = () => 0; // Fallback to a default function
                      }
                    }
                  }
                }
              } else {
                console.warn(
                  "answerValueCode is missing or invalid for option:",
                  option
                );
                // option.answerValue = () => 0; // Fallback to a default function
              }
            });
          }
        });
      });

      return parsedData;
    } catch (error) {
      console.error(
        "Error parsing or processing data from localStorage:",
        error
      );
      return questionData; // Fallback to default data
    }
  };

  const [data, setData] = useState<IQuestion[]>(getInitialData());

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
    }
  }, [data]);

  return { data, setData };
};
