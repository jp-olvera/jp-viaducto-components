import styled from 'styled-components';

import config from '../../utils/config';
const { spacing, text, breakpoints } = config;

export const StyledAnchor = styled.a`
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans&family=Manrope&display=swap');
  font-family: ${({ family }) => family ? `'${family}', sans-serif` : "'Manrope', sans-serif;"};
  box-sizing: border-box;
  cursor: pointer;
  text-decoration: none;
  color: ${({ color }) =>
    color !== null ? text[color] : '#005fb2'} !important;
  &:hover {
    text-decoration: underline;
    svg {
      transform: translateX(0);
    }
  }

  svg {
    transform: translateX(-0.2rem);
  }
  &:visited {
    text-decoration: none;
    color: #005fb2;
  }

  svg {
    stroke: #005fb2;
    display: inline-block;
    vertical-align: middle;
    margin-left: ${spacing.lg};
    transition: transform 0.2s;
    height: 1em;
  }

  font-size: ${({ size }) => getSize(size)};

  @media screen and (min-width: ${breakpoints.xl}) {
    font-size: ${({ size }) => getSize(size, true)};
  }
  
`;

const getSize = (size = 'md', max = false) => {
  switch (size) {
    case 'xxs':
      return max ? 'calc(0.5rem * 1.125)' : '0.5rem';
    case 'xs':
      return max ? 'calc(0.694rem * 1.125)' : '0.694rem';
    case 'sm':
      return max ? 'calc(0.83rem * 1.125)' : '0.83rem';
    case 'lg':
      return max ? 'calc(1.2rem * 1.125)' : '1.2rem';
    case 'md':
    default:
      return max ? 'calc(1rem * 1.125)' : '1rem';
  }
}

export default StyledAnchor;
