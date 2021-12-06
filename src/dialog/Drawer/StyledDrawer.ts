import styled, { css, keyframes } from 'styled-components';
import { ConfigProps } from 'ballena-types';
import getElevation from '../../utils/getElevation';

const showRight = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
`;
const showLeft = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0%);
  }
`;
const showTop = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0%);
  }
`;
const showBottom = keyframes`
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0%);
  }
`;

interface StyledDrawerProps {
  configuration: ConfigProps;
  elevation: number;
  elevationDirection: string;
  isClosing: boolean;
  placement: string;
  ref: any;
  size: string;
  transition: string;
}

const StyledDrawer = styled.div<StyledDrawerProps>`
  background: ${(p) => p.configuration.colors.background};
  max-width: 100%;
  position: fixed;
  max-width: 100%;
  overflow-x: auto;
  overflow-y: auto;
  width: ${(p) => p.configuration.drawerSizes[p.size]};
  ${(p) => getAnimation(p.placement, p.transition)}
  ${(p) => getPlacement(p.placement)}
  ${(p) => getElevation(p.elevation, p.elevationDirection)};
  ${(p) =>
    p.isClosing &&
    css`
      transition: transform 230ms ${p.transition};
      ${getClosingTransform(p.placement)};
    `};
`;

const getAnimation = (placement: string, transition: string) => {
  switch (placement) {
    case 'left':
      return css`
        animation: ${showLeft} 230ms ${transition};
      `;
    case 'top':
      return css`
        animation: ${showTop} 230ms ${transition};
      `;
    case 'bottom':
      return css`
        animation: ${showBottom} 230ms ${transition};
      `;
    default:
      return css`
        animation: ${showRight} 230ms ${transition};
      `;
  }
};

const getClosingTransform = (placement: string) => {
  switch (placement) {
    case 'left':
      return css`
        transform: translateX(-100%);
      `;
    case 'top':
      return css`
        transform: translateY(-100%);
      `;
    case 'bottom':
      return css`
        transform: translateY(100%);
      `;
    default:
      return css`
        transform: translateX(100%);
      `;
  }
};

const getPlacement = (placement: string) => {
  switch (placement) {
    case 'top':
      return css`
        width: 100% !important;
        top: 0;
        left: 0;
        min-height: 30% !important;
        max-height: 100% !important;
      `;
    case 'bottom':
      return css`
        width: 100% !important;
        bottom: 0;
        left: 0;
        min-height: 30% !important;
        max-height: 100% !important;
      `;
    case 'left':
      return css`
        height: 100% !important;
        top: 0;
        left: 0;
      `;
    default:
      return css`
        height: 100% !important;
        top: 0;
        right: 0;
      `;
  }
};
export default StyledDrawer;
