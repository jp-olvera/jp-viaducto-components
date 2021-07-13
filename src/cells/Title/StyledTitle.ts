import styled, { css } from 'styled-components';

import { getTitleLineHeight, getFontSize } from '../../utils/getSizes';

const StyledTitle = styled.h1 < any > `
  ${(p) => (p.family !== null
    ? css`
          font-family: ${p.family};
        `
    : css``)};
  font-weight: ${({ weight }) => weight || 'normal'};
  font-style: ${({ fontStyle }) => fontStyle || 'normal'};
  margin: ${({ margin }) => margin || '0'};
  font-size: ${({ level }) => getFontSize(level)};
  text-align: ${({ align }) => align || 'left'};
  letter-spacing: ${({ spacing }) => spacing || 'normal'};
  line-height: ${({ lineHeight, level }) => getTitleLineHeight(lineHeight, level, false)};
  color: ${({ configuration, color }) => configuration.text[color] || color};
  vertical-align: ${({ verticalAlign }) => verticalAlign || 'baseline'};
  @media (min-width: ${({ configuration }) => configuration.breakpoints.xl}) {
    line-height: ${({ lineHeight, level }) => getTitleLineHeight(lineHeight, level, true)};
  }
`;

export default StyledTitle;
