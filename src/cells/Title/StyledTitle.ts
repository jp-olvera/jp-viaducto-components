import styled from 'styled-components';

import { getTitleLineHeight, getClamp } from '../../utils/getSizes';

const StyledTitle = styled.h1<any>`
  font-family: ${(p) => p.fontFamily || p.configuration.titleFontFamily};
  font-weight: ${({ weight }) => weight || 'normal'};
  font-style: ${({ fontStyle }) => fontStyle || 'normal'};
  margin: ${({ margin }) => margin || '0'};
  font-size: ${(p) => getClamp(
          p.configuration.textClamp.mobile[p.level],
          p.configuration.textClamp.desktop[p.level],
          p.configuration.breakpoints['xs'],
          p.configuration.breakpoints['xl']
        )};
  text-align: ${({ align }) => align || 'left'};
  letter-spacing: ${({ spacing }) => spacing || 'normal'};
  line-height: ${({ lineHeight, level }) => getTitleLineHeight(lineHeight, level)};
  color: ${({ configuration, color }) => configuration.colors.text[color] || color};
  vertical-align: ${({ verticalAlign }) => verticalAlign || 'baseline'};
`;

export default StyledTitle;
