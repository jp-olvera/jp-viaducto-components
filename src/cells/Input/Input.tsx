/* eslint-disable jsx-a11y/control-has-associated-label */
import React, {
  useState, useContext, useRef, useEffect,
} from 'react';
import creditCardType, { types as CardType } from 'credit-card-type';

import { Pill } from '..';
import { ConfigContext } from '../../providers';
import { DataListContainer, Wrapper } from './StyledInput';
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
 * @param {{options:[], pillColor:string, pillTextColor:string}/null, selected:[]} dataListConfiguration Configuration for the datalist
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
  dataListConfiguration = null,
  family,
  ...rest
}: any) => {
  const [cardType, setCardType] = useState('card');
  const [placeIcon, setIcon] = useState(icon);
  const [optionsSelected, setOptionsSelected] = useState<any[]>([]);
  const { configuration } = useContext(ConfigContext);
  const [newValue, setNewValue] = useState<any>(value);
  const inputRef = useRef<any>();
  const datalistContainerRef = useRef<any>();

  useEffect(() => {
    if (dataListConfiguration !== null) {
      setOptionsSelected(
        Array.from(dataListConfiguration.selected || optionsSelected),
      );
    } else {
      setOptionsSelected([]);
    }
  }, []);

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
          onSelect={(ev: any) => {
            if (type === 'datalist') {
              onDataSelected(
                datalistContainerRef,
                dataListConfiguration,
                optionsSelected,
                setOptionsSelected,
                ev,
              );
            }
            return null;
          }}
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
                : type === 'datalist'
                  ? 'text'
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
          list={type === 'datalist' ? `${rest.id}__datalist` : undefined}
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
      {type === 'datalist' && (
        <DataListContainer
          configuration={configuration}
          ref={datalistContainerRef}
          border={border}
          borderColor={borderColor}
        >
          {optionsSelected.length > 0
            && optionsSelected.map((option: any, index: number) => (
              <Pill
                label={option}
                background={dataListConfiguration?.pillColor}
                color={dataListConfiguration?.pillTextColor}
                key={option + index.toString()}
                family={family}
                handleAction={() => removePill(
                  option,
                  optionsSelected,
                  inputRef,
                  setNewValue,
                  setOptionsSelected,
                )}
              />
            ))}
        </DataListContainer>
      )}
      {type === 'datalist' && (
        <datalist id={`${rest.id}__datalist`}>
          {dataListConfiguration?.options !== null
            && (dataListConfiguration?.options || []).map(
              (option: any, index: number) => (
                <option value={option} key={option + index.toString()}>
                  {option}
                </option>
              ),
            )}
        </datalist>
      )}
    </>
  );
};

export default Input;

export const onDataSelected = (
  datalistContainerRef: any,
  dataListConfiguration: any,
  optionsSelected: any[],
  setOptionsSelected: Function,
  ev: { target: any },
) => {
  if (datalistContainerRef) {
    if (
      dataListConfiguration?.options?.includes(ev.target.value)
      && !optionsSelected.includes(ev.target.value)
    ) {
      setOptionsSelected((last: any[]) => [...last, ev.target.value]);
    }
  }
};

export const removePill = (
  pill: any,
  optionsSelected: any[],
  inputRef: any,
  setNewValue: Function,
  setOptionsSelected: Function,
) => {
  if (optionsSelected.includes(pill)) {
    // eslint-disable-next-line no-param-reassign

    if (inputRef) {
      setNewValue('');
    }
    setOptionsSelected((before: any[]) => before.filter((option: any) => option !== pill));
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

export const getType = (args: {
  type: string;
  cardType: string;
  icon: string;
}) => {
  switch (args.type) {
    case 'date':
      return 'date';
    case 'time':
      return 'time';
    case 'color':
      return 'color';
    case 'phone':
      return 'phone';
    case 'card':
      return args.cardType;
    default:
      return args.icon;
  }
};
