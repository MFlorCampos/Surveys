"use client";

import { useState, useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { SurveysTable } from "./SurveysTable";
import { Box, Input } from "@chakra-ui/react";
import { useSearchSurveys } from "../hooks/useSearchSurveys";
import { useSurveys } from "./SurveysProvider";

export function SearchableSurveysTable() {
  const initialData = useSurveys();
  const [query, setQuery] = useState("");
  const queryClient = useQueryClient();

  useEffect(() => {
    queryClient.setQueryData(["surveys", ""], initialData);
  }, [queryClient, initialData]);

  const {
    data: surveys = initialData,
    isLoading,
    error,
  } = useSearchSurveys(query);

  return (
    <>
      <Box mb={4}>
        <Input
          placeholder="Search surveys..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          size="md"
        />
        {isLoading && <Box mt={2}>Loading...</Box>}
        {error && (
          <Box mt={2} color="red.500">
            Error: {(error as Error).message}
          </Box>
        )}
      </Box>
      <SurveysTable data={surveys} />
    </>
  );
}
