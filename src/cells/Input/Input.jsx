import React, { useState } from 'react';
import {
  Wrapper,
  StyledInput,
  Caption,
  IconFill,
  Info,
  Helper,
  getInputSize,
  getSize,
} from './StyledInput';
import { EyeClosed, Eye } from 'react-ikonate';
import Icon from './Icon';

/**
 * Input component wrapped with label and span tags for better UX
 * @param {boolean} iconRequired Icon for mark input is required
 * @param {String} iconHelper Helper icon to support the user
 * @param {String} label The caption for the input
 * @param {String} border The border type for the input (full, bottom, overlap)
 * @param {boolean} disabled Set the input disabled
 * @param {String} size Set the width of the input
 * @param {String} type Set the input type (text, password, email, etc.)
 * @param {Object} props HTML attributes for input tag
 */
const Input = ({
  iconRequired = false,
  label = null,
  border = 'default',
  disabled = false,
  size = 'default',
  type = 'text',
  iconHelper = null,
  ...props
}) => {
  const [open, setOpen] = useState(false);
  const [pass, setPass] = useState(type);
  const toggleView = () => {
    setOpen(!open);
    setPass((actual) => (actual === 'password' ? 'text' : 'password'));
  };
  return (
    <Wrapper
      htmlFor={props.id}
      size={size}
      disabled={disabled}
      border={border}
      label={label}
    >
      <StyledInput
        open={type === 'password' ? open : true}
        iconHelper={iconHelper}
        {...props}
        border={border}
        disabled={disabled}
        type={pass}
        id={props.id}
        required
        label={label}
        placeholder={label || props.placeholder || 'Placeholder'}
      />
      {iconHelper !== null ? (
        <Helper border={border}>
          <Icon icon={iconHelper} />
        </Helper>
      ) : null}
      {type === 'password' ? (
        <Info onClick={toggleView}>{open ? <Eye /> : <EyeClosed />}</Info>
      ) : null}
      <Caption
        iconHelper={iconHelper !== null}
        border={border}
        disabled={disabled}
        label={label}
      >
        {label !== null ? <span>{label}</span> : null}
        {iconRequired ? <IconFill /> : null}
      </Caption>
    </Wrapper>
  );
};

export default Input;
