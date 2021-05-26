/* eslint-env jest */

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/react';
import { render, screen, fireEvent } from '../../../test-utils';
import { Search } from '..';

jest.mock('../../../cells/Dropdown/sorting.svg', () => null);

const options = ['Razón Social', 'RFC', 'Nombre Comercial'];
describe('<Search/>', () => {
  test('should render properly', () => {
    const handleClick = jest.fn();
    render(
      <Search
        buttonLabel='Search 1'
        handleSearch={handleClick}
        options={options}
        family='Roboto'
        id='search'
      />,
    );
    expect(screen.getByTestId('search')).toBeVisible();
  });
  test('should render properly with no options', () => {
    const handleClick = jest.fn();
    render(
      <Search
        buttonLabel='Search 1'
        handleSearch={handleClick}
        id='searchNoOptions'
      />,
    );
    expect(screen.getByTestId('searchNoOptions')).toMatchSnapshot();
  });

  test('call function on button press', () => {
    const handleClick = jest.fn().mockReturnValue(() => null);
    render(
      <Search
        buttonLabel='Search 2'
        handleSearch={handleClick}
        options={options}
        id='search'
      />,
    );
    fireEvent.click(screen.getByTestId('button-search'));
    expect(handleClick).toBeCalled();
  });

  test('should write in input search', () => {
    const value = 'Search this value';
    const { getByTestId } = render(
      <Search buttonLabel='Search 3' options={options} id='search' />,
    );
    const input = getByTestId('input-search');
    fireEvent.change(input, { target: { value } });
    expect(input.value).toContain(value);
  });

  test('should display dropdown', () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(
      <Search
        buttonLabel='Search 4'
        options={options}
        id='search'
        handleSearch={handleClick}
      />,
    );
    const activator = getByTestId('select');
    activator.click();
    expect(screen.getByText('RFC')).toBeVisible();
  });

  test('should display dropdown with no props', () => {
    const { queryByText, getByTestId } = render(
      <Search family={null} options={['option1', 'option2']} />,
    );
    const activator = getByTestId('select');
    activator.click();
    expect(queryByText('option1')).toBeInTheDocument();
    expect(queryByText('option1')).toBeInTheDocument();
  });
});
