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
        subQuestion:
          "For example, High Blood Pressure, Diabetes, Asthma, Epilepsy, Cancer, Sickle Cell Carrier",
        question: "Living with any underlying conditions?",
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
            id: 0,
            list: "Unexplained weight loss?",
            listAnswers: ["Yes", "No"],
            correctAnswer: "",
            answerValue: function (correctAnswer: string) {
              return correctAnswer === "Yes" ? 1 : 0;
            },
            previousValue: 0,
          },
          {
            id: 1,
            list: "Difficulty breathing",
            listAnswers: ["Yes", "No"],
            correctAnswer: "",
            answerValue: function (correctAnswer: string) {
              return correctAnswer === "Yes" ? 1 : 0;
            },
            previousValue: 0,
          },
          {
            id: 2,
            list: "Suicidal thoughts?",
            listAnswers: ["Yes", "No"],
            correctAnswer: "",
            answerValue: function (correctAnswer: string) {
              return correctAnswer === "Yes" ? 1 : 0;
            },
            previousValue: 0,
          },
          {
            id: 3,
            list: "Excessive bleeding?",
            listAnswers: ["Yes", "No"],
            correctAnswer: "",
            answerValue: function (correctAnswer: string) {
              return correctAnswer === "Yes" ? 1 : 0;
            },
            previousValue: 0,
          },
          {
            id: 4,
            list: "Chest pain/palpitations?",
            listAnswers: ["Yes", "No"],
            correctAnswer: "",
            answerValue: function (correctAnswer: string) {
              return correctAnswer === "Yes" ? 1 : 0;
            },
            previousValue: 0,
          },
          {
            id: 5,
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
        subQuestion:
          "For example, Pacemaker, colostomy tube, catheter, prosthesis",
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
    correctAnswer: undefined,
    previousValue: undefined,
    id: undefined,
    answerValue: function (): number {
      throw new Error("Function not implemented.");
    },
    answerValueCode: false,
    options: undefined,
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
        answerValue: function () {
          if (this.correctAnswer == "6-8 hours") return 1;
          if (this.correctAnswer == "4-6 hours") return 2;
          if (this.correctAnswer == "3 hours and below") return 3;
          return 0;
        },
        previousValue: 0,
      },
      {
        id: 2,
        subQuestion: "",
        question:
          "How many hours do you sit or lie down in a 24 hour period, inclusive of sleep time?",
        options: ["0-6hrs", "7-13hrs", "13-19hrs", "19-24hrs"],
        correctAnswer: "",
        answerValue: function () {
          if (this.correctAnswer == "0-6hrs") return 1;
          if (this.correctAnswer == "7-13hrs") return 2;
          if (this.correctAnswer == "13-19hrs") return 3;
          if (this.correctAnswer == "19-24hrs") return 4;
          return 0;
        },
        previousValue: 0,
      },
      {
        id: 3,
        question: "Marital Status",
        options: ["Single", "Married"],
        correctAnswer: "",
        answerValue: function () {
          if (this.correctAnswer == "Single") return 2;
          if (this.correctAnswer == "Married") return 1;
          return 0;
        },
        previousValue: 0,
      },
      {
        id: 4,
        question: "Please select any of the options that apply to you",
        subQuestion: "You can select more than one option",
        options: [
          "Frequent alcohol consumption",
          "Cigarette smoking",
          "Use of shisha",
          "Use of aphrodisiac",
          "Frequent use of herbal concoction",
          "Drug abuse",
          "Use of skin whitening products",
        ],
        correctAnswer: [],
        answerValue: function () {
          if (!Array.isArray(this.correctAnswer)) return 0;

          return this.correctAnswer.reduce((total, answer) => {
            switch (answer) {
              case "Frequent alcohol consumption":
                return total + 2;
              case "Cigarette smoking":
                return total + 4;
              case "Use of shisha":
                return total + 6;
              case "Use of aphrodisiac":
                return total + 8;
              case "Frequent use of herbal concoction":
                return total + 10;
              case "Drug abuse":
                return total + 12;
              case "Use of skin whitening products":
                return total + 14;
              default:
                return total;
            }
          }, 0);
        },
        previousValue: 0,
      },
      {
        id: 5,
        question: "Do you use your phone while driving?",
        subQuestion: "Tick where applicable;",
        options: ["Yes", "No"],
        correctAnswer: "",
        answerValue: function () {
          return this.correctAnswer === "Yes" ? 1 : 0;
        },
        previousValue: 0,
      },
      {
        id: 6,
        question: "How often do you drive late at night?",

        options: ["Yes", "No"],
        correctAnswer: "",
        answerValue: function () {
          return this.correctAnswer === "Yes" ? 1 : 0;
        },
        previousValue: 0,
      },
      {
        id: 7,
        question: "Do you drink and drive?",

        options: ["Yes", "No"],
        correctAnswer: "",
        answerValue: function () {
          return this.correctAnswer === "Yes" ? 1 : 0;
        },
        previousValue: 0,
      },
      {
        id: 8,
        question: "How often do you eat Junk food?",

        options: ["Frequently", "Sometimes", "Rarely", "Never"],
        correctAnswer: "",
        answerValue: function () {
          if (this.correctAnswer == "Rarely") return 1;
          if (this.correctAnswer == "Sometimes") return 2;
          if (this.correctAnswer == "Frequently") return 3;
          return 0;
        },
        previousValue: 0,
      },
      {
        id: 9,
        question: "Do you do extreme/intense sports or fitness regimen?",

        options: ["Frequently", "Sometimes", "Never"],
        correctAnswer: "",
        answerValue: function () {
          if (this.correctAnswer == "Never") return 1;
          if (this.correctAnswer == "Sometimes") return 2;
          if (this.correctAnswer == "Frequently") return 3;
          return 0;
        },
        previousValue: 0,
      },
      {
        id: 10,
        question: "Do you self medicate?",
        options: ["Yes", "No"],
        correctAnswer: "",
        answerValue: function () {
          return this.correctAnswer === "Yes" ? 1 : 0;
        },
        previousValue: 0,
      },
      {
        id: 11,
        question: "Are you sexually active?",
        options: ["Yes", "No"],
        correctAnswer: "",
        answerValue: function () {
          return this.correctAnswer === "Yes" ? 1 : 0;
        },
        previousValue: 0,
      },
      {
        id: 12,
        question: "Do you have multiple sexual partners?",
        options: ["Yes", "No"],
        correctAnswer: "",
        answerValue: function () {
          return this.correctAnswer === "Yes" ? 1 : 0;
        },
        previousValue: 0,
      },
    ],
    correctAnswer: undefined,
    previousValue: undefined,
    id: undefined,
    answerValue: function (): number {
      throw new Error("Function not implemented.");
    },
    answerValueCode: false,
    options: undefined,
  },

  {
    section: "Section 3",
    tractAnswersIndex: [],
    title: "Section 3: Your Job, Environment & Machines",
    questions: [
      {
        id: 1,
        question: "Do you frequently operate, drive or commute in:",
        subQuestion: "Kindly select where appropriate",
        options: [
          {
            id: 0,
            list: "Car?",
            listAnswers: ["Yes", "No"],
            correctAnswer: "",
            answerValue: function (correctAnswer: string) {
              return correctAnswer === "Yes" ? 1 : 0;
            },
            previousValue: 0,
          },
          {
            id: 1,
            list: "Motorbikes",
            listAnswers: ["Yes", "No"],
            correctAnswer: "",
            answerValue: function (correctAnswer: string) {
              return correctAnswer === "Yes" ? 1 : 0;
            },
            previousValue: 0,
          },
          {
            id: 2,
            list: "speed boats",
            listAnswers: ["Yes", "No"],
            correctAnswer: "",
            answerValue: function (correctAnswer: string) {
              return correctAnswer === "Yes" ? 1 : 0;
            },
            previousValue: 0,
          },
          {
            id: 3,
            list: "heavy duty trucks",
            listAnswers: ["Yes", "No"],
            correctAnswer: "",
            answerValue: function (correctAnswer: string) {
              return correctAnswer === "Yes" ? 1 : 0;
            },
            previousValue: 0,
          },
          {
            id: 4,
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
        subQuestion: "For example, Asbestos, dye, radiation, soot",
        question:
          "Does your work or environment expose you to harmful chemical compounds?",
        options: ["Yes", "No"],
        correctAnswer: "",
        answerValue: function () {
          return this.correctAnswer === "Yes" ? 1 : 0;
        },
        previousValue: 0,
      },
      {
        id: 3,
        question: "Do you consider yourself living in an overcrowded space?",
        options: ["Yes", "No"],
        correctAnswer: "",
        answerValue: function () {
          return this.correctAnswer === "Yes" ? 1 : 0;
        },
        previousValue: 0,
      },
      {
        id: 4,
        question: "Do you live alone?",
        options: ["Yes", "No"],
        correctAnswer: "",
        answerValue: function () {
          return this.correctAnswer === "Yes" ? 1 : 0;
        },
        previousValue: 0,
      },
    ],
    correctAnswer: undefined,
    previousValue: undefined,
    id: undefined,
    answerValue: function (): number {
      throw new Error("Function not implemented.");
    },
    answerValueCode: false,
    options: undefined,
  },
];
