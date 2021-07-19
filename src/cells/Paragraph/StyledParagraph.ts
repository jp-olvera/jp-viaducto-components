import styled from 'styled-components';

import { getSize, getLineHeight } from '../../utils/getSizes';

const StyledParagraph = styled.p < any > `
  text-align: ${({ align }) => align || 'left'};
  font-family: ${(p) => p.family || p.configuration.fontFamily};
  font-style: ${({ fontStyle }) => fontStyle || 'normal'};
  margin: ${({ margin }) => margin || '0'};
  font-weight: ${({ weight }) => weight || '400'};
  letter-spacing: ${({ spacing }) => spacing || 'normal'};
  font-size: ${({ size }) => getSize(size)};
  text-align: ${({ align }) => align || 'left'};
  line-height: ${({ lineHeight, size }) => getLineHeight(lineHeight, size, false)};
  color: ${(p) => p.configuration.colors.text[p.color]
    || p.color
    || p.configuration.colors.text.dark};
  @media screen and (min-width: ${({ configuration }) => configuration.breakpoints.xl}) {
    line-height: ${({ lineHeight, size }) => getLineHeight(lineHeight, size, true)};
  }
  vertical-align: ${({ verticalAlign }) => verticalAlign || 'baseline'};
`;

export default StyledParagraph;
export { getSize };
