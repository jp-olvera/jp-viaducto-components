import React from 'react';

import { StyledStepProgress } from './StyleLoader';

interface StepLoaderInterface {
  completed: number;
  totalSteps: number;
}

const StepLoader = ({ completed = 0, totalSteps = 0 }: StepLoaderInterface) => (
  <StyledStepProgress
    level='4'
    family='Roboto'
    isFinished={totalSteps === completed}
    data-testid='loader'
  >
    {completed}/{totalSteps}
  </StyledStepProgress>
);

export default StepLoader;
