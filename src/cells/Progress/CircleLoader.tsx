import React from 'react';
import StyledLoader from './StyleLoader';

interface CircleLoaderInterface {
  strokeWidth: number;
  circumference: number;
  actualProgress: number;
  currentProgress: number;
  radius: number;
}

const CircleLoader = ({
  strokeWidth = 0,
  circumference = 0,
  actualProgress = 0,
  currentProgress = 0,
  radius = 0,
}: CircleLoaderInterface) => {
  return (
    <StyledLoader data-testid="loader">
      <svg width="25px" height="25px">
        <circle
          strokeWidth={strokeWidth}
          stroke="#CECECE"
          fill="transparent"
          r={radius}
          cx={12.5}
          cy={12.5}
        />
        <circle
          className="progress-ring__circle"
          strokeWidth={strokeWidth}
          fill="transparent"
          stroke="#a7ffba"
          strokeDasharray={`${circumference} ${circumference}`}
          r={radius}
          cx={12.5}
          cy={12.5}
          style={{
            strokeDashoffset: actualProgress,
          }}
        />
        <circle
          className="progress-ring__circle"
          strokeWidth={strokeWidth}
          fill="transparent"
          stroke="#3AE25F"
          strokeDasharray={`${circumference} ${circumference}`}
          style={{
            strokeDashoffset: currentProgress,
          }}
          r={radius}
          cx={12.5}
          cy={12.5}
        />
      </svg>
    </StyledLoader>
  );
};

export default CircleLoader;
