import styled from 'styled-components';
import config from '../../utils/config';

const { text, breakpoints } = config;
const StyledParagraph = styled.p`
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans&family=Manrope&display=swap');
  text-align: ${({ align }) => align || 'left'};
  font-family: ${({ family }) => family ? `'${family}', sans-serif` : "'Manrope', sans-serif;"};
  font-style: ${({ fontStyle }) => fontStyle || 'normal'};
  margin: ${({ margin }) => margin || '0'};
  font-weight: ${({ weight }) => weight || '400'};
  letter-spacing: ${({ spacing }) => spacing || 'normal'};
  font-size: ${({ size }) => getSize(size)};
  text-align: ${({ align }) => align || 'left'};
  line-height: ${({ lineHeight }) => lineHeight ? `${lineHeight}` : `calc(${getSize()} * 1.5)`};
  color: ${({ color }) => (text[color] || color || text['dark'])};
  @media screen and (min-width: ${breakpoints.xl}) {
    font-size: ${({ size }) => getSize(size, true)};
    line-height: ${({ lineHeight, size }) => lineHeight ? `${lineHeight}` : `calc(${getSize(size || 'md', true)} * 1.5)`};
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

export default StyledParagraph;
export { getSize };
