import styled from 'styled-components';
import { getSize, getRangeSize } from '../../utils/getSizes';

export const Div = styled.div < any > `
  opacity: ${(p) => (p.disabled ? '0.65' : '1')};
  font-family: ${(p) => p.family || p.configuration.fontFamily};
  ${(p) => p.disabled && 'cursor:not-allowed'};
  .slider {
    position: relative;
    width: 100%;
    z-index: -1;
  }

  .slider__track,
  .slider__range,
  .slider__left-value,
  .slider__right-value {
    position: absolute;
  }

  .slider__track,
  .slider__range {
    border-radius: 0.188rem;
    height: 0.313rem;
  }

  .slider__track {
    background-color: ${(p) => (p.double ? '#ced4da' : p.color || p.configuration.colors.primary.default)};
    width: 100%;
    z-index: 1;
  }

  .slider__range {
    background-color: ${(p) => (p.double ? p.color || p.configuration.colors.primary.default : '#cecece')};
    z-index: 2;
  }

  .slider__left-value,
  .slider__right-value {
    color: ${(p) => p.configuration.colors.text[p.textColor]
      || p.textColor
      || p.configuration.colors.text.dark};
    font-size: ${(p) => getSize(p.fontSize)};
    margin-top: 1.25rem;
  }

  .slider__left-value {
    left: 0.375rem;
  }

  .slider__right-value {
    right: -0.25rem;
  }

  /* Removing the default appearance */
  .thumb,
  .thumb::-webkit-slider-thumb {
    -webkit-appearance: none;
  }

  .thumb {
    pointer-events: none;
    position: absolute;
    height: 0;
    width: calc(100% - 2rem);
    outline: none;
  }

  /* For Chrome browsers */
  .thumb::-webkit-slider-thumb {
    background-color: #f1f5f7;
    border: none;
    border-radius: 50%;
    box-shadow: 0 0 0.063rem 0.063rem #ced4da;
    cursor: ${(p) => (p.disabled ? 'not-allowed' : 'pointer')};
    height: ${(p) => getRangeSize(p.size)};
    width: ${(p) => getRangeSize(p.size)};
    margin-top: 0.25rem;
    pointer-events: all;
    position: relative;
  }

  .thumb--left::-webkit-slider-thumb {
    z-index: 3;
  }

  .thumb--right::-webkit-slider-thumb {
    z-index: 4;
  }

  /* For Firefox browsers */
  .thumb::-moz-range-thumb {
    background-color: #f1f5f7;
    border: none;
    border-radius: 50%;
    box-shadow: 0 0 0.063rem 0.063rem #ced4da;
    cursor: ${(p) => (p.disabled ? 'not-allowed' : 'pointer')};
    height: ${(p) => getRangeSize(p.size)};
    width: ${(p) => getRangeSize(p.size)};
    margin-top: 0.25rem;
    pointer-events: all;
    position: relative;
  }

  .thumb--left::-moz-range-thumb {
    z-index: 3;
  }

  .thumb--right::-moz-range-thumb {
    z-index: 4;
  }
`;
