import React, { useContext, useState } from 'react';

import { ConfigContext } from '../../providers';
import { StyledLabel, CheckMark } from './StyledCheckbox';

const Checkbox = ({
  label = null,
  disabled = false,
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
      data-testid={props.id}
    >
      {label}
      <input
        onChange={() => setCheck(!check)}
        disabled={disabled}
        type="checkbox"
        id={props.id}
      />
      <CheckMark />
    </StyledLabel>
  );
};

export default Checkbox;
