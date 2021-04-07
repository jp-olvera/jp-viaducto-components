import styled from 'styled-components';

import config from '../../utils/config';
const { spacing, text } = config;

export const StyledAnchor = styled.a`
  box-sizing: border-box;
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
`;


export default StyledAnchor;
