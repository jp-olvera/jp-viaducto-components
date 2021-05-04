import styled, { css } from 'styled-components';

const StyledToaster = styled.div`
  display: flex;
  visibility: ${({ isActive }) => (isActive ? 'visible' : 'hidden')};
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  box-sizing: border-box;
  background-color: ${({ backgoundColor }) => backgoundColor};
  border-radius: 5px;
  flex-direction: column;
  position: fixed;
  right: 1rem;
  top: 1rem;
  width: 454px;

  transition: ${({ isActive }) =>
    isActive
      ? 'transform 0.3s ease-in-out, opacity 0.3s linear,visibility 0.3s linear;'
      : 'transform 0.3s ease-in-out, opacity 0s linear 0.3s,visibility 0s linear 0.3s;'};
  /* transition:  */
  /* transform: translateX(100%); */
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

  .toaster-close {
    background-color: transparent;
    border: 1px solid transparent;
    box-sizing: border-box;
    cursor: pointer;
    padding: 0;
  }
  .toaster-close:hover {
    transform: translateY(-1px);
  }
  .toaster-close:active {
    transform: translateY(0);
  }
`;

export default StyledToaster;
