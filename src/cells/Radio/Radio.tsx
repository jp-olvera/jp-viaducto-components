import React, { useContext, useState } from 'react';
import { Spacer } from '..';

import { ConfigContext } from '../../providers';
import { StyledLabel } from './StyledRadio';

/** Radio input component */
interface RadioInterface {
  /** HTML name attribute for the input */
  name: string;
  /** Color for the radio */
  color?: string;
  /** Enable/disable input */
  disabled?: boolean;
  /** Font family fot the input */
  family?: string | null;
  /** Font Size of the input */
  fontSize?: string;
  /** Label for the input */
  label?: string;
  /** Triger an action on value change */
  onChange?: Function;
  /** Triger an action on input click */
  onClick?: Function;
  /** Size of the input */
  radioSize?: string;
  /** Set the horizontal spacing between the label (if it is defined) and the radio */
  spacing?: string;
}

/**
 * Radio input component
 * @param {string} name HTML name attribute for the input
 * @param {string} color Color for the radio
 * @param {boolean} disabled Enable/disable input
 * @param {string} family Font family fot the input
 * @param {string} fontSize Font Size of the input
 * @param {string} label Label for the input
 * @param {Function} onChange Triger an action on value change
 * @param {Function} onClick Triger an action on input click
 * @param {string} radioSize Size of the input
 * @param {string} spacing Set the horizontal spacing between the label (if it is defined) and the radio
 */

const Radio = ({
  label = '',
  disabled = false,
  name,
  family = null,
  radioSize = 'lg',
  color = '#9060EB',
  spacing = 'none',
  fontSize,
  onChange = () => {},
  onClick = () => {},
  ...props
}: RadioInterface & React.InputHTMLAttributes<HTMLInputElement>) => {
  const { configuration } = useContext(ConfigContext);
  const [check, setCheck] = useState(false);

  return (
    <StyledLabel
      htmlFor={props.id}
      configuration={configuration}
      family={family}
      radioSize={radioSize}
      fontSize={fontSize}
      color={color}
      disabled={disabled}
      data-testid={props.id}
    >
      <input
        name={name}
        onChange={(e) => {
          setCheck(!check);
          if (onChange) onChange(e);
        }}
        onClick={(e) => {
          if (onClick) onClick(e);
        }}
        disabled={disabled}
        type='radio'
        id={props.id}
        {...props}
      />
      <Spacer size={spacing} direction='horizontal' />
      {label}
    </StyledLabel>
  );
};

export default Radio;
