import styled from 'styled-components';
import { ConfigProps } from 'ballena-types';

export const StyledButtonGroup = styled.div<{
  configuration: ConfigProps;
  shapeColor?: string | null;
  colors?: { default: string; hover: string; click: string; text: string; shadow?: string };
}>`
  flex-wrap: nowrap;
  display: flex;
  button {
    border-radius: 0;
    &:not(:last-child) {
      border-right: 1px solid
        ${(p) =>
          p.shapeColor
            ? p.configuration.colors[p.shapeColor].text
            : p.colors
            ? p.colors.text
            : p.configuration.colors['primary'].text} !important;
    }
    &:last-child {
      border-bottom-right-radius: 8px !important;
      border-top-right-radius: 8px !important;
    }
    &:first-child {
      border-bottom-left-radius: 8px !important;
      border-top-left-radius: 8px !important;
    }
  }
`;
