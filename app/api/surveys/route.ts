import { Survey } from "../../types";
import { NextResponse } from "next/server";

const mockSurveys: Survey[] = [
  {
    id: 1,
    title: "Customer Satisfaction Survey",
    stepsNumber: 5,
    questions: [
      {
        id: 1,
        text: "How would you rate our service?",
        type: "choice",
        choices: ["Excellent", "Good", "Average", "Poor"],
      },
      { id: 2, text: "How old are you?", type: "number" },
      {
        id: 3,
        text: "Describe your last experience with our service:",
        type: "text",
      },
      {
        id: 4,
        text: "Would you recommend our service to others?",
        type: "choice",
        choices: [
          "Definitely yes",
          "Probably yes",
          "Probably not",
          "Definitely not",
        ],
      },
      { id: 5, text: "Suggestions for improvement:", type: "text" },
    ],
  },
  {
    id: 2,
    title: "Employee Engagement Survey",
    stepsNumber: 4,
    questions: [
      {
        id: 1,
        text: "How many years have you been with the company?",
        type: "number",
      },
      {
        id: 2,
        text: "How would you rate the work environment?",
        type: "choice",
        choices: ["Very good", "Good", "Average", "Poor"],
      },
      {
        id: 3,
        text: "What aspects would you like to improve in your job?",
        type: "text",
      },
      {
        id: 4,
        text: "Do you feel valued in your position?",
        type: "choice",
        choices: ["Always", "Frequently", "Sometimes", "Never"],
      },
    ],
  },
  {
    id: 3,
    title: "Product Feedback Survey",
    stepsNumber: 3,
    questions: [
      {
        id: 1,
        text: "Which product did you purchase?",
        type: "choice",
        choices: ["Product A", "Product B", "Product C"],
      },
      {
        id: 2,
        text: "Rate the product quality:",
        type: "choice",
        choices: [
          "5 - Excellent",
          "4 - Very good",
          "3 - Good",
          "2 - Average",
          "1 - Poor",
        ],
      },
      {
        id: 3,
        text: "Additional comments about the product:",
        type: "text",
      },
    ],
  },
  {
    id: 4,
    title: "Market Research Survey",
    stepsNumber: 6,
    questions: [
      {
        id: 1,
        text: "What is your age range?",
        type: "choice",
        choices: ["18-25", "26-35", "36-45", "46-55", "56+"],
      },
      {
        id: 2,
        text: "How much do you spend monthly on similar products?",
        type: "number",
      },
      { id: 3, text: "Which brands do you know in the market?", type: "text" },
      {
        id: 4,
        text: "How often do you buy this type of product?",
        type: "choice",
        choices: ["Weekly", "Monthly", "Quarterly", "Annually"],
      },
      {
        id: 5,
        text: "What factors influence your purchasing decision?",
        type: "text",
      },
      { id: 6, text: "What is your maximum budget?", type: "number" },
    ],
  },
  {
    id: 5,
    title: "Website Usability Survey",
    stepsNumber: 4,
    questions: [
      {
        id: 1,
        text: "How would you rate the ease of use of the website?",
        type: "choice",
        choices: [
          "Very easy",
          "Easy",
          "Average",
          "Difficult",
          "Very difficult",
        ],
      },
      {
        id: 2,
        text: "Did you find what you were looking for?",
        type: "choice",
        choices: ["Yes", "Partially", "No"],
      },
      {
        id: 3,
        text: "Describe any issues you encountered:",
        type: "text",
      },
      {
        id: 4,
        text: "What features would you like to see on the website?",
        type: "text",
      },
    ],
  },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query")?.toLowerCase() || "";

  const filteredSurveys = query
    ? mockSurveys.filter((survey) => survey.title.toLowerCase().includes(query))
    : mockSurveys;

  return NextResponse.json(filteredSurveys);
}
