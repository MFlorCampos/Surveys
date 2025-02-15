export interface Question {
  id: number;
  text: string;
  type: "text" | "number" | "choice";
  choices?: string[];
}

export interface Survey {
  id: number;
  title: string;
  questions: Question[];
  stepsNumber: number;
}
