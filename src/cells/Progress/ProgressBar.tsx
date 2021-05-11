import React from 'react';

import { StyledProgressBar } from './StyleLoader';

interface ProgressBarInterface {
  totalSteps: number;
  completedSteps: number;
}

const ProgressBar = ({
  totalSteps = 100,
  completedSteps = 0,
}: ProgressBarInterface) => (
  <StyledProgressBar
    max={totalSteps}
    value={completedSteps}
    data-testid="loader"
  >
    <div className="progress-bar-container">
      <div className="progress-bar stripes animated reverse slower">
        <span className="progress-bar-inner" />
      </div>
    </div>
  </StyledProgressBar>
);
export default ProgressBar;
