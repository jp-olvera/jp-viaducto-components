/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext } from 'react';
import { StyledSelect, StyledSelectWrapper } from './StyledSelect';
import { ConfigContext } from '../../providers';

interface SelectInterface {
  children: any;
  background?: string;
  border?:
    | string
    | {
        top?: string;
        right?: string;
        bottom?: string;
        left?: string;
      };
  color?: string;
  fontFamily?: string;
  fontSize?: string;
  height?: string;
  multiple?: boolean;
  onChange?: Function;
  radius?: string | number;
  inputSize?: string;
  titleProps?: { label: string; position: string } | null;
}

/**
 * Select input component
 * @param {any} children Options to render
 * @param {string} background Set background color for the select component
 * @param {string | { top?: string; right?: string; bottom?: string; left?: string;}} border Set the border(s) of the component
 * @param {string} color Set font color for the select component
 * @param {string} fontFamily Set the font family
 * @param {string} fontSize Set the font size
 * @param {Boolean} height Set the custom height for the element
 * @param {Boolean} multiple Set the argument to choose multiple options
 * @param {Function} onChange Trigger an action
 * @param {string} radius Set border radius property
 * @param {string} inputSize Set size of the select component
 * @param {object} title Set a title in the select component in/on/over the wrapper
 */
const Select = ({
  children,
  inputSize = 'lg',
  height,
  border,
  fontSize,
  fontFamily,
  background,
  color,
  multiple = false,
  radius,
  onChange,
  titleProps = null,
  ...rest
}: SelectInterface & React.SelectHTMLAttributes<HTMLSelectElement>) => {
  const { configuration } = useContext(ConfigContext);

  return (
    <StyledSelectWrapper
      title={multiple ? null : titleProps}
      background={background}
      height={height}
      fontFamily={fontFamily}
      configuration={configuration}
    >
      <StyledSelect
        configuration={configuration}
        size={inputSize}
        height={height}
        border={border}
        fontSize={fontSize}
        fontFamily={fontFamily}
        background={background}
        color={color}
        radius={radius}
        {...rest}
        id={rest.id}
        data-testid='select'
        multiple={multiple}
        onChange={onChange}
        title={multiple ? null : titleProps}
      >
        {children}
      </StyledSelect>
      {multiple === false && titleProps !== null && (
        <label htmlFor={rest.id}>{titleProps.label}</label>
      )}
    </StyledSelectWrapper>
  );
};

export default Select;
