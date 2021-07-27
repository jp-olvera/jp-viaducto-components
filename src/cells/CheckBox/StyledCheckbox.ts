import styled from 'styled-components';

import { getSize, getCheckSizes } from '../../utils/getSizes';

export const StyledLabel = styled.label < any > `
  font-family: ${(p) => p.family || p.configuration.fontFamily};
  font-size: ${({ fontSize }) => getSize(fontSize)};
  display: flex;
  align-items: center;
  ${({ disabled, configuration }) => (disabled ? `color: ${configuration.colors.disableColor}` : null)};
  opacity: ${(p) => (p.disabled ? '0.8' : '1')};
  & > .check-label {
    color: ${(p) => p.configuration.colors.text.dark};
  }
  & input {
    &:not(:disabled) {
      cursor: pointer;
    }
    ${({ checkSize }) => getCheckSizes(checkSize).mark};
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    border: 0.125rem solid
      ${(p) => p.configuration.colors.defaultInputBorderColor};
    display: inline-block;
    margin-bottom: 0;
    margin-top: 0;
    overflow: hidden;
    vertical-align: middle;
    -webkit-appearance: none;
    -moz-appearance: none;
    transition: 0.2s ease-in-out;
    transition-property: all, border;
    &:hover:not(:disabled) {
      ${({ checkSize }) => getCheckSizes(checkSize).mark_size};
      background-color: #444444;
    }
    &:checked:not(:disabled) {
      background-image: url(data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2214%22%20height%3D%2211%22%20viewBox%3D%220%200%2014%2011%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpolygon%20fill%3D%22%23fff%22%20points%3D%2212%201%205%207.5%202%205%201%205.5%205%2010%2013%201.5%22%20%2F%3E%0A%3C%2Fsvg%3E%0A);
      ${({ checkSize }) => getCheckSizes(checkSize).mark_size};
      background-color: ${({ color, configuration }) => color || configuration.colors.primary.default};
      border-color: transparent;
      &:hover {
        filter: brightness(1.25);
      }
    }
    &:checked {
      &:disabled {
        background-image: url(data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2214%22%20height%3D%2211%22%20viewBox%3D%220%200%2014%2011%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpolygon%20fill%3D%22%23fff%22%20points%3D%2212%201%205%207.5%202%205%201%205.5%205%2010%2013%201.5%22%20%2F%3E%0A%3C%2Fsvg%3E%0A);
        ${({ checkSize }) => getCheckSizes(checkSize).mark_size};
        background-color: ${({ color, configuration }) => color || configuration.colors.primary.default};
      }
    }
    &:disabled:not(:checked) {
      cursor: not-allowed;
      background-color: ${(p) => p.configuration.colors.disableColor};
      &:hover {
        border-color: ${(p) => p.configuration.colors.defaultInputBorderColor};
      }
    }
  }
`;
