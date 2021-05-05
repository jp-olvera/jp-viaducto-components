import styled, { css } from 'styled-components';

const StyledModal = styled.div`
  background: white;
  display: ${({ isActive }) => (isActive ? 'flex' : 'none')};
  border: 1px solid #eaedf3;
  border-radius: 5px;
  flex-direction: column;
  min-height: 30%;
  height: 100%;
  max-height: ${({ maxHeight }) => maxHeight};
  width: 100%;
  z-index: 1;

  ${({ maxWidth, maxHeight, breakpoint }) =>
    getMedia(maxWidth, maxHeight, breakpoint)}

  .modal-close {
    padding: 0;
    background-color: transparent;
    border: 1px solid transparent;
    cursor: pointer;
    box-sizing: border-box;
  }
  .modal-close:hover {
    transform: translateY(-1px);
  }
  .modal-close:active {
    transform: translateY(0);
  }
  .modal-header {
    display: flex;
    border-bottom: 1px solid #eaedf3;
    border-radius: 5px 5px 0 0;

    background-color: ${({ backgroundColor }) => backgroundColor};
    padding: ${({ configuration }) =>
      `${configuration.spacing.md} ${configuration.spacing.lg}`};
  }
  .modal-content {
    flex-grow: 1;
    overflow-y: auto;
    padding: ${({ configuration }) =>
      `${configuration.spacing.md} ${configuration.spacing.lg}`};
  }
  .modal-bottom {
    border-top: 1px solid #eaedf3;
    display: flex;
    padding: ${({ configuration }) =>
      `${configuration.spacing.md} ${configuration.spacing.lg}`};
  }
`;

const getMedia = (maxWidth, breakpoint) => {
  if (maxWidth && breakpoint) {
    return css`
      @media (min-width: ${breakpoint}) {
        max-width: ${maxWidth};
      }
    `;
  }
};

export default StyledModal;
