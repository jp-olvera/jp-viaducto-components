import styled, { css } from 'styled-components';

export const TooltipContainer = styled.div`
  font-family: ${({ family }) =>
    family ? `'${family}', sans-serif` : 'inherit'};
  font-size: 0.9rem;
  position: relative;
  display: inline-block;
  & .tooltip {
    opacity: ${({ active }) => (active ? '1' : ' 0')};
    transition: opacity 0.2s;
    background-color: ${({ color }) => color};
    color: ${({ textColor, configuration }) =>
      configuration.text[textColor] || textColor};
    text-align: center;
    padding: 0.313rem;
    border-radius: 0.375rem;
    word-break: break-word;
    hyphens: auto;
    width: fit-content;
    position: absolute;
    z-index: 1;
    ${({ position }) => setPosition(position)}
    & ::after {
      ${({ position, color }) => setArrow(position, color)}
      border-width: 0.313rem;
      border-style: solid;
    }
  }
`;

const setPosition = (position) => {
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
        width: 7.5rem;
        top: 120%;
        left: 50%;
        margin-left: -3.75rem;
      `;
    case 'top':
    default:
      return css`
        width: 7.5rem;
        bottom: 120%;
        left: 50%;
        margin-left: -3.75rem;
      `;
  }
};

const setArrow = (position, color) => {
  switch (position) {
    case 'left':
      return css`
        content: ' ';
        position: absolute;
        top: 50%;
        left: 100%;
        margin-top: -0.313rem;
        border-color: transparent transparent transparent ${color};
      `;
    case 'right':
      return css`
        content: ' ';
        position: absolute;
        top: 50%;
        right: 100%;
        margin-top: -0.313rem;
        border-color: transparent ${color} transparent transparent;
      `;
    case 'bottom':
      return css`
        content: ' ';
        position: absolute;
        bottom: 100%;
        left: 50%;
        margin-left: -0.313rem;
        border-color: transparent transparent ${color} transparent;
      `;
    case 'top':
    default:
      return css`
        content: ' ';
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -0.313rem;
        border-color: ${color} transparent transparent transparent;
      `;
  }
};
