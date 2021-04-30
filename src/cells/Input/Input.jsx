import React, { useState, useEffect, useContext } from 'react';
import { ConfigContext } from '../../providers';
import { getIcon } from './Icon';
import ProgressBar from './ProgressBar';
import { Wrapper } from './StyledInput';

/**
 * Input component wrapped with label and span tags for better UX
 * @param {boolean} required Icon for mark input is required
 * @param {String} icon Helper icon to support the user
 * @param {String} label The caption for the input
 * @param {String} border The border type for the input (full, bottom, overlap)
 * @param {boolean} disabled Set the input disabled
 * @param {String} size Set the height of the input
 * @param {String} type Set the input type (text, password, email, etc.)
 * @param {Object} props HTML attributes for input tag
 */

const Input = ({
  label = null,
  border = 'default',
  disabled = false,
  type = 'text',
  icon = null,
  required = true,
  isInvalid = false,
  isValid = false,
  id = 'input',
  size = 'default',
  ...props
}) => {
  const [open, setOpen] = useState(false);
  const [inputType, setInputType] = useState(type);
  const [inputValue, setInputValue] = useState(0);
  const { configuration } = useContext(ConfigContext);

  useEffect(() => {
    setOpen(false);
    setInputType(type);
  }, []);

  const toggleView = () => {
    setOpen(!open);
    setInputType((actual) => (actual === 'password' ? 'text' : 'password'));
  };
  const change = (ev) => {
    setInputValue(ev.target.value.length);
  };
  const getColor = (index) => {
    switch (index) {
      case 1:
        return 'red';
      case 2:
        return 'orange';
      case 3:
        return 'yellow';
      case 4:
        return 'yellowgreen';
      case 5:
      default:
        return 'green';
    }
  };
  return (
    <>
      <Wrapper
        border={border}
        hasIcon={icon !== null}
        size={size}
        disabled={disabled}
        configuration={configuration}
      >
        {icon !== null && <span className="icon">{getIcon(icon)}</span>}

        <input
          className="input"
          onChange={change}
          type={open ? inputType : type}
          id={id}
          required
          disabled={disabled}
          placeholder={(disabled && props.value) || label}
        />

        <label className="label" htmlFor={id}>
          <span>Label</span>
          {required && (
            <span className="icon-required">{getIcon('required', '10px')}</span>
          )}
        </label>
        {isInvalid && <span className="is-invalid">{getIcon('warning')}</span>}
        {isValid && <span className="is-valid">{getIcon('ok')}</span>}
        {type === 'password' && (
          <span className="icon-helper" onClick={toggleView}>
            {' '}
            {inputType === 'password' ? getIcon('eye-closed') : getIcon('eye')}
          </span>
        )}
      </Wrapper>
      {type === 'password' && (
        <ProgressBar
          currentProgress={inputValue}
          progressColor={getColor(inputValue)}
        />
      )}
    </>
  );
};

export default Input;
