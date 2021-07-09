/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState, useContext, useRef } from 'react';
import creditCardType, { types as CardType } from 'credit-card-type';

import { ConfigContext } from '../../providers';
import { Wrapper } from './StyledInput';
import { getIcon } from './Icon';

creditCardType.resetModifications();
/** Input component wrapped with label and span tags for better UX */
interface InputInterface {
  /** The border type for the input (full, bottom, overlap) */
  border?: string;
  /** set the color border */
  borderColor?: string;
  /** Set the input disabled */
  disabled?: boolean;
  /** Set font family */
  family?: string;
  /** Helper icon to support the user */
  icon?: any;
  /** set the icon color */
  iconColor?: string;
  /** set the icon helper */
  iconHelper?: any;
  /** set the icon required */
  iconRequired?: any;
  /** The caption for the input */
  label?: string;
  /** Set a function triggered when onChange is called */
  onChange?: Function;
  /** Set a function triggered when onClick is called */
  onClick?: Function;
  /** Set a function triggered when onKeyUp is called */
  onKeyUp?: Function;
  /** Icon for mark input is required */
  required?: boolean;
  /** Set the height of the input */
  inputSize?: string;
  /** Set the input type (text, password, email, etc.) */
  type?: string;
}

/**
 * Input component wrapped with label and span tags for better UX
 * @param {string} border The border type for the input (full, bottom, overlap)
 * @param {string} borderColor set the color border
 * @param {boolean} disabled Set the input disabled
 * @param {boolean} family Set font family
 * @param {any} icon Helper icon to support the user
 * @param {string} iconColor set the icon color
 * @param {any} iconHelper set the icon helper
 * @param {any} iconRequired set the icon required
 * @param {string} label The caption for the input
 * @param {Function} onChange Set a function triggered when onChange is called
 * @param {Function} onClick  Set a function triggered when onClick is called
 * @param {Function} onKeyUp  Set a function triggered when onKeyUp is called
 * @param {boolean} required Icon for mark input is required
 * @param {string} inputSize Set the height of the input
 * @param {string} type Set the input type (text, password, email, etc.)
 */

const Input = ({
  label,
  border = 'default',
  disabled = false,
  type = 'text',
  icon = null,
  iconRequired = null,
  iconHelper = null,
  inputSize = 'default',
  required,
  borderColor = '#001D48',
  iconColor = '#2329D6',
  onChange = () => {},
  onClick,
  onKeyUp,
  family,
  ...rest
}: InputInterface & React.InputHTMLAttributes<HTMLInputElement>) => {
  const [cardType, setCardType] = useState('card');
  const [placeIcon, setIcon] = useState(icon);
  const { configuration } = useContext(ConfigContext);
  const [newValue, setNewValue] = useState<any>(null);
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
        border={
          border !== 'bottom' && inputSize === 'xsmall' ? 'outside' : border
        }
        hasIcon={icon !== null}
        size={inputSize}
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
          onClick={(e) => {
            if (onClick) onClick(e);
          }}
          onKeyUp={(e) => {
            if (onKeyUp) onKeyUp(e);
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
          min={rest.min}
          defaultValue={rest.value || newValue}
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
