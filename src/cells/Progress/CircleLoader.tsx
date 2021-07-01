import React, { useContext } from 'react';
import StyledLoader from './StyleLoader';
import { ConfigContext } from '../../providers/ConfigProvider';

/**
 * Circle loader component indicator for set the visual steps completed
 * @param {number} strokeWidth Set the width of the svg stroke
 * @param {number} circumference Set the stroke-dasharray
 * @param {number} actualProgress Indicates actual step
 * @param {number} currentProgress Indicates the real progress
 * @param {number} radius Set the circle radius
 * @param {String} transition Overrides the transitionTimingFunction
 * @param {String} color Set the color of the steps completed/actual progress
 */

interface CircleLoaderInterface {
  strokeWidth: number;
  circumference: number;
  actualProgress: number;
  currentProgress: number;
  radius: number;
  transition?: string;
  color?: string;
}

const CircleLoader = ({
  strokeWidth = 0,
  circumference = 0,
  actualProgress = 0,
  currentProgress = 0,
  radius = 0,
  color = '#3AE25F',
  ...rest
}: CircleLoaderInterface) => {
  const { configuration } = useContext(ConfigContext);
  return (
    <StyledLoader data-testid='loader' configuration={configuration} {...rest}>
      <svg width='25px' height='25px'>
        <circle
          strokeWidth={strokeWidth}
          stroke='#CECECE'
          fill='transparent'
          r={radius}
          cx={12.5}
          cy={12.5}
        />
        <circle
          className='progress-ring__circle'
          strokeWidth={strokeWidth}
          fill='transparent'
          stroke={`${color}65`}
          strokeDasharray={`${circumference} ${circumference}`}
          r={radius}
          cx={12.5}
          cy={12.5}
          style={{
            strokeDashoffset: actualProgress,
          }}
        />
        <circle
          className='progress-ring__circle'
          strokeWidth={strokeWidth}
          fill='transparent'
          stroke={color}
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
