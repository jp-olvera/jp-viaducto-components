import styled from 'styled-components';

const StyledNotification = styled.div`
  align-items: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 5px;
  box-sizing: border-box;
  display: ${({ isActive }) => (isActive ? 'flex' : 'none')};
  height: 48px;
  left: 0;
  padding: ${({ configuration }) =>
    `${configuration.spacing.sm} ${configuration.spacing.xs}`};
  position: fixed;
  top: 0;
  width: 100%;
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

export { StyledNotification };
