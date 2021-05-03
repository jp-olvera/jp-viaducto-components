import React from 'react';
import { Paragraph } from '../Paragraph';
import StyledTab from './StyledTab';

/**
 *
 * @param {string} text Text to show
 * @param {string} color default bar color
 * @param {string} hoverColor bar color when tab has focus
 * @param {string} activeColor bar color when tab is active
 * @param {string} activeTextColor text color when tab is active
 * @param {function} onClick function to call when tab is clicked
 * @returns
 */
const Tab = ({
  text,
  color = '#F1F1F1',
  hoverColor = '#4F83CC',
  activeColor = '#01579B',
  activeTextColor = '#002F6C',
  onClick,
  ...rest
}) => {
  return (
    <StyledTab
      color={color}
      hoverColor={hoverColor}
      activeColor={activeColor}
      activeTextColor={activeTextColor}
      onClick={onClick}
      {...rest}
    >
      <Paragraph size="lg" className="tab-text" color="darkGray">
        {text}
      </Paragraph>
    </StyledTab>
  );
};

export default Tab;
