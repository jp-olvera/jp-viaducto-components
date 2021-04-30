import React, { useContext } from 'react';
import { ConfigContext } from '../../providers';
import StyledParagraph from './StyledParagraph';

/**
 * Paragraph component overrides the HTML p tag
 * @param {String} children The content of the Paragraph
 * @param {Object} props HTML attributes for P tag
 */
const Paragraph = ({ children, columns, ...props }) => {
  const { configuration } = useContext(ConfigContext);

  return (
    <StyledParagraph columns={columns} {...props} configuration={configuration}>
      {children}
    </StyledParagraph>
  );
};

export default Paragraph;
