import styled from 'styled-components';
import { getBorder, getSize } from '../../utils/getSizes';

export const StyledTextarea = styled.textarea < any > `
  font-family: ${(p) => p.family || 'inherit'};
  color: ${(p) => p.configuration.text[p.textColor] || p.textColor};
  width: 100%;
  resize: ${(p) => (p.resizable ? 'auto' : 'none')};
  border-radius: ${(p) => p.configuration.radius[p.radius || 'none']};
  ${({ border }) => getBorder(border)};
  font-size: ${(p) => getSize(p.fontSize)};
  padding: ${(p) => `${p.configuration.spacing[p.verticalPadding || 'none']} ${
    p.configuration.spacing[p.lateralPadding || 'none']
  }`};
  ${(p) => (p.borderColor ? `border-color: ${p.borderColor};` : null)};
`;
