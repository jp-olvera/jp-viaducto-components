import React, { useContext } from 'react';
import { ConfigContext } from '../../providers';
import StyledHideable from './StyledHideable';
/**
 * Component hidden by default that receives a breakpoint from which
 * it's gonna be visible and a boolean that indicates if it's gonna be visible
 * after the specified breakpoint or before,
 * If after is assigned to false, it's gonna be visible at the beginning
 * and hidden after the specified breakpoint, breakpoints are based on your configuration
 */
export interface Hideable extends React.HTMLAttributes<HTMLDivElement> {
  /** Component to render as child */
  children: any;
  /** Breakpoint from which it's gonna be visible */
  after?: boolean;
  /** Indicates if visible after the breakpoint, defaults to true */
  visibleOn?: null | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

/**
 * Component hidden by default that receives a breakpoint from which
 * it's gonna be visible and a boolean that indicates if it's gonna be visible
 * after the specified breakpoint or before,
 * If after is assigned to false, it's gonna be visible at the beginning
 * and hidden after the specified breakpoint, breakpoints are based on your configuration
 * @param {any} children Component to render as child
 * @param {string} visibleOn Breakpoint from which it's gonna be visible
 * @param {boolean} after Indicates if visible after the breakpoint, defaults to true
 */

const Hideable = ({ children, after = true, visibleOn = null, ...rest }: Hideable) => {
  const { configuration } = useContext(ConfigContext);
  const className = rest.className || '';
  return (
    <StyledHideable
      {...rest}
      visibleOn={visibleOn}
      after={after}
      configuration={configuration}
      className={`fui-redlines ${className}`}
    >
      {children}
    </StyledHideable>
  );
};

export default Hideable;
