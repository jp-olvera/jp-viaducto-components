import styled, { css } from 'styled-components';

import { getSize } from '../../utils/getSizes';

export const StyledAnchor = styled.a < any > `
  ${(p) => (p.family !== null
    ? css`
          font-family: ${p.family};
        `
    : null)};
  color: ${(props) => props.configuration.text[props.color] || props.color} !important;
  font-size: ${(props) => getSize(props.size)};
  box-sizing: border-box;
  vertical-align: ${(props) => props.verticalAlign || 'baseline'};
  cursor: pointer;
  text-decoration: none;
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
    margin-left: ${(props) => props.configuration.spacing.lg};
    transition: transform 0.2s
      ${({ configuration, transition }) => transition || configuration.transitionTimingFunction};
    height: 1em;
  }
`;

export default StyledAnchor;
