import React, { useContext } from 'react';
import { ConfigContext } from '../../providers';
import { Close } from 'react-ikonate';
import StyledPill from './StyledPill';
import { BareButton } from '../BareButton';

interface PillInterface {
  label: string;
  iconLead: any;
  icon: any;
  background: string;
  color: string;
  size: string;
  family: string;
  verticalAlign: string;
  handleAction: Function;
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
  handleAction = () => {},
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
      {iconLead !== null && <span className="span-icon-lead">{iconLead}</span>}
      <span>{label}</span>
      <BareButton onClick={handleAction} style={{ height: '100%' }}>
        <span className="span-icon">
          {icon === null || icon === '' ? (
            <Close stroke="blue" strokeWidth={2} width="18px" height="18px" />
          ) : (
            icon
          )}
        </span>
      </BareButton>
    </StyledPill>
  );
};

export default Pill;
