import { ConfigProps } from 'ballena-types';
import styled, { css } from 'styled-components';
import { getLineHeight, getSize } from '../../utils/getSizes';

export interface StyledParagraph {
  configuration: ConfigProps;
  align?: 'left' | 'right' | 'center';
  color: string;
  family?: string | null;
  fontStyle?: 'normal' | 'italic';
  lineHeight?: string;
  margin?: string;
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | string;
  spacing?: string;
  weight?: string;
  verticalAlign?: string;
  ellipsis?: boolean;
}
const StyledParagraph = styled.p<StyledParagraph>`
  text-align: ${({ align }) => align || 'left'};
  font-family: ${(p) => p.family || p.configuration.fontFamily};
  font-style: ${({ fontStyle }) => fontStyle || 'normal'};
  margin: ${({ margin }) => margin || '0'};
  font-weight: ${({ weight }) => weight || 'normal'};
  letter-spacing: ${({ spacing }) => spacing || 'normal'};
  font-size: ${({ size }) => getSize(size)};
  text-align: ${({ align }) => align || 'left'};
  line-height: ${({ lineHeight, size }) => getLineHeight(lineHeight, size)};
  color: ${(p) =>
    p.configuration.colors.text[p.color] || p.color || p.configuration.colors.text.dark};
  vertical-align: ${({ verticalAlign }) => verticalAlign || 'baseline'};
  ${(p) => p.ellipsis && setEllipsisProps()};
`;

export const setEllipsisProps = () => {
  return css`
    width: 100%;
    word-break: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    -webkit-box-orient: vertical;
  `;
};

export default StyledParagraph;
export { getSize };
