import styled, { keyframes, css } from 'styled-components';
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
  arrowDirection: string;
  arrowPosition: string;
}
const getPosition = (direction: string, position) => {
  let p = '10px';
  if (position === 'center') {
    p = '50%';
  } else if (position === 'end') {
    p = 'calc(100% - 1rem)';
  } else {
    p = '10px';
  }
  switch (direction) {
    case 'right':
      return css`
        transform: rotate(90deg);
        top: ${p};
        right: -13px;
      `;
    case 'left':
      return css`
        transform: rotate(-90deg);
        top: ${p};
        left: -13px;
      `;
    case 'top':
      return css`
        transform: rotate(0);
        top: -8px;
        left: ${p};
      `;
    case 'bottom':
    default:
      return css`
        transform: rotate(180deg);
        bottom: -8px;
        left: ${p};
      `;
  }
};

export const StyledDrop = styled.div < StyledDropProps > `
  position: absolute;
  animation: ${dropKeyFrames} 230ms forwards;
  animation-delay: 0.01;
  border-radius: 0.25rem;
  border: 0.063rem solid #eaedf3;
  background-color: white;
  min-width: 1rem;
  min-height: 1rem;
  transform-origin: ${(props) => props.alignDrop} left;
  z-index: 1;
  ${(p) => getElevation(p.elevation, p.elevationDirection)}
  &:after {
    position: absolute;
    display: block;
    content: '';
    background-repeat: no-repeat;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' style='isolation:isolate' viewBox='0 0 16 10' width='16pt' height='10pt'%3E%3Cdefs%3E%3CclipPath id='a'%3E%3Cpath d='M0 0H16V10H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3Cg clip-path='url(%23a)'%3E%3Cpath d='M 0 9 L 8 1 L 16 9 L 0 9 Z' fill='rgb(255,255,255)' vector-effect='non-scaling-stroke' stroke-width='1' stroke='rgb(255,255,255)' stroke-linejoin='miter' stroke-linecap='square' stroke-miterlimit='3'/%3E%3Cpath d='M 0 9 L 8 1 L 16 9 L 16 9 L 8 1 L 0 9 Z' fill='rgb(234,237,243)' vector-effect='non-scaling-stroke' stroke-width='1' stroke='rgb(234,237,243)' stroke-linejoin='miter' stroke-linecap='square' stroke-miterlimit='3'/%3E%3C/g%3E%3C/svg%3E");
    height: 8px;
    width: 18px;
    ${(p) => getPosition(p.arrowDirection, p.arrowPosition)};
  }
`;
