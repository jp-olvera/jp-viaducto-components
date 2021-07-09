import React, { useContext } from 'react';
import { Paragraph } from '../Paragraph';
import StyledTab from './StyledTab';

import { ConfigContext } from '../../providers';

/** Tab component */
interface TabI {
  /** Text to show */
  text: any;
  /** Set tab as active */
  active?: any;
  /** Set the font size */
  fontSize?: any;
  /** Set the horizontal spacing taking the tab content as reference */
  horizontalSpacing?: any;
  /** Defines the icon in the tab */
  icon?: any;
  /** Set the horizontal spacing taking the icon as reference (if it is defined) */
  iconSpacing?: any;
  /** Defines a tab index for helper function */
  index?: number;
  /** Set the icon as main children and it will be place before the label (if it is defined) */
  lead?: any;
  /** Set the line width */
  lineWidth?: string;
  /** function to call when tab is clicked */
  onClick?: any;
  /** Set the line in position selected */
  position?: any;
  /** Set the color variant (type definition colors) for the tab */
  tabType?: any;
  /** Overrides the transitionTimingFunction */
  transition?: any;
  /** Set the horizontal spacing taking the tab content as reference */
  verticalSpacing?: any;
}

/**
 * Tab component
 * @param {string} text Text to show
 * @param {string} active Set tab as active
 * @param {string} fontSize Set the font size
 * @param {string} horizontalSpacing Set the horizontal spacing taking the tab content as reference
 * @param {string} icon Defines the icon in the tab
 * @param {string} iconSpacing Set the horizontal spacing taking the icon as reference (if it is defined)
 * @param {string} index Defines a tab index for helper function
 * @param {string} lead Set the icon as main children and it will be place before the label (if it is defined)
 * @param {string} lineWidth Set the line width
 * @param {function} onClick function to call when tab is clicked
 * @param {string} position Set the line in position selected
 * @param {string} tabType Set the color variant (type definition colors) for the tab
 * @param {string} transition Overrides the transitionTimingFunction
 * @param {string} verticalSpacing Set the horizontal spacing taking the tab content as reference
 */

const Tab = ({
  text = '',
  tabType = 'tab',
  horizontalSpacing = 'sm',
  verticalSpacing = 'sm',
  onClick,
  icon = null,
  lead = false,
  iconSpacing = 'xs',
  transition,
  active = false,
  fontSize = 'lg',
  position = 'bottom',
  lineWidth = '100%',
  index = 0,
  ...rest
}: TabI & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { configuration } = useContext(ConfigContext);

  const color = configuration.colors[tabType].default;
  const hoverColor = configuration.colors[tabType].click;
  const activeColor = configuration.colors[tabType].hover;
  const activeTextColor = configuration.colors[tabType].hover;
  return (
    <StyledTab
      color={color}
      hoverColor={hoverColor}
      activeColor={activeColor}
      activeTextColor={activeTextColor}
      onClick={onClick}
      horizontalSpacing={horizontalSpacing}
      verticalSpacing={verticalSpacing}
      configuration={configuration}
      iconSpacing={iconSpacing}
      lead={lead}
      transition={transition}
      active={active}
      position={position}
      lineWidth={lineWidth}
      index={index}
      {...rest}
    >
      <div
        className='tab-text'
        style={{ display: 'flex', alignItems: 'center' }}
      >
        {icon !== null && icon !== '' && lead && (
          <span className='tab-icon-span'>{icon}</span>
        )}
        <Paragraph
          size={fontSize}
          color={active ? activeTextColor : 'darkGray'}
        >
          {text}
        </Paragraph>
        {icon !== null && icon !== '' && !lead && (
          <span className='tab-icon-span'>{icon}</span>
        )}
      </div>
    </StyledTab>
  );
};

export default Tab;
