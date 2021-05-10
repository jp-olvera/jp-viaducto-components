import React, { useContext, useState } from 'react';

import { ConfigContext } from '../../providers';
import { StyledLabel, CheckMark } from './StyledRadio';

interface RadioInterface {
  label: string;
  disabled: boolean;
  name: string;
  family: string;
  size: string;
  color: string;
  id: string;
}

const Radio = ({
  label = '',
  disabled = false,
  name = 'radio',
  family = 'Manrope',
  size = 'lg',
  color = '#9060EB',
  id,
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
      {...props}
    >
      {label}
      <input
        name={name}
        onChange={() => setCheck(!check)}
        disabled={disabled}
        type="radio"
        id={id}
      />
      <CheckMark />
    </StyledLabel>
  );
};

export default Radio;
