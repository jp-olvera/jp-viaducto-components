import { ConfigProps } from 'frontera-types';
import React from 'react';
import styled from 'styled-components';

interface SAI {
  paddingX?: string;
  paddingY?: string;
  expanded?: boolean;
  transition?: string | null;
  configuration: ConfigProps;
}

export const StyledAccordionItem = styled.div<SAI>`
  box-sizing: border-box;
  width: 100%;
  background-color: ${(p) => p.configuration.colors.background};
  .chevron {
    align-items: center;
    display: flex;
    margin-left: auto;
    svg {
      width: 1rem;
      height: 1rem;
    }
  }
  .section {
    border-bottom: ${(p) => p.configuration.colors.defaultInputBorderColor};
    box-sizing: border-box;
    overflow: hidden;
    opacity: 1;
    transform-origin: top center;
    overflow: hidden;
    transition: height 0.2s ease-in-out, padding 0.2s ease-in-out;
  }
`;

const StyledAccordion = styled.div<{ configuration: ConfigProps }>`
  border-top: ${(p) => p.configuration.colors.defaultInputBorderColor};
  box-sizing: border-box;
  width: 100%;
`;

interface AccordionHeaderProps {
  icon: null | React.ReactNode;
  paddingY?: string;
  paddingX?: string;
  transition?: string;
  expanded?: boolean;
}
export const AccordionHeader = styled.button<AccordionHeaderProps>`
  align-items: baseline;
  background: transparent;
  border: none;
  border-bottom: 0.063rem solid #ddd;
  cursor: pointer;
  display: flex;
  margin: 0 !important;
  padding: ${(p) => p.paddingY} ${(p) => p.paddingX};
  overflow: hidden;
  text-align: left;
  width: 100%;
`;

interface ChevronProps {
  transition?: string;
  expanded?: boolean;
  config: ConfigProps;
  iconColor: string;
}

//@ts-ignore
export const Chevron = styled.div<ChevronProps>`
  background-image: url(${(p) => color(p)});
  background-position: right 0 center;
  background-repeat: no-repeat;
  background-size: 1rem;
  flex-shrink: 0;
  height: 1rem;
  margin-left: auto;
  transition: transform 0.2s ${(p) => p.transition || 'ease'};
  transform: ${(p) => (p.expanded ? 'rotate(-180deg)' : 'rotate(0deg)')};
  width: 1rem;
`;

export default StyledAccordion;

const color = (p: any) =>
  `"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23${
    p.config.colors.text[p.iconColor].split('#')[1] || p.iconColor || '000'
  }' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e"`;
