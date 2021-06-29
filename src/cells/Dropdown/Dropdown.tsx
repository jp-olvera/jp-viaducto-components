/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, {
  useContext, useState, useRef, useEffect,
} from 'react';

import { ConfigContext } from '../../providers';
import { Activator, Wrapper, ItemsContainer } from './StyledDropdown';
import Icon from './sorting.svg';
import { Hideable } from '../Hideable';
import Drop from './Drop';
import { refs } from './DropdownRef';
/**
 * Dropdown component
 * @param {string} family font family for the dropdown
 * @param {string} hoverColor Hover color for the content option
 * @param {string} size size of the dropdown
 * @param {any} border border painted
 * @param {string} defaultText Text to show without any option selected
 * @param {JSX Element} content cotent in the dropdown
 * @param {string} height size of the dropdown
 * @param {Function} onClick Triggers an action when an element is selected
 */

interface DropdownProps {
  hoverColor?: string;
  border?: string;
  defaultText: string;
  family?: string | null;
  content?: React.ReactNode[] | null;
  size?: string;
  height?: string;
  onClick: Function;
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
      aria-label='Configuraciones'
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
        <Hideable visibleOn='sm'>
          <span className='activator-text' ref={selectedRef}>
            {defaultText}
          </span>
        </Hideable>
        <img className='activator-icon' src={Icon} alt='' />
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
