import styled, { css } from 'styled-components';

const height = '3.375rem',
  width = '12.06rem';

export const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const Activator = styled.button`
  ${({ border }) => getBorder(border)}
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans&family=Manrope&display=swap');
  font-family: ${({ family }) =>
    family ? `'${family}', sans-serif` : "'Manrope', sans-serif;"};
  box-sizing: border-box;
  align-items: center;
  background-color: inherit;
  color: inherit;
  cursor: pointer;
  display: flex;
  margin: 0;
  padding: 0.313rem 0;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  height: 100%;
  width: 1.5rem;
  line-height: 1.375rem;
  .small {
    font-size: calc(1rem * 0.8);
  }
  .activator-icon {
    height: 1rem;
  }

  @media screen and (min-width: ${({ configuration }) =>
      configuration.breakpoints.sm}) {
    min-width: 10.688rem;
    width: calc(${width} * 0.8);
    height: calc(${height} * 0.8);
    .activator-text {
      padding-left: 1.2rem;
    }
    .activator-icon {
      height: 1rem;
      margin-left: auto;
      padding-right: 1.2rem;
    }
  }

  @media screen and (min-width: ${({ configuration }) =>
      configuration.breakpoints.lg}) {
    width: ${width};
    height: ${height};
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

export const ItemsContainer = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  background: #ffffff;
  border: 0.063rem solid #eaedf3;
  box-sizing: border-box;
  box-shadow: 0 0.063rem 0.188rem rgba(0, 0, 0, 0.04);
  color: black;
  display: none;
  margin: 0;
  padding: 0;
  position: absolute;
  margin-top: 0.25rem;
  min-width: auto !important;
  width: 7.5rem !important;
  left: 0;
  &.active {
    display: flex;
    flex-direction: column;
  }
  & > button {
    text-align: left;
    font-size: inherit;
    background-color: inherit;
    border: none;
    padding: 0.625rem 0.5rem;
    margin: 0.05rem 0;
    height: 100%;
    cursor: pointer;
  }
  & .active-item {
    background-color: ${({ activeColor }) => activeColor} !important;
  }
`;

const getBorder = (borders = 'none') => {
  if (borders === 'none')
    return css`
      border: none;
    `;

  var border = '';
  if (borders.top !== '' || borders.top !== null)
    border += `border-top: ${borders.top || 'none'}; `;
  if (borders.right !== '' || borders.right !== null)
    border += `border-right: ${borders.right || 'none'}; `;
  if (borders.bottom !== '' || borders.bottom !== null)
    border += `border-bottom: ${borders.bottom || 'none'}; `;
  if (borders.left !== '' || borders.left !== null)
    border += `border-left: ${borders.left || 'none'}; `;
  return css`
    ${border}
  `;
};
