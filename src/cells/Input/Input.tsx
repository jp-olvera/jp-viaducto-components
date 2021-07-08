/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState, useContext, useRef } from 'react';
import creditCardType, { types as CardType } from 'credit-card-type';

import { ConfigContext } from '../../providers';
import { Wrapper } from './StyledInput';
import { getIcon } from './Icon';

creditCardType.resetModifications();

/**
 * Input component wrapped with label and span tags for better UX
 * @param {String} border The border type for the input (full, bottom, overlap)
 * @param {String} type Set the input type (text, password, email, etc.)
 * @param {String} icon Helper icon to support the user
 * @param {String} size Set the height of the input
 * @param {boolean} disabled Set the input disabled
 * @param {String} label The caption for the input
 * @param {boolean} required Icon for mark input is required
 * @param {string} id set the id for the input
 * @param {string} borderColor set the color border
 * @param {string} iconColor set the icon helper
 * @param {any} value the value for the input
 */

const Input = ({
  label,
  border = 'default',
  disabled = false,
  type = 'text',
  icon = null,
  iconRequired = null,
  iconHelper = null,
  size = 'default',
  required,
  borderColor = '#001D48',
  iconColor = '#2329D6',
  value = '',
  onChange = () => {},
  onClick,
  onKeyUp,
  family,
  ...rest
}: any) => {
  const [cardType, setCardType] = useState('card');
  const [placeIcon, setIcon] = useState(icon);
  const { configuration } = useContext(ConfigContext);
  const [newValue, setNewValue] = useState<any>(value);
  const inputRef = useRef<any>();

  const setCardIcon = (ev: any) => {
    const { value: val }: { value: string } = ev.target;
    creditCardType(val).map((card) => {
      if (
        card.type === CardType.MASTERCARD
        || card.type === CardType.VISA
        || card.type === CardType.AMERICAN_EXPRESS
      ) {
        setCardType(card.type);
        setIcon(card.type);
      } else {
        setCardType('card');
        setIcon(null);
      }
      return true;
    });
  };

  const hasLabel = label !== null
    && label !== undefined
    && label !== ''
    && type !== 'date'
    && type !== 'color'
    && type !== 'time';
  return (
    <>
      <Wrapper
        border={border !== 'bottom' && size === 'xsmall' ? 'outside' : border}
        hasIcon={icon !== null}
        size={size}
        configuration={configuration}
        borderColor={borderColor}
        iconColor={iconColor}
        disabled={disabled}
        family={family}
        type={type}
        hasLabel={hasLabel}
        {...rest}
      >
        <input
          className='input'
          ref={inputRef}
          onChange={(ev) => {
            setCardIcon(ev);
            setNewValue(
              type === 'card'
                ? mask(ev.target.value.replace(/([^0-9])/g, ''), 4, '-').slice(
                  0,
                  cardType === 'american-express' ? 21 : 19,
                )
                : type === 'phone'
                  ? mask(ev.target.value.replace(/([^0-9|+])/g, ''), 3, ' ')
                  : ev.target.value,
            );
            onChange(ev);
          }}
          onClick={() => {
            if (onClick) onClick();
          }}
          onKeyUp={() => {
            if (onKeyUp) onKeyUp();
          }}
          type={
            type === 'card' || type === 'phone'
              ? 'tel'
              : type === 'datetime-local'
                ? 'date'
                : type
          }
          autoComplete={type === 'card' ? 'cc-number' : ''}
          x-autocompletetype={type === 'card' ? 'cc-number' : ''}
          id={rest.id}
          required
          disabled={disabled}
          placeholder={
            label === null ? rest.placeholder : (disabled && value) || label
          }
          min={rest.min}
          value={newValue}
          max={rest.max}
          {...rest}
        />
        {iconHelper && <span className='is-helper'>{iconHelper}</span>}
        {placeIcon !== null && (
          <span className='icon'>
            {type === 'card' ? getIcon(placeIcon) : placeIcon}
          </span>
        )}
        {type !== 'date' && type !== 'color' && type !== 'time' && label && (
          <label className='label' htmlFor={rest.id}>
            <span>{label}</span>
            {required && (
              <span className='icon-required'>
                {iconRequired && iconRequired}
              </span>
            )}
          </label>
        )}
        {type === 'color' && (
          <span className='show-value'>
            <span>{inputRef?.current?.value.toUpperCase() || '#FFFFFF'}</span>
          </span>
        )}
      </Wrapper>
    </>
  );
};

export default Input;

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
