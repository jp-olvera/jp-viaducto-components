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
}

const StyledSelect = styled.select < SelectI > `
  color: ${({ color }) => color || 'inherit'};
  background-color: ${({ background }) => background || 'inherit'};
  font-family: ${({ fontFamily }) => (fontFamily ? `${fontFamily}, sans-serif` : "'Roboto', sans-serif")};
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
  padding-top: ${(p) => (p.multiple ? p.configuration.spacing.sm : '0')};
  padding-bottom: ${(p) => (p.multiple ? p.configuration.spacing.sm : '0')};
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
    switch (props.size) {
      case 'sm':
        height = '2.073rem';
        break;
      case 'lg':
        height = '2.986rem';
        break;
      default:
        break;
    }
  }
  return css`
    height: ${height};
  `;
};
export default StyledSelect;
