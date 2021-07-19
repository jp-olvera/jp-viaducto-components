import React, { TextareaHTMLAttributes, useContext } from 'react';

import { StyledTextarea } from './StyledTextarea';
import { ConfigContext } from '../../providers/ConfigProvider';

/** Text area component */
interface TextareaInterface {
  /** Set the border(s) of the component */
  border?: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  } | null;
  /** Overrides the border color (if it is defined) */
  borderColor?: string;
  /** Sets text area disabled */
  disabled?: boolean;
  /** Sets the font family */
  family?: string;
  /** Sets the font size */
  fontSize?: string;
  /** Sets lateral padding */
  lateralPadding?: string;
  /** Set the border radius (if the border is defined). if Dtring, this value will set as you writted, if is a number, this value will be a REM size */
  radius?: string;
  /** Set text area with resizable props */
  resizable?: boolean;
  /** Set text area rows attribute (makes taller) */
  rows?: number;
  /** Sets the font color */
  textColor?: string;
  /** Sets vertical padding */
  verticalPadding?: string;
}

/**
 * Text area component
 * @param {string/object} border Set the border(s) of the component
 * @param {string} borderColor Overrides the border color (if it is defined)
 * @param {boolean} disabled Sets text area disabled
 * @param {string} family Sets the font family
 * @param {string} fontSize Sets the font size
 * @param {string} lateralPadding Sets lateral padding
 * @param {string} radius Set the border radius
 * @param {boolean} resizable Set text area with resizable props
 * @param {number} rows Set text area rows attribute (makes taller)
 * @param {string} textColor Sets the font color
 * @param {string} verticalPadding Sets vertical padding
 */

const Textarea = ({
  resizable = false,
  border,
  borderColor,
  radius,
  family,
  textColor,
  fontSize,
  lateralPadding,
  verticalPadding,
  rows = 1,
  ...rest
}: TextareaInterface & TextareaHTMLAttributes<HTMLTextAreaElement>) => {
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
      lateralPadding={lateralPadding}
      verticalPadding={verticalPadding}
      rows={rows}
      {...rest}
    />
  );
};

export default Textarea;
