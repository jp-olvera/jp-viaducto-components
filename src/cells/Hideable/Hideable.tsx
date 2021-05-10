import React, { useContext } from 'react';
import { ConfigContext } from '../../providers';
import StyledHideable from './StyledHideable';

interface HideableInterface {
  visibleOn?: any;
  after?: boolean;
  children?: any;
}

/**
 * Component hidden by default that receives a breakpoint from which
 * it's gonna be visible and a boolean that indicates if it's gonna be visible
 * after the specified breakpoint or before,
 * If after is assigned to false, it's gonna be visible at the beginning
 * and hidden after the specified breakpoint, breakpoints are based on your configuration
 * @param {string} visibleOn Breakpoint from which it's gonna be visible
 * @param {boolean} after Indicates if visible after the breakpoint, defaults to true
 */
const Hideable = ({
  visibleOn = null,
  after = true,
  children,
}: HideableInterface) => {
  const { configuration } = useContext(ConfigContext);

  return (
    <StyledHideable
      visibleOn={visibleOn}
      after={after}
      configuration={configuration}
    >
      {children}
    </StyledHideable>
  );
};

export default Hideable;
