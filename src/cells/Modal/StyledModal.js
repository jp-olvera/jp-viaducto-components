import styled, { css } from 'styled-components';

const StyledModal = styled.div`
  background: white;
  display: ${({ isActive }) => (isActive ? 'flex' : 'none')};
  border: 1px solid #eaedf3;
  border-radius: 5px;
  flex-direction: column;
  height: 300px;
  height: ${({ height }) => height};
  width: 100%;
  z-index: 1;

  ${({ maxWidth, breakpoint }) => getMediaWidth(maxWidth, breakpoint)}
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
    ${({ configuration }) => getPadding(configuration)}
  }
  .modal-content {
    flex-grow: 1;
    overflow-y: auto;
    ${({ configuration }) => getPadding(configuration)}
  }
  .modal-bottom {
    border-top: 1px solid #eaedf3;
    display: flex;
    ${({ configuration }) => getPadding(configuration)}
  }
`;

export default StyledModal;

const getPadding = (configuration) => {
  return css`
    padding: ${({ configuration }) =>
      `${configuration.spacing.md} ${configuration.spacing.lg}`};
  `;
};

const getMediaWidth = (maxWidth, breakpoint) => {
  if (maxWidth && breakpoint) {
    return css`
      @media (min-width: ${breakpoint}) {
        max-width: ${maxWidth};
      }
    `;
  }
};
