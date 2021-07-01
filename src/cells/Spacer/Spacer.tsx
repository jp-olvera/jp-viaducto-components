import React, { useContext } from 'react';
import styled from 'styled-components';
import { ConfigContext } from '../../providers';

const Box = styled.div < any > `
  width: ${(p) => (p.direction === 'horizontal' ? p.configuration.spacing[p.size] : '100%')};
  height: ${(p) => (p.direction === 'vertical' ? p.configuration.spacing[p.size] : '100%')};
  display: ${(p) => (p.direction === 'vertical' ? 'block' : 'inline-block')};
  border: ${({ sb }) => (sb !== null ? `2px solid ${sb}` : 'none')};
`;

/**
 * A component that renders a spacer element
 * @param {string} direction direction of the spacing
 * @param {string} size size of the spacing
 * @param {boolean} sb border color for storybook
 */

interface SpacerInterface {
  size?: string;
  direction?: string;
  sb?: boolean | null;
}

const Spacer = ({
  size = 'none',
  direction = 'vertical',
  sb = null,
}: SpacerInterface) => {
  const { configuration } = useContext(ConfigContext);
  return (
    <Box
      size={size}
      direction={direction}
      sb={sb}
      configuration={configuration}
    />
  );
};

export default Spacer;
