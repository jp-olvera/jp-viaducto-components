import React, { useState, useEffect, useContext } from 'react';
import { ConfigContext } from '../../providers';
import { getIcon } from './Icon';
import ProgressBar from './ProgressBar';
import { Wrapper } from './StyledInput';

/**
 * Input component wrapped with label and span tags for better UX
 * @param {String} label The caption for the input
 * @param {String} border The border type for the input (full, bottom, overlap)
 * @param {boolean} disabled Set the input disabled
 * @param {String} type Set the input type (text, password, email, etc.)
 * @param {String} icon Helper icon to support the user
 * @param {boolean} required Icon for mark input is required
 * @param {String} size Set the height of the input
 * @param {boolean} isInvalid set the input invalid
 * @param {boolean} isValid set the input valid
 * @param {string} id set the id for the input
 * @param {string} borderColor set the color border
 * @param {string} iconColor set the icon helper
 * @param {any} value the value for the input
 */

interface InputInterface {
  label?: string;
  border?: string;
  disabled?: boolean;
  type?: string;
  icon?: any;
  required?: boolean;
  size?: string;
  isInvalid?: boolean;
  isValid?: boolean;
  id?: string;
  borderColor?: any;
  iconColor?: any;
  value?: any;
  onChange?: any;
  defaultValue?: any;
  style?: any;
}

const Input = ({
  label = '',
  border = 'default',
  disabled = false,
  type,
  icon = null,
  required,
  isInvalid = false,
  isValid = false,
  id = 'input',
  size = 'default',
  borderColor = '#001D48',
  iconColor = '#2329D6',
  value = null,
  onChange = () => { },
  defaultValue,
  ...rest
}: InputInterface) => {
  const [open, setOpen] = useState(false);
  const [inputType, setInputType] = useState(type);
  const [inputValue, setInputValue] = useState(0);
  const { configuration } = useContext(ConfigContext);

  useEffect(() => {
    setOpen(false);
    setInputType(type);
  }, []);

  const toggleView = (ev) => {
    if (ev.type === 'click' || ev.keyCode === 13 || ev.keyCode === 32) {
      setOpen(!open);
      setInputType((actual) => (actual === 'password' ? 'text' : 'password'));
    }
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
        configuration={configuration}
        borderColor={borderColor}
        iconColor={iconColor}
        disabled={disabled}
        {...rest}
      >
        {icon !== null && <span className='icon'>{getIcon(icon)}</span>}

        <input
          className='input'
          onChange={onChange}
          onKeyUp={change}
          type={open ? inputType : type}
          id={id}
          required
          disabled={disabled}
          placeholder={(disabled && value) || label}
          {...rest}
        />

        <label className='label' htmlFor={id}>
          <span>{label}</span>
          {required && (
            <span className='icon-required'>{getIcon('required', '10px')}</span>
          )}
        </label>
        {isInvalid && <span className='is-invalid'>{getIcon('warning')}</span>}
        {isValid && <span className='is-valid'>{getIcon('ok')}</span>}
        {type === 'password' && (
          <span
            className='icon-helper'
            data-testid='type-switch'
            onClick={toggleView}
            onKeyUp={toggleView}
            role='button'
            tabIndex={0}
          >
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
