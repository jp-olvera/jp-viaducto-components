import React, { useContext } from 'react';
import { Circle } from 'react-ikonate';
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
  block = false,
  colors = null,
  disabled = false,
  height = null,
  icon = null,
  iconSpacing = 'xs',
  label = null,
  lead = false,
  leftSpacing = null,
  isLoading = false,
  rightSpacing = null,
  size = SIZE.default,
  type = 'button',
  variant = 'primary',
  ...rest
}: any) => {
  const { configuration } = useContext(ConfigContext);
  const newHeight = height || configuration.controlHeight[size];
  const hasIcon = icon !== null && icon !== '';
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
      disabled={disabled || isLoading}
      {...rest}
    >
      {(isLoading && lead) || (hasIcon && lead) ? (
        <span className='button-icon-span'>
          {isLoading ? <Circle /> : icon}
        </span>
      ) : null}
      <span>{label}</span>
      {(isLoading && !lead) || (hasIcon && !lead) ? (
        <span className='button-icon-span'>
          {isLoading ? <Circle /> : icon}
        </span>
      ) : null}
    </StyledButton>
  );
};

export default Button;
