import React, { useContext } from 'react';
import { StyledProgressBar } from './StyledInput';
import { ConfigContext } from '../../providers';

const ProgressBar = ({ totalProgress = 6, progressColor = "#CECECE", currentProgress = 0 }) => {
  const { configuration } = useContext(ConfigContext);
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
    <StyledProgressBar configuration={configuration}>
      {progressItems()}
    </StyledProgressBar>
  );
}

export default ProgressBar;