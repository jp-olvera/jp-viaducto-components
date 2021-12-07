import React, { useContext } from 'react';
import styled from 'styled-components';
import { ConfigContext } from '../../providers';

const Box = styled.div<any>`
  width: ${(p) => (p.direction === 'horizontal' ? p.configuration.spacing[p.size] : '100%')};
  height: ${(p) => (p.direction === 'vertical' ? p.configuration.spacing[p.size] : '100%')};
  display: ${(p) => (p.direction === 'vertical' ? 'block' : 'inline-block')};
  border: ${({ sb }) => (sb !== null ? `2px solid ${sb}` : 'none')};
`;
/** A component that renders a spacer element */
export interface Spacer extends React.HTMLAttributes<HTMLDivElement> {
  /** direction of the spacing */
  direction?: 'vertical' | 'horizontal';
  /** border color for storybook */
  sb?: string | null;
  /** size of the spacing */
  size?: 'none' | 'nano' | 'micro' | 'tiny' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
}

/**
 * A component that renders a spacer element
 * @param {string} direction direction of the spacing
 * @param {boolean} sb border color for storybook
 * @param {string} size size of the spacing
 */

const Spacer = ({ size = 'none', direction = 'vertical', sb = null, ...rest }: Spacer) => {
  const { configuration } = useContext(ConfigContext);
  return <Box size={size} direction={direction} sb={sb} configuration={configuration} {...rest} />;
};

export default Spacer;
