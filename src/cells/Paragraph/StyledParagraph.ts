import styled from 'styled-components';

import { getSize, getLineHeight } from '../../utils/getSizes';

interface StyledParagraphI {
  readonly align?: string;
  readonly family?: string;
  readonly configuration?: any;
  readonly fontStyle?: string;
  readonly margin?: string;
  readonly weight?: string;
  readonly spacing?: string;
  readonly size?: string;
  readonly lineHeight?: string;
  readonly verticalAlign?: string;
  readonly color: string;
}
const StyledParagraph = styled.p<StyledParagraphI>`
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

export default StyledParagraph;
export { getSize };
