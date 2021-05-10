import React, { useState, useRef, useEffect } from 'react';
import { Paragraph, Spacer } from '../../cells';

import StyledSidebarSection from './StyledSidebarSection';

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
    if (ev.type === 'click') {
      setIsActive(!isActive);
    } else {
      if (ev.keyCode === 13 || ev.keyCode === 32) {
        setIsActive(!isActive);
      }
    }
  };

  const itemsList = items.map(({ label, url }, index) => (
    <li className="b" role="button" tabIndex={0} key={url + index}>
      <>
        <Spacer size="sm" />
        <Spacer size="xs" direction={'horizontal'} />
        {label}
        <Spacer size="sm" />
      </>
    </li>
  ));

  useEffect(() => {
    if (isMenu && isActive && backRefButton.current) {
      backRefButton.current.focus();
    }
  }, [backRefButton, isActive]);

  return (
    <StyledSidebarSection>
      {separator && <hr />}

      <div className={isDropdown ? 'dropdown' : isMenu ? 'toggleMenu' : ''}>
        {isDropdown || isMenu ? (
          <li
            className="b"
            onClick={handleActive}
            tabIndex={0}
            ref={activatorRef}
            onKeyUp={handleActive}
          >
            <Spacer size="sm" />
            <span className={`${lead ? 'd' : 'c'}`}>
              <Spacer size="micro" direction="horizontal" />
              {lead && <Paragraph>🥵</Paragraph>}
              {lead && <Spacer size="sm" direction="horizontal" />}
              <Paragraph color="#2e2a2a" weight="600">
                {title}
              </Paragraph>
              {!lead && <Paragraph margin="0 0 0 auto">🥵</Paragraph>}
            </span>
            <Spacer size="sm" />
          </li>
        ) : (
          title !== null && (
            <li>
              <Paragraph color="#2e2a2a" weight="600">
                {title}
              </Paragraph>
            </li>
          )
        )}
        {!isDropdown && !isMenu ? <ul>{itemsList}</ul> : null}
        {isDropdown && isActive ? (
          <ul className="nested-list">{itemsList}</ul>
        ) : null}
      </div>
      {isMenu && isActive ? (
        <ul className={`submenu ${isActive ? 'active' : ''}`}>
          <button onClick={handleActive} ref={backRefButton}>
            {'←'} {title}
          </button>
          <Spacer size="xs" />
          {itemsList}
        </ul>
      ) : null}
    </StyledSidebarSection>
  );
};

export default SidebarSection;
