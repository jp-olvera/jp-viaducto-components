import styled, { css } from 'styled-components';

export const Wrapper = styled.div < any > `
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  height: ${({ height }) => height};
`;
export const Activator = styled.button < any > `
  ${(p) => (p.family !== null
    ? css`
          font-family: ${p.family};
        `
    : css``)};
  ${({ border }) => getBorder(border)};
  align-items: center;
  background-color: inherit;
  box-sizing: border-box;
  display: flex;
  color: inherit;
  cursor: pointer;
  font-family: ${({ family }) => (family ? `'${family}', sans-serif` : "'Manrope', sans-serif;")};
  font-size: 1rem;
  font-style: normal;
  font-weight: normal;
  height: 100%;
  line-height: 1.375rem;
  margin: 0;
  padding: 0.313rem 0;
  width: 1.5rem;
  .small {
    font-size: calc(1rem * 0.8);
  }
  .activator-icon {
    height: 1rem;
  }

  @media screen and (min-width: ${({ configuration }) => configuration.breakpoints.sm}) {
    min-width: 10.688rem;
    height: 100%;
    width: calc(12.06rem * 0.8);
    .activator-text {
      padding-left: 1.2rem;
    }
    .activator-icon {
      height: 1rem;
      margin-left: auto;
      padding-right: 1.2rem;
    }
  }

  @media screen and (min-width: ${({ configuration }) => configuration.breakpoints.lg}) {
    width: 12.06rem;
    height: 100%;
    margin: auto;
    .activator-text {
      padding-left: 1.2rem;
    }
    .activator-icon {
      height: 1rem;
      margin-left: auto;
      padding-right: 1.2rem;
    }
  }
`;

export const ItemsContainer = styled.div < any > `
  ${(p) => (p.family !== null
    ? css`
          font-family: ${p.family};
        `
    : css``)};
  transition: all 0.2s
    ${({ configuration }) => configuration.transitionTimingFunction};
  background: #ffffff;
  border: 0.063rem solid #eaedf3;
  box-sizing: border-box;
  box-shadow: 0 0.063rem 0.188rem rgba(0, 0, 0, 0.04);
  color: black;
  display: flex;
  left: 0;
  margin: 0;
  margin-top: 0.25rem;
  min-width: auto !important;
  padding: 0;
  position: absolute;
  opacity: 0;
  visibility: hidden;
  width: 7.5rem !important;
  z-index: 1;
  &.active {
    flex-direction: column;
    opacity: 1;
    visibility: visible;
    transition: all 0.2s
      ${({ configuration }) => configuration.transitionTimingFunction};
  }
  & > button {
    background-color: inherit;
    border: none;
    cursor: pointer;
    font-size: inherit;
    height: 100%;
    margin: 0.05rem 0;
    padding: 0.625rem 0.5rem;
    text-align: left;
  }
  & .active-item {
    background-color: ${({ activeColor }) => activeColor} !important;
  }
  @media screen and (min-width: ${(props) => props.configuration.breakpoints.md}) {
    width: 100% !important;
  }
`;

export const getBorder = (borders: any = 'none') => {
  if (borders === 'none' || borders === null) {
    return css`
      border: none;
    `;
  }
  let border = '';
  border += `border-top: ${borders.top || 'none'}; `;
  border += `border-right: ${borders.right || 'none'}; `;
  border += `border-bottom: ${borders.bottom || 'none'}; `;
  border += `border-left: ${borders.left || 'none'}; `;

  return css`
    ${border}
  `;
};
