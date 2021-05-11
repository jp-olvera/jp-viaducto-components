import React, { useContext } from 'react';

import { TooltipContainer } from './StyledTooltip';
import { ConfigContext } from '../../providers/ConfigProvider';

/**
 * Tooltip component
 * @param {any} children Child component
 * @param {string} label Text in the tooltip
 * @param {boolean} active Show/hide the tooltip
 * @param {string} position Set the position of the tooltip
 * @param {string} color Color of the background
 * @param {string} textColor Text color
 * @param {string} family Font family
 */
interface TooltipInterface {
  children?: any;
  label?: string;
  active?: boolean;
  position?: string;
  color?: string;
  textColor?: string;
  family?: string;
}

const Tooltip = ({
  children,
  label = 'Tooltip',
  active = false,
  position = 'top',
  color = '#C4C4C4',
  textColor = '#000',
  family = 'Roboto',
}: TooltipInterface) => {
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
