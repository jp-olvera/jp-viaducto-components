import styled, { css } from 'styled-components';

export const StyledButtonDatalist = styled.div < any > `
  * {
    ${(p) => css`
      font-family: ${p.family || 'inherit'};
    `}
  }
  transition: all 0.2s ease;
  overflow: hidden;
  .options {
    transition: all 0.2s ease;
    height: ${(p) => (p.show ? '10rem' : 0)};
    overflow-x: hidden;
    overflow-y: auto;
    max-height: 7.5rem;
    & button {
      background-color: transparent;
      border: none;
      font-size: 1rem;
      line-height: 1.375rem;
      cursor: pointer;
      width: 100%;
      text-align: left;
      height: 100%;
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
