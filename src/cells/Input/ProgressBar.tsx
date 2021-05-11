import React, { useContext } from 'react';
import { StyledProgressBar } from './StyledInput';
import { ConfigContext } from '../../providers';

/**
 * Progress bar to set the password complex
 * @param {number} totalProgress total progress of the bar
 * @param {string} progressColor color of the progress
 * @param {number} currentProgress current progress
 */
interface ProgressBarInterface {
  totalProgress?: number;
  progressColor?: string;
  currentProgress?: number;
}

const ProgressBar = ({
  totalProgress = 6,
  progressColor = '#CECECE',
  currentProgress = 0,
}: ProgressBarInterface) => {
  const { configuration } = useContext(ConfigContext);
  const progressItems = () => {
    const items: JSX.Element[] = [];
    for (let i = 0; i < totalProgress; i++) {
      items.push(
        <div
          className="meter"
          key={i}
          style={{
            background: i + 1 <= currentProgress ? progressColor : '#CECECE',
            width: `calc(100% / ${totalProgress})`,
          }}
        />,
      );
    }
    return items;
  };
  return (
    <StyledProgressBar configuration={configuration}>
      {progressItems()}
    </StyledProgressBar>
  );
};

export default ProgressBar;
