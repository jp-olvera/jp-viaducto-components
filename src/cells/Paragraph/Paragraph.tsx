import React, { useContext } from 'react';
import { ConfigContext } from '../../providers';
import StyledParagraph from './StyledParagraph';

/**
 * Paragraph component overrides the HTML p tag
 * @param {String} children The content of the Paragraph
 * @param {Object} props HTML attributes for P tag
 */

interface ParagraphInterface {
  children?: any;
  color?: string;
  size?: string;
  align?: string;
  family?: string;
  configuration?: any;
  fontStyle?: string;
  margin?: string;
  weight?: string;
  spacing?: string;
  lineHeight?: string;
  verticalAlign?: string;
  className?: string;
}

const Paragraph = ({
  children = null,
  color = 'dark',
  size = 'md',
  className = '',
  ...props
}: ParagraphInterface) => {
  const { configuration } = useContext(ConfigContext);

  return (
    <StyledParagraph
      {...props}
      className={className}
      color={color}
      configuration={configuration}
    >
      {children}
    </StyledParagraph>
  );
};

export default Paragraph;
