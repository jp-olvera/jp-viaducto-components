import React, { forwardRef, useContext, useState } from 'react';

import { Spacer } from '..';
import { ConfigContext } from '../../providers';
import { StyledLabel } from './StyledCheckbox';

/** Checkbox input component */
export interface Checkbox extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Size of the input */
  inputSize?: 'xl' | 'lg' | 'md' | 'sm';
  /** Color for the checkbox */
  color?: string;
  /** Enable/disable input */
  disabled?: boolean;
  /** Font family fot the input */
  family?: string | null;
  /** Font size of the input */
  fontSize?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg';
  /** Label for the input */
  label?: string;
  /** Spacing for the checkbox */
  spacing?: 'none' | 'nano' | 'micro' | 'tiny' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
  /** Input Border radius */
  radius?: 'none' | 'sm' | 'md' | 'lg';
}

/**
 * Checkbox input component
 * @param {string} inputSize Size of the input
 * @param {string} color Color for the checkbox
 * @param {boolean} disabled Enable/disable input
 * @param {string} family Font family fot the input
 * @param {string} fontSize Font size of the input
 * @param {string} label Label for the input
 * @param {string} spacing Spacing for the checkbox
 * @param {string} radius Input Border radius
 */

//TODO: add radius
//TODO: change hover color
//TODO: change back size
const Checkbox = forwardRef<HTMLInputElement, Checkbox>(
  (
    {
      label,
      family,
      inputSize,
      fontSize,
      color = 'primary',
      onChange,
      spacing,
      radius,
      ...props
    }: Checkbox,
    ref
  ) => {
    const { configuration } = useContext(ConfigContext);
    const [check, setCheck] = useState(false);

    return (
      <StyledLabel
        htmlFor={props.id}
        configuration={configuration}
        family={family}
        inputSize={inputSize}
        fontSize={fontSize}
        color={color}
        disabled={props.disabled}
        data-testid={props.id}
        radius={radius}
      >
        <input
          {...props}
          ref={ref}
          onChange={(event) => {
            setCheck(!check);
            /* istanbul ignore else */
            if (onChange) onChange(event);
          }}
          type='checkbox'
          id={props.id}
        />
        <Spacer size={spacing || 'none'} direction='horizontal' />
        <label className='check-label' htmlFor={props.id}>
          {label}
        </label>
      </StyledLabel>
    );
  }
);

export default Checkbox;
