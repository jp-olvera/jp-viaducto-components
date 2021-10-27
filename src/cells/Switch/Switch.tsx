import React, { useState, useContext, forwardRef } from 'react';

import { ConfigContext } from '../../providers';
import { StyledSwitch } from './StyledSwitch';

/**  Input masked as Switch component  */
interface SwitchInterface {
  /** Color for the switch */
  color?: string;
  /** Enable/disable input */
  disabled?: boolean;
  /** Size of the input */
  inputSize?: 'xsmall' | 'small' | 'default' | 'large';
  /** Triggers an action */
  change?: Function;
  /** Set circular/rectangular switch */
  circular?: boolean;
}

/**
 * Input masked as Switch component
 * @param {string} color Color for the switch
 * @param {boolean} disabled Enable/disable input
 * @param {string} inputSize Size of the input
 * @param {Function} change Triggers an action
 * @param {boolean} circular Set circular/rectangular switch
 */

const Switch = forwardRef<
  HTMLInputElement,
  SwitchInterface & React.InputHTMLAttributes<HTMLInputElement>
>(
  (
    {
      color,
      inputSize = 'default',
      change,
      circular = true,
      ...rest
    }: SwitchInterface & React.InputHTMLAttributes<HTMLInputElement>,
    ref
  ) => {
    const { configuration } = useContext(ConfigContext);
    const [check, setCheck] = useState(false);
    return (
      <StyledSwitch
        htmlFor={rest.id}
        configuration={configuration}
        color={color}
        size={inputSize}
        disabled={rest.disabled}
        data-testid={rest.id}
        check={check}
        circular={circular}
      >
        <input
          type='checkbox'
          id={rest.id}
          onChange={(e) => {
            setCheck(!check);
            /* istanbul ignore else */
            if (change) change(e);
          }}
          ref={ref}
          {...rest}
        />
        <span className='slider round' data-testid='slider' />
      </StyledSwitch>
    );
  }
);

export default Switch;
