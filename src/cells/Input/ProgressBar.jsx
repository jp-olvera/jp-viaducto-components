import React from 'react';
import { StyledProgressBar } from './StyledInput'

const ProgressBar = ({ totalProgress = 6, progressColor = "#CECECE", currentProgress = 0 }) => {
  const progressItems = () => {
    var items = [];
    for (var i = 0; i < totalProgress; i++) {
      items.push(
        <div className={`meter`} key={i} style={{
          background: i + 1 <= currentProgress ? progressColor : "#CECECE",
          width: `calc(100% / ${totalProgress})`
        }} />
      );
    }
    return items;
  }
  return (
    <StyledProgressBar>
      {progressItems()}
    </StyledProgressBar>
  );
}

export default ProgressBar;