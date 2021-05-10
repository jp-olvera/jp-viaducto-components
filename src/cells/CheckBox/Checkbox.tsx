import React, { useContext, useState } from 'react';

import { ConfigContext } from '../../providers';
import { StyledLabel, CheckMark } from './StyledCheckbox';

interface CheckboxInterface {
  label: string;
  disabled: boolean;
  family: string;
  size: string;
  id: string;
  color: string;
}

const Checkbox = ({
  label = '',
  disabled = false,
  family = 'Manrope',
  size = 'lg',
  color = '#9060EB',
  id,
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
