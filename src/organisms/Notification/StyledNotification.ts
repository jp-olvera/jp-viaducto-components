import styled, { css } from 'styled-components';
import getElevation from '../../utils/getElevation';

const StyledNotification = styled.div < any > `
  align-items: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 5px;
  box-sizing: border-box;
  display: flex;
  visibility: ${({ isActive }) => (isActive ? 'visible' : 'hidden')};
  transition: all 0.2s ${({ transition }) => transition};
  height: 48px;
  left: 0;
  padding: ${({ configuration }) => `${configuration.spacing.sm} ${configuration.spacing.xs}`};
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
