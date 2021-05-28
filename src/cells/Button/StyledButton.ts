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

const loadingIda = keyframes`
  from {
    width: 0;
    left: 0;
  }
  25% {
    width: 100%;
    left: 0;
  }
  50% {
    width: 0%;
    left: 100%;
  }
  75%{
    width: 100%;
    left: 0;
  }
  to {
    width: 0;
    left: 0;
  }
`;

const StyledButton = styled.button < any > `
  ${(props) => borderColor(props)};
  background-color: ${(props) => (props.variant === 'solid' ? props.colors.default : 'transparent')};
  color: ${(props) => (props.variant === 'solid' ? props.colors.text : props.colors.default)};
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
    opacity: ${(props) => (props.isLoading ? '1' : '0.65')};
  }

  // just hover
  &:not([disabled]):hover {
    background-color: ${(props) => props.colors.hover};
    cursor: pointer;
    ${(props) => (props.variant !== 'solid' ? `color: ${props.colors.text}` : null)}
  }

  &:not([hover]):not([disabled]):active {
    background-color: ${(props) => props.colors.click};
    color: ${(props) => (props.variant !== 'solid' ? props.colors.text : props.colors.default)};
  }

  &:focus {
    box-shadow: ${(props) => props.colors.shadow || props.colors.click} 0px 0px
      0px 3px;
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
    font-size: calc(1em * 1);
    .turnOn {
      animation: ${turnOn} 1s linear infinite;
    }
  }

  .status {
    width: 100%;
    height: 15%;
    position: absolute;
    bottom: -0.063rem;
    border-radius: 0.375rem;
    background-color: ${(props) => props.colors.click};
    animation: ${loadingIda} 2s ease-in-out infinite;
  }
`;

const borderColor = (props: any) => {
  if (props.isValid) {
    return css`
      border: 3px solid green;
    `;
  }
  // DON'T CHANGE THIS TO !props.isValid
  if (props.isValid === false) {
    return css`
      border: 3px solid red;
    `;
  }
  return css`
    border: 0.063rem solid
      ${props.variant === 'ghost' ? 'transparent' : props.colors.default};
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
