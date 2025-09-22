"use client";

import { questionData } from "@/constants/herat";
import { IQuestion, IQuestionItem, IOption } from "@/constants/types";
import pointBoardImg from "@/public/images/point_board.svg";
import hospitalIcon from "@/public/images/help-staion_hospital.svg";
import { useEffect, useState } from "react";
import ImageTemplate from "@/components/image";
import Image from "next/image";
import Modal from "@/components/modal";
import { useModal } from "@/context/ModalContext";
import sectionOneImg from "@/public/images/completedimg.svg";
import { RiSendPlaneFill } from "react-icons/ri";
import Link from "next/link";

function SectionThree() {
  const [totalScore, setTotalScore] = useState(0);

  const sectionOne = localStorage.getItem("section 1");
  const sectionTwo = localStorage.getItem("section 2");

  const scoreOneandTwo =
    sectionOne && sectionTwo
      ? JSON.parse(sectionOne) + JSON.parse(sectionTwo)
      : 0;

  const section = "Section 3";
  const [data, setData] = useState<IQuestion[]>(questionData);
  const [currentSelectedIndex, setCurrentSelectedIndex] = useState(0);
  const [pickedQuestions, setPickedQuestions] = useState<IQuestionItem[]>([]);
  const [paginationNumber, setPaginationNumber] = useState(0);

  const [score, setScore] = useState(0);
  const { openModal } = useModal();
  const activeSection = data.find((item) => item.section === section);

  const weights = [2, 1, 2, 2];

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
                  if (Array.isArray(question.options)) {
                    if (typeof question.options[0] === "string") {
                      const questionWeight = weights[questionId - 1];

                      const questionPreviousAnswer =
                        question.answerValue() * questionWeight;
                      return {
                        ...question,
                        correctAnswer: selectedOption,
                        previousValue: +questionPreviousAnswer,
                      };
                    }

                    if (
                      typeof question.options[0] === "object" &&
                      optionIndex !== undefined
                    ) {
                      const questionWeight = 2;
                      return {
                        ...question,
                        options: (question.options as IOption[]).map(
                          (opt, i) => {
                            if (i === optionIndex) {
                              console.log("inside index 6");
                              const questionPreviousAnswer =
                                questionWeight *
                                opt.answerValue(selectedOption);

                              return {
                                ...opt,
                                correctAnswer: selectedOption,
                                previousValue: questionPreviousAnswer,
                              };
                            }

                            return opt;
                          }
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

  const checkAnsweredQuestionOne = (): boolean => {
    const question = pickedQuestions?.[0];
    const options = question?.options as IOption[];

    if (Array.isArray(options) && typeof options[0] === "object") {
      const nestedAnswer = options[0].correctAnswer;
      return nestedAnswer !== undefined && nestedAnswer !== "";
    }

    if (typeof question?.correctAnswer === "string") {
      return question.correctAnswer !== "";
    }

    if (Array.isArray(question?.correctAnswer)) {
      return question.correctAnswer.length > 0;
    }

    return false;
  };

  const checkAnsweredQuestionTwo = (): boolean => {
    const question = pickedQuestions[1];
    const options = question?.options as IOption[];

    if (Array.isArray(options) && typeof options[0] === "object") {
      const nestedAnswer = options[0].correctAnswer;
      return nestedAnswer !== undefined && nestedAnswer !== "";
    }

    if (typeof question?.correctAnswer === "string") {
      return question.correctAnswer !== "";
    }

    if (Array.isArray(question?.correctAnswer)) {
      return question.correctAnswer.length > 0;
    }

    return false;
  };

  useEffect(() => {
    const arr: number[] = [];
    const sectionData = data.find((index) => index.section === section);

    const filteredData = sectionData?.questions.map((question) => {
      if (typeof question.options[0] === "string") {
        const score = question.answerValue() * weights[question.id - 1];
        arr[question.id] = score;
        return score;
      }

      if (typeof question.options[0] === "object") {
        const optionsWithScores = (question.options as IOption[]).map(
          (option, i) => {
            const optionScore = option.answerValue(option.correctAnswer) * 2;
            arr[11 + (i + 1)] = optionScore;
            return optionScore;
          }
        );

        return optionsWithScores;
      }

      return null;
    });

    const sumFiltered = filteredData?.reduce((total: number, item) => {
      if (Array.isArray(item)) {
        const nestedSum: number = item.reduce(
          (subTotal, subItem) => subTotal + (subItem || 0),
          0
        ) as number;
        return total + nestedSum;
      } else if (typeof item === "number") {
        return total + (item || 0);
      }
      return total;
    }, 0 as number);

    const sumArr = arr.reduce((total, item) => total + (item || 0), 0);
    console.log("sum of the selected index: ", sumArr);

    setScore(() => sumFiltered ?? 0);

    // Save to local storage
    if (pickedQuestions[1]?.id == 4) {
      localStorage.setItem("section 3", JSON.stringify(sumFiltered));
    }
  }, [data, pickedQuestions]);

  useEffect(() => {
    if (activeSection) {
      const questionsToDisplay = activeSection.questions.slice(
        currentSelectedIndex,
        currentSelectedIndex + 2
      );
      setPickedQuestions(questionsToDisplay);
    }
  }, [currentSelectedIndex, activeSection]);

  return (
    <>
      <div className="w-full flex flex-col md:p-8 p-4">
        <div>
          <h1 className="md:text-[48px] text-[32px] leading-10 md:leading-[60px] font-bold">
            Welcome to the HELP Emergency Risk Assessment Tool
          </h1>
          <h2 className="text-lg md:text-xl leading-7 font-semibold mb-4 text-[#70727F] pr-7 py-4 md:py-0 md:pr-0">
            Take this survey to determine your emergency risk level.
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center w-full gap-8 md:gap-4 md:py-3">
          {/* Left container */}
          <div className="md:border-r-[1px] md:border-[#C6C8D3] w-full md:w-[60%] flex flex-col">
            {/* Pagination */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <p className="w-[6px] h-[6px] bg-[#3BAD6B]  rounded-full"></p>
                {Array.from({ length: 3 }, (_, index) => {
                  if (paginationNumber > index) {
                    return (
                      <span
                        key={index}
                        className="w-[6px] h-[6px] bg-[#3BAD6B] rounded-full"
                      ></span>
                    );
                  }
                  if (paginationNumber == index) {
                    return (
                      <Image
                        key={index}
                        src="/icons/ambulance.svg"
                        alt="Ambulance Icon"
                        width={30}
                        height={30}
                      />
                    );
                  }

                  return (
                    <span
                      key={index}
                      className="w-[6px] h-[6px] border-[1px] border-[#3BAD6B] rounded-full"
                    ></span>
                  );
                })}

                <Image
                  src={hospitalIcon}
                  alt="Hospital Icon"
                  width={20}
                  height={20}
                />
              </div>
              <p className="text-[#797B89] text-xs leading-4 font-semibold md:pr-0 pr-8">
                You can earn up to 1000 points by completing each section
              </p>
            </div>

            <h2 className="text-2xl  font-semibold text-[#383A47] md:leading-[35px] md:text-[28px] py-4">
              {activeSection?.title}
            </h2>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4 bg-[#D7F1DE] rounded-lg p-4 md:w-[90%] md:px-[36px] py-[26px]">
                {pickedQuestions.map((item) => (
                  <div className="flex flex-col gap-2" key={item.id}>
                    <div className="flex flex-col ">
                      <p className="font-semibold md:text-lg md:leading-7 text-base text-[#383A47]">
                        {item.id}. {item.question}
                      </p>
                      {item.subQuestion && (
                        <p className="italic font-normal text-sm leading-4 text-[#383A47]">
                          {item.subQuestion}
                        </p>
                      )}
                    </div>
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
              <div className="flex items-center justify-between md:justify-start gap-10 md:w-[50%]">
                <button
                  onClick={() => {
                    setPaginationNumber((prev) => {
                      if (prev == 0) return 0;
                      return prev - 1;
                    });
                    setCurrentSelectedIndex((prev) =>
                      prev - 2 >= 0 ? prev - 2 : 0
                    );
                  }}
                  disabled={currentSelectedIndex === 0}
                  className={`px-4 py-2 border-primary-4 border-[1px] md:w-[150px] w-[50%] text-primary-4 rounded-xl disabled:opacity-50 ${
                    currentSelectedIndex === 0 ? "hidden" : "block"
                  }`}
                >
                  Previous
                </button>

                <button
                  disabled={
                    !checkAnsweredQuestionOne() || !checkAnsweredQuestionTwo()
                  }
                  onClick={() => {
                    setPaginationNumber((prev) => {
                      if (prev == activeSection?.questions.length) return 4;
                      return prev + 1;
                    });

                    if (currentSelectedIndex + 2 >= 4) {
                      openModal("modal 1");
                      setTotalScore(scoreOneandTwo + score);
                    } else {
                      setCurrentSelectedIndex((prev) =>
                        prev + 2 >= 4 ? prev : prev + 2
                      );
                    }
                  }}
                  className="px-4 py-2 bg-primary-4 md:w-[150px] w-[50%] text-white rounded-xl disabled:opacity-50"
                >
                  {currentSelectedIndex + 2 >= 4 ? "Completed" : "Next"}
                </button>
              </div>
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
                    You currently have {score} points in your wallet! Complete
                    this survey to keep gaining points.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}

      <Modal>
        <div className="w-full flex md:gap-0 gap-2 justify-center md:p-8 flex-col h-[100%] bg-white rounded-2xl  relative">
          <div className="flex w-full justify-center">
            <div className="md: md:w-[260px] h-[170px] w-[170px] md:h-[260px]">
              <ImageTemplate src={sectionOneImg} />
            </div>
          </div>

          <div className="flex justify-center text-center flex-col w-full items-center">
            <p className="font-semibold text-xl md:text-xl md:pt-3 text-[#383A47]">
              You’ve successfully completed Section 1
            </p>
            <p className="text-primary-4 text-lg leading-10 ">
              You have a total of {totalScore} points in your wallet
            </p>
            <p className="text-[#797B89] text-lg leading-10 ">
              Thank you for your patience!
            </p>
            <div className="flex items-center  md:justify-center justify-between gap-7 ">
              <Link href="/herat/result">
                <p className=" text-[#DA2750] underline">View your result</p>
              </Link>
              <div className="flex justify-center items-center gap-3 ">
                <p>Refer a friend</p>
                <RiSendPlaneFill size={20} color="#2D2E2C" />
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default SectionThree;
