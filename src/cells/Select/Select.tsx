import React, { useContext } from 'react';
import StyledSelect from './StyledSelect';
import { ConfigContext } from '../../providers';

const Select = ({
  size = 'default',
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
    >
      {children}
    </StyledSelect>
  );
};

export default Select;
