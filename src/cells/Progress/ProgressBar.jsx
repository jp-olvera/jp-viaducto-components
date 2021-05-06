import React from 'react';

import { StyledProgressBar } from './StyleLoader';

const ProgressBar = ({ totalSteps = 100, completedSteps = 0 }) => {
  return (
    <StyledProgressBar max={totalSteps} value={completedSteps} data-testid="loader">
      <div className="progress-bar-container">
        <div className="progress-bar stripes animated reverse slower">
          <span className="progress-bar-inner"></span>
        </div>
      </div>
    </StyledProgressBar>
  );
};
export default ProgressBar;