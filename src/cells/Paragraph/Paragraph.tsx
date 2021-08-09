import React, { useContext } from 'react';
import { ConfigContext } from '../../providers';
import StyledParagraph from './StyledParagraph';
/** Paragraph component overrides the HTML p tag */
interface ParagraphInterface {
  /** The content of the Paragraph */
  children: any;
  /** Aligns the text */
  align?: 'left' | 'right' | 'center';
  /** It defines the paragraph color */
  color?: string;
  /** Set the font family */
  family?: string | null;
  /** Defines the style of the letter */
  fontStyle?: 'normal' | 'italic';
  /** Defines the line height of the paragraph */
  lineHeight?: string;
  /** Set the margin taking the paragraph as reference */
  margin?: string;
  /** Set the font size */
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg';
  /** Set the letter spacing */
  spacing?: string;
  /** Set the bold (font weight) of the letter */
  weight?: string;
}

/**
 * Paragraph component overrides the HTML p tag
 * @param {string} children The content of the Paragraph
 * @param {string} align Aligns the text
 * @param {string} color It defines the paragraph color
 * @param {string} family Set the font family
 * @param {string} fontStyle Defines the style of the letter
 * @param {string} lineHeight Defines the line height of the paragraph
 * @param {string} margin Set the margin taking the paragraph as reference
 * @param {string} size Set the font size
 * @param {string} spacing Set the letter spacing
 * @param {string} weight Set the bold (font weight) of the letter
 */

const Paragraph = ({
  children,
  color,
  size,
  ...props
}: ParagraphInterface & React.HTMLAttributes<HTMLParagraphElement>) => {
  const { configuration } = useContext(ConfigContext);

  return (
    <StyledParagraph
      color={color}
      configuration={configuration}
      size={size}
      {...props}
    >
      {children}
    </StyledParagraph>
  );
};

export default Paragraph;
