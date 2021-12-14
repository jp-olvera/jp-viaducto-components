import styled, { css } from 'styled-components';
import { ConfigProps } from '../../ballena-types';

interface TooltipContainerProps {
  configuration: ConfigProps;
  color: string;
  backgroundColor: string;
  family: string | undefined;
  position: string;
}

export const TooltipContainer = styled.div<TooltipContainerProps>`
  background-color: ${({ backgroundColor, configuration }) =>
    configuration.colors[backgroundColor]
      ? configuration.colors[backgroundColor].default
      : backgroundColor};
  font-family: ${(p) => p.family || p.configuration.fontFamily};
  color: ${(p) => p.configuration.colors.text[p.color] || p.color};
  border-radius: 0.125rem;
  box-sizing: border-box;
  hyphens: auto;
  max-width: 15.625rem;
  min-height: 2rem;
  min-width: 2rem;
  padding: 0.373rem 0.5rem;
  &:after {
    content: ' ';
    position: absolute;
    ${(p) => setArrow(p.position, p.backgroundColor)}
    border-width: 0.313rem;
    border-style: solid;
  }
`;

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
