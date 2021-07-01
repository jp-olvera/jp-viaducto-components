import React, { useContext } from 'react';

import { StyledTextarea } from './StyledTextarea';
import { ConfigContext } from '../../providers/ConfigProvider';

/**
 * Text area component
 * @param {boolean} resizable Set text area with resizable props
 * @param {string/object} border Set the border(s) of the component
 * @param {string} borderColor Overrides the border color (if it is defined)
 * @param {string} radius Set the border radius (if the border it is defined). If is a provides a string, this value will set as you writted, if is a number, this value will be a REM size
 * @param {string} family Sets the font family
 * @param {string} textColor Sets the font color
 * @param {string} fontSize Sets the font size
 * @param {boolean} disabled Sets text area disabled
 * @param {string} lateralPadding Sets lateral padding
 * @param {string} verticalPadding Sets vertical padding
 * @param {number} rows Set text area rows attribute (makes taller)
 */

interface TextareaInterface {
  resizable?: boolean;
  border?:
    | {
        top?: string;
        bottom?: string;
        left?: string;
        right?: string;
      }
    | null
    | string;
  borderColor?: string;
  radius?: string | number;
  family?: string;
  textColor?: string;
  fontSize?: string;
  disabled?: boolean;
  lateralPadding?: string;
  verticalPadding?: string;
  rows?: number;
}

const Textarea = ({
  resizable = false,
  border = 'none',
  borderColor,
  radius,
  family,
  textColor,
  fontSize,
  disabled = false,
  lateralPadding,
  verticalPadding,
  rows = 1,
  ...rest
}: TextareaInterface) => {
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
      disabled={disabled}
      {...rest}
      configuration={configuration}
      lateralPadding={lateralPadding}
      verticalPadding={verticalPadding}
      rows={rows}
    />
  );
};

export default Textarea;
