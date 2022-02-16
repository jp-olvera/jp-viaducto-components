import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { ConfigProps } from 'frontera-types';
import { ConfigContext } from '../../providers';
import GridContext from './GridProvider';

export interface PaddingProps {
  gutter: number;
  expanded: boolean;
  configuration: ConfigProps;
}

const Padding = styled.div<PaddingProps>`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  padding: 0 ${(p) => p.gutter / 2}px;
  ${(p) =>
    p.expanded
      ? css`
          max-width: 100% !important;
        `
      : css``};
  @media (min-width: ${(p) => p.configuration.breakpoints.xs}) {
    max-width: ${(p) => p.configuration.breakpoints.xs};
  }
  @media (min-width: ${(p) => p.configuration.breakpoints.sm}) {
    max-width: ${(p) => p.configuration.breakpoints.sm};
  }
  @media (min-width: ${(p) => p.configuration.breakpoints.md}) {
    max-width: ${(p) => p.configuration.breakpoints.md};
  }
  @media (min-width: ${(p) => p.configuration.breakpoints.lg}) {
    max-width: ${(p) => p.configuration.breakpoints.lg};
  }
  @media (min-width: ${(p) => p.configuration.breakpoints.xl}) {
    max-width: ${(p) => p.configuration.breakpoints.xl};
  }
`;
/** Grid component */
export interface Grid extends React.HTMLAttributes<HTMLDivElement> {
  /** Child element */
  children?: React.ReactNode;
  /** Set full width parent size */
  expanded?: boolean;
  /** Set gutter spacing */
  gutter?: number;
  /** Set columns paddings */
  innerGutter?: number;
}

/**
 * Grid component
 * @param {React.ReactNode} children Child element
 * @param {boolean} expanded Set full width parent size
 * @param {number} gutter Set gutter spacing
 * @param {number} innerGutter Set gutter spacing
 */

const Grid = ({
  children = null,
  gutter = 24,
  innerGutter = 0,
  expanded = false,
  ...rest
}: Grid) => {
  const { configuration } = useContext(ConfigContext);
  const className = rest.className || '';
  return (
    <GridContext.Provider value={{ gap: gutter, innerGap: innerGutter }}>
      <Padding
        {...rest}
        configuration={configuration}
        gutter={gutter}
        expanded={expanded}
        className={`fui-redlines ${className}`}
      >
        {children}
      </Padding>
    </GridContext.Provider>
  );
};

export default Grid;
