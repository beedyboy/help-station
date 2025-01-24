"use client";

import { questionData } from "@/constants/herat";
import { IQuestion, IQuestionItem, IOption } from "@/constants/types";
import pointBoardImg from "@/public/images/point_board.svg";
import { useEffect, useState } from "react";
import ImageTemplate from "@/components/image";

function Herat() {
  const section = "Section 1";
  const [data, setData] = useState<IQuestion[]>(questionData);
  const [currentSelectedIndex, setCurrentSelectedIndex] = useState(0);
  const [pickedQuestions, setPickedQuestions] = useState<IQuestionItem[]>([]);
  const [score, setScore] = useState(0);

  const activeSection = data.find((item) => item.section === section);

  useEffect(() => {
    if (activeSection) {
      const questionsToDisplay = activeSection.questions.slice(
        currentSelectedIndex,
        currentSelectedIndex + 2
      );
      setPickedQuestions(questionsToDisplay);
    }
  }, [currentSelectedIndex, activeSection]);

  const weights = {
    "How old are you?": 2,
    "Gender?": 1,
    "How would you describe your physique?": 2,
    "Any known allergies?": 2,
    "Living with any underlying condition?": 3,
    "Have you experienced any of the following symptoms lately?": 2,
    "HAVE YOU UNDERGONE ANY MAJOR SURGERY IN THE PAST 5YEARS?": 4,
    "Do you have any medical implant or foriegn body inserted into you?": 2,
    "Do you have any dependant <5years?": 2,
    "Do you have any dependant >60 yrs?": 2,
    "Do you have any dependant with underlying conditions?": 2,
    "How often do you subject yourself or dependents to a general health-check?": 1,
  };

  const handleAnswerSelection = (
    questionId: number,
    selectedOption: string,
    optionIndex?: number
  ) => {
    setData((prevData) =>
      prevData.map((section) =>
        section.section === activeSection?.section
          ? {
              ...section,
              questions: section.questions.map((question) => {
                if (question.id === questionId) {
                  const questionWeight =
                    weights[question.question as keyof typeof weights] || 1;

                  if (Array.isArray(question.options)) {
                    if (typeof question.options[0] === "string") {
                      const optionIndex = (
                        question.options as string[]
                      ).indexOf(selectedOption);
                      const scoreValue =
                        optionIndex >= 0 ? optionIndex * questionWeight : 0;
                      const scorePoint = score + scoreValue;
                      setScore(scorePoint);

                      return {
                        ...question,
                        correctAnswer: selectedOption,
                      };
                    }

                    if (
                      typeof question.options[0] === "object" &&
                      optionIndex !== undefined
                    ) {
                      const option = question.options[optionIndex] as IOption;
                      const scoreValue =
                        option.listAnswers.indexOf(selectedOption) *
                        questionWeight;
                      setScore((prev) => prev + scoreValue);

                      return {
                        ...question,
                        options: (question.options as IOption[]).map(
                          (option, i) =>
                            i === optionIndex
                              ? { ...option, correctAnswer: selectedOption }
                              : option
                        ),
                      };
                    }
                  }
                }
                return question;
              }),
            }
          : section
      )
    );
  };

  return (
    <div className="w-full flex flex-col md:p-8 p-4">
      <div>
        <h1 className="md:text-[48px] text-[32px] leading-10 md:leading-[60px] font-bold">
          Welcome to the HELP Emergency Risk Assessment Tool
        </h1>
        <h2 className="text-lg md:text-2xl leading-7 font-semibold mb-4 text-[#70727F]">
          Take this survey to determine your emergency risk level.
        </h2>
      </div>

      <div className="flex flex-col md:flex-row items-center w-full gap-8 md:gap-4">
        {/* Left container */}
        <div className="md:border-r-[1px] md:border-[#C6C8D3] w-full md:w-[60%] flex flex-col gap-6">
          <h2 className="text-lg font-bold p-4">Questions</h2>

          <div className="flex flex-col gap-4 bg-[#D7F1DE] rounded-lg p-4 md:w-[70%] md:px-[36px] py-[26px]">
            {pickedQuestions.map((item) => (
              <div className="flex flex-col gap-2" key={item.id}>
                <p>
                  {item.id}. {item.question}
                </p>
                {Array.isArray(item.options) &&
                  item.options.map((option, i) =>
                    typeof option === "string" ? (
                      <label
                        key={i}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <input
                          type="radio"
                          name={`question-${item.id}`}
                          className="form-radio text-primary focus:ring-primary-light"
                          value={option}
                          checked={item.correctAnswer === option}
                          onChange={() =>
                            handleAnswerSelection(item.id, option)
                          }
                        />
                        <span className="text-secondary">{option}</span>
                      </label>
                    ) : (
                      <div key={i} className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                          <p className="h-1 w-1 bg-black rounded-full "></p>
                          <p>{option.list}</p>
                        </div>
                        {option.listAnswers.map((answer, j) => (
                          <label
                            key={j}
                            className="flex items-center gap-2 cursor-pointer"
                          >
                            <input
                              type="radio"
                              name={`question-${item.id}-${i}`}
                              className="form-radio text-primary focus:ring-primary-light"
                              value={answer}
                              checked={option.correctAnswer === answer}
                              onChange={() =>
                                handleAnswerSelection(item.id, answer, i)
                              }
                            />
                            <span className="text-secondary">{answer}</span>
                          </label>
                        ))}
                      </div>
                    )
                  )}
              </div>
            ))}
          </div>

          {/* BTN */}
          <div className="flex items-center justify-between md:justify-start md:gap-10 md:w-[50%]">
            <button
              onClick={() =>
                setCurrentSelectedIndex((prev) =>
                  prev - 2 >= 0 ? prev - 2 : 0
                )
              }
              disabled={currentSelectedIndex === 0}
              className={`px-4 py-2 border-primary-4 border-[1px] w-[150px] text-primary-4 rounded disabled:opacity-50 ${
                currentSelectedIndex === 0 ? "hidden" : "block"
              }`}
            >
              Previous
            </button>

            <button
              onClick={() =>
                setCurrentSelectedIndex((prev) =>
                  prev + 2 >= (activeSection?.questions.length || 0)
                    ? prev
                    : prev + 2
                )
              }
              disabled={
                !activeSection ||
                currentSelectedIndex + 2 >= activeSection.questions.length
              }
              className="px-4 py-2 bg-primary-4 w-[150px] text-white rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>

        {/* Right container */}
        <div className="flex justify-start md:justify-center md:items-center md:p-4 w-full md:w-[40%]">
          <div className="flex flex-col items-center text-center w-[252px] h-full md:w-[70%] md:h-[70%]">
            <h3 className="md:text-lg leading-7 text-[#383A47] font-semibold mb-4">
              Check out your current points
            </h3>

            <div className="inset-1 relative md:w-[295px] w-full h-full md:h-[195px] rounded-lg overflow-hidden">
              <ImageTemplate src={pointBoardImg} />
              <div className="absolute z-10 left-[10px] md:left-8 md:top-8 top-10 w-[90%] md:w-[80%]">
                <p className="md:text-sm text-xs leading-5 font-semibold">
                  You currently have a {score} points in your wallet! Complete
                  this survey to keep gaining points.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Herat;
