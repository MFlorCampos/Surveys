import { useQuery } from "@tanstack/react-query";
import { Survey } from "../types";

async function fetchSurveys(query: string = "") {
  // Only fetch if there's a query to optimize performance
  if (!query.trim()) return null;

  const response = await fetch(`/api/surveys?query=${query}`);
  if (!response.ok) {
    throw new Error("Failed to fetch surveys");
  }
  return response.json();
}

export function useSearchSurveys(query: string) {
  return useQuery<Survey[]>({
    queryKey: ["surveys", query],
    queryFn: () => fetchSurveys(query),
    // Don't refetch on window focus for better UX
    refetchOnWindowFocus: false,
    // Only fetch if there's a query
    enabled: query.length > 0,
  });
}
