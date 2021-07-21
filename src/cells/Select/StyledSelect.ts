import { ConfigProps } from 'ballena-types';
import styled, { css } from 'styled-components';
import { getSize, getBorder } from '../../utils/getSizes';

interface SelectI {
  inputSize: string;
  configuration: ConfigProps;
  height?: string;
  border?: any;
  fontSize?: string;
  fontFamily?: string;
  background?: string;
  color?: string;
  radius?: string;
  outline?: boolean;
  outlineColor?: string;
  multiple: boolean;
  titleProps: { label?: string; position?: string } | null;
}

export const StyledSelectWrapper = styled.div < any > `
  position: relative;
  box-sizing: border-box;
  ${(p) => (p.titleProps !== null
    ? setLabelPosition(p.titleProps.position, p.background, p.inputSize, p)
    : 'color:red')};
  & > label {
    color: ${(p) => p.configuration.colors.text.dark};
    opacity: 0.65;
    position: absolute;
    ${(p) => getTopLabel(p.inputSize, p.labelPosition, p.multiple)};
    left: 0;
    height: 100%;
    pointer-events: none;
    transform-origin: 0 0;
    transition: all 0.2s ease;
    display: inline-block;
    font-family: ${(p) => p.fontFamily || p.configuration.fontFamily};
  }
`;

const getTopLabel = (inputSize, position, multiple) => {
  if (multiple) {
    return css`
      top: 0;
    `;
  }
  if (inputSize === 'default' && position === 'overlap') {
    return css`
      top: -16%;
    `;
  }
  if (inputSize === 'small' && position === 'overlap') {
    return css`
      top: -13%;
    `;
  }
  if (inputSize === 'large' && position === 'overlap') {
    return css`
      top: -10%;
    `;
  }
  return css`
    top: -4%;
  `;
};
export const setLabelPosition = (
  position: string,
  background: string,
  inputSize: string,
  p: { configuration: ConfigProps },
) => {
  if (inputSize === 'xsmall' || position === 'outside') {
    // siempre poner el label outside en size xsmall
    return css`
      & label {
        color: ${p.configuration.colors.text.dark};
        transform: scale(1) translateY(-1.12rem) translateX(0rem) !important;
        opacity: 1 !important;
        padding: 0 !important;
        height: auto !important;
        white-space: nowrap;
        overflow-x: hidden;
        text-overflow: ellipsis;
        max-width: 100%;
      }
      & ~ select {
        padding-top: 0rem !important;
      }
    `;
  }
  return css`
    & label {
      color: ${p.configuration.colors.text.dark};
      transform: scale(0.9) translateY(-0.25rem) translateX(0.5rem) !important;
      background-color: ${p.configuration.colors.background} !important;
      opacity: 1 !important;
      padding: 0 !important;
      height: auto !important;
      white-space: nowrap;
      overflow-x: hidden;
      text-overflow: ellipsis;
      max-width: 100%;
    }
    & ~ select {
      padding-top: 0.2rem !important;
    }
  `;
};

export const StyledSelect = styled.select < SelectI > `
  color: ${({ color, configuration }) => color || configuration.colors.text.dark};
  background-color: ${(p) => p.background || p.configuration.colors.background};
  font-family: ${(p) => p.fontFamily || p.configuration.fontFamily};
  font-size: ${({ fontSize }) => getSize(fontSize)};
  width: 100%;
  ${(props) => (props.multiple ? null : getHeight(props))};
  overflow: ${(props) => (props.multiple ? 'auto' : 'hidden')};
  ${(props) => getLateralPadding(props)};
  ${({ border, configuration }) => getBorder(border, configuration)};
  border-radius: ${(p) => p.configuration.radius[p.radius || 'none']};
  padding: 0 ${(p) => p.configuration.spacing.sm};
  padding-top: ${(p) => (p.multiple ? p.configuration.spacing.sm : '0')};
  padding-right: ${(p) => (!p.multiple ? p.configuration.spacing.lg : '0')};
  background: ${(p) => !p.multiple
    && `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='${
      p.color?.replace('#', '%23')
      || p.configuration.colors.text.dark.replace('#', '%23')
    }' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");`};
  background-position: right ${(p) => p.configuration.spacing.sm} center;
  background-repeat: no-repeat;
  background-size: 1rem 0.75rem;
  -webkit-appearance: none;
  -moz-appearance: none !important;
`;

const getLateralPadding = (props) => {
  let padding = `0 ${props.configuration.spacing.md}`;
  switch (props.inputSize) {
    case 'xsmall':
    case 'small':
      padding = `0 ${props.configuration.spacing.sm} `;
      break;
    case 'large':
      padding = `0 ${props.configuration.spacing.lg} `;
      break;
    default:
      break;
  }
  return css`
    padding: ${padding};
  `;
};

const getHeight = (props) => {
  const height = props.configuration.controlHeight[props.inputSize || 'default'];
  return css`
    height: ${props.height || height};
  `;
};
