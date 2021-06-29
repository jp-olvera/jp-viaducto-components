import React, {
  useState, useRef, useEffect, useContext,
} from 'react';
import { ConfigContext } from '../../providers';
import { Spacer } from '../../cells';

import StyledSidebarSection, { Submenu } from './StyledSidebarSection';
import MenuTitle from './MenuTitle';
/**
 * Sidebar elements for a Sidebar Section
 *
 * @param {array} items Objects array for make sections in the sidebar
 * @param {boolean} separator Horizontal top separator for each section
 * @param {string} title Title's section
 * @param {boolean} isDropdown Attribute for clickable section top/bottom
 * @param {boolean} isMenu Attribute for clickable section left/right
 */

interface SidebarProps {
  items: { label: string; url: string }[];
  separator: boolean;
  title: string;
  isDropdown: boolean;
  isMenu: boolean;
  transition?: string;
  icon?: any;
  children?: any;
}

const SidebarSection = ({
  separator = false,
  title,
  isDropdown = false,
  isMenu = false,
  icon = null,
  transition = 'ease',
  children,
  ...rest
}: SidebarProps) => {
  const [isActive, setIsActive] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const backRefButton = useRef<HTMLButtonElement>(null);
  const { configuration } = useContext(ConfigContext);

  const handleActive = (ev: any, wait: boolean = false) => {
    /* istanbul ignore if */
    /* istanbul ignore else */
    if (ev.type === 'click' || ev.keyCode === 13 || ev.keyCode === 32) {
      /* istanbul ignore if */
      if (wait) {
        setTimeout(() => {
          setIsActive(!isActive);
        }, 230);
        /* istanbul ignore else */
      } else {
        setIsActive(!isActive);
      }
    }
  };

  useEffect(() => {
    if (isActive) {
      setIsClosing(false);
    }
  }, [isActive]);
  useEffect(() => {
    if (isMenu && isActive && backRefButton.current) {
      backRefButton.current.focus();
    }
  }, [backRefButton, isActive]);

  let dropClassName = '';

  if (isDropdown) dropClassName = 'dropdown';
  else if (isMenu) dropClassName = 'toggleMenu';

  return (
    <>
      <StyledSidebarSection
        transition={transition}
        configuration={configuration}
        {...rest}
      >
        {separator && <hr />}

        <div className={dropClassName}>
          {isDropdown || isMenu ? (
            <MenuTitle
              icon={icon}
              title={title}
              onClick={handleActive}
              onKeyUp={handleActive}
              expanded={isActive}
              type={`${isDropdown && !isMenu ? 'dropdown' : 'menu'}`}
            />
          ) : (
            title !== null && (
              <MenuTitle
                expanded={isActive}
                type={`${isMenu && 'menu'}`}
                icon={icon}
                title={title}
              />
            )
          )}
          {!isDropdown && !isMenu ? <ul>{children}</ul> : null}
          {isDropdown && !isMenu && isActive ? (
            <ul className='nested-list'>{children}</ul>
          ) : null}
        </div>
        {isMenu && isActive ? (
          <Submenu
            configuration={configuration}
            transition={transition}
            isClosing={isClosing}
            isActive={isActive}
          >
            <button
              onClick={(ev) => {
                setIsClosing(true);
                handleActive(ev, true);
              }}
              ref={backRefButton}
              type='button'
              data-testid='button'
            >
              {'←'} {title}
            </button>
            <Spacer size='xs' />
            {children}
          </Submenu>
        ) : null}
      </StyledSidebarSection>
    </>
  );
};

export default SidebarSection;
