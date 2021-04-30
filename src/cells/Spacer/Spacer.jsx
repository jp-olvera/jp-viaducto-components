import React, { useContext } from 'react';
import { ConfigContext } from '../../providers';
import styled from 'styled-components';

const Box = styled.div`
  width: ${(p) =>
    p.direction === 'horizontal' ? p.configuration.spacing[p.size] : '100%'};
  height: ${(p) =>
    p.direction === 'vertical' ? p.configuration.spacing[p.size] : '100%'};
  display: ${(p) => (p.direction === 'vertical' ? 'block' : 'inline-block')};
  border: ${({ sb }) => (sb ? `2px solid ${sb}` : 'none')};
`;

/**
 * A component that renders a spacer element
 * @param {string} size size of the spacing
 * @param {string} direction direction of the spacing
 * @param {boolean} sb border color for storybook
 */
const Spacer = ({ size = 'none', direction = 'vertical', sb = 'none' }) => {
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
