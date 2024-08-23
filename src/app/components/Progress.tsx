"use client";
import * as React from "react";
import {
  Step,
  Box,
  Progress,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
} from "@chakra-ui/react";

const steps = [
  { title: "First", description: "Contact Info" },
  { title: "Second", description: "Date & Time" },
  { title: "Third", description: "Select Rooms" },
];

export function ProgressBar() {
  const { activeStep, setActiveStep } = useSteps({
    index: 1,
    count: steps.length,
  });
  const max = steps.length - 1;
  const progressPercent = (activeStep / max) * 100;

  return (
    <Box>
      <Stepper size="lg" index={activeStep}>
        {steps.map((step, index) => (
          <Step key={index} onClick={() => setActiveStep(index)}>
            <StepIndicator>
              <StepStatus
                complete={<StepIcon />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>

            <Box flexShrink="0">
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </Box>

            <StepSeparator />
          </Step>
        ))}
      </Stepper>
      <Progress
        value={progressPercent}
        position="absolute"
        height="3px"
        width="full"
        top="10px"
        zIndex={-1}
      />
    </Box>
  );
}
