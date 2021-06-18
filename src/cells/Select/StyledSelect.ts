import styled, { css } from 'styled-components';
import { getSize, getBorder } from '../../utils/getSizes';

interface SelectI {
  size?: any;
  configuration?: any;
  height?: string;
  border?: any;
  fontSize?: string;
  fontFamily?: string;
  background?: string;
  color?: string;
  radius?: any;
  outline?: boolean;
  outlineColor?: string;
  multiple: boolean;
  title?: any;
}

export const StyledSelectWrapper = styled.div < any > `
  position: relative;
  box-sizing: border-box;
  ${(p) => p.title !== null
    && setLabelPosition(p.title.position, p.background, getHeight(p))};
  & > label {
    opacity: 0.65;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    padding: 1rem 0.75rem;
    pointer-events: none;
    border: 0.063rem solid transparent;
    transform-origin: 0 0;
    transition: all 0.2s ease;
    display: inline-block;
    font-family: ${({ fontFamily }) => fontFamily || 'inherit'};
  }
`;

export const setLabelPosition = (
  position: string,
  background: string,
  height: any,
) => {
  switch (position) {
    case 'on':
      return css`
        & > label {
          transform: scale(0.9) translateY(-0.6rem) translateX(0.5rem);
          background-color: ${background} !important;
          opacity: 1 !important;
          padding: 0 !important;
          height: auto !important;
        }
        & > select {
          padding-top: 0.2rem !important;
          ${getHeight({ height })};
        }
      `;
    case 'over':
      return css`
        & > label {
          transform: scale(1) translateY(-1.12rem) translateX(0rem);
          opacity: 1 !important;
          padding: 0 !important;
          height: auto !important;
        }
        & > select {
          padding-top: 0rem !important;
          ${getHeight({ height })};
        }
      `;
    case 'in':
    default:
      return css`
        & > label {
          transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
        }
      `;
  }
};

export const StyledSelect = styled.select < SelectI > `
  color: ${({ color }) => color || 'inherit'};
  background-color: ${({ background }) => background || 'inherit'};
  font-family: ${({ fontFamily }) => fontFamily || "'Roboto', sans-serif"};
  font-size: ${({ fontSize }) => getSize(fontSize)};
  width: 100%;
  ${(props) => (props.multiple ? null : getHeight(props))};
  overflow: ${(props) => (props.multiple ? 'auto' : 'hidden')};
  ${(props) => getLateralPadding(props)};
  ${({ border }) => getBorder(border)};
  ${({ radius }) => (typeof radius === 'string'
    ? `border-radius: ${radius}; `
    : `border-radius: ${radius}rem;`)};
  padding: 0 ${(p) => p.configuration.spacing.sm};
  padding-top: ${(p) => (p.multiple
    ? p.configuration.spacing.sm
    : p.title !== null
      ? p.configuration.spacing.md
      : '0')};
  padding-right: ${(p) => (!p.multiple ? p.configuration.spacing.lg : '0')};
  ${({ multiple }) => (multiple
    ? null
    : css`
          background: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
        `)}
  background-position: right ${(p) => p.configuration.spacing.sm} center;
  background-repeat: no-repeat;
  background-size: 1rem 0.75rem;
  -webkit-appearance: none;
  -moz-appearance: none !important;
`;

const getLateralPadding = (props) => {
  let padding = `0 ${props.configuration.spacing.md}`;
  switch (props.size) {
    case 'sm':
      padding = `0 ${props.configuration.spacing.sm} `;
      break;
    case 'lg':
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
  let height = '2.488rem';
  if (props.height !== undefined) {
    height = `${props.height}`;
  } else {
    height = props.title !== null
      ? `calc(${
        props.configuration.controlHeight[props.size || 'default']
      } * ${props.title.position === 'in' ? '1.44' : '1'})`
      : props.configuration.controlHeight[props.size || 'default'];
  }
  return css`
    height: ${height};
  `;
};
