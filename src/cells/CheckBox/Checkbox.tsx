import React, { useContext, useState } from 'react';

import { ConfigContext } from '../../providers';
import { StyledLabel, CheckMark } from './StyledCheckbox';

/**
 * Checkbox input component
 * @param {string} label Label for the input
 * @param {boolean} disabled Enable/disable input
 * @param {string} family Font family fot the input
 * @param {string} size Size of the input
 * @param {string} id ID for the input
 * @param {string} color Color for the checkbox
 * @param {string} spacing Spacing for the checkbox
 */
interface CheckboxInterface {
  label?: string;
  disabled?: boolean;
  family?: string;
  size?: string;
  id?: string;
  color?: string;
  spacing?: string;
}

const Checkbox = ({
  label = '',
  disabled = false,
  family = 'Manrope',
  size = 'lg',
  color = '#9060EB',
  id,
  spacing,
  ...props
}: CheckboxInterface) => {
  const { configuration } = useContext(ConfigContext);
  const [check, setCheck] = useState(false);
  return (
    <StyledLabel
      htmlFor={id}
      configuration={configuration}
      family={family}
      size={size}
      color={color}
      disabled={disabled}
      data-testid={id}
      spacing={spacing}
      {...props}
    >
      {label}
      <input
        onChange={() => setCheck(!check)}
        disabled={disabled}
        type="checkbox"
        id={id}
      />
      <CheckMark />
    </StyledLabel>
  );
};

export default Checkbox;
