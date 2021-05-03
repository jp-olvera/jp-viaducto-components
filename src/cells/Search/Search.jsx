import React, { useContext } from 'react';
import { Search as SearchIcon } from 'react-ikonate';

import { ConfigContext } from '../../providers';
import { Button } from '../Button';
import { Dropdown } from '../Dropdown';
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
  id = 'search',
}) => {
  const { configuration } = useContext(ConfigContext);

  return (
    <StyledSearch configuration={configuration} family={family} colors={colors}>
      <input type="text" placeholder={placeholder} id={id} />
      <Dropdown border={{ left: '1px solid #CECECE' }} />
      <Button
        label={buttonLabel}
        lead
        icon={<SearchIcon color={colors.text} />}
        colors={colors}
        onClick={handleSearch}
      />
    </StyledSearch>
  );
};

export default Search;