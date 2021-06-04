import styled, { keyframes } from 'styled-components';
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
  alignDrop: string;
  elevation: number;
  elevationDirection: string;
}
export const StyledDrop = styled.div < StyledDropProps > `
  animation-delay: 0.01;
  transform-origin: ${(props) => props.alignDrop} left;
  animation: ${dropKeyFrames} 230ms forwards;

  ${(p) => getElevation(p.elevation, p.elevationDirection)}
`;
