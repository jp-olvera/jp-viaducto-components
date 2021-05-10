import styled from 'styled-components';

interface StyledTabI {
  readonly hoverColor: string;
  readonly activeTextColor: string;
  readonly activeColor: string;
  readonly onClick: any;
}

const StyledTab = styled.button<StyledTabI>`
  cursor: pointer;
  display: inline-block;
  position: relative;
  border: none;
  padding: 0;
  background-color: transparent;
  height: 58px;
  box-sizing: border-box;
  position: relative;
  .tab-text {
    transform: translateY(0);
    transition: transform 0.2s ease-in;
  }

  &:after {
    content: '';
    height: 3px;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: ${({ color }) => color};
  }
  &:hover {
    &:after {
      content: '';
      height: 3px;
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      background-color: ${({ hoverColor }) => hoverColor};
    }
    .tab-text {
      transform: translateY(-10px);
      transition: transform 0.2s ease-in;
    }
  }
  &:active,
  :focus {
    p {
      color: ${({ activeTextColor }) => activeTextColor};
    }

    &:after {
      content: '';
      height: 4px;
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      background-color: ${({ activeColor }) => activeColor};
    }
    .tab-text {
      transform: translateY(-10px);
      transition: transform 0.2s ease-in;
    }
  }
`;

export default StyledTab;
