import React, { useContext } from 'react';
import styled from 'styled-components';
import { ConfigContext } from '../../providers';

const Box = styled.div<any>`
  width: ${(p) => (p.direction === 'horizontal' ? p.configuration.spacing[p.size] : '100%')};
  height: ${(p) => (p.direction === 'vertical' ? p.configuration.spacing[p.size] : '100%')};
  display: ${(p) => (p.direction === 'vertical' ? 'block' : 'inline-block')};
`;
/** A component that renders a spacer element */
export interface Spacer extends React.HTMLAttributes<HTMLDivElement> {
  /** direction of the spacing */
  direction?: 'vertical' | 'horizontal';
  /** size of the spacing */
  size?: 'none' | 'nano' | 'micro' | 'tiny' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
}

/**
 * A component that renders a spacer element
 * @param {string} direction direction of the spacing
 * @param {string} size size of the spacing
 */

const Spacer = ({ size = 'none', direction = 'vertical', ...rest }: Spacer) => {
  const { configuration } = useContext(ConfigContext);
  const className = rest.className || '';
  return (
    <Box
      {...rest}
      size={size}
      direction={direction}
      configuration={configuration}
      className={`fui-redlines ${className}`}
    />
  );
};

export default Spacer;
