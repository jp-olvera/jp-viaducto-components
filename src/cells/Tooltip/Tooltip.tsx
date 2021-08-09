import React, { useContext } from 'react';

import { TooltipContainer } from './StyledTooltip';
import { ConfigContext } from '../../providers/ConfigProvider';

/** Tooltip component */
interface TooltipInterface {
  /** Child component */
  children: any;
  /** Show/hide the tooltip */
  active?: boolean;
  /** Color of the background */
  color?: string;
  /** Font family */
  family?: string;
  /** Text in the tooltip */
  label?: string;
  /** Set the position of the tooltip */
  position?: 'top' | 'right' | 'left' | 'bottom';
  /** Text color */
  textColor?: string;
}
/**
 * Tooltip component
 * @param {any} children Child component
 * @param {boolean} active Show/hide the tooltip
 * @param {string} color Color of the background
 * @param {string} family Font family
 * @param {string} label Text in the tooltip
 * @param {string} position Set the position of the tooltip
 * @param {string} textColor Text color
 */

const Tooltip = ({
  children,
  label,
  active = false,
  position,
  color,
  textColor,
  family,
  ...rest
}: TooltipInterface & React.HTMLAttributes<HTMLDivElement>) => {
  const { configuration } = useContext(ConfigContext);
  return (
    <TooltipContainer
      configuration={configuration}
      active={active}
      position={position}
      color={color}
      textColor={textColor}
      family={family}
      {...rest}
    >
      {children}
      <span className='tooltip'>{label}</span>
    </TooltipContainer>
  );
};

export default Tooltip;
