import styled, { css } from 'styled-components';

import { getSize, getCheckSizes } from '../../utils/getSizes';

export const StyledLabel = styled.label < any > `
  ${(p) => (p.family !== null
    ? css`
          font-family: ${p.family};
        `
    : css``)};
  font-size: ${({ fontSize }) => getSize(fontSize)};
  ${({ disabled }) => (disabled ? 'color: #777' : null)};
  & input {
    &:not(:disabled) {
      cursor: pointer;
    }
    ${({ checkSize }) => getCheckSizes(checkSize).mark};
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
      background-image: url(data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2214%22%20height%3D%2211%22%20viewBox%3D%220%200%2014%2011%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpolygon%20fill%3D%22%23fff%22%20points%3D%2212%201%205%207.5%202%205%201%205.5%205%2010%2013%201.5%22%20%2F%3E%0A%3C%2Fsvg%3E%0A);
      ${({ checkSize }) => getCheckSizes(checkSize).mark_size};
      background-color: #444444;
    }
    &:checked:not(:disabled) {
      background-image: url(data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2214%22%20height%3D%2211%22%20viewBox%3D%220%200%2014%2011%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpolygon%20fill%3D%22%23fff%22%20points%3D%2212%201%205%207.5%202%205%201%205.5%205%2010%2013%201.5%22%20%2F%3E%0A%3C%2Fsvg%3E%0A);
      ${({ checkSize }) => getCheckSizes(checkSize).mark_size};
      background-color: ${({ color }) => color};
      border-color: transparent;
      &:hover {
        background-color: #444444;
      }
    }
    &:checked {
      &:disabled {
        background-image: url(data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2214%22%20height%3D%2211%22%20viewBox%3D%220%200%2014%2011%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpolygon%20fill%3D%22%23999%22%20points%3D%2212%201%205%207.5%202%205%201%205.5%205%2010%2013%201.5%22%20%2F%3E%0A%3C%2Fsvg%3E%0A);
        background-color: #f8f8f8;
        border-color: #e5e5e5;
      }
    }
    &:disabled:not(:checked) {
      cursor: not-allowed;
      background-color: #cecece;
      &:hover {
        background-color: #cecece;
      }
    }
  }
`;
