import React, { useState, useContext } from 'react';

import { ConfigContext } from '../../providers';
import { StyledSwitch } from './StyledSwitch';

/**
 * Switch component as input
 * @param {boolean} disabled Enable/disable input
 * @param {string} size Size of the input
 * @param {string} id ID fot the input
 * @param {string} color Color for the switch
 */
interface SwitchInterface {
  color: string;
  size: string;
  disabled: boolean;
  id: string;
}

const Switch = ({
  color = '#9060EB',
  size = 'lg',
  disabled = false,
  id,
}: SwitchInterface) => {
  const { configuration } = useContext(ConfigContext);
  const [check, setCheck] = useState(false);
  return (
    <StyledSwitch
      htmlFor={id}
      configuration={configuration}
      color={color}
      size={size}
      disabled={disabled}
      data-testid={id}
      check={check}
    >
      <input
        type="checkbox"
        id={id}
        onChange={() => setCheck(!check)}
        disabled={disabled}
      />
      <span className="slider round" />
    </StyledSwitch>
  );
};

export default Switch;