import React, { forwardRef, useContext } from 'react';
import { FormItem } from '../FormItem';
import { FormFieldProps } from '../formUtils/types';
import { ConfigContext } from '../../providers';

const SelectField = forwardRef<HTMLSelectElement, FormFieldProps & React.SelectHTMLAttributes<HTMLSelectElement>>((
  {
    border = 'outside',
    disabled = false,
    family,
    id,
    inputSize = 'default',
    label,
    borderColor,
    children,
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
      <select name={rest.name} id={id} {...rest} disabled={disabled} ref={ref}>
        {children}
      </select>
    </FormItem>
  );
});
export default SelectField;
