import styled from 'styled-components';

import { getLineHeight, getFontSize } from '../../utils/getSizes';

interface StyledTitleI {
  readonly family?: string;
  readonly align?: string;
  readonly configuration?: any;
  readonly color: string;
  readonly fontStyle?: string;
  readonly level: string;
  readonly lineHeight?: string;
  readonly margin?: string;
  readonly spacing?: string;
  readonly verticalAlign?: string;
  readonly weight?: string;
}
const StyledTitle = styled.h1<StyledTitleI>`
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans&family=IBM+Plex+Sans&family=Manrope&display=swap');
  font-family: ${({ family }) =>
    family ? `'${family}', sans-serif` : "'DM Sans', sans-serif;"};
  font-weight: ${({ weight }) => weight || 'normal'};
  font-style: ${({ fontStyle }) => fontStyle || 'normal'};
  margin: ${({ margin }) => margin || '0'};
  font-size: ${({ level }) => getFontSize(level)};
  text-align: ${({ align }) => align || 'left'};
  letter-spacing: ${({ spacing }) => spacing || 'normal'};
  line-height: ${({ lineHeight, level }) =>
    getLineHeight(lineHeight, level, false)};
  color: ${({ configuration, color }) =>
    configuration.text[color] || color || configuration.text['dark']};
  vertical-align: ${({ verticalAlign }) => verticalAlign || 'baseline'};
  @media (min-width: ${({ configuration }) => configuration.breakpoints.xl}) {
    line-height: ${({ lineHeight, level }) =>
      getLineHeight(lineHeight, level, true)};
  }
`;

export default StyledTitle;
