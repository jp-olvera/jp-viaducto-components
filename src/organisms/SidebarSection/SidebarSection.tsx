import React, {
  useState, useRef, useEffect, useContext,
} from 'react';
import { ConfigContext } from '../../providers';
import { Paragraph, Spacer } from '../../cells';

import StyledSidebarSection from './StyledSidebarSection';

/**
 * Sidebar elements for a Sidebar Section
 *
 * @param {array} items Objects array for make sections in the sidebar
 * @param {boolean} separator Horizontal top separator for each section
 * @param {string} title Title's section
 * @param {boolean} isDropdown Attribute for clickable section top/bottom
 * @param {boolean} isMenu Attribute for clickable section left/right
 * @param {boolean} lead Attribute for place icon first
 */

interface SidebarSectionInterface {
  items: { label: string; url: string }[];
  separator: boolean;
  title: string;
  isDropdown: boolean;
  isMenu: boolean;
  lead: boolean;
  transition?: string;
  icon?: any;
}

const SidebarSection = ({
  items = [],
  separator = false,
  title,
  isDropdown = false,
  isMenu = false,
  lead = false,
  icon = null,
  ...rest
}: SidebarSectionInterface) => {
  const [isActive, setIsActive] = useState(false);
  const activatorRef = useRef<HTMLLIElement>(null);
  const backRefButton = useRef<HTMLButtonElement>(null);
  const { configuration } = useContext(ConfigContext);
  const handleActive = (ev) => {
    if (ev.type === 'click' || ev.keyCode === 13 || ev.keyCode === 32) {
      setIsActive(!isActive);
    }
  };

  useEffect(() => {
    if (isMenu && isActive && backRefButton.current) {
      backRefButton.current.focus();
    }
  }, [backRefButton, isActive]);

  let dropClassName = '';

  if (isDropdown) dropClassName = 'dropdown';
  else if (isMenu) dropClassName = 'toggleMenu';

  return (
    <StyledSidebarSection {...rest} configuration={configuration}>
      {separator && <hr />}

      <div className={dropClassName}>
        {isDropdown || isMenu ? (
          <li
            className='b'
            onClick={handleActive}
            tabIndex={0}
            ref={activatorRef}
            onKeyUp={handleActive}
          >
            <Spacer size='sm' />
            <span className={`${lead ? 'd' : 'c'}`}>
              <Spacer size='micro' direction='horizontal' />
              {lead && icon !== null && <Paragraph>{icon}</Paragraph>}
              {lead && icon !== null && (
                <Spacer size='sm' direction='horizontal' />
              )}
              <Paragraph color='#2e2a2a' weight='600'>
                {title}
              </Paragraph>
              {!lead && icon !== null && (
                <Paragraph margin='0 0 0 auto'>{icon}</Paragraph>
              )}
            </span>
            <Spacer size='sm' />
          </li>
        ) : (
          title !== null && (
            <li>
              <Paragraph color='#2e2a2a' weight='600'>
                {title}
              </Paragraph>
            </li>
          )
        )}
        {!isDropdown && !isMenu ? (
          <ul>
            {items.length > 0
              && items.map(({ label }) => (
                <li className='b' role='button' tabIndex={0} key={label}>
                  <>
                    <Spacer size='sm' />
                    <Spacer size='xs' direction='horizontal' />
                    {label}
                    <Spacer size='sm' />
                  </>
                </li>
              ))}
          </ul>
        ) : null}
        {isDropdown && isActive ? (
          <ul className='nested-list'>
            {items.length > 0
              && items.map(({ label }) => (
                <li className='b' role='button' tabIndex={0} key={label}>
                  <>
                    <Spacer size='sm' />
                    <Spacer size='xs' direction='horizontal' />
                    {label}
                    <Spacer size='sm' />
                  </>
                </li>
              ))}
          </ul>
        ) : null}
      </div>
      {isMenu && isActive ? (
        <ul className={`submenu ${isActive ? 'active' : ''}`}>
          <button onClick={handleActive} ref={backRefButton} type='button'>
            {'←'} {title}
          </button>
          <Spacer size='xs' />
          {items.length > 0
            && items.map(({ label }) => (
              <li className='b' role='button' tabIndex={0} key={label}>
                <Spacer size='sm' />
                <Spacer size='xs' direction='horizontal' />
                {label}
                <Spacer size='sm' />
              </li>
            ))}
        </ul>
      ) : null}
    </StyledSidebarSection>
  );
};

export default SidebarSection;
