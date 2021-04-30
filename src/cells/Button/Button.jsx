import React, { useContext } from 'react';

import { ConfigContext } from '../../providers';

import StyledButton from './StyledButton';
import { SIZE } from './constants';
const defaultColors = {
  default: '#937B3D',
  hover: '#AD9043',
  click: '#C3A24A',
  text: '#000'
};

/**
 * Button component overrides HTML button tag. This components accepts icons and/or labels
 * @param {String} label Label for the button
 * @param {String} size Size of the button
 * @param {String} colors Color of the button (with its states)
 * @param {Icon} icon Icon component for the button
 * @param {Boolean} lead Indicates if the icon will be leading
 */
const Button = ({
  label = null,
  size = SIZE.default,
  colors = defaultColors,
  icon = null,
  lead = false,
  ...rest
}) => {
  const { configuration } = useContext(ConfigContext);

  return (
    <StyledButton
      size={size}
      colors={colors}
      isIconOnly={label === null && icon !== null}
      hasIcon={icon !== null}
      lead={lead}
      configuration={configuration}
      {...rest}
    >
      {icon !== null && lead && <span className="button-icon-span">{icon}</span>}
      <span>{label}</span>
      {icon !== null && (!lead) && <span className="button-icon-span">{icon}</span>}
    </StyledButton>
  );
};

export default Button;
