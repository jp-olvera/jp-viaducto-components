import React, { useContext } from 'react';
import styled from 'styled-components';
import { ConfigContext } from '../../providers';

const Box = styled.div < any > `
  width: ${(p) => (p.direction === 'horizontal' ? p.configuration.spacing[p.size] : '100%')};
  height: ${(p) => (p.direction === 'vertical' ? p.configuration.spacing[p.size] : '100%')};
  display: ${(p) => (p.direction === 'vertical' ? 'block' : 'inline-block')};
  border: ${({ sb }) => (sb !== null ? `2px solid ${sb}` : 'none')};
`;
/** A component that renders a spacer element */
interface SpacerInterface {
  /** direction of the spacing */
  direction?: string;
  /** border color for storybook */
  sb?: string | null;
  /** size of the spacing */
  size?: string;
}

/**
 * A component that renders a spacer element
 * @param {string} direction direction of the spacing
 * @param {boolean} sb border color for storybook
 * @param {string} size size of the spacing
 */

const Spacer = ({
  size = 'none',
  direction = 'vertical',
  sb = null,
  ...rest
}: SpacerInterface & React.HTMLAttributes<HTMLDivElement>) => {
  const { configuration } = useContext(ConfigContext);
  return (
    <Box
      size={size}
      direction={direction}
      sb={sb}
      configuration={configuration}
      {...rest}
    />
  );
};

export default Spacer;
