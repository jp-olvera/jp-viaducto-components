import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { ConfigProps } from 'frontera-types';
import GridContext from './GridProvider';
import { ConfigContext } from '../../providers';

/**
 * getMedio Function set the sizes and breakpoints for Column Component
 * @param xs Set the number for flex-basis
 * @param breakpoint Set the breakpoint to trigger the change
 * @param gap Set the gap number to get the flex-basis
 * @returns {ThemedCssFunction<DefaultTheme>}
 */
const getMedia = (xs: number, breakpoint: string, gap: number) => {
  if (xs > 0 && xs <= 12) {
    const width = (xs * 100) / 12;

    return css`
      @media (min-width: ${breakpoint}) {
        flex-basis: calc(${width}% - ${gap}px);
        width: calc(${width}% - ${gap}px);
        flex-grow: 0;
      }
    `;
  }
  return css``;
};

interface DivProps {
  gap: number;
  innerGap: number;
  configuration: ConfigProps;
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}
const Div = styled.div<DivProps>`
  flex-basis: 0%;
  flex-shrink: 0;
  flex-grow: 1;
  margin: ${(p) => `0 ${p.gap / 2}px`};
  max-width: ${(p) => `calc(100% - ${p.gap}px)`};
  box-sizing: border-box;
  padding-left: ${(p) => `${p.innerGap}px`};
  padding-right: ${(p) => `${p.innerGap}px`};
  @media (max-width: ${(p) => p.configuration.breakpoints.xs}) {
    flex-basis: ${(p) => `calc(100% - ${p.gap}px)`};
    width: ${(p) => `calc(100% - ${p.gap}px)`};
    flex-grow: 0;
  }
  ${(p) => getMedia(p.xs, p.configuration.breakpoints.xs, p.gap)};
  ${(p) => getMedia(p.sm, p.configuration.breakpoints.sm, p.gap)};
  ${(p) => getMedia(p.md, p.configuration.breakpoints.md, p.gap)};
  ${(p) => getMedia(p.lg, p.configuration.breakpoints.lg, p.gap)};
  ${(p) => getMedia(p.xl, p.configuration.breakpoints.xl, p.gap)};
`;

/** Column component */
export interface Column extends React.HTMLAttributes<HTMLDivElement> {
  /** Child element */
  children?: React.ReactNode;
  /** Number of columns sizes rendered */
  size?: number;
  /** Size of column for different breakpoints */
  xs?: number;
  /** Size of column for different breakpoints */
  sm?: number;
  /** Size of column for different breakpoints */
  md?: number;
  /** Size of column for different breakpoints */
  lg?: number;
  /** Size of column for different breakpoints */
  xl?: number;
}

/**
 * Column component
 * @param {React.ReactNode} children Child element
 * @param {number} size Number of columns sizes rendered
 * @param {number} xs Size of column for different breakpoints
 * @param {number} sm Size of column for different breakpoints
 * @param {number} md Size of column for different breakpoints
 * @param {number} lg Size of column for different breakpoints
 * @param {number} xl Size of column for different breakpoints
 */
const Column = ({
  children = null,
  size = 0,
  xs = 0,
  sm = 0,
  md = 0,
  lg = 0,
  xl = 0,
  ...rest
}: Column) => {
  const { gap, innerGap } = useContext(GridContext);
  const { configuration } = useContext(ConfigContext);
  let newXs = xs;
  if (xs === 0) {
    newXs = size;
  }
  return (
    <Div
      gap={gap}
      innerGap={innerGap}
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
