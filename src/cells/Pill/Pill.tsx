import React, { useContext } from 'react';
import { ConfigContext } from '../../providers';
import StyledPill from './StyledPill';
import { BareButton } from '../BareButton';

/** Pill component */
interface PillInterface {
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
  handleAction?: Function | null;
  /** Place an icon */
  icon?: any;
  /** Icon as a first child component */
  iconLead?: any;
  /** Text in the label */
  label?: string;
  /** Size of the pill */
  size?: string;
  /** Set the vertical align */
  verticalAlign?: string;
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
 */

const Pill = ({
  label,
  iconLead = null,
  icon = null,
  background = '#C4C4C4',
  color = '#000',
  size = 'md',
  family = null,
  verticalAlign = 'baseline',
  handleAction,
  circleBorder = true,
  borderColor = null,
  closeIcon = true,
  ...rest
}: PillInterface & React.HTMLAttributes<HTMLDivElement>) => {
  const { configuration } = useContext(ConfigContext);

  return (
    <StyledPill
      hasIcon={icon !== null || icon !== ''}
      hasIconLead={iconLead !== null || iconLead !== ''}
      onlyText={
        (icon === null && iconLead === null) || (icon === '' && iconLead === '')
      }
      background={background}
      color={color}
      size={size}
      family={family}
      configuration={configuration}
      verticalAlign={verticalAlign}
      {...rest}
      circleBorder={circleBorder}
      borderColor={borderColor}
    >
      {iconLead !== null && <span className='span-icon-lead'>{iconLead}</span>}
      <span>{label}</span>
      <span className='span-icon'>
        <BareButton
          onClick={(e) => {
            /* istanbul ignore else */
            if (handleAction) handleAction(e);
          }}
          style={{ height: '100%', display: 'flex' }}
          data-testid='btn-bare'
          close={closeIcon}
        >
          {icon && icon}
        </BareButton>
      </span>
    </StyledPill>
  );
};

export default Pill;
