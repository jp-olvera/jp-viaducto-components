import React, { useContext, useState } from 'react';
import { Spacer } from '..';

import { ConfigContext } from '../../providers';
import { StyledLabel } from './StyledRadio';

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
  family?: string | null;
  radioSize: string;
  fontSize: string;
  color: string;
  id: string;
  spacing?: string;
  change?: Function;
}

const Radio = ({
  label = '',
  disabled = false,
  name = 'radio',
  family = null,
  radioSize = 'lg',
  color = '#9060EB',
  id,
  spacing = 'none',
  fontSize,
  change = () => {},
  ...props
}: RadioInterface) => {
  const { configuration } = useContext(ConfigContext);
  const [check, setCheck] = useState(false);

  return (
    <StyledLabel
      htmlFor={id}
      configuration={configuration}
      family={family}
      radioSize={radioSize}
      fontSize={fontSize}
      color={color}
      disabled={disabled}
      data-testid={id}
      {...props}
    >
      <input
        name={name}
        onChange={() => {
          setCheck(!check);
          change();
        }}
        disabled={disabled}
        type='radio'
        id={id}
      />
      <Spacer size={spacing} direction='horizontal' />
      {label}
    </StyledLabel>
  );
};

export default Radio;
