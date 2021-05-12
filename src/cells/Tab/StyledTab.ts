import styled, { css } from "styled-components";

interface StyledTabI {
  readonly hoverColor: string;
  readonly activeTextColor: string;
  readonly activeColor: string;
  readonly onClick: any;
  readonly horizontalSpacing: null | string;
}

const StyledTab = styled.button<StyledTabI>`
  align-items: center;
  background-color: transparent;
  border: none;
  box-sizing: border-box;
  cursor: pointer;
  /* display: flex; */
  display: inline-flex;
  height: 58px;
  padding: 0;
  position: relative;
  .tab-text {
    transform: translateY(0);
    transition: transform 0.2s ease-in;
  }

  &:after {
    background-color: ${({ color }) => color};
    bottom: 0;
    content: "";
    height: 3px;
    left: 0;
    position: absolute;
    width: 100%;
  }
  &:hover {
    /* align-items: flex-start; */
    transition: align-items 0.2s ease-in, padding 0.2s ease-in;
		${(props) => getPaddingTransition(props)};
    &:after {
      content: "";
      height: 3px;
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      background-color: ${({ hoverColor }) => hoverColor};
    }
    /* .tab-text {
      transform: translateY(-10px);
      transition: transform 0.2s ease-in;
    } */
  }
  &:active,
  :focus {
    p {
      color: ${({ activeTextColor }) => activeTextColor};
    }
		${(props) => getPaddingTransition(props)};

    &:after {
      content: "";
      height: 4px;
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      background-color: ${({ activeColor }) => activeColor};
    }
    /* .tab-text {
      transform: translateY(-10px);
      transition: transform 0.2s ease-in;
    } */
  }
`;

const getPaddingTransition = (props) => {
  if (props.horizontalSpacing !== null) {
    return css`
      padding: 0 ${props.configuration.spacing[props.horizontalSpacing]};
      transition: padding 0.2s ease-in;
    `;
  }
  return css``;
};
export default StyledTab;
