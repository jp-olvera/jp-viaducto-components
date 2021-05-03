import React, { useContext, useState } from 'react';

import { ConfigContext } from '../../providers';
import { StyledLabel, CheckMark } from './StyledRadio';

const Radio = ({
  label = null,
  disabled = false,
  name = 'radio',
  family = 'Manrope',
  size = 'lg',
  color = '#9060EB',
  ...props
}) => {
  const { configuration } = useContext(ConfigContext);
  const [check, setCheck] = useState(false);
  return (
    <StyledLabel
      htmlFor={props.id}
      configuration={configuration}
      family={family}
      size={size}
      color={color}
      disabled={disabled}
    >
      {label}
      <input
        name={name}
        onChange={() => setCheck(!check)}
        disabled={disabled}
        type="radio"
        id={props.id}
      />
      <CheckMark />
    </StyledLabel>
  );
};

export default Radio;
