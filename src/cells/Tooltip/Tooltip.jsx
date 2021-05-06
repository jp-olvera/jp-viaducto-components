import React, { useContext } from 'react';

import { TooltipContainer } from './StyledTooltip';
import { ConfigContext } from '../../providers/ConfigProvider';

const Tooltip = ({
  children,
  label = 'Tooltip',
  active = false,
  position = 'top',
  color = '#C4C4C4',
  textColor = '#000',
  family = 'Roboto',
}) => {
  const { configuration } = useContext(ConfigContext);
  return (
    <TooltipContainer
      configuration={configuration}
      active={active}
      position={position}
      color={color}
      textColor={textColor}
      family={family}
    >
      {children}
      <span className="tooltip">{label}</span>
    </TooltipContainer>
  );
};

export default Tooltip;
