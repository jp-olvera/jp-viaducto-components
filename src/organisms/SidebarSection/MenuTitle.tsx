import React, { useContext } from 'react';
import { ConfigContext } from '../../providers';

import { StyledMenuTitle } from './StyledSidebarSection';
import { Spacer } from '../../cells';
import Chevron from './Chevron';
/** MenuTitle component */
export interface MenuTitleProps
  extends Omit<Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'>, 'onKeyUp'> {
  /** Set the Menu expanded */
  expanded?: boolean;
  /** Set the component as submenu or dropdrown */
  type?: string;
  /** Triggers an action when the component is clicked */
  onClick?: Function;
  /** Triggers an action when the component have focus and press a key */
  onKeyUp?: Function;
  /** Place an icon */
  icon?: any;
  /** Set the title */
  title?: string;
}

/**
 * MenuTitle component
 * @param {boolean} expanded Set the Menu expanded
 * @param {string} type Set the component as submenu or dropdrown
 * @param {Function} onClick Triggers an action when the component is clicked
 * @param {Function} onKeyUp Triggers an action when the component have focus and press a key
 * @param {any} icon Place an icon
 * @param {string} title Set the title
 */

const MenuTitle = ({ expanded, type, onClick, onKeyUp, icon, title, ...rest }: MenuTitleProps) => {
  const { configuration } = useContext(ConfigContext);

  return (
    <StyledMenuTitle
      tabIndex={0}
      expanded={expanded}
      type={type}
      onClick={onClick}
      onKeyUp={onKeyUp}
      configuration={configuration}
      title={title}
      {...rest}
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
      {type === 'menu' || type === 'dropdown' ? <Chevron type={type} expanded={expanded} /> : null}
    </StyledMenuTitle>
  );
};

export default MenuTitle;
