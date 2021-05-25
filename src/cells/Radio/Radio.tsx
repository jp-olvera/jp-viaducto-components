import React, { useContext, useState } from 'react';

import { ConfigContext } from '../../providers';
import { StyledLabel, CheckMark } from './StyledRadio';

/**
 * Radio input component
 * @param {string} color Color for the radio
 * @param {string} family Font family fot the input
 * @param {string} size Size of the input
 * @param {string} spacing Set the horizontal spacing between the label (if it is defined) and the radio
 * @param {boolean} disabled Enable/disable input
 * @param {string} label Label for the input
 * @param {string} name HTML name attribute for the input
 * @param {string} id ID fot the input
 */
interface RadioInterface {
  label: string;
  disabled: boolean;
  name: string;
  family: string;
  size: string;
  color: string;
  id: string;
  spacing?: string;
}

const Radio = ({
  label = '',
  disabled = false,
  name = 'radio',
  family = 'Manrope',
  size = 'lg',
  color = '#9060EB',
  id,
  spacing,
  ...props
}: RadioInterface) => {
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
        name={name}
        onChange={() => setCheck(!check)}
        disabled={disabled}
        type='radio'
        id={id}
      />
      <CheckMark />
    </StyledLabel>
  );
};

export default Radio;
