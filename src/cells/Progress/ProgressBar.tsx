import React, { useContext } from 'react';

import { StyledProgressBar } from './StyleLoader';
import { ConfigContext } from '../../providers/ConfigProvider';

/** Progress bar component */
interface ProgressBarInterface {
  /** Set the color of the progress */
  color?: string;
  /** Set the completed steps in the bar */
  completedSteps: number;
  /** Set the total steps to divide the progress bar */
  totalSteps: number;
  /** Overrides the transitionTimingFunction */
  transition?: string;
}

/**
 * Progress bar component
 * @param {String} color Set the color of the progress
 * @param {Number} completedSteps Set the completed steps in the bar
 * @param {Number} totalSteps Set the total steps to divide the progress bar
 * @param {String} transition Overrides the transitionTimingFunction
 */

const ProgressBar = ({
  totalSteps,
  completedSteps,
  color = '#3AE25F',
  transition,
  ...rest
}: ProgressBarInterface & React.HTMLAttributes<HTMLDivElement>) => {
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
