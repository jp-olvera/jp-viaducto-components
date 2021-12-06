import React, { useContext } from 'react';
import { ConfigContext } from '../../providers';
import StyledPill from './StyledPill';

/** Pill component */
export interface Pill extends React.HTMLAttributes<HTMLDivElement> {
  /** Aria label for the handleAaction button */
  ariaLabelAction?: string;
  /** Color of the pill */
  background?: string;
  /** Color of the border */
  borderColor?: string | null;
  /** Set pill with circle border (border radius) */
  circleBorder?: boolean;
  /** Set the close icon */
  closeIcon?: boolean;
  /** Text color */
  color?: string;
  /** Font family */
  family?: string | null;
  /** Action to execute */
  handleAction?: React.MouseEventHandler<HTMLButtonElement> | null;
  /** Place an icon */
  icon?: any;
  /** Icon as a first child component */
  iconLead?: any;
  /** Text in the label */
  label: string;
  /** Size of the pill */
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg';
  /** Set the vertical align */
  verticalAlign?: string;
  /** set border radius */
  radius?: 'none' | 'sm' | 'md' | 'lg' | null;
}

/**
 * Pill component
 * @param {string} background Color of the pill
 * @param {string} bordercolor Color of the border
 * @param {boolean} circleBorder Set pill with circle border (border radius)
 * @param {string} closeIcon Set the close icon
 * @param {string} color Text color
 * @param {string} family Font family
 * @param {string} handleAction Action to execute
 * @param {any} icon Place an icon
 * @param {any} iconLead Icon as a first child component
 * @param {string} label Text in the label
 * @param {string} size Size of the pill
 * @param {string} verticalAling Set the vertical align
 * @param {string} radius  set border radius
 */

const Pill = ({
  label,
  iconLead = null,
  icon = null,
  background,
  color,
  size = 'md',
  family = null,
  verticalAlign = 'baseline',
  handleAction = null,
  circleBorder = true,
  radius = null,
  borderColor = null,
  ariaLabelAction = 'close',
  ...rest
}: Pill) => {
  const { configuration } = useContext(ConfigContext);

  const actualCircleBorder = radius === null || !circleBorder;
  return (
    <StyledPill
      hasIcon={icon !== null || icon !== ''}
      hasIconLead={iconLead !== null || iconLead !== ''}
      onlyText={(icon === null && iconLead === null) || (icon === '' && iconLead === '')}
      background={background}
      color={color}
      size={size}
      family={family}
      configuration={configuration}
      verticalAlign={verticalAlign}
      {...rest}
      circleBorder={actualCircleBorder}
      borderColor={borderColor}
      radius={radius}
    >
      {iconLead !== null && (
        <span
          className='span-icon-lead'
          style={{
            display: 'flex',
            alignContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          {iconLead}
        </span>
      )}
      <span
        style={{
          display: 'flex',
          alignContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}
      >
        {label}
      </span>
      {handleAction !== null ? (
        <span
          className='span-icon'
          style={{
            display: 'flex',
            alignContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <button
            onClick={handleAction}
            data-testid='btn-bare'
            aria-label={ariaLabelAction}
            type='button'
            style={{
              padding: 0,
              backgroundColor: 'transparent',
              border: '1px solid transparent',
              cursor: 'pointer',
              boxSizing: 'border-box',
            }}
          >
            {icon !== null ? (
              icon
            ) : (
              <svg
                height='10pt'
                viewBox='0 0 329.26933 329'
                width='9pt'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0' />
              </svg>
            )}
          </button>
        </span>
      ) : null}
    </StyledPill>
  );
};

export default Pill;
