import React, { useState, useContext } from 'react';

import { ConfigContext } from '../../providers';
import { StyledSwitch } from './StyledSwitch';

const Switch = ({
  color = '#9060EB',
  size = 'lg',
  disabled = false,
  ...props
}) => {
  const { configuration } = useContext(ConfigContext);
  const [check, setCheck] = useState(false);
  return (
    <StyledSwitch
      htmlFor={props.id}
      configuration={configuration}
      color={color}
      size={size}
      disabled={disabled}
      data-testid={props.id}
      check={check}
    >
      <input
        type="checkbox"
        id={props.id}
        onChange={() => setCheck(!check)}
        disabled={disabled}
      />
      <span className="slider round" disabled={disabled} />
    </StyledSwitch>
  );
};

export default Switch;
