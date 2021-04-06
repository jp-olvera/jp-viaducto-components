import styled, { css } from 'styled-components';
import config from '../../utils/config';
import { SIZE, FONT_SIZE } from './constants';
const spacing = config.spacing;

const StyledButton = styled.button`
  position: relative;
  align-items: center;
  display: inline-flex;
  justify-content: center;
  border: 1px solid ${(props) => props.colors.default};
  border-radius: 2px;
  box-sizing: border-box;
  background-color: ${(props) => props.colors.default};
  transition: background-color 0.15s ease-in-out;
  text-align: center;
  vertical-align: middle;
  height: 2.98em;

  ${(props) => getPadding(props)}
  ${(props) => getFontStyle(props)}
  
  @media screen and (min-width: 90rem) {
    font-size: calc(1rem * 1.125);
  }

  &:disabled {
    background-color: lightgrey;
    color: grey;
    border: none;
  }

  // just hover
  &:not([disabled]):hover {
    background-color: ${(props) => props.colors.hover};
    cursor: pointer;
  }

  &:focus {
    background-color: ${(props) => props.colors.hover};
  }

  &:not([hover]):not([disabled]):active {
    background-color: ${(props) => props.colors.click};
  }

  ${(props) =>
    props.block &&
    css`
      width: 100%;
    `}

  span {
    display: inline-flex;
    align-items: center;
  }

  svg {
    height: inherit;
  }

  .button-icon-span {
    margin-right: ${(p) => (p.isIconOnly ? '0' : '0.5em')};
    align-items: center;
    height: 1em;
  }
`;

const getPadding = (props) => {
  let padding = '';
  if (!props.isIconOnly) {
    // not icon at all
    switch (props.size) {
      case SIZE.small:
        padding = `0 ${spacing.sm}`;
        break;
      case SIZE.large:
        padding = `0 ${spacing.lg}`;
        break;
      case SIZE.default:
      default:
        padding = `0 ${spacing.md}`;
        break;
    }
  } else {
    switch (props.size) {
      case SIZE.small:
        padding = `0 ${spacing.sm}`;
        break;
      case SIZE.large:
        padding = `0 ${spacing.md}`;
        break;
      case SIZE.default:
      default:
        padding = `0 ${spacing.md}`;
        break;
    }
  }
  return css`
    padding: ${padding};
  `;
};

const getFontStyle = (props) => {
  let fontSize = FONT_SIZE.default;
  switch (props.size) {
    case SIZE.small:
      fontSize = FONT_SIZE.small;
      break;
    case SIZE.large:
      fontSize = FONT_SIZE.large;
      break;
    default:
      break;
  }

  return css`
    font-size: ${fontSize};
  `;
};
export default StyledButton;
