import styled from 'styled-components';

import { getTitleLineHeight, getFontSize } from '../../utils/getSizes';

const StyledTitle = styled.h1 < any > `
  font-family: ${(p) => p.fontFamily || p.configuration.titleFontFamily};
  font-weight: ${({ weight }) => weight || 'normal'};
  font-style: ${({ fontStyle }) => fontStyle || 'normal'};
  margin: ${({ margin }) => margin || '0'};
  font-size: ${({ level }) => getFontSize(level)};
  text-align: ${({ align }) => align || 'left'};
  letter-spacing: ${({ spacing }) => spacing || 'normal'};
  line-height: ${({ lineHeight, level }) => getTitleLineHeight(lineHeight, level, false)};
  color: ${({ configuration, color }) => configuration.colors.text[color] || color};
  vertical-align: ${({ verticalAlign }) => verticalAlign || 'baseline'};
  @media (min-width: ${({ configuration }) => configuration.breakpoints.xl}) {
    line-height: ${({ lineHeight, level }) => getTitleLineHeight(lineHeight, level, true)};
  }
`;

export default StyledTitle;
