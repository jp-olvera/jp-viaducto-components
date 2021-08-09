import React, { useState, useEffect } from 'react';
import CircleLoader from './CircleLoader';
import ProgressBar from './ProgressBar';
import StepLoader from './StepLoader';
/** Progress component indicator for set the visual steps completed */
interface ProgressInterface {
  /** Set the color of the component */
  color?: string;
  /** Indicates the number of completed steps as a light green */
  completedSteps?: number;
  /** Indicates actual step as a dark green */
  currentStep?: number;
  /** Type of loder to render */
  loader?: 'circle' | 'progress' | 'steps';
  /** Indicates (and divides the progress indicator) the total steps */
  totalSteps?: number;
}
/**
 * Progress component indicator for set the visual steps completed
 * @param {string} color Set the color of the component
 * @param {string} completedSteps Indicates the number of completed steps as a light green
 * @param {string} currentStep Indicates actual step as a dark green
 * @param {string} loader Type of loder to render
 * @param {string} totalSteps Indicates (and divides the progress indicator) the total steps
 */
const Progress = ({
  totalSteps = 0,
  completedSteps = 0,
  currentStep = 0,
  loader,
  color,
  ...rest
}: ProgressInterface & React.HTMLAttributes<HTMLElement>) => {
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

  if (loader === 'progress') {
    return (
      <ProgressBar
        totalSteps={totalSteps}
        completedSteps={completedSteps}
        color={color}
        {...rest}
      />
    );
  }
  if (loader === 'steps') {
    return (
      <StepLoader
        completed={completedSteps}
        totalSteps={totalSteps}
        color={color}
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
      color={color}
      {...rest}
    />
  );
};

export default Progress;
