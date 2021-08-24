import { ConfigProps } from 'ballena-types';
import styled, { css } from 'styled-components';

interface SDP { config: ConfigProps; range:boolean }
export const StyledDatePicker = styled.div < SDP > `
  background-color: ${(p) => p.config.colors.background};
  max-width: 17rem;
  height: 18rem;
  .calendar{
    border: ${(p) => (!p.range ? `0.063rem solid ${p.config.colors.defaultInputBorderColor}` : 'none')};
  }
  .date-picker-head {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: auto;
  }
  .date-chevron {
    background-color: transparent;
    border: none;
    transform: scale(0.75);
    cursor: pointer;
    &:hover:not(:disabled) {
      filter: brightness(0.95);
      background-color: #fafafa;
    }
    &:disabled{
      cursor: not-allowed;
      opacity: 0.3;
    }
  }
  .date-flex {
    display: flex !important;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
  }
  .date-calendar {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
  }
  .date-days-letter{
    display: flex !important;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const HR = styled.hr`
  border-color: #f0f0f0;
`;

interface DayI {
  range: boolean;
  isSelecting: boolean;
  config: ConfigProps;
  zero: boolean;
  shapeColor:
    | 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger'
    | 'tab';
}

export const Day = styled.button < DayI > `
  transition: .2s ease;
  box-sizing: border-box;
  cursor: pointer;
  width: 1.75rem;
  height: 1.5rem;
  border-radius: ${(p) => p.config.radius.md};
  color: ${(p) => (p.zero ? 'transparent' : p.config.colors.text.dark)} !important;
  background-color: ${(p) => (p.zero ? 'transparent' : p.config.colors.background)};
  border: none;
  text-align: center;
  margin: 0.15rem 0.15rem;
  text-align: center !important;
  &:hover {
    filter: brightness(${(p) => (p.isSelecting || p.disabled ? 1 : 0.95)});
    ${(p) => p.isSelecting && !p.disabled && hoverBehevior(p)}
  }
  &:disabled{
    cursor: not-allowed;
    background-color: ${(p) => p.config.colors.disableColor};
  }
  &.date-today {
    background-color: ${(p) => p.config.colors.background} !important;
    border: 0.063rem solid ${(p) => p.config.colors[p.shapeColor].default} !important;
  }
  &.date-selected {
    background-color: ${(p) => p.config.colors[p.shapeColor].default} !important;
    color: ${(p) => p.config.colors[p.shapeColor].text} !important;
  }
`;

export const hoverBehevior = (p: { config:ConfigProps, shapeColor:string}) => css`
    background-color: ${p.config.colors[p.shapeColor].default}95 !important;
    color: ${p.config.colors[p.shapeColor].text} !important;
  `;
