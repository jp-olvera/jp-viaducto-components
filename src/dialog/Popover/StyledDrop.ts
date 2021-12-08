import styled, { keyframes, css } from 'styled-components';
import { ConfigProps } from 'ballena-types';
import getElevation from '../../utils/getElevation';

const dropKeyFrames = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;
const dropHideKeyFrames = keyframes`
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.9);
  }
`;

interface StyledDropProps {
  elevation: number;
  zIndex: number;
  elevationDirection: string;
  isClosing: boolean;
  radius: string;
  configuration: ConfigProps;
}

export const StyledDrop = styled.div<StyledDropProps>`
  position: fixed;
  animation: ${dropKeyFrames} 230ms ease-out;
  animation-delay: 0.01;
  border-radius: ${(p) => p.configuration.radius[p.radius]};
  background-color: ${(p) => p.configuration.colors.background};
  min-width: 2rem;
  min-height: 2rem;
  transform-origin: right left;
  z-index: ${(p) => p.zIndex};
  ${(p) => getElevation(p.elevation, p.elevationDirection)}
  ${(p) =>
    p.isClosing &&
    css`
      animation: ${dropHideKeyFrames} 230ms forwards;
      animation-delay: 0.01;
    `};
`;
