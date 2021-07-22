/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext } from 'react';
import { StyledSelect, StyledSelectWrapper } from './StyledSelect';
import { ConfigContext } from '../../providers';

/** Select input component */
interface SelectInterface {
  /** Options to render */
  children: any;
  /** Set background color for the select component */
  background?: string;
  /** Set the border(s) of the component */
  border?: string;
  /** Set font color for the select component */
  color?: string;
  /** Set the font family */
  fontFamily?: string;
  /** Set the font size */
  fontSize?: string;
  /** Set the custom height for the element */
  height?: string;
  /** Set the argument to choose multiple options */
  multiple?: boolean;
  /** Trigger an action */
  onChange?: Function;
  /** Set border radius property */
  radius?: string;
  /** Set size of the select component */
  inputSize?: string;
  /** Set a label in the select component */
  label?: string;
  /** Set a label in selected position */
  labelPosition?: string;
  /** Set a readonly prop */
  readonly?: boolean;
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
 * @param {string} label Set a label in the select component
 * @param {string} labelPosition Set a label in selected position
 * @param {boolean} readonly Set a readonly prop
 */
const Select = ({
  children,
  inputSize = 'default',
  height,
  border,
  fontSize,
  fontFamily,
  background,
  color,
  multiple = false,
  radius,
  onChange,
  label,
  labelPosition = 'outside',
  readonly = false,
  ...rest
}: SelectInterface & React.SelectHTMLAttributes<HTMLSelectElement>) => {
  const { configuration } = useContext(ConfigContext);
  const titleProps: { label?: string; position?: string } = {
    label,
    position: labelPosition,
  };
  return (
    <StyledSelectWrapper
      titleProps={titleProps}
      background={background}
      height={height}
      fontFamily={fontFamily}
      multiple={multiple}
      configuration={configuration}
      inputSize={inputSize}
      labelPosition={labelPosition}
    >
      <StyledSelect
        configuration={configuration}
        inputSize={inputSize}
        height={height}
        border={border}
        fontSize={fontSize}
        fontFamily={fontFamily}
        background={background}
        color={color}
        radius={radius}
        readonly={readonly}
        {...rest}
        id={rest.id}
        data-testid='select'
        multiple={multiple}
        onChange={onChange}
        titleProps={titleProps}
      >
        {children}
      </StyledSelect>
      {label && <label htmlFor={rest.id}>{label}</label>}
    </StyledSelectWrapper>
  );
};

export default Select;
