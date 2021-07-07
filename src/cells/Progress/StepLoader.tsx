import React from 'react';

import { StyledStepProgress } from './StyleLoader';

/**
 * Step progress loader component
 * @param {number} completed Set the completed steps
 * @param {number} totalSteps Set the total steps of the loader
 * @param {string} family Set the font family
 * @param {string} titleLevel Set the font size according to getFontSize function
 * @param {string} color Set the color of the text
 * @param {string} finishTextColor Set the color of the finished steps
 */
interface StepLoaderInterface {
  completed: number;
  totalSteps: number;
  family?: string | null;
  titleLevel?: string;
  color?: string;
  finishTextColor?: string;
}

const StepLoader = ({
  completed,
  totalSteps,
  family = null,
  color = 'dark',
  titleLevel = '4',
  finishTextColor = '#3AE25F',
  ...rest
}: StepLoaderInterface) => (
  <StyledStepProgress
    level='4'
    family={family}
    isFinished={totalSteps === completed}
    data-testid='loader'
    color={color}
    titleLevel={titleLevel}
    finishTextColor={finishTextColor}
    {...rest}
  >
    {completed.toString()}/{totalSteps.toString()}
  </StyledStepProgress>
);

export default StepLoader;
