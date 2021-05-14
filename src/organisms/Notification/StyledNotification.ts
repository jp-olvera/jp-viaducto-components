import styled, { css } from 'styled-components';
import getElevation from '../../utils/getElevation';

interface StyledNotificationI {
  readonly ref: any;
  readonly backgroundColor: string;
  readonly isActive: boolean;
  readonly configuration: any;
  readonly elevation: number;
  readonly elevationDirection: string;
  readonly top: boolean;
  readonly transition?: string;
}
const StyledNotification = styled.div<StyledNotificationI>`
  align-items: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 5px;
  box-sizing: border-box;
  display: flex;
  visibility: ${({ isActive }) => (isActive ? 'visible' : 'hidden')};
  transition: all 0.2s ${({ configuration, transition }) => transition || configuration.transitionTimingFunction};
  height: 48px;
  left: 0;
  padding: ${({ configuration }) =>
    `${configuration.spacing.sm} ${configuration.spacing.xs}`};
  position: fixed;
  width: 100%;
  ${(p) => getElevation(p.elevation, p.elevationDirection)}
  ${({ top }) => getPosition(top)}
`;

const getPosition = (top) => {
  if (top) {
    return css`
      top: 0;
    `;
  }
  return css`
    bottom: 0;
  `;
};

export { StyledNotification };
