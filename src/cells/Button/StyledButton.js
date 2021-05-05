import styled, { css } from 'styled-components';
import { SIZE, FONT_SIZE } from './constants';

const StyledButton = styled.button`
  border: 1px solid ${(props) => props.colors.default};
  background-color: ${(props) => props.colors.default};
  color: ${(props) => props.colors.text};

  position: relative;
  align-items: center;
  display: inline-flex;
  justify-content: center;
  border-radius: 2px;
  box-sizing: border-box;
  transition: background-color 0.15s ease-in-out;
  text-align: center;
  vertical-align: middle;
  height: ${({ height }) => height};

  ${(props) => getPadding(props)}
  ${(props) => getFontStyle(props)}

  &:disabled {
    background-color: lightgrey;
    color: grey;
    border: 1px solid lightgrey;
    .button-icon-span {
      opacity: 0.5;
    }
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
    margin-right: ${(p) => (!p.isIconOnly && p.lead ? '0.5rem' : '0')};
    margin-left: ${(p) => (!p.isIconOnly && !p.lead ? '0.5rem' : '0')};
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
        padding = `0 ${({ configuration }) => configuration.spacing.sm} `;
        break;
      case SIZE.large:
        padding = `0 ${({ configuration }) => configuration.spacing.lg} `;
        break;
      case SIZE.default:
      default:
        padding = `0 ${({ configuration }) => configuration.spacing.md} `;
        break;
    }
  } else {
    switch (props.size) {
      case SIZE.small:
        padding = `0 ${({ configuration }) => configuration.spacing.sm} `;
        break;
      case SIZE.large:
        padding = `0 ${({ configuration }) => configuration.spacing.md} `;
        break;
      case SIZE.default:
      default:
        padding = `0 ${({ configuration }) => configuration.spacing.md} `;
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
    /* @media screen and (min-width: 90rem) {
      font-size: calc(${fontSize} * 1.125);
    } */
  `;
};
export default StyledButton;
