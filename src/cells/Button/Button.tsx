import React, { useContext, forwardRef } from 'react';
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

const Button = forwardRef(
  (
    {
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
      radius = 'md',
      rightSpacing = null,
      shapeColor = 'primary',
      size = SIZE.default,
      type = 'button',
      variant = 'solid',
      useLongLoading = false,
      ...rest
    }: any,
    ref,
  ) => {
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
        radius={radius}
        rightSpacing={rightSpacing}
        block={block}
        isValid={isValid}
        disabled={disabled || isLoading}
        isLoading={isLoading}
        variant={variant}
        ref={ref}
        {...rest}
      >
        {hasIcon && <span className='button-icon-span'>{icon}</span>}
        {isLoading && isValid === null && useLongLoading && (
          <div className='status' />
        )}
        <span>{label}</span>
      </StyledButton>
    );
  },
);

export default Button;
