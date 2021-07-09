import React from 'react';

import { StyledStepProgress } from './StyleLoader';

/** Step progress loader component */
interface StepLoaderInterface {
  /** Set the completed steps */
  completed: number;
  /** Set the total steps of the loader */
  totalSteps: number;
  /** Set the color of the text */
  color?: string;
  /** Set the font family */
  family?: string | null;
  /** Set the color of the finished steps */
  finishTextColor?: string;
  /** Set the font size according to getFontSize function */
  titleLevel?: string;
}

/**
 * Step progress loader component
 * @param {number} completed Set the completed steps
 * @param {number} totalSteps Set the total steps of the loader
 * @param {string} color Set the color of the text
 * @param {string} family Set the font family
 * @param {string} finishTextColor Set the color of the finished steps
 * @param {string} titleLevel Set the font size according to getFontSize function
 */

const StepLoader = ({
  completed,
  totalSteps,
  family = null,
  color = 'dark',
  titleLevel = '4',
  finishTextColor = '#3AE25F',
  ...rest
}: StepLoaderInterface & React.HTMLAttributes<HTMLHeadingElement>) => (
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
    {completed <= totalSteps
      ? `${completed.toString()} / ${totalSteps.toString()}`
      : `${totalSteps.toString()} / ${totalSteps.toString()}`}
  </StyledStepProgress>
);

export default StepLoader;
