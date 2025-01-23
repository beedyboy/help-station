"use client";
import { useEffect, useState } from "react";

interface IQuestionItem {
  id: number;
  question: string;
  options: string[];
  correctAnswer?: string; // Tracks the selected answer
}
interface IQuestion {
  section: string;
  questions: IQuestionItem[];
}

export const questionData: IQuestion[] = [
  {
    section: "Section 1",
    questions: [
      {
        id: 1,
        question: "How old are you?",
        options: ["Under 18", "Above 50"],
        correctAnswer: "",
      },
      {
        id: 2,
        question: "How are you?",
        options: ["Good", "Bad"],
        correctAnswer: "",
      },
      {
        id: 3,
        question: "What is your favorite color?",
        options: ["Blue", "Red", "Green"],
        correctAnswer: "",
      },
    ],
  },
  {
    section: "Section 2",
    questions: [
      {
        id: 4,
        question: "Your Info?",
        options: ["Confidential", "Public"],
        correctAnswer: "",
      },
    ],
  },
];

function Herat() {
  const section = "Section 1";
  const [data, setData] = useState<IQuestion[]>(questionData);
  const [currentSelectedIndex, setCurrentSelectedIndex] = useState(0);
  const [pickedQuestions, setPickedQuestions] = useState<IQuestionItem[]>([]);

  const activeSection = data.find((item) => item.section === section);

  // Update displayed questions whenever `currentSelectedIndex` changes
  useEffect(() => {
    if (activeSection) {
      const questionsToDisplay = activeSection.questions.slice(
        currentSelectedIndex,
        currentSelectedIndex + 2
      );
      setPickedQuestions(questionsToDisplay);
    }
  }, [currentSelectedIndex, activeSection]);

  // Handler to update the selected answer
  const handleAnswerSelection = (
    questionId: number,
    selectedOption: string
  ) => {
    setData((prevData) =>
      prevData.map((section) =>
        section.section === activeSection?.section
          ? {
              ...section,
              questions: section.questions.map((question) =>
                question.id === questionId
                  ? { ...question, correctAnswer: selectedOption }
                  : question
              ),
            }
          : section
      )
    );
  };

  return (
    <div className="w-full md:p-8">
      <div>
        <h1 className="text-3xl font-bold">
          Welcome to the HELP Emergency Risk Assessment Tool
        </h1>
        <h2 className="text-xl font-semibold mb-4 text-secondary">
          Take this survey to determine your emergency risk level.
        </h2>
      </div>

      <div className="flex flex-col md:flex-row items-center w-full gap-4">
        {/* Left container */}
        <div className="border-[1px] border-secondary w-full md:w-[60%]">
          <h2 className="text-lg font-bold p-4">Questions</h2>
          <div className="flex flex-col gap-4 bg-[#D7F1DE] p-4">
            {pickedQuestions.map((item) => (
              <div className="flex flex-col gap-2" key={item.id}>
                <p>
                  {item.id}. {item.question}
                </p>
                {item.options.map((option, i) => (
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
                      onChange={() => handleAnswerSelection(item.id, option)}
                    />
                    <span className="text-secondary">{option}</span>
                  </label>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Right container */}
        <div className="border-[1px] border-secondary p-4 h-full w-full md:w-[40%]">
          <p>Additional content or instructions can go here.</p>
        </div>
      </div>

      <div className="flex justify-between mt-4">
        <button
          onClick={() =>
            setCurrentSelectedIndex((prev) => (prev - 2 >= 0 ? prev - 2 : 0))
          }
          disabled={currentSelectedIndex === 0}
          className="px-4 py-2 bg-primary-4 text-white rounded disabled:opacity-50"
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
          className="px-4 py-2 bg-primary-4 text-white rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Herat;
