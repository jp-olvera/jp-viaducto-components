import styled from 'styled-components';
import { getSize } from '../../utils/getSizes';

export const StyledPagination = styled.div < any > `
  width: 100%;
  & * {
    transition: all 0.1s ease-in-out;
    font-family: ${({ family }) => family || 'inherit'};
  }
  & ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: ${(p) => (p.position !== 'center' ? `flex-${p.position}` : 'center')};
    padding: 0;
    margin-left: 0;
    & > * > * {
      font-size: ${(p) => getSize(p.fontSize)};
      color: ${(p) => p.configuration.text[p.textColor]
        || p.textColor
        || p.configuration.text.dark} !important;
      &:hover {
        text-decoration: none;
        filter: ${(p) => (p.variant === 'outline' ? 'invert(1)' : 'invert(0)')} !important;
        & > a {
        }
      }
      display: block;
    }
    & li {
      flex: none;
      padding-left: 0;
      position: relative;
      vertical-align: middle;
      padding: ${(p) => p.configuration.spacing[p.spacing]};
      ${({ radius }) => (typeof radius === 'string'
    ? `border-radius: ${radius}; `
    : `border-radius: ${radius}rem;`)};
      &.active {
        background-color: ${(p) => (p.variant === 'normal' ? p.activeColor : 'transparent')};
        border: 1px solid
          ${(p) => (p.variant === 'normal' ? 'transparent' : p.activeColor)};
        &:hover {
          background-color: ${(p) => p.hoverColor};
          ${({ radius }) => (typeof radius === 'string'
    ? `border-radius: ${radius}; `
    : `border-radius: ${radius}rem;`)};
          & > a {
            filter: ${(p) => (p.variant === 'outline' ? 'invert(1)' : 'invert(0)')} !important;
          }
        }
      }
      &.disabled > * {
        cursor: not-allowed;
        opacity: 0.5;
        &:hover {
          cursor: not-allowed;
        }
      }
      &.dots > * {
        cursor: default !important;
      }
      &:hover:not(.disabled):not(.dots) {
        background-color: ${(p) => p.hoverColor};
        cursor: pointer;
        & > a {
          filter: ${(p) => (p.variant === 'outline' ? 'invert(1)' : 'invert(0)')} !important;
        }
      }
      & a {
        user-select: none;
        text-decoration: none;
        margin: 0;
        outline: none;
        padding: 0 !important;
        & svg {
          user-select: none;
          text-decoration: none;
          vertical-align: middle;
          margin: 0;
        }
      }
    }
  }
`;