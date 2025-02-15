import { Container, Heading } from "@chakra-ui/react";
import { Suspense } from "react";
import SurveysFetcher from "./components/SurveysFetcher";

export default function Home() {
  return (
    <Container maxW="container.xl" py={4}>
      <Heading as="h1" mb={4}>
        Surveys
      </Heading>

      <Suspense fallback={<div>Loading...</div>}>
        <SurveysFetcher />
      </Suspense>
    </Container>
  );
}
