import { ConfigProps } from 'ballena-types';
import styled from 'styled-components';

interface STPI {
  timeFormat: '12h' | '24h';
}
export const StyledTimePicker = styled.div < STPI > `
  transition: all 0.2s linear;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(
    ${(p) => (p.timeFormat === '12h' ? '4' : '3')},
    1fr
  );
  margin: 0;
  .time-column {
    overflow-y: hidden;
    overflow-x: hidden;
    scroll-behavior: smooth;
    &.t-hour,
    &.t-minute {
      border-right: 0.063rem solid #d9d9d9;
    }
    &.t-second {
      ${(p) => p.timeFormat === '12h' && 'border-right: 0.063rem solid #d9d9d9;'}
    }
    &:hover {
      overflow-y: auto;
      border: none;
    }
  }
`;

interface OI {
  config: ConfigProps;
  shapeColor:
    | 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger'
    | 'tab';
}
export const Option = styled.button < OI > `
  min-width: 3rem;
  width: 100%;
  height: 1.75rem;
  display: block;
  margin: 0;
  cursor: pointer;
  border: none;
  background-color: transparent;
  transition: background-color 0.2s linear;
  &.time-not-selected {
    background-color: ${(p) => p.config.colors.background};
  }
  &.time-selected {
    background-color: ${(p) => p.config.colors[p.shapeColor].shadow};
    &:hover {
      opacity: 0.9;
    }
  }
  &:hover:not(.time-selected) {
    background-color: #f5f5f5;
  }
`;
