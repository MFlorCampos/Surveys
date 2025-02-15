"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { SearchableSurveysTable } from "./SearchableSurveysTable";
import { SurveysProvider } from "./SurveysProvider";
import { Survey } from "../types";

async function getData(searchQuery: string = "") {
  const response = await fetch(`/api/surveys?query=${searchQuery}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch surveys");
  }

  return response.json();
}

export default function SurveysFetcher() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  const [surveys, setSurveys] = useState<Survey[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getData(query)
      .then(setSurveys)
      .finally(() => setLoading(false));
  }, [query]);

  if (loading) return <div>Loading surveys...</div>;

  return (
    <SurveysProvider surveys={surveys}>
      <SearchableSurveysTable />
    </SurveysProvider>
  );
}
