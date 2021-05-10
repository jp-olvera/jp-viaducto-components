import styled from 'styled-components';

interface AnchorProps {
  readonly family?: string;
  readonly configuration?: any;
  readonly color: string;
  readonly size?: string;
  readonly verticalAlign?: string;
  readonly href?: string;
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
    transition: transform 0.2s;
    height: 1em;
  }
`;

const getSize = (size: string = 'md', max: boolean = false) => {
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
};

export default StyledAnchor;
