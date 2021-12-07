import styled from 'styled-components';

import { getSize } from '../../utils/getSizes';

export const StyledAnchor = styled.a<any>`
  display: flex;
  align-items: baseline;
  font-family: ${(p) => p.family || p.configuration.fontFamily};
  color: ${(props) =>
    props.configuration.colors.text[props.color] ||
    props.color ||
    props.configuration.colors.text.dark} !important;
  font-size: ${(props) => getSize(props.size)};
  box-sizing: border-box;
  vertical-align: ${(props) => props.verticalAlign || 'baseline'};
  cursor: pointer;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    .ballena-anchor-icon {
      transform: translateX(0);
    }
  }

  .ballena-anchor-icon {
    transform: translateX(-0.2rem);
  }
  &:visited {
    text-decoration: none;
    color: #005fb2;
  }

  .ballena-anchor-icon {
    stroke: #005fb2;
    display: inline-block;
    vertical-align: middle;
    transition: transform 0.2s ease;
    height: 1em;
    margin: ${(p) =>
      p.lead
        ? `0 ${p.configuration.spacing[p.spacing || 'none']} 0 0`
        : `0 0 0 ${p.configuration.spacing[p.spacing || 'none']}`};
  }
`;

export default StyledAnchor;
