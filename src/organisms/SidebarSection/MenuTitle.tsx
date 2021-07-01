import React, { useContext } from 'react';
import { ConfigContext } from '../../providers';

import { StyledMenuTitle } from './StyledSidebarSection';
import { Spacer } from '../../cells';

/**
 * MenuTitle component
 * @param {boolean} expanded Set the Menu expanded
 * @param {string} type Set the component as submenu or dropdrown
 * @param {Function} onClick Triggers an action when the component is clicked
 * @param {Function} onKeyUp Triggers an action when the component have focus and press a key
 * @param {any} icon Place an icon
 * @param {string} title Set the title
 */
interface MenuTitleProps {
  expanded?: boolean;
  type?: string;
  onClick?: Function;
  onKeyUp?: Function;
  icon?: any;
  title?: string;
}
const MenuTitle = ({
  expanded,
  type,
  onClick,
  onKeyUp,
  icon,
  title,
}: MenuTitleProps) => {
  const { configuration } = useContext(ConfigContext);

  return (
    <StyledMenuTitle
      tabIndex={0}
      expanded={expanded}
      type={type}
      onClick={onClick}
      onKeyUp={onKeyUp}
      configuration={configuration}
    >
      <span style={{ display: 'flex', alignItems: 'center' }}>{icon}</span>
      {icon !== null && <Spacer size='sm' direction='horizontal' />}
      <span
        style={{
          alignItems: 'center',
          width: '100%',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
        }}
      >
        {title}
      </span>
    </StyledMenuTitle>
  );
};

export default MenuTitle;
