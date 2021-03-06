import React, { useContext, forwardRef } from 'react';
import { ConfigContext } from '../../providers';
import StyledButton from './StyledButton';

/** Button component overrides HTML button tag. This components accepts icons and/or labels */
export interface Button extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Set button with as 100% of the container */
  block?: boolean;
  /** Color of the button (with its states) */
  colors?: null | {
    default: string;
    hover: string;
    click: string;
    text: string;
    shadow: string;
    [key: string]: string;
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
  /** Button visual style */
  variant?: 'solid' | 'ghost' | 'outline';
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
 * @param {String} label Label for the button
 * @param {Boolean} lead Indicates if the icon will be leading
 * @param {String} leftSpacing Left spacing between the content and the button
 * @param {String} radius Border Radius size
 * @param {String} rightSpacing Right spacing between the content and the button
 * @param {String} shapeColor Button variant (color)
 * @param {String} size Size of the button
 * @param {String} variant Button visual style
 * @param {String} transition Set the transitionTimingFunction
 * @param {Boolean} useLongLoading Set the long loading bar
 */
const Button = forwardRef<HTMLButtonElement, Button>(
  (
    {
      block = false,
      colors = null,
      disabled = false,
      height = null,
      icon = null,
      iconSpacing = 'xs',
      isLoading = false,
      label = null,
      lead = false,
      leftSpacing = null,
      radius = 'md',
      rightSpacing = null,
      shapeColor = 'primary',
      size = 'default',
      variant = 'solid',
      useLongLoading = false,
      ...rest
    }: Button,
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
    if (colors !== null) {
      c = colors;
    } else if (shapeColor !== null) {
      c = configuration.colors[shapeColor];
    } else {
      c = configuration.colors['primary'];
    }

    return (
      <StyledButton
        size={size}
        colors={c}
        isIconOnly={label === null && icon !== null}
        lead={lead}
        configuration={configuration}
        height={newHeight}
        iconSpacing={iconSpacing || 'none'}
        leftSpacing={leftSpacing}
        radius={radius}
        rightSpacing={rightSpacing}
        block={block}
        disabled={disabled || isLoading}
        isLoading={isLoading}
        variant={variant}
        ref={ref}
        {...rest}
      >
        {hasIcon && !isLoading && <span className='button-icon-span'>{icon}</span>}
        {hasIcon && isLoading && useLongLoading && <span className='button-icon-span'>{icon}</span>}
        {isLoading && !useLongLoading ? (
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
        {isLoading && useLongLoading && <div className='status' />}
        <span>{label}</span>
      </StyledButton>
    );
  }
);

export default Button;
