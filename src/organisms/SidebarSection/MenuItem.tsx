import React, { useContext } from 'react';
import { ConfigContext } from '../../providers';

import { Spacer } from '../../cells';
import { MenuItem as Wrapper } from './StyledSidebarSection';

/** MenuItem component */
interface MenuItemProps {
  /** Link to open when the element is selected */
  href?: string;
  /** Label for the item */
  label?: string;
  /** Set the item active/no active */
  active?: boolean;
  /** Place the element as parent or child */
  nested?: boolean;
  /** Place an icon before/after label */
  lead?: boolean;
  /** Set an icon */
  icon?: any;
}

/**
 * MenuItem component
 * @param {string} href Link to open when the element is selected
 * @param {string} label Label for the item
 * @param {boolean} active Set the item active/no active
 * @param {boolean} nested Place the element as parent or child
 * @param {boolean} lead Place an icon before/after label
 * @param {any} icon Set an icon
 */
const MenuItem = ({
  href,
  label,
  active = false,
  nested = false,
  icon = null,
  lead = true,
  ...rest
}: MenuItemProps & React.LiHTMLAttributes<HTMLLIElement>) => {
  const { configuration } = useContext(ConfigContext);

  const content = (
    <span style={{ display: 'flex', alignItems: 'center' }}>
      {lead && icon !== null && (
        <span style={{ display: 'flex', alignItems: 'center' }}>{icon}</span>
      )}
      {lead && icon !== null && <Spacer size='sm' direction='horizontal' />}
      <span
        style={{
          alignItems: 'center',
          width: '100%',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
        }}
      >
        {label}
      </span>
      {!lead && icon !== null && (
        <span
          style={{
            display: 'flex',
            alignItems: 'center',
            marginLeft: 'auto',
          }}
        >
          {icon}
        </span>
      )}
    </span>
  );
  return (
    <Wrapper
      configuration={configuration}
      className='b'
      active={active}
      nested={nested}
      {...rest}
    >
      {href !== undefined ? (
        <a href={href}> {content} </a>
      ) : (
        <span> {content} </span>
      )}
    </Wrapper>
  );
};
export default MenuItem;
