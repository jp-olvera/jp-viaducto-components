import styled, { css } from 'styled-components';
import { getBorder, getSize } from '../../utils/getSizes';

export const StyledTextarea = styled.textarea < any > `
  ${(p) => (p.family !== null
    ? css`
          font-family: ${p.family};
        `
    : css``)};
  color: ${(p) => p.configuration.text[p.textColor] || p.textColor};
  width: 100%;
  resize: ${(p) => (p.resizable ? 'auto' : 'none')};
  ${({ radius }) => (typeof radius === 'string'
    ? `border-radius: ${radius}; `
    : `border-radius: ${radius === null ? 0 : radius}rem;`)};
  ${({ border }) => getBorder(border)};
  font-size: ${(p) => getSize(p.fontSize)};
  padding: ${(p) => `${p.configuration.spacing[p.verticalPadding || 'none']} ${
    p.configuration.spacing[p.lateralPadding || 'none']
  }`};
  ${(p) => (p.borderColor ? `border-color: ${p.borderColor};` : null)};
`;
