import styled from 'styled-components';

const StyledToaster = styled.div`
  box-sizing: border-box;
  background-color: ${({ backgoundColor }) => backgoundColor};
  border-radius: 5px;
  display: ${({ isActive }) => (isActive ? 'flex' : 'none')};
  flex-direction: column;
  position: fixed;
  right: 1rem;
  top: 1rem;
  width: 454px;

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
