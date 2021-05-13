import styled, { css } from 'styled-components';

interface ActivatorInterface {
  readonly configuration?: any;
  readonly border?: string;
  readonly family?: string;
  readonly height?: string;
}

interface WrapperInterface {
  readonly height: string;
}

export const Wrapper = styled.div<WrapperInterface>`
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  height: ${({ height }) => height};
`;
export const Activator = styled.button<ActivatorInterface>`
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans&family=Manrope&display=swap');
  ${({ border }) => getBorder(border)}
  align-items: center;
  background-color: inherit;
  box-sizing: border-box;
  display: flex;
  color: inherit;
  cursor: pointer;
  font-family: ${({ family }) =>
    family ? `'${family}', sans-serif` : "'Manrope', sans-serif;"};
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

  @media screen and (min-width: ${({ configuration }) =>
      configuration.breakpoints.sm}) {
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

  @media screen and (min-width: ${({ configuration }) =>
      configuration.breakpoints.lg}) {
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

interface ItemsContainerInterface {
  readonly configuration?: any;
  readonly activeColor?: string;
  readonly id?: string;
  readonly className: string;
  readonly ref?: any;
}

export const ItemsContainer = styled.div<ItemsContainerInterface>`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  background: #ffffff;
  border: 0.063rem solid #eaedf3;
  box-sizing: border-box;
  box-shadow: 0 0.063rem 0.188rem rgba(0, 0, 0, 0.04);
  color: black;
  display: none;
  left: 0;
  margin: 0;
  margin-top: 0.25rem;
  min-width: auto !important;
  padding: 0;
  position: absolute;
  width: 7.5rem !important;
  &.active {
    display: flex;
    flex-direction: column;
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
  @media screen and (min-width: ${(props) =>
      props.configuration.breakpoints.md}) {
    width: 100% !important;
  }
`;

const getBorder = (borders: any = 'none') => {
  if (borders === 'none' || borders === null)
    return css`
      border: none;
    `;
  var border = '';
  border += `border-top: ${borders.top || 'none'}; `;
  border += `border-right: ${borders.right || 'none'}; `;
  border += `border-bottom: ${borders.bottom || 'none'}; `;
  border += `border-left: ${borders.left || 'none'}; `;
    
  return css`
    ${border}
  `;
};
