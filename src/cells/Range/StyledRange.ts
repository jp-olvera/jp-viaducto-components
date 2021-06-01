import styled from 'styled-components';

export const Div = styled.div`
  input[type='range'] {
    --minRangePercent: 0%;
    --maxRangePercent: 0%;
    height: 0.4rem;
  }
  input[type='range']:invalid {
    box-shadow: none;
  }

  position: relative;
  width: 200px;
  text-align: center;
  margin-bottom: 50px;

  &:focus {
    outline: none;
  }

  input:focus {
    outline: none;
  }

  & > label {
    display: none;
  }

  & > input {
    cursor: pointer;
    position: absolute;
  }

  /* webkit specific styling */
  & > input {
    -webkit-appearance: none;
    -moz-appearance: none;
    outline: none !important;
    background: transparent;
  }
  & > input.min {
    background-image: linear-gradient(
      to right,
      silver 0%,
      silver var(--minRangePercent),
      orange var(--minRangePercent),
      orange 100%
    );
  }

  & > input.max {
    background-image: linear-gradient(
      to right,
      orange 0%,
      orange var(--maxRangePercent),
      silver var(--maxRangePercent),
      silver 100%
    );
  }

  & > input::-webkit-slider-runnable-track,
  & > input::-moz-range-track,
  & > input::-ms-track {
    box-sizing: border-box;
    border: none;
    height: 4px;
    background: orange;
    border-radius: 8px;
    height: 10px;
    background-color: transparent;
    background-image: linear-gradient(orange, orange),
      linear-gradient(orange, orange);
    background-size: var(--sx) 10px, calc(100% - var(--sx)) 4px;
    background-position: left center, right center;
    background-repeat: no-repeat;
  }

  & > input:focus {
    outline: none;
  }

  & > input.max::-moz-range-progress {
    background: orange;
    border-radius: 4px;
  }

  & > input.min::-moz-range-progress {
    height: 0.6em;
    background: silver;
    border-radius: 4px;
  }

  input[type='range']::-webkit-slider-thumb,
  input[type='range']::-moz-range-thumb {
    -webkit-appearance: none; /* Override default look */
    -moz-appearance: none;
    appearance: none;
    width: 20px; /* Set a specific slider handle width */
    height: 20px; /* Slider handle height */
    background: green; /* Green background */
    cursor: pointer; /* Cursor on hover */
    border: none;
    color: 1px solid orange;
    border-radius: 50%;
  }

  & > input::-webkit-slider-runnable-track {
    cursor: pointer;
  }
`;
