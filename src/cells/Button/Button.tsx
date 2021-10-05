import React, { useContext, forwardRef } from 'react';
import { ConfigContext } from '../../providers';
import StyledButton from './StyledButton';

const defaultColors = {
  default: '#937B3D',
  hover: '#AD9043',
  click: '#C3A24A',
  text: '#000',
};
/** Button component overrides HTML button tag. This components accepts icons and/or labels */
interface ButtonInterface {
  /** Set button with as 100% of the container */
  block?: boolean;
  /** Color of the button (with its states) */
  colors?: null | {
    default?: string;
    hover?: string;
    click?: string;
    text?: string;
  };
  /** Enable/Disable button */
  disabled?: boolean;
  /** Size of the component */
  height?: string | null;
  /** Icon component for the button */
  icon?: any;
  /** The horizontal spacing between the label and icon (if both are defined) */
  iconSpacing?:
    | null
    | 'none'
    | 'nano'
    | 'micro'
    | 'tiny'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'xxl'
    | 'xxxl';
  /** Set loading button prop */
  isLoading?: boolean;
  /** Set valid button prop */
  isValid?: boolean | null;
  /** Label for the button */
  label?: string | null;
  /** Indicates if the icon will be leading */
  lead?: boolean;
  /** Left spacing between the content and the button */
  leftSpacing?:
    | null
    | 'none'
    | 'nano'
    | 'micro'
    | 'tiny'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'xxl'
    | 'xxxl';
  /** Border Radius size */
  radius?: string;
  /** Right spacing between the content and the button */
  rightSpacing?:
    | null
    | 'none'
    | 'nano'
    | 'micro'
    | 'tiny'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'xxl'
    | 'xxxl';
  /** Button variant (color) */
  shapeColor?: null | 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger' | 'tab';
  /** Size of the button */
  size?: 'small' | 'large' | 'default';
  /** Button type (for the color) */
  type?: string;
  /** Button visual style */
  variant?: 'solid' | 'ghost' | 'outline';
  /** Action to execute */
  onClick?: Function;
  /** Set the long loading bar */
  useLongLoading?: boolean;
}

/** * Button component overrides HTML button tag. This components accepts icons and/or labels
 * @param {boolean} block Set button with as 100% of the container
 * @param {String} colors Color of the button (with its states)
 * @param {boolean} disabled Enable/Disable button
 * @param {string} height Size of the component
 * @param {any} icon Icon component for the button
 * @param {String} iconSpacing The horizontal spacing between the label and icon (if both are defined)
 * @param {Boolean} isLoading Set loading button prop
 * @param {Boolean} isValid Set valid button prop
 * @param {String} label Label for the button
 * @param {Boolean} lead Indicates if the icon will be leading
 * @param {String} leftSpacing Left spacing between the content and the button
 * @param {String} radius Border Radius size
 * @param {String} rightSpacing Right spacing between the content and the button
 * @param {String} shapeColor Button variant (color)
 * @param {String} size Size of the button
 * @param {string} type Button type (for the color)
 * @param {String} variant Button visual style
 * @param {String} transition Set the transitionTimingFunction
 * @param {Function} onClick Action to execute
 * @param {Boolean} useLongLoading Set the long loading bar
 */
const Button = forwardRef<
  HTMLButtonElement,
  ButtonInterface & React.ButtonHTMLAttributes<HTMLButtonElement>
>(
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
      size = 'default',
      type = 'button',
      variant = 'solid',
      useLongLoading = false,
      ...rest
    }: ButtonInterface & React.ButtonHTMLAttributes<HTMLButtonElement>,
    ref
  ) => {
    const { configuration } = useContext(ConfigContext);
    const newHeight = height || configuration.controlHeight[size];
    const hasIcon = icon !== null && icon !== '';
    let c: {
      default?: string;
      hover?: string;
      click?: string;
      text?: string;
    };
    if (shapeColor !== null) {
      c = colors || shapeColor ? configuration.colors[shapeColor] : defaultColors;
    } else {
      c = colors || defaultColors;
    }
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
        iconSpacing={iconSpacing || 'none'}
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
        {hasIcon && !isLoading && <span className='button-icon-span'>{icon}</span>}
        {hasIcon && isLoading && useLongLoading && <span className='button-icon-span'>{icon}</span>}
        {isLoading && isValid === null && !useLongLoading ? (
          <span className='button-icon-span'>
            <svg width='25px' height='25px'>
              <circle
                className='progress-ring__circle'
                strokeWidth='2'
                fill='transparent'
                stroke={variant === 'solid' ? c.text : c.default}
                strokeDasharray='53.40707511102649 53.40707511102649'
                r='8.5'
                cx='12.5'
                cy='12.5'
                strokeDashoffset='32.0442px'
              ></circle>
            </svg>
          </span>
        ) : null}
        {isLoading && isValid === null && useLongLoading && <div className='status' />}
        <span>{label}</span>
      </StyledButton>
    );
  }
);

export default Button;
