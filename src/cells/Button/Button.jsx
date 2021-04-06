import React from 'react';
import StyledButton from './StyledButton';
import { SIZE } from './constants';
const defaultColors = {
  default: '#937B3D',
  hover: '#AD9043',
  click: '#C3A24A',
};

/**
 * Button component overrides HTML button tag. This components accepts icons and/or labels
 * @param {String} label Label for the button
 * @param {String} size Size of the button
 * @param {String} colors Color of the button (with its states)
 * @param {Icon} icon Icon component for the button
 */
const Button = ({
  label,
  size = SIZE.default,
  colors = defaultColors,
  icon = null,
  ...rest
}) => {
  return (
    <StyledButton
      size={size}
      colors={colors}
      isIconOnly={!label && icon !== null}
      hasIcon={icon !== null}
      {...rest}
    >
      {icon !== null ? <span className="button-icon-span">{icon}</span> : null}
      <span>{label}</span>
    </StyledButton>
  );
};

export default Button;
