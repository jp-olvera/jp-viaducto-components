import React, { forwardRef, useContext, useState } from 'react';
import creditCardType, { types as CardType } from 'credit-card-type';
import { FormItem } from '../FormItem';
import { FormFieldProps } from '../formUtils/types';
import { ConfigContext } from '../../providers';

export interface CardFieldProps {
  cardType?: string | 'card';
  onChange?: (string) => void;
  defaultValue?: string;
  placeholder?: string;
  value?: string;
}
const CardField = forwardRef<HTMLInputElement, FormFieldProps & CardFieldProps>((
  {
    border = 'outside',
    borderColor,
    disabled = false,
    family,
    id,
    inputSize = 'default',
    label,
    onChange,
    cardType,
    placeholder = 'XXXX - XXXX - XXXX - XXXX',
    value = '',
    ...rest
  },
  ref,
) => {
  const { configuration } = useContext(ConfigContext);
  const [type, setType] = useState(cardType);
  const [newValue, setNewValue] = useState<any>(value);

  const setCardIcon = (ev: any) => {
    const { value: val }: { value: string } = ev.target;
    creditCardType(val).map((card) => {
      /* istanbul ignore else */
      if (
        card.type === CardType.MASTERCARD
        || card.type === CardType.VISA
        || card.type === CardType.AMERICAN_EXPRESS
      ) {
        setType(card.type);
      } else {
        setType('card');
      }
      return true;
    });
  };

  return (
    <FormItem
      border={border}
      borderColor={borderColor || configuration.colors.defaultInputBorderColor}
      family={family}
      inputSize={inputSize}
    >
      <input
        ref={ref}
        type='text'
        value={newValue}
        placeholder={placeholder}
        disabled={disabled}
        onChange={(ev) => {
          setCardIcon(ev);
          const cardNumber = mask(ev.target.value.replace(/([^0-9])/g, ''), 4, '-').slice(
            0,
            type === 'american-express' ? 21 : 19,
          );
          setNewValue(cardNumber);
          if (onChange) {
            onChange(cardNumber);
          }
        }}
        id={id}
        {...rest}
      />
      <label htmlFor={id}>{label}</label>
    </FormItem>
  );
});

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

export default CardField;
