import styled, { css } from 'styled-components';

const StyledNotification = styled.div`
  align-items: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 5px;
  box-sizing: border-box;
  display: flex;
  visibility: ${({ isActive }) => (isActive ? 'visible' : 'hidden')};
  transition: ${({ isActive }) =>
    isActive
      ? 'transform 0.2s ease-in-out'
      : 'transform 0.2s ease-in-out, visibility 0.2s linear 0.2s'};
  height: 48px;
  left: 0;
  padding: ${({ configuration }) =>
    `${configuration.spacing.sm} ${configuration.spacing.xs}`};
  position: fixed;
  width: 100%;

  ${({ top }) => getPosition(top)}

  .notification-close {
    background-color: transparent;
    border: 1px solid transparent;
    box-sizing: border-box;
    cursor: pointer;
    padding: 0;
  }
  .notification-close:hover {
    transform: translateY(-1px);
  }
  .notification-close:active {
    transform: translateY(0);
  }
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
