import React, { useContext } from 'react';
import { Circle } from 'react-ikonate';
import { getIcon } from '../Input/Icon';
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
 * @param {String} shapeColor Button variant (color)
 * @param {String} variant Button visual style
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
 * @param {Boolean} useLongLoading Set the long loading bar
 */
const Button = ({
  block = false,
  colors = null,
  disabled = false,
  height = null,
  icon = null,
  iconSpacing = 'xs',
  isLoading = false,
  isValid = null,
  label = null,
  lead = false,
  leftSpacing = null,
  rightSpacing = null,
  shapeColor = 'primary',
  size = SIZE.default,
  type = 'button',
  variant = 'solid',
  useLongLoading = false,
  ...rest
}: any) => {
  const { configuration } = useContext(ConfigContext);
  const newHeight = height || configuration.controlHeight[size];
  const hasIcon = icon !== null && icon !== '';
  let c = colors || configuration.colors[shapeColor] || defaultColors;
  if (isValid === false) {
    c = configuration.colors.danger;
  }
  if (isValid === true) {
    c = configuration.colors.success;
  }
  return (
    <StyledButton
      size={size}
      colors={c}
      isIconOnly={label === null && icon !== null}
      lead={lead}
      configuration={configuration}
      height={newHeight}
      type={type}
      iconSpacing={iconSpacing}
      leftSpacing={leftSpacing}
      rightSpacing={rightSpacing}
      block={block}
      isValid={isValid}
      disabled={disabled || isLoading}
      isLoading={isLoading}
      variant={variant}
      {...rest}
    >
      {hasIcon || (isLoading && !useLongLoading) ? (
        <span className='button-icon-span'>
          {isValid && getIcon('ok', 'inherit', 'inherit', '2px')}
          {isValid === false && getIcon('cancel', 'inherit', 'inherit', '2px')}
          {isLoading && isValid === null && useLongLoading && (
            <div className='status' />
          )}
          {isLoading && isValid === null && useLongLoading === false && (
            <Circle className='turnOn' strokeDasharray='20' />
          )}
          {(isValid === null && !isLoading) || useLongLoading ? icon : null}
        </span>
      ) : null}
      {isLoading && isValid === null && useLongLoading && (
        <div className='status' />
      )}
      <span>{label}</span>
    </StyledButton>
  );
};

export default Button;
