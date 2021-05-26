import styled, { css, keyframes } from 'styled-components';
import { SIZE, FONT_SIZE } from './constants';

const turnOn = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const StyledButton = styled.button < any > `
  ${(props) => borderColor(props)};
  background-color: ${(props) => props.colors.default};
  color: ${(props) => props.colors.text};
  position: relative;
  align-items: center;
  display: inline-flex;
  flex-direction: ${(props) => (props.lead ? 'row' : 'row-reverse')};
  justify-content: center;
  border-radius: 0.375rem;
  box-sizing: border-box;
  transition: background-color 0.15s
    ${({ configuration, transition }) => transition || configuration.transitionTimingFunction};
  text-align: center;

  ${(props) => getLateralPadding(props)}
  ${(props) => getHeight(props)}
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

  ${(props) => props.block
    && css`
      width: 100%;
    `}

  span {
    display: inline-flex;
  }

  svg {
    height: inherit;
  }

  .button-icon-span {
    margin-right: ${(p) => (!p.isIconOnly && p.lead ? p.configuration.spacing[p.iconSpacing] : '0')};
    margin-left: ${(p) => (!p.isIconOnly && !p.lead ? p.configuration.spacing[p.iconSpacing] : '0')};
    font-size: calc(1em * 1.2);
    .turnOn {
      animation: ${turnOn} 1s linear infinite;
    }
  }
`;

const borderColor = (props: any) => {
  if (props.isValid) {
    return css`
      border: 3px solid green;
    `;
  }
  // DON'T CHANGE THIS TO !props.isInvalid
  if (props.isValid === false) {
    return css`
      border: 3px solid red;
    `;
  }
  return css`
    border: 1px solid ${props.colors.default};
  `;
};

const getLateralPadding = (props: any) => {
  let padding = '';
  if (props.leftSpacing !== null || props.rightSpacing !== null) {
    const l = props.configuration.spacing[props.leftSpacing] || '0';
    const r = props.configuration.spacing[props.rightSpacing] || '0';
    padding = `0 ${r} 0 ${l}`;
  } else if (!props.isIconOnly) {
    // not icon at all
    switch (props.size) {
      case SIZE.small:
        padding = `0 ${props.configuration.spacing.sm} `;
        break;
      case SIZE.large:
        padding = `0 ${props.configuration.spacing.lg} `;
        break;
      case SIZE.default:
      default:
        padding = `0 ${props.configuration.spacing.md} `;
        break;
    }
  } else {
    switch (props.size) {
      case SIZE.small:
        padding = `0 ${props.configuration.spacing.sm} `;
        break;
      case SIZE.large:
        padding = `0 ${props.configuration.spacing.lg} `;
        break;
      case SIZE.default:
      default:
        padding = `0 ${props.configuration.spacing.md} `;
        break;
    }
  }

  return css`
    padding: ${padding};
  `;
};

const getHeight = (props) => {
  let height = '2.488rem';
  if (props.height !== undefined) {
    height = `${props.height}`;
  }
  return css`
    height: ${height};
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
