import styled, { css } from 'styled-components';

export const StyledButtonDatalist = styled.div < any > `
  * {
    ${(p) => css`
      font-family: ${p.family || 'inherit'};
    `};
  }
  transition: max-height 0.2s ease;
  overflow: hidden;
  .options {
    transition: max-height 0.2s ease;
    max-height: ${(p) => (p.show ? '7.5rem' : 0)};
    overflow-x: hidden;
    overflow-y: auto;
    min-height: fit-content;
    & button {
      background-color: transparent;
      border: none;
      padding: 0.5rem;
      cursor: pointer;
      width: 100%;
      text-align: left;
      &:hover {
        background-color: #d9d9d9;
      }
    }
  }
  .pill {
    margin-right: 0.375rem;
    margin-bottom: 0.375rem;
  }
  .selected {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
`;
