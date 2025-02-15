"use client";

import { createContext, useContext } from "react";
import { Survey } from "../types";

const SurveysContext = createContext<Survey[]>([]);

export const useSurveys = () => useContext(SurveysContext);

export function SurveysProvider({
  surveys,
  children,
}: {
  surveys: Survey[];
  children: React.ReactNode;
}) {
  return (
    <SurveysContext.Provider value={surveys}>
      {children}
    </SurveysContext.Provider>
  );
}
