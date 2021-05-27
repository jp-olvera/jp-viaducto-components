import styled, { css } from 'styled-components';

import { getSize, getRadioSizes } from '../../utils/getSizes';

export const StyledLabel = styled.label < any > `
  ${(p) => (p.family !== null
    ? css`
          font-family: ${p.family};
        `
    : css``)};
  font-size: ${({ fontSize }) => getSize(fontSize)};

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
    background-repeat: no-repeat;
    background-position: 50% 50%;
    border: 0.125rem solid #ccc;
    transition: 0.2s ease-in-out;
    transition-property: background-color, border;
    &:hover:not(:disabled) {
      background-image: url(data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Ccircle%20fill%3D%22%23fff%22%20cx%3D%228%22%20cy%3D%228%22%20r%3D%222%22%20%2F%3E%0A%3C%2Fsvg%3E);
      ${(p) => getRadioSizes(p.radioSize).circle_size};
      background-color: #444444;
    }
    &:checked {
      background-image: url(data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Ccircle%20fill%3D%22%23fff%22%20cx%3D%228%22%20cy%3D%228%22%20r%3D%222%22%20%2F%3E%0A%3C%2Fsvg%3E);
      ${(p) => getRadioSizes(p.radioSize).circle_size};
      background-color: ${({ color }) => color};
      border-color: transparent;
      &:hover {
        background-color: #444444;
      }
    }
    &:disabled {
      background-color: #cecece;
      cursor: not-allowed;
      &:hover {
        background-color: #cecece;
      }
    }
  }
`;
