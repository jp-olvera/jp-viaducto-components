import React, { forwardRef, useContext } from 'react';
import { FormItem } from '../FormItem';
import { FormFieldProps } from '../formUtils/types';
import { ConfigContext } from '../../providers';

const TextField = forwardRef<HTMLInputElement, FormFieldProps & React.InputHTMLAttributes<HTMLInputElement>>((
  {
    border = 'outside',
    borderColor,
    disabled = false,
    family,
    id,
    inputSize = 'default',
    label,
    type = 'text',
    ...rest
  },
  ref,
) => {
  const { configuration } = useContext(ConfigContext);
  return (
    <FormItem
      border={border}
      borderColor={borderColor || configuration.colors.defaultInputBorderColor}
      disabled={disabled}
      family={family}
      htmlFor={id}
      inputSize={inputSize}
      label={label}
    >
      <input {...rest} type={type} disabled={disabled} ref={ref} />
    </FormItem>
  );
});
export default TextField;
