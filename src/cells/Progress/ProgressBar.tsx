import React, { useContext } from 'react';

import { StyledProgressBar } from './StyleLoader';
import { ConfigContext } from '../../providers/ConfigProvider'
interface ProgressBarInterface {
  totalSteps: number;
  completedSteps: number;
  transition?: string;
}

const ProgressBar = ({
  totalSteps = 100,
  completedSteps = 0,
  ...rest
}: ProgressBarInterface) => {
  const { configuration } = useContext(ConfigContext)
  return (
    <StyledProgressBar
      max={totalSteps}
      value={completedSteps}
      data-testid='loader'
      configuration={configuration}
      {...rest}
    >
      <div className='progress-bar-container'>
        <div className='progress-bar stripes animated reverse slower'>
          <span className='progress-bar-inner' />
        </div>
      </div>
    </StyledProgressBar>
  )
};
export default ProgressBar;
