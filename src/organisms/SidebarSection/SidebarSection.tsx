import React, { useState, useRef, useEffect } from 'react';
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
}

const SidebarSection = ({
  items,
  separator = false,
  title,
  isDropdown = false,
  isMenu = false,
  lead = false,
}: SidebarSectionInterface) => {
  const [isActive, setIsActive] = useState(false);
  const activatorRef = useRef<HTMLLIElement>(null);
  const backRefButton = useRef<HTMLButtonElement>(null);

  const handleActive = (ev) => {
    if (ev.type === 'click' || ev.keyCode === 13 || ev.keyCode === 32) {
      setIsActive(!isActive);
    }
  };

  const itemsList = () => {
    if (items !== null && items && items.length > 0) {
      return items.map(({ label, url }) => (
        <li className='b' role='button' tabIndex={0} key={url}>
          <>
            <Spacer size='sm' />
            <Spacer size='xs' direction='horizontal' />
            {label}
            <Spacer size='sm' />
          </>
        </li>
      ));
    }
    return [];
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
    <StyledSidebarSection>
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
              {lead && <Paragraph>🥵</Paragraph>}
              {lead && <Spacer size='sm' direction='horizontal' />}
              <Paragraph color='#2e2a2a' weight='600'>
                {title}
              </Paragraph>
              {!lead && <Paragraph margin='0 0 0 auto'>🥵</Paragraph>}
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
        {!isDropdown && !isMenu ? <ul>{itemsList()}</ul> : null}
        {isDropdown && isActive ? (
          <ul className='nested-list'>{itemsList()}</ul>
        ) : null}
      </div>
      {isMenu && isActive ? (
        <ul className={`submenu ${isActive ? 'active' : ''}`}>
          <button onClick={handleActive} ref={backRefButton} type='button'>
            {'←'} {title}
          </button>
          <Spacer size='xs' />
          {itemsList}
        </ul>
      ) : null}
    </StyledSidebarSection>
  );
};

export default SidebarSection;
