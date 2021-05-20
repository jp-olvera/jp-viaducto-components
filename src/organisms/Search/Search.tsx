import React, { useContext } from 'react';
import { Search as SearchIcon } from 'react-ikonate';

import { ConfigContext } from '../../providers';
import { Button, Select } from '../../cells';
import { StyledSearch } from './StyledSearch';

const defaultColors = {
  default: '#1B6ADF',
  hover: '#4a93ff',
  click: '#0066ff',
  text: '#FFFFFF',
};
/**
 * Search component with Button, Input and Dropdown Cells
 * @param {string} buttonLabel Label fot the Button component
 * @param {string} placeholder Placeholder for the Input component
 * @param {string} family Font family for the text of the whole component
 * @param {any} colors Colors for the Button component (could be only text or an object)
 * @param {Function} handleSearch Action to execute when click the Button
 * @param {array} options Options for the Dropdown component
 * @param {string} id Input's id
 * @param {string} activeColor Color for the options when it's active
 * @param {number} elevation Elevation indicator for shadows data
 * @param {string} elevationDirection Light indicator for shadows data
 */
interface SearchInterface {
  buttonLabel: string;
  placeholder: string;
  family: string;
  colors: any;
  handleSearch: Function;
  options: string[];
  id: string;
  activeColor: string;
  elevation: number;
  elevationDirection: string;
  handleChange?: Function;
}

const Search = ({
  buttonLabel = 'Search',
  placeholder = 'Introduce el término de búsqueda',
  family = 'Roboto',
  colors = defaultColors,
  handleSearch,
  options = [],
  id = 'search',
  activeColor = '#ffd6ce',
  elevation = 1,
  elevationDirection = '',
  handleChange,
}: SearchInterface) => {
  const { configuration } = useContext(ConfigContext);

  return (
    <StyledSearch
      configuration={configuration}
      family={family}
      colors={colors}
      data-testid={id}
      elevation={elevation}
      elevationDirection={elevationDirection}
    >
      <input
        type='text'
        placeholder={placeholder}
        id={id}
        data-testid={`input-${id}`}
      />
      <Select
        border={{ left: '1px solid #CECECE' }}
        activeColor={activeColor}
        onChange={handleChange}
      >
        {options.map((option: string) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </Select>
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
