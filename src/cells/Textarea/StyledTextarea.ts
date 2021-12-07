import styled from 'styled-components';
import { getBorder, getSize } from '../../utils/getSizes';

export const StyledTextarea = styled.textarea<any>`
  font-family: ${(p) => p.family || p.configuration.fontFamily};
  background-color: ${(p) =>
    !p.disabled ? p.configuration.colors.background : p.configuration.colors.disableColor};
  color: ${(p) =>
    p.configuration.colors.text[p.textColor] || p.textColor || p.configuration.colors.text.dark};
  width: 100%;
  resize: ${(p) => (p.resizable ? 'auto' : 'none')};
  border-radius: ${(p) => p.configuration.radius[p.radius || 'none']};
  ${({ border, configuration }) => getBorder(border, configuration)};
  font-size: ${(p) => getSize(p.fontSize)};
  padding: ${(p) =>
    `${p.configuration.spacing[p.verticalSpacing || 'none']} ${
      p.configuration.spacing[p.horizontalSpacing || 'none']
    }`};
  ${(p) =>
    p.borderColor ? `border-color: ${p.borderColor};` : p.configuration.defaultInputBorderColor};
  ${(p) => p.disabled && 'cursor: not-allowed'};
`;
