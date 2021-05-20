import styled, { css } from 'styled-components';
import { getSize } from '../../utils/getSizes';
import { getBorder } from '../Dropdown/StyledDropdown';

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
}

const StyledSelect = styled.select < SelectI > `
  color: ${({ color }) => color || 'inherit'};
  background-color: ${({ background }) => background || 'inherit'};
  font-family: ${({ fontFamily }) => (fontFamily ? `${fontFamily}, sans-serif` : "'Roboto', sans-serif")};
  font-size: ${({ fontSize }) => getSize(fontSize)};
  width: 100%;
  ${(props) => getHeight(props)};
  ${(props) => getLateralPadding(props)};
  ${({ border }) => getBorder(border)};
  ${({ radius }) => (typeof radius === 'string'
    ? `border-radius: ${radius}; `
    : `border-radius: ${radius}rem;`)};
  padding: 0 ${(p) => p.configuration.spacing.sm};
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
