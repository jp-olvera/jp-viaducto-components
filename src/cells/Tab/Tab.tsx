import React, { useContext } from 'react';
import { Paragraph } from '../Paragraph';
import StyledTab from './StyledTab';

import { ConfigContext } from '../../providers';

/** Tab component */
export interface TabI {
  /** Text to show */
  text: any;
  /** Set tab as active */
  active?: any;
  /** Set the font size */
  fontSize?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg';
  /** Set the horizontal spacing taking the tab content as reference */
  horizontalSpacing?:
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
  /** Defines the icon in the tab */
  icon?: any;
  /** Set the horizontal spacing taking the icon as reference (if it is defined) */
  iconSpacing?: 'none' | 'nano' | 'micro' | 'tiny' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  /** Defines a tab index for helper function */
  index?: number;
  /** Set the icon as main children and it will be place before the label (if it is defined) */
  lead?: any;
  /** Set the line width */
  lineWidth?: string;
  /** function to call when tab is clicked */
  onClick?: any;
  /** Set the line in position selected */
  position?: 'bottom' | 'top' | 'right' | 'left';
  /** Set the color variant (type definition colors) for the tab */
  tabType?: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger' | 'tab';
  /** Set the horizontal spacing taking the tab content as reference */
  verticalSpacing?:
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
  /** Set font family */
  fontFamily?: string;
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
 * @param {string} verticalSpacing Set the horizontal spacing taking the tab content as reference
 * @param {string} fontFamily Set font family
 */

const Tab = ({
  text,
  tabType = 'tab',
  horizontalSpacing = 'sm',
  verticalSpacing = 'sm',
  onClick,
  icon = null,
  lead = false,
  iconSpacing = 'xs',
  active = false,
  fontSize = 'lg',
  position = 'bottom',
  lineWidth = '100%',
  index = 0,
  fontFamily,
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
      active={active}
      position={position}
      lineWidth={lineWidth}
      index={index}
      fontFamily={fontFamily}
      {...rest}
    >
      <div className='tab-text' style={{ display: 'flex', alignItems: 'center' }}>
        {icon !== null && icon !== '' && lead && <span className='tab-icon-span'>{icon}</span>}
        <Paragraph size={fontSize} color={active ? activeTextColor : 'darkGray'}>
          {text}
        </Paragraph>
        {icon !== null && icon !== '' && !lead && <span className='tab-icon-span'>{icon}</span>}
      </div>
    </StyledTab>
  );
};

export default Tab;
