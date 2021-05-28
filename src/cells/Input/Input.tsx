import React, { useState, useEffect, useContext } from 'react';
import creditCardType, { types as CardType } from 'credit-card-type';

import { ConfigContext } from '../../providers';
import { getIcon } from './Icon';
import ProgressBar from './ProgressBar';
import { Wrapper } from './StyledInput';

creditCardType.resetModifications();

/**
 * Input component wrapped with label and span tags for better UX
 * @param {String} border The border type for the input (full, bottom, overlap)
 * @param {String} type Set the input type (text, password, email, etc.)
 * @param {String} icon Helper icon to support the user
 * @param {String} size Set the height of the input
 * @param {boolean} disabled Set the input disabled
 * @param {boolean} isInvalid set the input invalid
 * @param {boolean} isValid set the input valid
 * @param {String} label The caption for the input
 * @param {boolean} required Icon for mark input is required
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
  min?: number;
  max?: number;
  style?: any;
  family?: string | null;
}

const Input = ({
  label = '',
  border = 'default',
  disabled = false,
  type = 'text',
  icon = null,
  isInvalid = false,
  isValid = false,
  size = 'default',
  required,
  borderColor = '#001D48',
  iconColor = '#2329D6',
  value = '',
  onChange = () => {},
  family,
  ...rest
}: InputInterface) => {
  const [open, setOpen] = useState(false);
  const [inputType, setInputType] = useState(type);
  const [inputValue, setInputValue] = useState<any>(0);
  const [cardType, setCardType] = useState('card');
  const { configuration } = useContext(ConfigContext);
  const [newValue, setNewValue] = useState<any>(value);

  useEffect(() => {
    setOpen(false);
    setInputType(type);
  }, []);

  const toggleView = (ev: any) => {
    if (ev.type === 'click' || ev.keyCode === 13 || ev.keyCode === 32) {
      setOpen(!open);
      setInputType((actual) => (actual === 'password' ? 'text' : 'password'));
    }
  };

  const setCardIcon = (ev: any) => {
    const { value: val }: { value: string } = ev.target;
    creditCardType(val).map((card) => {
      if (
        card.type === CardType.MASTERCARD
        || card.type === CardType.VISA
        || card.type === CardType.AMERICAN_EXPRESS
      ) {
        setCardType(card.type);
      } else {
        setCardType('card');
      }
      return true;
    });
  };

  return (
    <>
      <Wrapper
        border={border}
        hasIcon={icon !== null || type === 'card'}
        size={size}
        configuration={configuration}
        borderColor={borderColor}
        iconColor={iconColor}
        disabled={disabled}
        family={family}
        {...rest}
      >
        {(icon !== null || type === 'card') && (
          <span className='icon'>
            {getIcon(type === 'card' ? cardType : icon)}
          </span>
        )}
        <input
          className='input'
          onChange={(ev) => {
            onChange();
            setInputValue(ev.target.value.length);
            setCardIcon(ev);
            setNewValue(
              type === 'card'
                ? mask(ev.target.value.replace(/([^0-9])/g, ''), 4, '-').slice(
                  0,
                  cardType === 'american-express' ? 21 : 19,
                )
                : ev.target.value,
            );
          }}
          type={open ? inputType : type === 'card' ? 'tel' : type}
          autoComplete={type === 'card' ? 'cc-number' : ''}
          x-autocompletetype={type === 'card' ? 'cc-number' : ''}
          id={rest.id}
          required
          disabled={disabled}
          placeholder={(disabled && value) || label}
          min={rest.min}
          value={newValue}
          max={rest.max}
          {...rest}
        />
        <label className='label' htmlFor={rest.id}>
          <span>{label}</span>
          {required && (
            <span className='icon-required'>{getIcon('required', '8px')}</span>
          )}
        </label>
        {isInvalid && <span className='is-invalid'>{getIcon('warning')}</span>}
        {isValid && <span className='is-valid'>{getIcon('ok')}</span>}
        {required && <span className='is-required'>{getIcon('required')}</span>}
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

export const getColor = (index: number) => {
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

export const mask = (value: string, limit: number, separator: string = '-') => {
  const output: string[] = [];
  for (let i = 0; i < value.length; i++) {
    if (i !== 0 && i % limit === 0) {
      output.push(separator);
    }

    output.push(value[i]);
  }

  return output.join('');
};
