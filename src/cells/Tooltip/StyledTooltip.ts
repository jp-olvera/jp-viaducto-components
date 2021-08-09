import styled, { css } from 'styled-components';

export const TooltipContainer = styled.div < any > `
  font-family: ${(p) => p.family || p.configuration.fontFamily};
  position: relative;
  display: block;
  z-index: 1;
  & .tooltip {
    background-color: ${({ color, configuration }) => color || configuration.colors.primary.default};
    text-align: center;
    padding: 0.313rem;
    border-radius: 0.375rem;
    word-break: break-word;
    hyphens: auto;
    opacity: ${({ active }) => (active ? '1' : ' 0')};
    width: clamp(10rem, calc(10rem + ((1vw - 0.1rem) * 22.7273)), 35rem);
    word-break: break-all;
    overflow-wrap: break-word;
    height: ${({ active }) => (active ? 'auto' : ' 0')};
    font-size: ${({ active }) => (active ? '0.9rem' : ' 0')};
    color: ${({ textColor, configuration, active }) => (active
    ? textColor || configuration.colors.text[textColor || 'dark']
    : 'transparent')};
    position: absolute;
    z-index: 1;
    ${({ position }) => setPosition(position)}
    &:after {
      content: ' ';
      position: absolute;
      ${({ position, color, configuration }) => setArrow(position, color || configuration.colors.primary.default)}
      border-width: 0.313rem;
      border-style: solid;
    }
  }
`;

const setPosition = (position: string) => {
  switch (position) {
    case 'right':
      return css`
        top: -0.313rem;
        left: 105%;
      `;
    case 'left':
      return css`
        top: -0.313rem;
        right: 105%;
      `;
    case 'bottom':
      return css`
        top: 120%;
        left: 50%;
        margin-left: -3.75rem;
      `;
    case 'top':
    default:
      return css`
        bottom: 120%;
        left: 50%;
        margin-left: -3.75rem;
      `;
  }
};

const setArrow = (position: string, color: string) => {
  switch (position) {
    case 'left':
      return css`
        top: 50%;
        left: 100%;
        margin-top: -0.313rem;
        border-color: transparent transparent transparent ${color};
      `;
    case 'right':
      return css`
        top: 50%;
        right: 100%;
        margin-top: -0.313rem;
        border-color: transparent ${color} transparent transparent;
      `;
    case 'bottom':
      return css`
        bottom: 100%;
        left: 50%;
        margin-left: -0.313rem;
        border-color: transparent transparent ${color} transparent;
      `;
    case 'top':
    default:
      return css`
        top: 100%;
        left: 50%;
        margin-left: -0.313rem;
        border-color: ${color} transparent transparent transparent;
      `;
  }
};
