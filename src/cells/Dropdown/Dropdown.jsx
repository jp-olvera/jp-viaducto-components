import React, { useContext, useState, useRef, useEffect } from 'react';

import { ConfigContext } from '../../providers';
import { Activator, Wrapper, ItemsContainer } from './StyledDropdown';
import Icon from './sorting.svg';
import { Hideable } from '../Hideable';

const Dropdown = ({
  activeColor = '#ffd6ce',
  border = 'none',
  defaultText = 'Buscar por...',
  family = 'Roboto',
  options = [],
  size = 'default',
  height = null,
}) => {
  const { configuration } = useContext(ConfigContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isSelected, setIsSelected] = useState(null);
  const activatorRef = useRef(null);
  const selectedRef = useRef(null);
  const dropdownListRef = useRef(null);
  let newHeight = height || configuration.controlHeight[size];
  const clickHandler = () => {
    setIsOpen(!isOpen);
  };
  const select = (label, index) => {
    selectedRef.current.innerHTML = label;
    setIsOpen(false);
    setIsSelected(index);
  };
  const dataList = options.map((button, index) => (
    <button
      className={`${isSelected === index ? 'active-item' : ''}`}
      value={button}
      key={button + index}
      onClick={() => select(button, index)}
      type="button"
    >
      {button}
    </button>
  ));
  const clickOutsideHandler = (event) => {
    if (
      dropdownListRef.current.contains(event.target) ||
      activatorRef.current.contains(event.target)
    ) {
      return;
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
    <Wrapper configuration={configuration} height={newHeight}>
      <Activator
        configuration={configuration}
        family={family}
        type="button"
        border={border}
        aria-haspopup="true"
        aria-controls="dropdown1"
        aria-selected="true"
        data-testid="dropdown-activator"
        id="dropdown-activator"
        onClick={clickHandler}
        ref={activatorRef}
      >
        <Hideable visibleOn="sm">
          <span className="activator-text" ref={selectedRef}>
            {defaultText}
          </span>
        </Hideable>
        <img className="activator-icon" src={Icon} alt="" />
      </Activator>
      <ItemsContainer
        id="dropdown1"
        className={isOpen && 'active'}
        data-testid="dropdown-itemList"
        data-cy="dropdown-itemList"
        ref={dropdownListRef}
        aria-label="Configuraciones"
        activeColor={activeColor}
        configuration={configuration}
      >
        {dataList.length > 0 && dataList}
      </ItemsContainer>
    </Wrapper>
  );
};

export default Dropdown;
