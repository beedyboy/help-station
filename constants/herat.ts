import { IQuestion } from "./types";

export const questionData: IQuestion[] = [
  {
    section: "Section 1",
    tractAnswersIndex: [],
    title: "Section 1: Your Health & You",
    questions: [
      {
        id: 1,
        question: "How old are you?",
        options: ["Below 50", "Above 50"],
        correctAnswer: "",
        answerValue: function () {
          return this.correctAnswer
            ? this.correctAnswer == "Below 50"
              ? 2
              : 1
            : 0;
        },
        previousValue: 0,
      },
      {
        id: 2,
        question: "Gender?",
        options: ["Male", "Female"],
        correctAnswer: "",
        answerValue: function () {
          return this.correctAnswer
            ? this.correctAnswer === "Male"
              ? 2
              : 1
            : 0;
        },
        previousValue: 0,
      },
      {
        id: 3,
        question: "How would you describe your physique?",
        options: ["Lean & Fit", "Averagely fit", "Overweight", "Obese"],
        correctAnswer: "",
        answerValue: function () {
          if (this.correctAnswer == "Averagely fit") return 1;
          if (this.correctAnswer == "Overweight") return 2;
          if (this.correctAnswer == "Obese") return 3;
          return 0;
        },
        previousValue: 0,
      },
      {
        id: 4,
        question: "Any known allergies?",
        options: ["Yes", "No"],
        correctAnswer: "",
        answerValue: function () {
          return typeof this.correctAnswer === "string" &&
            this.correctAnswer === "Yes"
            ? 1
            : 0;
        },
        previousValue: 0,
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
        answerValue: function () {
          if (this.correctAnswer == "1 condition") return 1;
          if (this.correctAnswer == "2 conditions") return 2;
          if (this.correctAnswer == "More than two conditions") return 3;
          return 0;
        },
        previousValue: 0,
      },
      {
        id: 6,
        question: "Have you experienced any of the following symptoms lately?",
        options: [
          {
            list: "Unexplained weight loss?",
            listAnswers: ["Yes", "No"],
            correctAnswer: "",
            answerValue: function (correctAnswer: string) {
              return correctAnswer === "Yes" ? 1 : 0;
            },
            previousValue: 0,
          },
          {
            list: "Difficulty breathing",
            listAnswers: ["Yes", "No"],
            correctAnswer: "",
            answerValue: function (correctAnswer: string) {
              return correctAnswer === "Yes" ? 1 : 0;
            },
            previousValue: 0,
          },
          {
            list: "Suicidal thoughts?",
            listAnswers: ["Yes", "No"],
            correctAnswer: "",
            answerValue: function (correctAnswer: string) {
              return correctAnswer === "Yes" ? 1 : 0;
            },
            previousValue: 0,
          },
          {
            list: "Excessive bleeding?",
            listAnswers: ["Yes", "No"],
            correctAnswer: "",
            answerValue: function (correctAnswer: string) {
              return correctAnswer === "Yes" ? 1 : 0;
            },
            previousValue: 0,
          },
          {
            list: "Chest pain/palpitations?",
            listAnswers: ["Yes", "No"],
            correctAnswer: "",
            answerValue: function (correctAnswer: string) {
              return correctAnswer === "Yes" ? 1 : 0;
            },
            previousValue: 0,
          },
          {
            list: "Persistent dizziness?",
            listAnswers: ["Yes", "No"],
            correctAnswer: "",
            answerValue: function (correctAnswer: string) {
              return correctAnswer === "Yes" ? 1 : 0;
            },
            previousValue: 0,
          },
        ],
        correctAnswer: "",
        answerValue: function () {
          return this.correctAnswer === "Yes" ? 1 : 0;
        },
        previousValue: 0,
      },
      {
        id: 7,
        question:
          "Have you undergone any major surgery in the last 5 years? (including transplants)",
        options: ["Yes", "No"],
        correctAnswer: "",
        answerValue: function () {
          return this.correctAnswer === "Yes" ? 1 : 0;
        },
        previousValue: 0,
      },
      {
        id: 8,
        question:
          "Do you have any medical implant or foreign body inserted in you?",
        options: ["Yes", "No"],
        correctAnswer: "",
        answerValue: function () {
          return this.correctAnswer === "Yes" ? 1 : 0;
        },
        previousValue: 0,
      },
      {
        id: 9,
        question: "Do you have any dependant below 5 years?",
        options: ["Yes", "No"],
        correctAnswer: "",
        answerValue: function () {
          return this.correctAnswer === "Yes" ? 1 : 0;
        },
        previousValue: 0,
      },
      {
        id: 10,
        question: "Do you have any dependant above 60 years?",
        options: ["Yes", "No"],
        correctAnswer: "",
        answerValue: function () {
          return this.correctAnswer === "Yes" ? 1 : 0;
        },
        previousValue: 0,
      },
      {
        id: 11,
        question: "Do you have any dependant with an underlying condition?",
        options: ["Yes", "No"],
        correctAnswer: "",
        answerValue: function () {
          return this.correctAnswer === "Yes" ? 1 : 0;
        },
        previousValue: 0,
      },
      {
        id: 12,
        question:
          "How often do you subject yourselves or dependents to general health-check?",
        options: ["Frequently", "sometimes", "rarely", "never"],
        correctAnswer: "",
        answerValue: function () {
          if (this.correctAnswer == "sometimes") return 1;
          if (this.correctAnswer == "rarely") return 2;
          if (this.correctAnswer == "never") return 3;
          return 0;
        },
        previousValue: 0,
      },
    ],
  },

  // //   SECTION 2
  {
    section: "Section 2",
    tractAnswersIndex: [],
    title: "Section 2: Your Lifestyle Choices",
    questions: [
      {
        id: 1,
        question: "Kindly indicate your average sleep time each day",
        options: [
          "3 hours and below",
          "4-6 hours",
          "6-8 hours",
          "Over 8 hours",
        ],
        correctAnswer: "",
        answerValue: () => 0,
        previousValue: 0,
      },
      {
        id: 2,
        subQuestion: "0-6hrs,7-13hrs,13-19hrs ,19-24hrs",
        question:
          "How many hours do you sit or lie down in a 24hr period, inclusive of sleep time?",
        options: [
          "3 hours and below",
          "4-6 hours",
          "6-8 hours",
          "Over 8 hours",
        ],
        correctAnswer: "",
        answerValue: () => 0,
        previousValue: 0,
      },
      {
        id: 3,
        question: "Marital Status",
        options: ["Single", "Married"],
        correctAnswer: "",
        answerValue: () => 0,
        previousValue: 0,
      },
      {
        id: 4,
        question: "Please tick any of the options that apply to you?",
        subQuestion: "Tick where applicable;",
        options: [
          "Frequent alcohol consumption",
          "Cigarette smoking",
          "Use of  shisha",
          "Use of aphrodisiac",
          "Frequent use of herbal concoction",
          "Drug abuse",
          "Use of skin whitening products",
        ],
        correctAnswer: "",
        answerValue: () => 0,
        previousValue: 0,
      },
      {
        id: 5,
        question: "Do you use your phone while driving?",
        subQuestion: "Tick where applicable;",
        options: ["Yes", "No"],
        correctAnswer: "",
        answerValue: () => 0,
        previousValue: 0,
      },
      {
        id: 6,
        question: "Do you use your phone while driving?",

        options: ["Yes", "No"],
        correctAnswer: "",
        answerValue: () => 0,
        previousValue: 0,
      },
      {
        id: 7,
        question: "Do you drive after drinking?",

        options: ["Yes", "No"],
        correctAnswer: "",
        answerValue: () => 0,
        previousValue: 0,
      },
      {
        id: 8,
        question: "How often do you eat Junk food",

        options: ["Frequently", "Sometimes", "Rarely", "Never"],
        correctAnswer: "",
        answerValue: () => 0,
        previousValue: 0,
      },
      {
        id: 9,
        question: "Do you do extreme/intense Sports or fitness regimen",

        options: ["Frequently", "Sometimes", "Never"],
        correctAnswer: "",
        answerValue: () => 0,
        previousValue: 0,
      },
      {
        id: 10,
        question: "Do you self medicate?",
        options: ["Yes", "No"],
        correctAnswer: "",
        answerValue: () => 0,
        previousValue: 0,
      },
      {
        id: 11,
        question: "Are you sexually active?",
        options: ["Yes", "No"],
        correctAnswer: "",
        answerValue: () => 0,
        previousValue: 0,
      },
      {
        id: 12,
        question: "Do you have multiple sexual partners?",
        options: ["Yes", "No"],
        correctAnswer: "",
        answerValue: () => 0,
        previousValue: 0,
      },
    ],
  },

  {
    section: "Section 3",
    tractAnswersIndex: [],
    title: "Section 3: Your Job, Environment & Machines",
    questions: [
      {
        id: 1,
        question: "Kindly indicate, your average Sleep time per day",
        options: [
          {
            list: "Car?",
            listAnswers: ["Yes", "No"],
            correctAnswer: "",
            answerValue: function (correctAnswer: string) {
              return correctAnswer === "Yes" ? 1 : 0;
            },
            previousValue: 0,
          },
          {
            list: "Motorbikes",
            listAnswers: ["Yes", "No"],
            correctAnswer: "",
            answerValue: function (correctAnswer: string) {
              return correctAnswer === "Yes" ? 1 : 0;
            },
            previousValue: 0,
          },
          {
            list: "speed boats",
            listAnswers: ["Yes", "No"],
            correctAnswer: "",
            answerValue: function (correctAnswer: string) {
              return correctAnswer === "Yes" ? 1 : 0;
            },
            previousValue: 0,
          },
          {
            list: "heavy duty trucks",
            listAnswers: ["Yes", "No"],
            correctAnswer: "",
            answerValue: function (correctAnswer: string) {
              return correctAnswer === "Yes" ? 1 : 0;
            },
            previousValue: 0,
          },
          {
            list: "Machineries",
            listAnswers: ["Yes", "No"],
            correctAnswer: "",
            answerValue: function (correctAnswer: string) {
              return correctAnswer === "Yes" ? 1 : 0;
            },
            previousValue: 0,
          },
        ],
        correctAnswer: "",
        answerValue: () => 0,
        previousValue: 0,
      },

      {
        id: 2,
        subQuestion: "(E.g Asbestos, dye, radiation, soot etc)",
        question:
          "Does your work or environment expose you to any of the following hazardous compounds?",
        options: ["Yes", "No"],
        correctAnswer: "",
        answerValue: () => 0,
        previousValue: 0,
      },
      {
        id: 3,
        question: "Do you consider yourself living in an overcrowded space?",
        options: ["Yes", "No"],
        correctAnswer: "",
        answerValue: () => 0,
        previousValue: 0,
      },
      {
        id: 4,
        question: "Do you live alone?",
        options: ["Yes", "No"],
        correctAnswer: "",
        answerValue: () => 0,
        previousValue: 0,
      },
    ],
  },
];
