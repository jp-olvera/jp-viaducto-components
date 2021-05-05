import styled from 'styled-components';

const StyledParagraph = styled.p`
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans&family=Manrope&display=swap');
  text-align: ${({ align }) => align || 'left'};
  font-family: ${({ family }) =>
    family ? `'${family}', sans-serif` : "'Manrope', sans-serif;"};
  font-style: ${({ fontStyle }) => fontStyle || 'normal'};
  margin: ${({ margin }) => margin || '0'};
  font-weight: ${({ weight }) => weight || '400'};
  letter-spacing: ${({ spacing }) => spacing || 'normal'};
  font-size: ${({ size }) => getSize(size)};
  text-align: ${({ align }) => align || 'left'};
  line-height: ${({ lineHeight, size }) =>
    getLineHeight(lineHeight, size, false)};
  color: ${({ color, configuration }) =>
    configuration.text[color] || color || configuration.text['dark']};
  @media screen and (min-width: ${({ configuration }) =>
      configuration.breakpoints.xl}) {
    line-height: ${({ lineHeight, size }) =>
      getLineHeight(lineHeight, size, true)};
  }
  vertical-align: ${({ verticalAlign }) => verticalAlign || 'baseline'};
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
};

const getLineHeight = (lineHeight = 'md', size = 'md', max = false) => {
  switch (lineHeight) {
    case 'xs':
      return `calc(${getSize(size, max)} * 1.15)`;
    case 'sm':
      return `calc(${getSize(size, max)} * 1.25)`;
    case 'lg':
      return `calc(${getSize(size, max)} * 1.75)`;
    case 'md':
    default:
      return `calc(${getSize(size, max)} * 1.5)`;
  }
};

export default StyledParagraph;
export { getSize };
