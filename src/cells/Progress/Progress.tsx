import React, { useState, useEffect } from 'react';
import { OkCircle } from 'react-ikonate';

import CircleLoader from './CircleLoader';
import ProgressBar from './ProgressBar';
import StepLoader from './StepLoader';

interface ProgressInterface {
  totalSteps: number;
  completedSteps: number;
  currentStep: number;
  loader: string;
  transition?: string;
}

const Progress = ({
  totalSteps = 0,
  completedSteps = 0,
  currentStep = 0,
  loader = 'circle',
  ...rest
}: ProgressInterface) => {
  const strokeWidth = 2;
  const width = 25;

  const radius = width / 2 - strokeWidth * 2;
  const circumference = radius * 2 * Math.PI;
  const [currentProgress, setCurrentProgress] = useState(0);
  const [actualProgress, setActualProgress] = useState(0);

  useEffect(() => {
    const cP = (currentStep * 100) / totalSteps || 0;
    const aP = (completedSteps * 100) / totalSteps || 0;
    const currentOffset = circumference - (cP / 100) * circumference || 0;
    const actualOffset = circumference - (aP / 100) * circumference || 0;
    setCurrentProgress(currentOffset);
    setActualProgress(actualOffset);
  }, [
    circumference,
    totalSteps,
    completedSteps,
    currentStep,
    setCurrentProgress,
    setActualProgress,
  ]);

  if (completedSteps >= totalSteps || currentStep === totalSteps) {
    return <OkCircle color='#3AE25F' fontSize='25px' data-testid='ok_circle' />;
  }
  if (loader === 'progress') {
    return (
      <ProgressBar
        totalSteps={totalSteps}
        completedSteps={completedSteps}
        {...rest}
      />
    );
  }
  if (loader === 'steps') {
    return (
      <StepLoader
        completed={completedSteps}
        totalSteps={totalSteps}
        {...rest}
      />
    );
  }
  return (
    <CircleLoader
      radius={radius}
      strokeWidth={strokeWidth}
      actualProgress={actualProgress}
      currentProgress={currentProgress}
      circumference={circumference}
      {...rest}
    />
  );
};

export default Progress;
