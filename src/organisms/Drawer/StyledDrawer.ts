import styled, { keyframes, css } from 'styled-components';
import getElevation from '../../utils/getElevation';

const show = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
`;

const StyledDrawer = styled.div < any > `
  animation: ${show} 230ms
    ${({ configuration, transition }) => transition || configuration.transitionTimingFunction};
  ${(p) => p.isClosing
    && css`
      transform: translateX(100%);
      transition: transform 230ms
        ${p.transition || p.configuration.transitionTimingFunction};
    `};
  background: white;
  box-shadow: rgb(255 255 255) 0 5rem 0,
    rgb(9 30 66 / 8%) -0.313rem -0.125rem 0.438rem;
  height: 100%;
  overflow-y: auto;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  ${(p) => getElevation(p.elevation, p.elevationDirection)};
  @media (min-width: ${({ configuration }) => configuration.breakpoints.sm}) {
    width: 22.25rem;
  }
`;
export default StyledDrawer;
