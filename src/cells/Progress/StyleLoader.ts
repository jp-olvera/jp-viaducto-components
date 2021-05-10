import styled from 'styled-components';
import { Title } from '../Title';

let size = '25px';

const StyledLoader = styled.div`
  width: ${size};
  height: ${size};
  .progress-ring__circle {
    transition: stroke-dashoffset 0.35s;
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
  }
  @media screen and (min-width: 36rem) {
    display: flex;
  }
`;

interface StyledStepProgressI {
  readonly isFinished?: boolean;
  readonly level?: string;
  readonly family?: string;
}

export const StyledStepProgress = styled(Title)<StyledStepProgressI>`
  color: ${({ isFinished }) => (isFinished ? 'green' : 'gray')};
`;

interface StyledProgressBarI {
  readonly max: number;
  readonly value: number;
}
export const StyledProgressBar = styled.div<StyledProgressBarI>`
  & .progress-bar {
    background-color: #1a1a1a;
    height: 1.25rem;
    width: 8rem;
    margin: 50px auto;
    border-radius: 5px;
    box-shadow: 0 1px 5px #000 inset, 0 1px 0 #444;
    margin: 0 0 0 1rem;
  }
  & .progress-bar {
    background-color: #1a1a1a;
    height: 0.6rem;
    width: 8rem;
    border-radius: 5px;
    box-shadow: 0 1px 5px #cecece inset, 0 1px 0 #cecece;
  }
  & .stripes {
    background-size: 30px 30px;
    background-color: #fefefe;
  }

  & .stripes.animated.slower {
    animation-duration: 4s;
  }

  & .stripes.reverse {
    animation-direction: reverse;
  }
  & .progress-bar-inner {
    transition: width 1s cubic-bezier(0.165, 0.84, 0.44, 1);
    display: block;
    height: 0.6rem;
    width: ${({ max, value }) => ((value * 100) / max).toFixed(0)}%;
    background-color: #3ae25f;
    border-radius: 3px;
    box-shadow: 0 1px 0 rgba(255, 255, 255, 0.5) inset;
    position: relative;
  }
`;

export default StyledLoader;
