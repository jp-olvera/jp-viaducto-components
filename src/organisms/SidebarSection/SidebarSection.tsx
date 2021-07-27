import React, {
  useState, useRef, useEffect, useContext,
} from 'react';
import { ConfigContext } from '../../providers';
import { Spacer } from '../../cells';

import StyledSidebarSection, {
  Submenu,
  Separator,
} from './StyledSidebarSection';
import MenuTitle from './MenuTitle';

/** Sidebar elements for a Sidebar Section */
interface SidebarProps {
  /** Title's section */
  title: string;
  /** Horizontal top separator for each section */
  separator?: boolean;
  /** Attribute for clickable section top/bottom */
  isDropdown?: boolean;
  /** Attribute for clickable section left/right */
  isMenu?: boolean;
  /** Overrides the transitionTimingFunction */
  transition?: string;
  /** Place an icon for the item */
  icon?: any;
  /** Element to place */
  children?: any;
}

/**
 * Sidebar elements for a Sidebar Section
 *
 * @param {string} title Title's section
 * @param {boolean} separator Horizontal top separator for each section
 * @param {boolean} isDropdown Attribute for clickable section top/bottom
 * @param {boolean} isMenu Attribute for clickable section left/right
 * @param {string} transition Overrides the transitionTimingFunction
 * @param {any} icon Place an icon for the item
 * @param {any} children Element to place
 */

const SidebarSection = ({
  separator = false,
  title,
  isDropdown = false,
  isMenu = false,
  icon = null,
  transition = 'ease',
  children,
  ...rest
}: SidebarProps & React.HTMLAttributes<HTMLDivElement>) => {
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
        {separator && <Separator configuration={configuration} />}

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
                type=''
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
            <div>{children}</div>
          </Submenu>
        ) : null}
      </StyledSidebarSection>
    </>
  );
};

export default SidebarSection;
