import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/react';
import { render, screen, fireEvent } from '../../../test-utils';
import { Search } from '../';

// jest.mock('../../Dropdown/sorting.svg', () => '');

const options = ['Razón Social', 'RFC', 'Nombre Comercial'];
describe('<Search/>', () => {
  test('should render properly', () => {
    const handleClick = jest.fn();
    render(
      <Search
        buttonLabel="Search"
        handleSearch={handleClick}
        options={options}
        id={'search'}
      />
    );
    expect(screen.getByTestId('search')).toBeVisible();
  });

  test('call function on button press', () => {
    const handleClick = jest.fn().mockReturnValue(() => null);
    render(
      <Search
        buttonLabel="Search"
        handleSearch={handleClick}
        options={options}
        id={'search'}
      />
    );
    fireEvent.click(screen.getByTestId(`button-search`));
    expect(handleClick).toBeCalled();
  });

  test('should write in input search', () => {
    const value = 'Search this value';
    const { getByTestId } = render(
      <Search buttonLabel="Search" options={options} id={'search'} />
    );
    const input = getByTestId(`input-search`);
    fireEvent.change(input, { target: { value: value } });
    expect(input.value).toContain(value);
  });

  test('should display dropdown', () => {
    const { getByTestId } = render(
      <Search buttonLabel="Search" options={options} id={'search'} />
    );
    const activator = getByTestId('dropdown-activator');
    activator.click();
    expect(getByTestId('dropdown-itemList')).toBeVisible();
    expect(screen.getByText('RFC')).toBeVisible();
  });
});
