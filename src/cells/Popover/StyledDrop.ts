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
  position: relative;
  animation: ${dropKeyFrames} 230ms forwards;
  animation-delay: 0.01;
  border-radius: 0.25rem;
  border: 0.063rem solid #eaedf3;
  background-color: white;
  transform-origin: ${(props) => props.alignDrop} left;
  z-index: 1;
  ${(p) => getElevation(p.elevation, p.elevationDirection)}
`;
