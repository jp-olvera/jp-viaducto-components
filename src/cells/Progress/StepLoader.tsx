import React, { useContext } from 'react';

import { ConfigContext } from '../../providers';
import { StyledStepProgress } from './StyleLoader';

/** Step progress loader component */
export interface StepLoader extends React.HTMLAttributes<HTMLHeadingElement> {
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
  family,
  color,
  titleLevel = '4',
  finishTextColor = '#3AE25F',
  ...rest
}: StepLoader) => {
  const { configuration } = useContext(ConfigContext);
  return (
    <StyledStepProgress
      level='4'
      family={family}
      isFinished={totalSteps === completed}
      data-testid='loader'
      color={color}
      titleLevel={titleLevel}
      finishTextColor={finishTextColor}
      configuration={configuration}
      {...rest}
    >
      {completed <= totalSteps
        ? `${completed.toString()} / ${totalSteps.toString()}`
        : `${totalSteps.toString()} / ${totalSteps.toString()}`}
    </StyledStepProgress>
  );
};

export default StepLoader;
