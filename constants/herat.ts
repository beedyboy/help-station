import { IQuestion } from "./types";

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
