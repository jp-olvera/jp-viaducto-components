import React, {
  useContext, useState, useRef, useEffect,
} from 'react';

import { ConfigContext } from '../../providers';
import { Activator, Wrapper, ItemsContainer } from './StyledDropdown';
import Icon from './sorting.svg';
import { Hideable } from '../Hideable';

/**
 * Dropdown component
 * @param {string} family font family for the dropdown
 * @param {string} activeColor Active color for the option selected
 * @param {string} size size of the dropdown
 * @param {any} border border painted
 * @param {string} defaultText Text to show without any option selected
 * @param {string} options options in the dropdown
 * @param {string} height size of the dropdown
 */

const Dropdown = ({
  activeColor = '#ffd6ce',
  border,
  defaultText = 'Buscar por...',
  family,
  options = [],
  size = 'default',
  height,
  ...rest
}: any) => {
  const { configuration } = useContext(ConfigContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isSelected, setIsSelected] = useState(null);
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
        // console.log(' Estás fuera mai fren');
      }
    }
  };
  const select = (label: string, index: any) => {
    if (selectedRef.current) {
      selectedRef.current.innerHTML = label;
      setIsOpen(false);
      setIsSelected(index);
    }
  };
  const dataList = options.map((button, index) => (
    <button
      className={`${isSelected === index ? 'active-item' : ''}`}
      value={button}
      key={button}
      onClick={() => select(button, index)}
      type='button'
    >
      {button}
    </button>
  ));
  const clickOutsideHandler = (event) => {
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
      if (dropdownListRef) {
        // dropdownListRef.current.querySelector('button').focus();
        // add some code
      }
      document.addEventListener('mouseup', clickOutsideHandler);
    } else {
      document.removeEventListener('mouseup', clickOutsideHandler);
    }
    // clean up on unmount
    return function cleanup() {
      document.removeEventListener('mouseup', clickOutsideHandler);
    };
  }, [isOpen]);
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
      <ItemsContainer
        id='dropdown1'
        className={isOpen ? 'active' : ''}
        data-testid='dropdown-itemList'
        data-cy='dropdown-itemList'
        ref={dropdownListRef}
        aria-label='Configuraciones'
        activeColor={activeColor}
        configuration={configuration}
      >
        {dataList.length > 0 && dataList}
      </ItemsContainer>
    </Wrapper>
  );
};

export default Dropdown;
