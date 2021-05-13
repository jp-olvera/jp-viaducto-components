import styled, { css } from 'styled-components';
import getElevation from '../../utils/getElevation';

interface StyledToasterI {
  readonly elevation: number;
  readonly elevationDirection: string;
  readonly isActive: boolean;
  readonly backgoundColor: string;
  readonly top: boolean;
  readonly right: boolean;
  readonly configuration: any;
  readonly ref: any;
  readonly transition?: string;
}
const StyledToaster = styled.div<StyledToasterI>`
  ${(p) => getElevation(p.elevation, p.elevationDirection)}
  display: flex;
  visibility: ${({ isActive }) => (isActive ? 'visible' : 'hidden')};
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  box-sizing: border-box;
  background-color: ${({ backgoundColor }) => backgoundColor};
  border-radius: 5px;
  flex-direction: column;
  position: fixed;

  ${({ top }) => getVerticalPosition(top)}
  ${({ right }) => getHorizontalPosition(right)}
  width: 100%;
  max-width: 454px;

  transition: all .2s ${({ configuration, transition }) => transition || configuration.transitionTimingFunction};
  .toaster-header {
    align-items: center;
    box-sizing: border-box;
    display: flex;
    padding: ${({ configuration }) =>
      `${configuration.spacing.sm} ${configuration.spacing.xs}`};
  }

  .toaster-message {
    align-self: center;
    background-color: white;
    border-radius: 3px;
    box-sizing: border-box;
    margin-bottom: 1px;
    padding: ${({ configuration }) =>
      `${configuration.spacing.md} ${configuration.spacing.md}`};
    width: calc(100% - 2px);
  }
`;

const getVerticalPosition = (top) => {
  if (top) {
    return css`
      top: 1rem;
      @media (max-width: 454px) {
        top: 0;
      }
    `;
  }
  return css`
    bottom: 1rem;
    @media (max-width: 454px) {
      bottom: 0;
    }
  `;
};
const getHorizontalPosition = (right) => {
  if (right) {
    return css`
      right: 1rem;
      @media (max-width: 454px) {
        right: 0;
      }
    `;
  }
  return css`
    left: 1rem;
    @media (max-width: 454px) {
      left: 0;
    }
  `;
};
export default StyledToaster;
