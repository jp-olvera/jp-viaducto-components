/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext } from 'react';
import { StyledSelect, StyledSelectWrapper } from './StyledSelect';
import { ConfigContext } from '../../providers';
/**
 * Select input component
 * @param {String} size Set size of the select component
 * @param {String} fontSize Set the font size
 * @param {String} background Set background color for the select component
 * @param {String} color Set font color for the select component
 * @param {String} radius Set border radius property (if is a number, border radius will be set as "rem", if it is a string will be set as marked)
 * @param {String} border Set the border(s) of the component
 * @param {Boolean} multiple Set the argument to choose multiple options
 * @param {object} title Set a title in the select component in/on/over the wrapper
 * @param {Function} onChange Trigger an action
 */
const Select = ({
  size = 'lg',
  height,
  border,
  children,
  fontSize,
  fontFamily,
  background,
  color,
  multiple = false,
  radius,
  onChange,
  title = null,
  ...rest
}: any) => {
  const { configuration } = useContext(ConfigContext);

  return (
    <StyledSelectWrapper
      title={multiple ? null : title}
      background={background}
      height={height}
      fontFamily={fontFamily}
      configuration={configuration}
    >
      <StyledSelect
        configuration={configuration}
        size={size}
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
        title={multiple ? null : title}
      >
        {children}
      </StyledSelect>
      {multiple === false && title !== null && (
        <label htmlFor={rest.id}>{title.label}</label>
      )}
    </StyledSelectWrapper>
  );
};

export default Select;
