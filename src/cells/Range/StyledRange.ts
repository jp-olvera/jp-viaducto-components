import styled, { css } from 'styled-components';
import { getSize, getRangeSize } from '../../utils/getSizes';

export const Div = styled.div < any > `
  ${(p) => (p.family !== null
    ? css`
          font-family: ${p.family};
        `
    : css``)};
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
    background-color: ${(p) => (p.double ? '#ced4da' : p.color)};
    width: 100%;
    z-index: 1;
  }

  .slider__range {
    background-color: ${(p) => (p.double ? p.color : '#cecece')};
    z-index: 2;
  }

  .slider__left-value,
  .slider__right-value {
    color: ${(p) => p.configuration.text[p.textColor] || p.textColor};
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
    cursor: pointer;
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
    cursor: pointer;
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
