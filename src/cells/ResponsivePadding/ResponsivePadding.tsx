import React, { useContext } from 'react';
import { ConfigContext } from '../../providers';
import StyledPadding from './StyledPadding';

/** Container component. This component will set padding in the direction implemented to children */
export interface ResponsivePadding extends React.HTMLAttributes<HTMLDivElement> {
  /** Child element */
  children: any;
  /** Set padding selected in top direction, this will override parallel props */
  top?: null | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  /** Set padding selected in right direction, this will override parallel props */
  right?: null | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  /** Set padding selected in bottom direction, this will override parallel props */
  bottom?: null | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  /** Set padding selected in left direction, this will override parallel props */
  left?: null | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  /** Set padding selected in vertical direction */
  vertical?: null | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  /** Set padding selected in horizontal direction */
  horizontal?: null | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
}

/**
 * Container component. This component will set padding in the direction implemented to children
 * @param {string} top Set padding selected in top direction, this will override parallel props
 * @param {string} right Set padding selected in right direction, this will override parallel props
 * @param {string} bottom Set padding selected in bottom direction, this will override parallel props
 * @param {string} left Set padding selected in left direction, this will override parallel props
 * @param {string} vertical Set padding selected in vertical direction
 * @param {string} horizontal Set padding selected in horizontal direction
 * @param {boolean} expandHorizontal Set the width prop as 100% of the parent
 * @param {boolean} expandVertical Set the height prop as 100% of the parent
 * @param {any} children Child element
 */

const ResponsivePadding = ({
  top = null,
  right = null,
  bottom = null,
  left = null,
  vertical = null,
  horizontal = null,
  children,
  ...rest
}: ResponsivePadding) => {
  const { configuration } = useContext(ConfigContext);
  let pTop: null | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' = null;
  let pBottom: null | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' = null;
  let pLeft: null | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' = null;
  let pRight: null | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' = null;

  if (vertical !== null) {
    pTop = vertical;
    pBottom = vertical;
  }
  if (horizontal !== null) {
    pRight = horizontal;
    pLeft = horizontal;
  }
  if (top !== null) {
    pTop = top;
  }
  if (bottom !== null) {
    pBottom = bottom;
  }
  if (left !== null) {
    pLeft = left;
  }
  if (right !== null) {
    pRight = right;
  }
  const className = rest.className || '';
  return (
    <StyledPadding
      {...rest}
      minBreakpoint={configuration.breakpoints.xs}
      maxBreakpoint={configuration.breakpoints.xl}
      configuration={configuration}
      top={pTop}
      bottom={pBottom}
      left={pLeft}
      right={pRight}
      className={`fui-redlines ${className}`}
    >
      {children}
    </StyledPadding>
  );
};

export default ResponsivePadding;
