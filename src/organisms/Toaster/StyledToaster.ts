import styled, { css } from 'styled-components';
import getElevation from '../../utils/getElevation';

const StyledToaster = styled.div < any > `
  display: flex;
  box-sizing: border-box;
  background-color: ${(p) => p.backgoundColor};
  border-radius: 0.313rem;
  flex-direction: column;
  margin-bottom: 0.5rem;
  max-width: 100%;
  width: 28.375rem;
  transform: all 1s;
  transition: ${(p) => `transform 220ms ${p.transition}, opacity 220ms`};
  ${(p) => getElevation(p.elevation, p.elevationDirection)}
  ${(props) => getAnimation(props.transitionState, props.placement)};
  .toaster-header {
    align-items: center;
    box-sizing: border-box;
    display: flex;
    padding: ${({ configuration }) => `${configuration.spacing.sm} ${configuration.spacing.xs}`};
  }

  .toaster-message {
    align-self: center;
    background-color: ${(p) => p.configuration.colors.background};
    border-radius: 0.188rem;
    box-sizing: border-box;
    margin-bottom: 0.063rem;
    padding: ${({ configuration }) => `${configuration.spacing.md} ${configuration.spacing.md}`};
    width: calc(100% - 0.125rem);
  }
`;
// https://github.com/jossmac/react-toast-notifications/blob/master/src/ToastElement.js

// ...toastStates('bottom-left')['entering'],
const getAnimation = (transitionState, placement) => {
  switch (transitionState) {
    case 'entering':
      return css`
        transform: ${getEnteringTranslate(placement)};
        /* opacity: 0; */
      `;
    case 'entered':
      return css`
        transform: translate3d(0, 0, 0);
        /* opacity: 1; */
      `;
    case 'exiting':
      return css`
        transform: ${getExitingTranslate(placement)};
        opacity: 0;
      `;

    case 'exited':
      return css`
        transform: scale(0.66);
        opacity: 0;
      `;
    default:
      return css`
        background-color: pink !important;
      `;
  }
};

export function getEnteringTranslate(placement) {
  const pos = placement.split('-');
  const relevantPlacement = pos[1] === 'center' ? pos[0] : pos[1];
  const translateMap = {
    right: 'translate3d( 120%, 0, 0)',
    left: 'translate3d(-120%, 0, 0)',
    bottom: 'translate3d(0, 120%, 0)',
    top: 'translate3d(0, -110%, 0)',
  };

  return translateMap[relevantPlacement];
}

export function getExitingTranslate(placement) {
  const pos = placement.split('-');
  const relevantPlacement = pos[1] === 'center' ? pos[0] : pos[1];
  const translateMap = {
    right: 'translate3d(120%, 0, 0)',
    left: 'translate3d(-120%, 0, 0)',
    bottom: 'scale(0.66)',
    top: 'scale(0.66)',
  };

  return translateMap[relevantPlacement];
}

export default StyledToaster;
