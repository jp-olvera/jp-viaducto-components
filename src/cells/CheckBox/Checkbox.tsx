import React, { useContext, useState } from 'react';

import { Spacer } from '..';
import { ConfigContext } from '../../providers';
import { StyledLabel } from './StyledCheckbox';

/**
 * Checkbox input component
 * @param {string} label Label for the input
 * @param {boolean} disabled Enable/disable input
 * @param {string} color Color for the checkbox
 * @param {string} family Font family fot the input
 * @param {string} checkSize Size of the input
 * @param {string} fontSize Font size of the input
 * @param {string} id ID for the input
 * @param {Function} onChange Trigger an action
 * @param {string} spacing Spacing for the checkbox
 */
interface CheckboxInterface {
  label?: string;
  disabled?: boolean;
  family?: string | null;
  checkSize?: string;
  fontSize?: string;
  id?: string;
  color?: string;
  spacing?: string;
  onChange?: Function;
}

const Checkbox = ({
  label = '',
  disabled = false,
  family = null,
  checkSize = 'lg',
  fontSize = 'md',
  color = '#9060EB',
  id,
  onChange = () => {},
  spacing = 'none',
  ...props
}: CheckboxInterface) => {
  const { configuration } = useContext(ConfigContext);
  const [check, setCheck] = useState(false);
  return (
    <StyledLabel
      htmlFor={id}
      configuration={configuration}
      family={family}
      checkSize={checkSize}
      fontSize={fontSize}
      color={color}
      disabled={disabled}
      data-testid={id}
      {...props}
    >
      <input
        onChange={() => {
          setCheck(!check);
          onChange();
        }}
        disabled={disabled}
        type='checkbox'
        id={id}
      />
      <Spacer size={spacing} direction='horizontal' />
      {label}
    </StyledLabel>
  );
};

export default Checkbox;
