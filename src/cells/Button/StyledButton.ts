import styled, { css, keyframes } from 'styled-components';
import { ConfigProps } from 'frontera-types';
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
interface ButtonProps {
  configuration: ConfigProps;
  variant: string;
  colors: {
    default?: string;
    hover?: string;
    click?: string;
    text?: string;
    shadow?: string;
  };
  lead: boolean;
  radius: string;
  height: string;
  block: boolean;
  isIconOnly: boolean;
  isLoading: boolean;
  iconSpacing: string;
  size: string;
  leftSpacing: string | null;
  rightSpacing: string | null;
}
const StyledButton = styled.button<ButtonProps>`
  ${(props) => borderColor(props)};
  align-items: center;
  background-color: ${(props) =>
    props.variant === 'solid' ? props.colors.default : 'transparent'};
  border: 0.063rem solid
    ${(props) => (props.variant === 'ghost' ? 'transparent' : props.colors.default)};
  border-radius: ${(props) => props.configuration.radius[props.radius] || '0.375rem'};
  box-sizing: border-box;
  color: ${(props) => (props.variant === 'solid' ? props.colors.text : props.colors.default)};
  display: inline-flex;
  flex-direction: ${(props) => (props.lead ? 'row' : 'row-reverse')};
  height: ${(p) => p.height};
  justify-content: center;
  outline: none;
  position: relative;
  text-align: center;
  transition: background-color 0.15s ease;
  ${(props) => getLateralPadding(props)}
  ${(props) => getFontStyle(props)}

  //disabled
  &:disabled {
    ${(p) => disabledColor(p)};
  }

  // just hover
  &:not([disabled]):hover {
    background-color: ${(props) =>
      props.variant !== 'ghost' ? props.colors.hover : 'transparent'};
    cursor: pointer;
    color: ${(props) => (props.variant !== 'ghost' ? props.colors.text : props.colors.default)};
    border-color: ${(props) => (props.variant === 'ghost' ? props.colors.default : 'transparent')};
  }

  // active
  &:not([hover]):not([disabled]):active {
    background-color: ${(props) =>
      props.variant === 'ghost' ? props.colors.shadow : props.colors.click};
    color: ${(props) => (props.variant !== 'ghost' ? props.colors.text : props.colors.default)};
  }

  // focus
  &:focus {
    box-shadow: ${(props) => props.colors.shadow || props.colors.click} 0px 0px 0px 3px;
  }

  ${(props) =>
    props.block &&
    css`
      width: 100%;
    `}

  span {
    display: inline-flex;
  }

  svg {
    height: inherit;
  }

  .button-icon-span {
    margin-right: ${(p) =>
      !p.isIconOnly && p.lead ? p.configuration.spacing[p.iconSpacing] : '0'};
    margin-left: ${(p) =>
      !p.isIconOnly && !p.lead ? p.configuration.spacing[p.iconSpacing] : '0'};
    font-size: calc(1em * 1);
    .progress-ring__circle {
      animation: ${turnOn} 1s linear infinite;
      transform: rotate(-90deg);
      transform-origin: 50% 50%;
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
  return css`
    border: 0.063rem solid ${props.variant === 'ghost' ? 'transparent' : props.colors.default};
  `;
};

const getLateralPadding = (props: any) => {
  let padding = '';
  if (props.leftSpacing !== null || props.rightSpacing !== null) {
    const l = props.configuration.spacing[props.leftSpacing] || '0';
    const r = props.configuration.spacing[props.rightSpacing] || '0';
    padding = `0 ${r} 0 ${l}`;
  } else {
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

export const disabledColor = (p: {
  variant: string;
  configuration: { colors: { disableColor: string } };
  isLoading: boolean;
  colors: {
    default?: string;
    hover?: string;
    click?: string;
    text?: string;
    shadow?: string;
  };
}) => {
  if (p.isLoading) {
    return css`
      opacity: 0.75;
    `;
  }
  return css`
    background-color: ${p.variant === 'solid' ? p.configuration.colors.disableColor : 'white'};
    border-color: ${p.configuration.colors.disableColor};
    color: ${p.variant === 'solid' ? 'white' : p.configuration.colors.disableColor};
  `;
};

export const StyledLoader = styled.div<any>`
  .progress-ring__circle {
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
    animation: ${turnOn} 1s linear infinite;
  }
`;
