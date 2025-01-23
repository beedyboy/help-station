import { useState, useEffect } from "react";
import Image from "next/image";
import pointBoardImg from "@/public/images/point_board.svg";

interface IQuestionItem {
  id: number;
  question: string;
  options: string[];
  correctAnswer?: string;
}
interface IQuestion {
  section: string;
  questions: IQuestionItem[];
}
const questionsArray: IQuestion[] = [
  {
    section: "Section 1",
    questions: [
      {
        id: 1,
        question: "How old are you?",
        options: ["Under 18", "Above 50"],
      },
      // {
      //   id: 2,
      //   question: "What is your age?",
      //   options: [
      //     "Under 18",
      //     "18-24",
      //     "25-34",
      //     "35-44",
      //     "45-54",
      //     "55-64",
      //     "65 or older",
      //   ],
      // },
      {
        id: 2,
        question: "What is your age?",
        options: [
          "Under 18",
          "18-24",
          "25-34",
          "35-44",
          "45-54",
          "55-64",
          "65 or older",
        ],
      },
    ],
  },

  // {
  //   section: "Section 2",
  //   questions: [
  //     {
  //       id: 3,
  //       question: "Any known allergies?",
  //       options: ["Yes", "No"],
  //     },
  //     {
  //       id: 4,
  //       question: "Do you have any chronic conditions?",
  //       options: ["Yes", "No"],
  //     },
  //   ],
  // },
];

export const Herat: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const currentSection = questionsArray[currentQuestionIndex];
  const currentQuestion = currentSection.questions[currentQuestionIndex];
  const totalQuestions = questionsArray.reduce(
    (acc, section) => acc + section.questions.length,
    0
  );

  // Load previous answers from localStorage on component mount
  useEffect(() => {
    const savedAnswers = localStorage.getItem("heratAnswers");
    if (savedAnswers) {
      setAnswers(JSON.parse(savedAnswers));
    }
  }, []);

  // Save answers to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("heratAnswers", JSON.stringify(answers));
  }, [answers]);

  // Handle answer selection
  const handleAnswerSelection = (answer: string) => {
    setSelectedAnswer(answer);
  };

  // Handle "Next" button click
  const handleNext = () => {
    if (selectedAnswer) {
      // Save the answer to the state
      setAnswers((prev) => ({
        ...prev,
        [currentQuestion.id]: selectedAnswer,
      }));
      // Move to the next question
      setSelectedAnswer(null); // Clear the selected answer for the next question
      if (currentQuestionIndex < totalQuestions - 1) {
        setCurrentQuestionIndex((prev) => prev + 1);
      } else {
        alert("Assessment complete!");
        // Here you could handle final submission to a Google Sheet
      }
    } else {
      alert("Please select an answer before proceeding.");
    }
  };

  return (
    <div className="w-[100%] h-[100%] p-4">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center mb-8">
        Welcome to the HELP Emergency Risk Assessment Tool
      </h1>

      {/* Main Layout: Responsive grid */}
      <div className="flex flex-col md:flex-row gap-8 w-full h-[100%] items-center ">
        {/* Left Column */}
        <div className=" md:w-[60%] bg-gray-100 p-4 rounded-lg">
          {/* Subtitle */}
          <h2 className="text-xl font-semibold mb-4 text-secondary">
            Take this survey to determine your emergency risk level.
          </h2>

          {/* Progress Indicator */}
          <div className="flex items-center gap-2 mb-4">
            <Image
              src="/icons/ambulance.svg"
              alt="Ambulance Icon"
              width={30}
              height={30}
            />
            <span className="text-secondary">
              Question {currentQuestionIndex + 1} of {totalQuestions}
            </span>
            <Image
              src="/icons/teenyicons_hospital-solid"
              alt="Hospital Icon"
              width={30}
              height={30}
            />
            <span>
              You can earn up to 1000 points by completing each section
            </span>
          </div>

          {questionsArray.map((section, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-lg font-semibold text-secondary">
                {section.section}
              </h3>
              <div className="flex flex-col gap-2">
                {section.questions.map((question) => (
                  <>
                    <div
                      key={question.id}
                      className="bg-gray-200 p-4 rounded-lg"
                    >
                      <p className="text-sm font-medium">{question.question}</p>
                    </div>

                    <div className="flex flex-col gap-2 mb-8 bg-[#D7F1DE]">
                      {question.options.map((option, index) => (
                        <label
                          key={index}
                          className="flex items-center gap-2 cursor-pointer"
                        >
                          <input
                            type="radio"
                            name={`question-${question.id}`}
                            className="form-radio text-primary focus:ring-primary-light"
                            checked={answers[question.id] === option}
                            onChange={() => handleAnswerSelection(option)}
                          />
                          <span className="text-secondary">{option}</span>
                        </label>
                      ))}
                    </div>
                  </>
                ))}
              </div>
            </div>
          ))}

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="bg-primary-4 text-white py-2 px-6 rounded-lg hover:bg-primary transition"
          >
            Next
          </button>
        </div>

        {/* Right Column */}
        <div className=" flex justify-center items-center md:border-l-[1px]  md:border-primary-5 md:w-[40%] md:h-[615px]  h-[100%] p-6 ">
          <div className="w-[60%] h-[60%]">
            <h3 className="text-xl font-bold mb-4">
              Check out your current points
            </h3>

            <div className="relative md:w-full flex justify-center items-center  md:h-[195px] rounded-lg overflow-hidden">
              <p className="z-10 text-primary-5 text-lg">
                You currently have a 100 points in your wallet! Complete this
                survey to keep gaining points.
              </p>
              <div className="absolute inset-0 top-0 left-0 right-0 bottom-0 w-full h-full  ">
                {/* <ImageTemplate src={pointBoardImg} /> */}
                <Image
                  src={pointBoardImg}
                  alt="Medal Icon"
                  width={120}
                  height={120}
                  style={{
                    width: "100%",
                    background: "#3BAD6B",
                    objectFit: "contain",
                    height: "100%",
                  }}
                />
              </div>
            </div>
          </div>

          {/*  */}
        </div>
      </div>
    </div>
  );
};
