import React, { useContext } from 'react';
import { ConfigContext } from '../../providers';

import { Spacer } from '../../cells';
import { MenuItem as Wrapper } from './StyledSidebarSection';

interface MenuItemProps {
  href: string;
  label: string;
  active?: boolean;
  nested?: boolean;
  lead?: boolean;
  icon?: any;
}
const MenuItem = ({
  href,
  label,
  active = false,
  nested = false,
  icon = null,
  lead = true,
}: MenuItemProps) => {
  const { configuration } = useContext(ConfigContext);

  return (
    <Wrapper
      configuration={configuration}
      className='b'
      role='button'
      tabIndex={0}
      key={label}
      active={active}
      nested={nested}
    >
      <a href={href}>
        <span style={{ display: 'flex', alignItems: 'center' }}>
          {lead && icon !== null && (
            <span style={{ display: 'flex', alignItems: 'center' }}>
              {icon}
            </span>
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
      </a>
    </Wrapper>
  );
};
export default MenuItem;
