import styled from 'styled-components';
import { ConfigProps } from '../../ballena-types';

export const StyledSwitch = styled.label < any > `
  * {
    box-sizing: border-box;
    transition: all 0.2s ease;
  }
  display: block;
  position: relative;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  user-select: none;
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
    &:checked {
      & ~ span {
        background-color: ${({ color, configuration }) => color || configuration.colors.primary.default};
        opacity: ${(p) => (p.disabled ? 0.65 : 1)};
        &:after {
          left: calc(${(p) => switchSize(p).size} * 0.85);
        }
      }
    }
    &:disabled:not(:checked) {
      & ~ span {
        opacity: 0.65;
      }
    }
  }
  span {
    position: absolute;
    top: 0;
    left: 0;
    height: ${(p) => switchSize(p).size};
    width: calc(${(p) => switchSize(p).size} * 1.75);
    border-radius: ${(p) => (p.circular ? '1.563rem' : 0)};
    background-color: darkgray;
    transition: background-color 0.2s ease;
    &:hover:not(:disabled) {
      &:after:not(:disabled) {
        box-sizing: border-box;
        left: ${(p) => switchSize(p).gutter};
        top: ${(p) => switchSize(p).gutter};
        border: ${(p) => p.configuration.border};
      }
    }
    &:after {
      content: '';
      position: absolute;
      left: ${(p) => switchSize(p).gutter};
      top: ${(p) => switchSize(p).gutter};
      width: calc(${(p) => switchSize(p).size} * 0.8);
      height: calc(${(p) => switchSize(p).size} * 0.8);
      border-radius: ${(p) => (p.circular ? '50%' : 0)};
      background-color: white;
      transition: left 0.2s ease;
    }
  }
`;

export const switchSize = (p: { size: string; configuration: ConfigProps }) => ({
  size: p.configuration.controlHeight[p.size],
  gutter: `calc(calc(calc(${
    p.configuration.controlHeight[p.size]
  } * 1.75) * 0.1) * 0.6)`,
});
