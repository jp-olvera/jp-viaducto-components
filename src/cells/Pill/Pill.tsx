import React, { useContext } from 'react';
import { Close } from 'react-ikonate';
import { ConfigContext } from '../../providers';
import StyledPill from './StyledPill';
import { BareButton } from '../BareButton';

/**
 * Pill component
 * @param {string} label Text in the label
 * @param {any} iconLead Icon as a first child component
 * @param {string} icon Icon as the last child component
 * @param {string} background Color of the pill
 * @param {string} color Text color
 * @param {string} size Size of the pill
 * @param {string} family Font family
 * @param {string} verticalAlign Vertical align in the pill
 * @param {string} handleAction Action to execute
 */
interface PillInterface {
  label: string;
  iconLead: any;
  icon: any;
  background: string;
  color: string;
  size: string;
  family: string;
  verticalAlign: string;
  handleAction: Function | null;
}

const Pill = ({
  label = '',
  iconLead = null,
  icon = null,
  background = '#C4C4C4',
  color = '#000',
  size = 'md',
  family = 'Manrope',
  verticalAlign = 'baseline',
  handleAction,
}: PillInterface) => {
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
    >
      {iconLead !== null && <span className='span-icon-lead'>{iconLead}</span>}
      <span>{label}</span>
      <span className='span-icon'>
        <BareButton
          onClick={handleAction}
          style={{ height: '100%', display: 'flex' }}
        >
          {icon === null || icon === '' ? (
            <Close stroke='blue' strokeWidth={2} width='18px' height='18px' />
          ) : (
            icon
          )}
        </BareButton>
      </span>
    </StyledPill>
  );
};

export default Pill;
