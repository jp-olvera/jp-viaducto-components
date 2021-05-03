import React, { useContext, useState, useRef, useEffect } from 'react';

import { ConfigContext } from '../../providers';
import { Activator, Wrapper, ItemsContainer } from './StyledDropdown';
import Icon from './sorting.svg';

const Dropdown = ({
  border = 'none',
  defaultText = 'Buscar por...',
  family = 'Roboto',
  options = [],
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const activatorRef = useRef(null);
  const selectedRef = useRef(null);
  const dropdownListRef = useRef(null);
  const clickHandler = () => {
    setIsOpen(!isOpen);
  };
  const select = (label) => {
    selectedRef.current.innerHTML = label;
  };
  const dataList = options.map((button, index) => (
    <button value={button} key={button + index} onClick={() => select(button)}>
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
  const { configuration } = useContext(ConfigContext);
  return (
    <Wrapper configuration={configuration}>
      <Activator
        family={family}
        border={border}
        aria-haspopup="true"
        aria-controls="dropdown1"
        aria-selected="true"
        data-testid="dropdown-activator"
        id="dropdown-activator"
        onClick={clickHandler}
        ref={activatorRef}
      >
        <span className="activator-text" ref={selectedRef}>
          {defaultText}
        </span>
        <img className="activator-icon" src={Icon} alt="" />
      </Activator>
      <ItemsContainer
        id="dropdown1"
        className={isOpen && 'active'}
        data-testid="dropdown-itemList"
        data-cy="dropdown-itemList"
        ref={dropdownListRef}
        aria-label="Configuraciones"
      >
        {dataList.length > 0 && dataList}
      </ItemsContainer>
    </Wrapper>
  );
};

export default Dropdown;
