import styled from 'styled-components';
import config from '../../utils/config';

const { text, breakpoints } = config;
const StyledParagraph = styled.p`
  transition: all .2s cubic-bezier(0.075, 0.82, 0.165, 1);
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans&family=Manrope&display=swap');
  text-align: ${({ align }) => align || 'left'};
  font-family: ${({ family }) => family ? `'${family}', sans-serif` : "'Manrope', sans-serif;"};
  font-style: ${({ fontStyle }) => fontStyle || 'normal'};
  margin-inline-start: ${({ marginInline }) => marginInline || '0'};
  margin: ${({ margin }) => margin || '0'};
  font-weight: ${({ bold }) => bold || '400'};
  letter-spacing: ${({ spacing }) => spacing || '0'}rem;
  font-size: ${({ size }) => getSize(size)};
  text-align: ${({ align }) => align || 'left'};
  line-height: ${({ lineHeight }) => lineHeight ? `${lineHeight}rem` : '1.77rem'};
  color: ${({ color }) => (color ? text[color] : text['dark'])};
  @media screen and (min-width: ${breakpoints.xl}) {
    font-size: ${({ size }) => getSize(size, true)};
    line-height: ${({ lineHeight }) => lineHeight ?
    `calc(${lineHeight}rem * 1.125)` : 'calc(1.77rem * 1.125)'};
  }
  @media screen and (max-width: ${breakpoints.xs}) {
    display: ${({ hide }) => (hide === 'xs' ? 'none' : '')};
  }
  @media screen and (max-width: ${breakpoints.sm}) {
    display: ${({ hide }) => (hide === 'sm' ? 'none' : '')};
  }
  @media screen and (max-width: ${breakpoints.md}) {
    display: ${({ hide }) => (hide === 'md' ? 'none' : '')};
  }
  @media screen and (max-width: ${breakpoints.lg}) {
    display: ${({ hide }) => (hide === 'lg' ? 'none' : '')};
  }
  @media screen and (max-width: ${breakpoints.xl}) {
    display: ${({ hide }) => (hide === 'xxl' ? 'none' : '')};
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
