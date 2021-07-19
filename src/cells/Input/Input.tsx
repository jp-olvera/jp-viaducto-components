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
  borderColor?: string | null;
  /** Set the input disabled */
  disabled?: boolean;
  /** Set font family */
  family?: string;
  /** Helper icon to support the user */
  icon?: any;
  /** set the icon color */
  iconColor?: string;
  /** Helper icon to support the user for input required */
  iconRequired?: any;
  /** set the icon color required */
  iconColorRequired?: string;
  /** The caption for the input */
  label?: string;
  /** Set a function triggered when onChange is called */
  onChange?: Function;
  /** Set a function triggered when onClick is called */
  onClick?: Function;
  /** Icon for mark input is required */
  required?: boolean;
  /** Set the height of the input */
  inputSize?: string;
  /** set the card type */
  getCardType?: string;
  /** Set the input type (text, password, email, etc.) */
  type?: string;
  /** Placeholder */
  placeholder?: string;
  /** Caption message */
  caption?: string;
}

/**
 * Input component wrapped with label and span tags for better UX
 * @param {string} border The border type for the input (full, bottom, overlap)
 * @param {string} borderColor set the color border
 * @param {boolean} disabled Set the input disabled
 * @param {boolean} family Set font family
 * @param {any} icon Helper icon to support the user
 * @param {any} iconRequired Helper icon to support the user for required inputs
 * @param {string} iconColor set the icon color
 * @param {string} iconColorRequired set the icon color required
 * @param {string} label The caption for the input
 * @param {Function} onChange Set a function triggered when onChange is called
 * @param {Function} onClick  Set a function triggered when onClick is called
 * @param {string} inputSize Set the height of the input
 * @param {string} type Set the input type (text, password, email, etc.)
 * @param {string} caption Set caption message
 */
const Input = ({
  label,
  border = 'default',
  type = 'text',
  icon,
  iconRequired,
  inputSize = 'default',
  borderColor,
  iconColor,
  iconColorRequired,
  onChange = () => {},
  onClick,
  family,
  getCardType = 'card',
  placeholder,
  required,
  caption,
  ...rest
}: InputInterface & React.InputHTMLAttributes<HTMLInputElement>) => {
  const [cardType, setCardType] = useState(getCardType);
  const [placeIcon, setIcon] = useState(icon);
  const { configuration } = useContext(ConfigContext);
  const [newValue, setNewValue] = useState<any>(rest.defaultValue || undefined);
  const inputRef = useRef<any>();

  const setCardIcon = (ev: any) => {
    const { value: val }: { value: string } = ev.target;
    creditCardType(val).map((card) => {
      /* istanbul ignore else */
      if (
        card.type === CardType.MASTERCARD
        || card.type === CardType.VISA
        || card.type === CardType.AMERICAN_EXPRESS
      ) {
        setCardType(card.type);
        setIcon(card.type);
      } else {
        setCardType('card');
        setIcon(icon || null);
      }
      return true;
    });
  };

  const hasLabel = label !== null
    && label !== undefined
    && label !== ''
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
        borderColor={
          borderColor || configuration.colors.defaultInputBorderColor
        }
        iconColor={iconColor}
        disabled={rest.disabled}
        family={family}
        type={type}
        hasLabel={hasLabel}
        {...rest}
      >
        <input
          className='input'
          ref={inputRef}
          onChange={(ev) => {
            if (type === 'card') {
              setCardIcon(ev);
              setNewValue(
                mask(ev.target.value.replace(/([^0-9])/g, ''), 4, '-').slice(
                  0,
                  cardType === 'american-express' ? 21 : 19,
                ),
              );
            } else {
              setNewValue(ev.target.value);
            }
            onChange(ev);
          }}
          onClick={(e) => {
            if (onClick) onClick(e);
          }}
          type={
            type === 'card' || type === 'phone'
              ? 'tel'
              : type === 'datetime-local'
                ? 'date'
                : type
          }
          id={rest.id}
          required
          defaultValue={newValue}
          disabled={rest.disabled}
          min={rest.min}
          max={rest.max}
          placeholder={placeholder}
          {...rest}
        />
        {placeIcon !== null && (
          <span className='icon'>
            {type === 'card' ? getIcon(placeIcon) : placeIcon}
          </span>
        )}
        {type !== 'color' && type !== 'time' && label && (
          <label className='label' htmlFor={rest.id}>
            <span>{label}</span>
            {iconRequired && (
              <span className='icon-required-label'>{iconRequired}</span>
            )}
          </label>
        )}
        {required && iconRequired && (
          <span className='icon-required'>{iconRequired}</span>
        )}
        {type === 'color' && (
          <span className='show-value'>
            <span>{inputRef?.current?.value.toUpperCase() || '#FFFFFF'}</span>
          </span>
        )}
        {caption && <span className='caption'>{caption}</span>}
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
