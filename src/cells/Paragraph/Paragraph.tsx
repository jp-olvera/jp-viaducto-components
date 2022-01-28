import React, { useContext } from 'react';
import { ConfigContext } from '../../providers';
import StyledParagraph from './StyledParagraph';

/** Paragraph component overrides the HTML p tag */
export interface Paragraph extends React.HTMLAttributes<HTMLParagraphElement> {
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
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | string;
  /** Set the letter spacing */
  spacing?: string;
  /** Set the bold (font weight) of the letter */
  weight?: string;
  /** Break the text into ellipsis */
  ellipsis?: boolean;
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
 * @param {boolean} ellipsis Break the text into ellipsis
 */
const Paragraph = React.forwardRef<HTMLParagraphElement, Paragraph>(
  ({ children, color = 'dark', ellipsis = false, size, ...props }: Paragraph, ref) => {
    const { configuration } = useContext(ConfigContext);

    return (
      <StyledParagraph
        ref={ref}
        color={color}
        configuration={configuration}
        ellipsis={ellipsis}
        size={size}
        {...props}
      >
        {children}
      </StyledParagraph>
    );
  }
);

export default Paragraph;
