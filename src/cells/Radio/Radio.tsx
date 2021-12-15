import React, { forwardRef, useContext, useState } from 'react';
import { Spacer } from '..';

import { ConfigContext } from '../../providers';
import { StyledLabel } from './StyledRadio';

/** Radio input component */
export interface Radio extends React.InputHTMLAttributes<HTMLInputElement> {
  /** HTML name attribute for the input */
  name: string;
  /** Color for the radio */
  color?: string;
  /** Enable/disable input */
  disabled?: boolean;
  /** Font family fot the input */
  family?: string | null;
  /** Font Size of the input */
  fontSize?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg';
  /** Label for the input */
  label?: string;
  /** Size of the input */
  inputSize?: 'xl' | 'lg' | 'md' | 'sm';
  /** Set the horizontal spacing between the label (if it is defined) and the radio */
  spacing?: 'none' | 'nano' | 'micro' | 'tiny' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
}

/**
 * Radio input component
 * @param {string} name HTML name attribute for the input
 * @param {string} color Color for the radio
 * @param {boolean} disabled Enable/disable input
 * @param {string} family Font family fot the input
 * @param {string} fontSize Font Size of the input
 * @param {string} label Label for the input
 * @param {Function} onClick Triger an action on input click
 * @param {string} inputSize Size of the input
 * @param {string} spacing Set the horizontal spacing between the label (if it is defined) and the radio
 */

const Radio = forwardRef<HTMLInputElement, Radio>(
  (
    {
      label,
      name,
      family,
      inputSize,
      color = 'primary',
      spacing,
      fontSize,
      onChange,
      onClick,
      ...props
    }: Radio,
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
      >
        <input
          ref={ref}
          name={name}
          onChange={(e) => {
            setCheck(!check);
            /* istanbul ignore else */
            if (onChange) onChange(e);
          }}
          onClick={(e) => {
            /* istanbul ignore else */
            if (onClick) onClick(e);
          }}
          type='radio'
          id={props.id}
          {...props}
        />
        <Spacer size={spacing || 'none'} direction='horizontal' />
        <label htmlFor={props.id}>{label}</label>
      </StyledLabel>
    );
  }
);

export default Radio;
