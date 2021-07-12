import React, { useContext, useState } from 'react';

import { Spacer } from '..';
import { ConfigContext } from '../../providers';
import { StyledLabel } from './StyledCheckbox';

/** Checkbox input component */
interface CheckboxInterface {
  /** Size of the input */
  checkSize?: string;
  /** Color for the checkbox */
  color?: string;
  /** Enable/disable input */
  disabled?: boolean;
  /** Font family fot the input */
  family?: string | null;
  /** Font size of the input */
  fontSize?: string;
  /** Label for the input */
  label?: string;
  /** Trigger an action */
  onChange?: Function;
  /** Spacing for the checkbox */
  spacing?: string;
}

/**
 * Checkbox input component
 * @param {string} checkSize Size of the input
 * @param {string} color Color for the checkbox
 * @param {boolean} disabled Enable/disable input
 * @param {string} family Font family fot the input
 * @param {string} fontSize Font size of the input
 * @param {string} label Label for the input
 * @param {Function} onChange Trigger an action
 * @param {string} spacing Spacing for the checkbox
 */

const Checkbox = ({
  label = '',
  disabled = false,
  family = null,
  checkSize = 'lg',
  fontSize = 'md',
  color = '#9060EB',
  onChange = () => {},
  spacing = 'none',
  ...props
}: CheckboxInterface & React.InputHTMLAttributes<HTMLInputElement>) => {
  const { configuration } = useContext(ConfigContext);
  const [check, setCheck] = useState(false);
  return (
    <StyledLabel
      htmlFor={props.id}
      configuration={configuration}
      family={family}
      checkSize={checkSize}
      fontSize={fontSize}
      color={color}
      disabled={disabled}
      data-testid={props.id}
      {...props}
    >
      <input
        onChange={(event) => {
          setCheck(!check);
          if (onChange) onChange(event);
        }}
        disabled={disabled}
        type='checkbox'
        id={props.id}
      />
      <Spacer size={spacing} direction='horizontal' />
      {label}
    </StyledLabel>
  );
};

export default Checkbox;
