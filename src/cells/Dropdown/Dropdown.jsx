import React, { useContext } from 'react';

import { ConfigContext } from '../../providers';
import { StyledDropdown } from './StyledDropdown';

const optionsTest = [
  <option value="a" key="a">
    a
  </option>,
  <option value="s" key="s">
    s
  </option>,
  <option value="d" key="d">
    d
  </option>,
  <option value="f" key="f">
    f
  </option>,
  <option value="g" key="g">
    g
  </option>,
];

const Dropdown = ({
  options = optionsTest,
  defaultValue = null,
  onChange = () => {},
  family = 'Roboto',
  border = 'none',
}) => {
  const { configuration } = useContext(ConfigContext);

  return (
    <StyledDropdown
      configuration={configuration}
      family={family}
      border={border}
    >
      <select
        onChange={onChange}
        defaultValue={defaultValue || 'Buscar por...'}
      >
        <option disabled defaultValue={'Buscar por...'}>
          Buscar por...
        </option>
        {options.length > 0 && optionsTest}
      </select>
    </StyledDropdown>
  );
};

export default Dropdown;
