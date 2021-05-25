import React, { useContext } from 'react';
import { ConfigContext } from '../../providers';
import StyledParagraph from './StyledParagraph';

/**
 * Paragraph component overrides the HTML p tag
 * @param {String} children The content of the Paragraph
 * @param {String} color It defines the paragraph color
 * @param {String} lineHeight Defines the line height of the paragraph
 * @param {String} fontStyle Defines the style of the letter
 * @param {String} weight Set the bold (font weight) of the letter
 * @param {String} align Aligns the text
 * @param {String} size Set the font size
 * @param {String} spacing Set the letter spacing
 * @param {String} margin Set the margin taking the paragraph as reference
 * @param {String} family Set the font family
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
      size={size}
    >
      {children}
    </StyledParagraph>
  );
};

export default Paragraph;
