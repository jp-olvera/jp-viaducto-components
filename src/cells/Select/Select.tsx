import React, { useContext } from 'react';
import StyledSelect from './StyledSelect';
import { ConfigContext } from '../../providers';
/**
 * Select input component
 * @param {String} size Set size of the select component
 * @param {String} fontSize Set the font size
 * @param {String} background Set background color for the select component
 * @param {String} color Set font color for the select component
 * @param {String} radius Set border radius property (if is a number, border radius will be set as "rem", if it is a string will be set as marked)
 * @param {String} border Set the border(s) of the component
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
  radius,
  ...rest
}: any) => {
  const { configuration } = useContext(ConfigContext);

  return (
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
      data-testid='select'
    >
      {children}
    </StyledSelect>
  );
};

export default Select;
