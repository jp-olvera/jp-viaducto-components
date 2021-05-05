import React, { useContext } from 'react';

import { ConfigContext } from '../../providers';

import StyledButton from './StyledButton';
import { SIZE } from './constants';

let defaultColors = {
  default: '#937B3D',
  hover: '#AD9043',
  click: '#C3A24A',
  text: '#000',
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
  colors = null,
  height = null,
  icon = null,
  label = null,
  lead = false,
  size = SIZE.default,
  type = 'primary',
  ...rest
}) => {
  const { configuration } = useContext(ConfigContext);
  let newHeight = height || configuration.controlHeight[size];
  if (colors) {
    colors = colors;
  } else {
    colors = configuration.colors[type] || defaultColors;
  }

  return (
    <StyledButton
      size={size}
      colors={colors}
      isIconOnly={label === null && icon !== null}
      hasIcon={icon !== null}
      lead={lead}
      configuration={configuration}
      height={newHeight}
      {...rest}
    >
      {icon !== null && lead && (
        <span className="button-icon-span">{icon}</span>
      )}
      <span>{label}</span>
      {icon !== null && !lead && (
        <span className="button-icon-span">{icon}</span>
      )}
    </StyledButton>
  );
};

export default Button;
