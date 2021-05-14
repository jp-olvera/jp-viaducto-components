import styled from 'styled-components';

import { getSize } from '../../utils/getSizes';

interface AnchorProps {
  readonly family?: string;
  readonly configuration?: any;
  readonly color: string;
  readonly size?: string;
  readonly verticalAlign?: string;
  readonly href?: string;
  readonly transition?: string;
}

export const StyledAnchor = styled.a<AnchorProps>`
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans&family=Manrope&display=swap');
  font-family: ${(props) =>
    props.family ? `'${props.family}', sans-serif` : "'Manrope', sans-serif;"};
  color: ${(props) =>
    props.configuration.text[props.color] || props.color || '#005fb2'};
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
    transition: transform 0.2s ${({ configuration, transition }) => transition || configuration.transitionTimingFunction};
    height: 1em;
  }
`;

export default StyledAnchor;
