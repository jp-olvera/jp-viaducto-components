import styled, { keyframes, css } from 'styled-components';
import { ConfigProps } from 'ballena-types';
import getElevation from '../../utils/getElevation';

const show = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
`;

interface StyledDrawerProps {
  configuration: ConfigProps;
  transition?: string;
  width: string;
  elevation: number;
  elevationDirection: string;
  isClosing: boolean;
  ref: any;
}

const StyledDrawer = styled.div < StyledDrawerProps > `
  animation: ${show} 230ms
    ${({ configuration, transition }) => transition || configuration.transitionTimingFunction};

  background: white;
  box-shadow: rgb(255 255 255) 0 5rem 0,
    rgb(9 30 66 / 8%) -0.313rem -0.125rem 0.438rem;
  height: 100%;
  max-width: 100%;
  overflow-x: auto;
  overflow-y: auto;
  position: absolute;
  top: 0;
  right: 0;
  max-width: 100%;
  width: ${(p) => p.width};
  z-index: 1;
  ${(p) => getElevation(p.elevation, p.elevationDirection)};

  ${(p) => p.isClosing
    && css`
      transform: translateX(100%);
      transition: transform 230ms
        ${p.transition || p.configuration.transitionTimingFunction};
    `};
`;
export default StyledDrawer;
