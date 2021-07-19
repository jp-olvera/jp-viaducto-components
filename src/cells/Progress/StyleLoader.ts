import styled from 'styled-components';
import { getFontSize } from '../../utils/getSizes';

const size = '2.188rem';

const StyledLoader = styled.div < any > `
  width: ${size};
  height: ${size};
  .progress-ring__circle {
    transition: stroke-dashoffset 0.35s ease;
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
  }
  @media screen and (min-width: 36rem) {
    display: flex;
  }
`;

export const StyledStepProgress = styled.h1 < any > `
  margin: 0;
  padding: 0;
  color: ${(p) => (p.isFinished
    ? p.finishTextColor
    : p.color || p.configuration.colors.text.dark)};
  font-family: ${(p) => p.family || p.configuration.fontFamily};
  font-size: ${({ titleLevel }) => getFontSize(titleLevel)};
`;

export const StyledProgressBar = styled.div < any > `
  & .progress-bar {
    background-color: ${(p) => p.configuration.colors.background};
    height: 0.6rem;
    width: 100%;
    border-radius: 0.313rem;
    box-shadow: 0 0.063rem 0.063rem #cecece inset, 0 0.063rem 0 #cecece;
  }

  & .progress-bar-inner {
    transition: width 1s ease;
    display: block;
    height: 0.6rem;
    width: ${({ max, value }) => ((value * 100) / max).toFixed(0)}%;
    background-color: ${(p) => p.color};
    border-radius: 0.188rem;
    position: relative;
  }
`;

export default StyledLoader;
