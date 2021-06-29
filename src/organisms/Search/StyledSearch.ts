import styled, { css } from 'styled-components';

import { StyledSelect } from '../../cells/Select/StyledSelect';
import getElevation from '../../utils/getElevation';

const height = '3.375rem',
  width = '45.625rem';

export const StyledSearch = styled.div < any > `
  width: 100%;
  height: calc(${height} * 0.8);
  background-color: transparent;
  border: none;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  ${(p) => getElevation(p.elevation, p.elevationDirection)}
  & > * {
    height: 100%;
    box-sizing: border-box;
    ${(p) => (p.family !== null
    ? css`
            font-family: ${p.family};
          `
    : css``)};
  }
  & > input {
    width: 60%;
    border: none;
    font-size: 1rem;
    padding-left: 0.5rem;
    height: 100%;
  }
  & ${StyledSelect} {
    height: 100% !important;
    padding: 0;
    width: 1.5rem;
    & > * {
      width: 100%;
    }
  }
  & > button {
    width: 32%;
    font-size: 1rem;
  }
  @media screen and (min-width: ${({ configuration }) => configuration.breakpoints.sm}) {
    width: calc(${width} * 0.8);
    height: calc(${height} * 0.8);
    & > input {
      width: calc(25.188rem * 0.8);
      border: none;
      font-size: 1rem;
      padding-left: 1.25rem;
      height: 100%;
    }
    & > button {
      width: calc(8.5rem * 0.8);
      font-size: 1rem;
      height: 100%;
    }
    & ${StyledSelect} {
      height: 100%;
      width: 12.06rem !important;
    }
  }
  @media screen and (min-width: ${({ configuration }) => configuration.breakpoints.lg}) {
    width: ${width};
    height: ${height};
    & ${StyledSelect} {
      width: 12.06rem !important;
      height: 100%;
    }
    & > input {
      width: 25.188rem;
      border: none;
      font-size: 1rem;
      padding-left: 1.25rem;
      height: 100%;
    }
    & > button {
      width: 8.5rem;
      font-size: 1rem;
      height: 100%;
    }
  }
`;
