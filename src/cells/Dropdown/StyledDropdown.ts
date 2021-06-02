import styled, { css } from 'styled-components';
import { getBorder } from '../../utils/getSizes';

export const Wrapper = styled.div < any > `
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  height: ${({ height }) => height};
`;
export const Activator = styled.button < any > `
  ${(p) => (p.family !== null
    ? css`
          font-family: ${p.family};
        `
    : css``)};
  ${({ border }) => getBorder(border)};
  align-items: center;
  background-color: inherit;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  color: inherit;
  cursor: pointer;
  font-size: 1rem;
  font-style: normal;
  font-weight: normal;
  height: 100%;
  line-height: 1.375rem;
  margin: 0;
  padding: 0.313rem 0;
  width: 1.5rem;
  .small {
    font-size: calc(1rem * 0.8);
  }
  .activator-icon {
    height: 1rem;
  }

  @media screen and (min-width: ${({ configuration }) => configuration.breakpoints.sm}) {
    min-width: 10.688rem;
    height: 100%;
    width: calc(12.06rem * 0.8);
    .activator-text {
      padding-left: 1.2rem;
    }
    .activator-icon {
      height: 1rem;
      margin-left: auto;
      padding-right: 1.2rem;
    }
  }

  @media screen and (min-width: ${({ configuration }) => configuration.breakpoints.lg}) {
    width: 12.06rem;
    height: 100%;
    margin: auto;
    .activator-text {
      padding-left: 1.2rem;
    }
    .activator-icon {
      height: 1rem;
      margin-left: auto;
      padding-right: 1.2rem;
    }
  }
`;

export const ItemsContainer = styled.div < any > `
  transition: all 0.2s
    ${({ configuration }) => configuration.transitionTimingFunction};
  .left {
    left: 100%;
  }
  background: #ffffff;
  border: 0.063rem solid #eaedf3;
  box-sizing: border-box;
  box-shadow: 0 0.063rem 0.188rem rgba(0, 0, 0, 0.04);
  color: black;
  display: flex;
  left: 0;
  margin: 0;
  min-width: auto !important;
  padding: 0;
  position: absolute;
  opacity: 0;
  visibility: hidden;
  width: 7.5rem !important;
  z-index: 1;
  flex-direction: column;
  &.active {
    visibility: visible;
    opacity: 1;
    transition: all 0.2s
      ${({ configuration }) => configuration.transitionTimingFunction};
  }
  .hover {
    width: inherit;
    margin-bottom: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;
    &:hover {
      background-color: ${(p) => p.hoverColor};
    }
  }
`;
