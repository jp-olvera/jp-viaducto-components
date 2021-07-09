import styled, { keyframes } from 'styled-components';
import { ConfigProps } from 'ballena-types';
import getElevation from '../../utils/getElevation';

const dropKeyFrames = keyframes`
  0% {
    opacity: 0.5;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

interface StyledDropProps {
  elevation: number;
  elevationDirection: string;
  radius: string;
  configuration: ConfigProps;
}

export const StyledDrop = styled.div < StyledDropProps > `
  position: absolute;
  animation: ${dropKeyFrames} 230ms forwards;
  animation-delay: 0.01;
  border-radius: ${(p) => p.configuration.radius[p.radius]};
  background-color: white;
  min-width: 1rem;
  min-height: 1rem;
  transform-origin: right left;
  z-index: 1;
  ${(p) => getElevation(p.elevation, p.elevationDirection)}
`;
