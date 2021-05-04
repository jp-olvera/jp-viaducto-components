import React, { useContext } from 'react';
import { Search as SearchIcon } from 'react-ikonate';

import { ConfigContext } from '../../providers';
import { Button } from '../../cells/Button';
import { Dropdown } from '../../cells/Dropdown';
import { StyledSearch } from './StyledSearch';

const defaultColors = {
  default: '#1B6ADF',
  hover: '#4a93ff',
  click: '#0066ff',
  text: '#FFFFFF',
};

const Search = ({
  buttonLabel = 'Search',
  placeholder = 'Introduce el término de búsqueda',
  family = 'Roboto',
  colors = defaultColors,
  handleSearch = () => {},
  options = [],
  id = 'search',
}) => {
  const { configuration } = useContext(ConfigContext);

  return (
    <StyledSearch
      configuration={configuration}
      family={family}
      colors={colors}
      data-testid={id}
    >
      <input
        type="text"
        placeholder={placeholder}
        id={id}
        data-testid={`input-${id}`}
      />
      <Dropdown border={{ left: '1px solid #CECECE' }} options={options} />
      <Button
        label={buttonLabel}
        lead
        icon={<SearchIcon color={colors.text} />}
        colors={colors}
        onClick={handleSearch}
        data-testid={`button-${id}`}
      />
    </StyledSearch>
  );
};

export default Search;
