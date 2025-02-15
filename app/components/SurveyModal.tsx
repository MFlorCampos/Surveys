"use client";

import {
  Button,
  Input,
  VStack,
  HStack,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useState } from "react";
import { Survey } from "../types";

interface SurveyModalProps {
  isOpen: boolean;
  onClose: () => void;
  survey: Survey;
}

export function SurveyModal({ isOpen, onClose, survey }: SurveyModalProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState<string[]>(
    Array(survey.questions.length).fill("")
  );

  const handleClose = () => {
    setCurrentStep(1);
    setAnswers(Array(survey.questions.length).fill(""));
    onClose();
  };

  const handleNext = () => {
    if (currentStep < survey.stepsNumber) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleAnswerChange = (value: string) => {
    const newAnswers = [...answers];
    newAnswers[currentStep - 1] = value;
    setAnswers(newAnswers);
  };

  const handleSave = () => {
    console.log("Data to save:", answers);
    handleClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      size="xl"
      isCentered
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent mx={4} bg="white" boxShadow="xl" rounded="md" p={6}>
        <ModalHeader>
          {survey.title} - Question {currentStep}
        </ModalHeader>
        <ModalBody>
          <VStack>
            <div>{survey.questions[currentStep - 1].text}</div>
            {survey.questions[currentStep - 1].type === "text" && (
              <Input
                placeholder="Enter your answer..."
                value={answers[currentStep - 1]}
                onChange={(e) => handleAnswerChange(e.target.value)}
              />
            )}
            {survey.questions[currentStep - 1].type === "number" && (
              <Input
                type="number"
                placeholder="Enter a number..."
                value={answers[currentStep - 1]}
                onChange={(e) => handleAnswerChange(e.target.value)}
              />
            )}
            {survey.questions[currentStep - 1].type === "choice" && (
              <VStack align="start">
                {survey.questions[currentStep - 1].choices?.map(
                  (choice, index) => (
                    <Button
                      key={index}
                      variant={
                        answers[currentStep - 1] === choice
                          ? "solid"
                          : "outline"
                      }
                      onClick={() => handleAnswerChange(choice)}
                    >
                      {choice}
                    </Button>
                  )
                )}
              </VStack>
            )}
            <HStack width="100%" justifyContent="center" mt={4}>
              <Button onClick={handlePrevious} disabled={currentStep === 1}>
                Previous
              </Button>
              <Button
                onClick={handleNext}
                disabled={currentStep === survey.stepsNumber}
              >
                Next
              </Button>
            </HStack>
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" onClick={handleSave} size="md" w="full">
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
