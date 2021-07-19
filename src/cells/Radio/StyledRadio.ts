import styled from 'styled-components';

import { getSize, getRadioSizes } from '../../utils/getSizes';

export const StyledLabel = styled.label < any > `
  font-family: ${(p) => p.family || p.configuration.fontFamily};
  font-size: ${({ fontSize }) => getSize(fontSize)};
  ${(p) => p.disabled && `color: ${p.configuration.colors.disableColor}`};
  & input {
    &:not(:disabled) {
      cursor: pointer;
    }
    ${(p) => getRadioSizes(p.radioSize).circle};
    border-radius: 50%;
    display: inline-block;
    overflow: hidden;
    margin-top: -0.25rem;
    vertical-align: middle;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-color: transparent;
    background-position: 50% 50%;
    border: ${(p) => p.configuration.border};
    transition: 0.2s ease-in-out;
    transition-property: background-color, border;
    &:hover:not(:disabled):not(:checked) {
      background-image: url(data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Ccircle%20fill%3D%22%23fff%22%20cx%3D%228%22%20cy%3D%228%22%20r%3D%222%22%20%2F%3E%0A%3C%2Fsvg%3E);
      ${(p) => getRadioSizes(p.radioSize).circle_size};
      background-color: #444444;
    }
    &:checked {
      background-image: url(data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Ccircle%20fill%3D%22%23fff%22%20cx%3D%228%22%20cy%3D%228%22%20r%3D%222%22%20%2F%3E%0A%3C%2Fsvg%3E);
      ${(p) => getRadioSizes(p.radioSize).circle_size};
      background-color: ${({ color, configuration }) => color || configuration.colors.primary.default};
      border-color: transparent;
      &:hover:not(:disabled) {
        filter: brightness(1.35);
      }
    }
    &:disabled {
      &:not(:checked) {
        background-color: ${(p) => p.configuration.colors.disableColor};
        border-color: ${(p) => p.configuration.colors.disableColor};
        cursor: not-allowed;
      }
      &:checked {
        cursor: not-allowed;
        opacity: 0.65;
      }
    }
  }
`;
