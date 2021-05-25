import React, { useContext } from 'react';

import { ConfigContext } from '../../providers';

import StyledButton from './StyledButton';
import { SIZE } from './constants';

const defaultColors = {
  default: '#937B3D',
  hover: '#AD9043',
  click: '#C3A24A',
  text: '#000',
};

/**
 * Button component overrides HTML button tag. This components accepts icons and/or labels
 * @param {String} label Label for the button
 * @param {String} size Size of the button
 * @param {String} variant Button variant (color)
 * @param {String} colors Color of the button (with its states)
 * @param {String} iconSpacing The horizontal spacing between the label and icon (if both are defined)
 * @param {String} leftSpacing Left spacing between the content and the button
 * @param {String} rightSpacing Right spacing between the content and the button
 * @param {String} transition Set the transitionTimingFunction
 * @param {Icon} icon Icon component for the button
 * @param {string} height Size of the component
 * @param {boolean} disabled Enable/Disable button
 * @param {String} block Set button with as 100% of the container
 * @param {Boolean} lead Indicates if the icon will be leading
 * @param {string} type Button type (for the color)
 * @param {Function} onClick Action to execute
 */
const Button = ({
  colors = null,
  height = null,
  icon = null,
  label = null,
  lead = false,
  size = SIZE.default,
  variant = 'primary',
  type = 'button',
  iconSpacing = 'xs',
  leftSpacing = null,
  rightSpacing = null,
  block = false,
  disabled = false,
  ...rest
}: any) => {
  const { configuration } = useContext(ConfigContext);
  const newHeight = height || configuration.controlHeight[size];

  return (
    <StyledButton
      size={size}
      colors={colors || configuration.colors[variant] || defaultColors}
      isIconOnly={label === null && icon !== null}
      lead={lead}
      configuration={configuration}
      height={newHeight}
      type={type}
      iconSpacing={iconSpacing}
      leftSpacing={leftSpacing}
      rightSpacing={rightSpacing}
      block={block}
      disabled={disabled}
      {...rest}
    >
      {icon !== null && icon !== '' && lead && (
        <span className='button-icon-span'>{icon}</span>
      )}
      <span>{label}</span>
      {icon !== null && icon !== '' && !lead && (
        <span className='button-icon-span'>{icon}</span>
      )}
    </StyledButton>
  );
};

export default Button;
