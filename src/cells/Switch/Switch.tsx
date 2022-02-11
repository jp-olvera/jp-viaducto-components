import React, { useState, useContext, forwardRef } from 'react';

import { Spacer } from '..';
import { ConfigContext } from '../../providers';
import { DivWrapper, StyledSwitch } from './StyledSwitch';

/**  Input masked as Switch component  */
export interface Switch extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Color for the switch */
  color?: string;
  /** Enable/disable input */
  disabled?: boolean;
  /** Size of the input */
  inputSize?: 'xsmall' | 'small' | 'default' | 'large';
  /** Set circular/rectangular switch */
  circular?: boolean;
  /** Set a label next to the switch */
  label?: string;
  /** Set label's font size */
  fontSize?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | string;
  /** Set a label next to the switch */
  spacing?: 'none' | 'nano' | 'micro' | 'tiny' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
}

/**
 * Input masked as Switch component
 * @param {string} color Color for the switch
 * @param {boolean} disabled Enable/disable input
 * @param {string} inputSize Size of the input
 * @param {boolean} circular Set circular/rectangular switch
 * @param {string} label Set a label next to the switch
 * @param {string} fontSize Set label's font size
 * @param {string} spacing Set a label next to the switch
 */
const Switch = forwardRef<HTMLInputElement, Switch>(
  (
    {
      color,
      inputSize = 'default',
      circular = true,
      label = 'Hola',
      checked = false,
      spacing = 'sm',
      fontSize = 'md',
      onChange,
      ...rest
    }: Switch,
    ref
  ) => {
    const { configuration } = useContext(ConfigContext);
    const [check, setCheck] = useState(checked);
    return (
      <DivWrapper className='frontera-switch-wrapper' configuration={configuration}>
        <StyledSwitch
          htmlFor={rest.id}
          configuration={configuration}
          color={color}
          size={inputSize}
          disabled={rest.disabled}
          data-testid={rest.id}
          check={check}
          circular={circular}
          fontSize={fontSize}
          family={configuration.fontFamily}
        >
          <input
            type='checkbox'
            id={rest.id}
            defaultValue={check.toString()}
            onChange={(e) => {
              setCheck(!check);
              /* istanbul ignore else */
              if (onChange) {
                onChange(e);
              }
            }}
            defaultChecked={checked}
            ref={ref}
            {...rest}
          />
          <span className='slider round' data-testid='slider' />
          <Spacer size={spacing} direction='horizontal' />
          <label className='switch-label' htmlFor={rest.id}>
            {label}
          </label>
        </StyledSwitch>
      </DivWrapper>
    );
  }
);

export default Switch;
