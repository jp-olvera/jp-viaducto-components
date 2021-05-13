import React, { useContext } from 'react';
import { Paragraph } from '../Paragraph';
import StyledTab from './StyledTab';

import { ConfigContext } from '../../providers';
/**
 *
 * @param {string} text Text to show
 * @param {string} color default bar color
 * @param {string} hoverColor bar color when tab has focus
 * @param {string} activeColor bar color when tab is active
 * @param {string} activeTextColor text color when tab is active
 * @param {function} onClick function to call when tab is clicked
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
