import React, { useContext } from 'react';

import { StyledProgressBar } from './StyleLoader';
import { ConfigContext } from '../../providers/ConfigProvider';

/**
 * Progress bar component
 * @param {Number} totalSteps Set the total steps to divide the progress bar
 * @param {Number} completedSteps Set the completed steps in the bar
 * @param {String} transition Overrides the transitionTimingFunction
 * @param {String} color Set the color of the progress
 */
interface ProgressBarInterface {
  totalSteps: number;
  completedSteps: number;
  transition?: string;
  color?: string;
}

const ProgressBar = ({
  totalSteps,
  completedSteps,
  color = '#3AE25F',
  transition,
  ...rest
}: ProgressBarInterface) => {
  const { configuration } = useContext(ConfigContext);
  return (
    <StyledProgressBar
      max={totalSteps}
      value={completedSteps <= totalSteps ? completedSteps : totalSteps}
      data-testid='loader'
      configuration={configuration}
      color={color}
      transition={transition}
      {...rest}
    >
      <div className='progress-bar-container'>
        <div className='progress-bar stripes animated reverse slower'>
          <span className='progress-bar-inner' />
        </div>
      </div>
    </StyledProgressBar>
  );
};
export default ProgressBar;
