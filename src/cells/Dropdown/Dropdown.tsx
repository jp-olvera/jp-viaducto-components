/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, {
  useContext, useState, useRef, useEffect,
} from 'react';

import { ConfigContext } from '../../providers';
import { Activator, Wrapper, ItemsContainer } from './StyledDropdown';
import Icon from './sorting.svg';
import Drop from './Drop';
import { refs } from './DropdownRef';
/**
 * Dropdown component
 * @param {any} border border painted
 * @param {React.ReactNode[] | null} content List of items to put in teh dropdown box
 * @param {string} defaultText Text to show without any option selected
 * @param {string} family font family for the dropdown
 * @param {string} height size of the dropdown
 * @param {string} hoverColor Hover color for the content option
 * @param {Function} onClick Triggers an action when an element is selected
 * @param {string} size size of the dropdown
 */

interface DropdownProps {
  border?: string;
  content?: React.ReactNode[] | null;
  defaultText: string;
  family?: string | null;
  height?: string;
  hoverColor?: string;
  onClick: Function;
  size?: string;
}
const Dropdown = ({
  hoverColor = '#ffd6ce',
  border = 'none',
  defaultText = 'Buscar por...',
  family,
  content,
  size = 'default',
  height,
  onClick,
  ...rest
}: DropdownProps) => {
  const { configuration } = useContext(ConfigContext);
  const [isOpen, setIsOpen] = useState(false);
  const activatorRef = useRef<HTMLButtonElement>(null);
  const wrapperRef = useRef<HTMLButtonElement>(null);
  const selectedRef = useRef<HTMLElement>(null);
  const newHeight = height || configuration.controlHeight[size];
  const dropdownListRef = useRef<HTMLDivElement>(null);

  const handleClose = () => {
    setIsOpen(!isOpen);
  };

  const clickOutsideHandler = (event) => {
    if (isOpen && activatorRef.current && dropdownListRef.current) {
      if (
        dropdownListRef.current.contains(event.target)
        || activatorRef.current.contains(event.target)
      ) {
        return;
      }
      handleClose();
    }
  };

  useEffect(() => {
    if (isOpen && dropdownListRef.current) {
      window.addEventListener('mouseup', clickOutsideHandler);
    } else {
      window.removeEventListener('mouseup', clickOutsideHandler);
    }
    return function cleanup() {
      window.removeEventListener('mouseup', clickOutsideHandler);
    };
  }, [isOpen, dropdownListRef]);

  const dropContent = (
    <ItemsContainer
      id='dropdown1'
      className={isOpen ? 'active' : ''}
      data-testid='dropdown-itemList'
      data-cy='dropdown-itemList'
      hoverColor={hoverColor}
      configuration={configuration}
      family={family}
      ref={dropdownListRef}
    >
      {(content || []).map((data: any, index: number) => (
        <div
          className='hover'
          role='list'
          onClick={(ev) => {
            onClick(ev);
            setIsOpen(false);
          }}
          key={index.toString()}
        >
          {data}
        </div>
      ))}
    </ItemsContainer>
  );
  return (
    <Wrapper height={newHeight} {...rest} ref={wrapperRef}>
      <Activator
        configuration={configuration}
        family={family}
        type='button'
        border={border}
        aria-haspopup='true'
        aria-controls='dropdown1'
        aria-selected='true'
        data-testid='dropdown-activator'
        id='dropdown-activator'
        onClick={() => refs.clickHandler(setIsOpen, isOpen, dropdownListRef, wrapperRef)}
        ref={activatorRef}
      >
        <span ref={selectedRef}>{defaultText}</span>
        <img src={Icon} alt='' />
      </Activator>
      {isOpen && (
        <Drop target={activatorRef} contentRef={dropdownListRef}>
          {dropContent}
        </Drop>
      )}
    </Wrapper>
  );
};

export default Dropdown;
