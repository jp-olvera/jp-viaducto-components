import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import GridContext from './GridProvider';
import { ConfigContext } from '../../providers';

interface DivProps {
  gap: number;
  configuration: any;
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}
const Div = styled.div < DivProps > `
  margin: ${(p) => `0 ${p.gap / 2}px`};
  flex-basis: 0%;
  flex-shrink: 0;
  flex-grow: 1;

  @media (max-width: ${(p) => p.configuration.breakpoints.xs}) {
    flex-basis: ${(p) => `calc(100% - ${p.gap}px)`};
    flex-grow: 0;
  }
  ${(p) => getMedia(p.xs, p.configuration.breakpoints.xs, p.gap)};
  ${(p) => getMedia(p.sm, p.configuration.breakpoints.sm, p.gap)};
  ${(p) => getMedia(p.md, p.configuration.breakpoints.md, p.gap)};
  ${(p) => getMedia(p.lg, p.configuration.breakpoints.lg, p.gap)};
  ${(p) => getMedia(p.xl, p.configuration.breakpoints.xl, p.gap)};
`;

const getMedia = (xs: number, breakpoint: string, gap: number) => {
  if (xs > 0 && xs <= 12) {
    const width = (xs * 100) / 12;

    return css`
      @media (min-width: ${breakpoint}) {
        flex-basis: calc(${width}% - ${gap}px);
        flex-grow: 0;
      }
    `;
  }
  return css``;
};
interface ColumnProps {
  children?: React.ReactNode;
  size?: number;
  style?: any;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

const Column = ({
  children = null,
  size = 0,
  style = {},
  xs = 0,
  sm = 0,
  md = 0,
  lg = 0,
  xl = 0,
  ...rest
}: ColumnProps) => {
  const { gap } = useContext(GridContext);
  const { configuration } = useContext(ConfigContext);
  let newXs = xs;
  if (xs === 0) {
    newXs = size;
  }
  return (
    <Div
      style={style}
      gap={gap}
      configuration={configuration}
      xs={newXs}
      sm={sm}
      md={md}
      lg={lg}
      xl={xl}
      {...rest}
    >
      {children}
    </Div>
  );
};

export default Column;
