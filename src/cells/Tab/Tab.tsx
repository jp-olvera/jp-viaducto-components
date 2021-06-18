import React, { useContext } from 'react';
import { Paragraph } from '../Paragraph';
import StyledTab from './StyledTab';

import { ConfigContext } from '../../providers';
/**
 *
 * @param {string} type Set the color variant (type definition colors) for the tab
 * @param {string} horizontalSpacing Set the horizontal spacing taking the tab content as reference
 * @param {string} verticalSpacing Set the horizontal spacing taking the tab content as reference
 * @param {string} iconSpacing Set the horizontal spacing taking the icon as reference (if it is defined)
 * @param {string} icon Defines the icon in the tab
 * @param {string} lead Set the icon as main children and it will be place before the label (if it is defined)
 * @param {function} onClick function to call when tab is clicked
 * @param {string} text Text to show
 */

const Tab = ({
  text = '',
  type = 'tab',
  horizontalSpacing = 'sm',
  verticalSpacing = 'sm',
  onClick,
  icon = null,
  lead = false,
  iconSpacing = 'xs',
  transition,
  active = false,
  ...rest
}: any) => {
  const { configuration } = useContext(ConfigContext);

  const color = configuration.colors[type].default;
  const hoverColor = configuration.colors[type].click;
  const activeColor = configuration.colors[type].hover;
  const activeTextColor = configuration.colors[type].hover;
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
      {...rest}
    >
      <div
        className='tab-text'
        style={{ display: 'flex', alignItems: 'center' }}
      >
        {icon !== null && icon !== '' && lead && (
          <span className='tab-icon-span'>{icon}</span>
        )}
        <Paragraph size='lg' color='darkGray'>
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
