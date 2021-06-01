import React, {
  useContext, useState, useRef, useEffect,
} from 'react';

import { ConfigContext } from '../../providers';
import { Activator, Wrapper, ItemsContainer } from './StyledDropdown';
import Icon from './sorting.svg';
import { Hideable } from '../Hideable';
import Drop from './Drop';
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

const Dropdown = ({
  hoverColor = '#ffd6ce',
  border,
  defaultText = 'Buscar por...',
  family = null,
  content = null,
  size = 'default',
  height,
  onClick = () => {},
  ...rest
}: any) => {
  const { configuration } = useContext(ConfigContext);
  const [isOpen, setIsOpen] = useState(false);
  const activatorRef = useRef<HTMLButtonElement>(null);
  const wrapperRef = useRef<HTMLButtonElement>(null);
  const selectedRef = useRef<HTMLElement>(null);
  const dropdownListRef = useRef<HTMLDivElement>(null);
  const newHeight = height || configuration.controlHeight[size];
  const clickHandler = () => {
    setIsOpen(!isOpen);
    if (dropdownListRef && dropdownListRef.current && wrapperRef.current) {
      const bounding = dropdownListRef.current.getBoundingClientRect();
      const bottom = wrapperRef.current.clientHeight || '2.4rem';
      if (
        bounding.bottom
        > (window.innerHeight || document.documentElement.clientHeight)
      ) {
        dropdownListRef.current.style.bottom = `calc(${bottom}px + 0.5rem`;
      }
    }
  };
  const dataList = () => content.map((data, index) => (
    <div
      className='hover'
      role='list'
      onClick={(ev) => {
        onClick(ev);
        setIsOpen(false);
      }}
      onKeyPress={(ev) => {
        onClick(ev);
        setIsOpen(false);
      }}
      key={index.toString()}
    >
      {data}
    </div>
  ));

  const clickOutsideHandler = (event: any) => {
    if (dropdownListRef.current && activatorRef.current) {
      if (
        dropdownListRef.current.contains(event.target)
        || activatorRef.current.contains(event.target)
      ) {
        return;
      }
    }
    setIsOpen(false);
  };
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mouseup', clickOutsideHandler);
    } else {
      document.removeEventListener('mouseup', clickOutsideHandler);
    }
    return function cleanup() {
      document.removeEventListener('mouseup', clickOutsideHandler);
    };
  }, [isOpen]);

  const dropContent = (
    <ItemsContainer
      id='dropdown1'
      className={isOpen ? 'active' : ''}
      data-testid='dropdown-itemList'
      data-cy='dropdown-itemList'
      ref={dropdownListRef}
      aria-label='Configuraciones'
      hoverColor={hoverColor}
      configuration={configuration}
      family={family}
    >
      {dataList()}
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
        onClick={clickHandler}
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
        <Drop
          target={activatorRef}
          contentRef={dropdownListRef}
          content={dropContent}
        />
      )}
    </Wrapper>
  );
};

export default Dropdown;
