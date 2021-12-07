import React, { forwardRef, TextareaHTMLAttributes, useContext } from 'react';
import { ConfigContext } from '../../providers/ConfigProvider';
import { StyledTextarea } from './StyledTextarea';

/** Textarea component */
export interface Textarea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Set the border(s) of the component */
  border?: 'none' | 'bottom' | 'all';
  /** Overrides the border color (if it is defined) */
  borderColor?: string;
  /** Sets text area disabled */
  disabled?: boolean;
  /** Sets the font family */
  family?: string;
  /** Sets the font size */
  fontSize?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg';
  /** Sets lateral padding */
  horizontalSpacing?: 'none' | 'nano' | 'micro' | 'tiny' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  /** Set the border radius (if the border is defined). */
  radius?: 'none' | 'sm' | 'md' | 'lg';
  /** Set text area with resizable props */
  resizable?: boolean;
  /** Set text area rows attribute (makes taller) */
  rows?: number;
  /** Sets the font color */
  textColor?: string;
  /** Sets vertical padding */
  verticalSpacing?: 'none' | 'nano' | 'micro' | 'tiny' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
}

/**
 * Text area component
 * @param {string/object} border Set the border(s) of the component
 * @param {string} borderColor Overrides the border color (if it is defined)
 * @param {boolean} disabled Sets text area disabled
 * @param {string} family Sets the font family
 * @param {string} fontSize Sets the font size
 * @param {string} horizontalSpacing Sets lateral padding
 * @param {string} radius Set the border radius
 * @param {boolean} resizable Set text area with resizable props
 * @param {number} rows Set text area rows attribute (makes taller)
 * @param {string} textColor Sets the font color
 * @param {string} verticalSpacing Sets vertical padding
 */

const Textarea = forwardRef<HTMLTextAreaElement, Textarea>(
  (
    {
      resizable = false,
      border,
      borderColor,
      radius,
      family,
      textColor,
      fontSize,
      horizontalSpacing,
      verticalSpacing,
      rows = 1,
      ...rest
    }: Textarea,
    ref
  ) => {
    const { configuration } = useContext(ConfigContext);
    return (
      <StyledTextarea
        resizable={resizable}
        border={border}
        borderColor={borderColor}
        radius={radius}
        family={family}
        textColor={textColor}
        fontSize={fontSize}
        disabled={rest.disabled}
        configuration={configuration}
        horizontalSpacing={horizontalSpacing}
        verticalSpacing={verticalSpacing}
        rows={rows}
        ref={ref}
        {...rest}
      />
    );
  }
);

export default Textarea;
