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
        question: "Gender?",
        options: ["Male", "Female"],
        correctAnswer: "",
      },
      {
        id: 3,
        question: "How would you describe your physique?",
        options: ["Lean", "Fit", "Averagely fit", "Overweight", "Obese"],
        correctAnswer: "",
      },
      {
        id: 4,
        question: "Any known allergies?",
        options: ["Yes", "No"],
        correctAnswer: "",
      },
      {
        id: 5,
        question: "Living with any underlying condition?",
        options: [
          "No condition",
          "1 condition",
          "2 conditions",
          "More than two conditions",
        ],
        correctAnswer: "",
      },
      {
        id: 6,
        question: "Have you experienced any of the following symptoms lately?",
        options: [
          {
            list: "Unexplained weight loss?",
            listAnswers: ["Yes", "No"],
            correctAnswer: "",
          },
          {
            list: "Difficulty breathing",
            listAnswers: ["Yes", "No"],
            correctAnswer: "",
          },
          {
            list: "Suicidal thoughts?",
            listAnswers: ["Yes", "No"],
            correctAnswer: "",
          },
          {
            list: "Excessive bleeding?",
            listAnswers: ["Yes", "No"],
            correctAnswer: "",
          },
          {
            list: "Chest pain/palpitations?",
            listAnswers: ["Yes", "No"],
            correctAnswer: "",
          },
          {
            list: "Persistent dizziness?",
            listAnswers: ["Yes", "No"],
            correctAnswer: "",
          },
        ],
        correctAnswer: "",
      },
      {
        id: 7,
        question:
          "Have you undergone any major surgery in the last 5 years? (including transplants)",
        options: ["Yes", "No"],
        correctAnswer: "",
      },
      {
        id: 8,
        question:
          "Do you have any medical implant or foreign body inserted in you?",
        options: ["Yes", "No"],
        correctAnswer: "",
      },
      {
        id: 9,
        question: "Do you have any dependant below 5 years?",
        options: ["Yes", "No"],
        correctAnswer: "",
      },
      {
        id: 10,
        question: "Do you have any dependant above 60 years?",
        options: ["Yes", "No"],
        correctAnswer: "",
      },
      {
        id: 11,
        question: "Do you have any dependant with an underlying condition?",
        options: ["Yes", "No"],
        correctAnswer: "",
      },
      {
        id: 12,
        question:
          "How often do you subject yourselves or dependents to general health-check?",
        options: ["Frequently", "sometimes", "rarely", "never"],
        correctAnswer: "",
      },
    ],
  },
  //   SECTION 2
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
