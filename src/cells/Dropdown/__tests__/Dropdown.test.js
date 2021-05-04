import React from 'react';
import { render, screen, fireEvent } from '../../../test-utils';
import '@testing-library/jest-dom/extend-expect';
import { Dropdown } from '..';

jest.mock('../sorting.svg', () => '');

describe('<Dropdown/>', () => {
  test('should render an focusable activator to toggle the dropdown', () => {
    const dropdown = render(<Dropdown options={['1', '2', '3']} />);
    expect(dropdown.getByTestId('dropdown-activator')).toBeInTheDocument();
    const activator = dropdown.getByTestId('dropdown-activator');
    activator.focus();
    expect(activator).toHaveFocus();
  });
  test('should not display popup', () => {
    const { getByTestId } = render(<Dropdown options={['1', '2', '3']} />);
    expect(getByTestId('dropdown-itemList')).not.toBeVisible();
  });
  test('should display popup', () => {
    const dropdown = render(<Dropdown options={['1', '2', '3']} />);
    const activator = dropdown.getByTestId('dropdown-activator');
    activator.click();
    expect(dropdown.getByTestId('dropdown-itemList')).toBeVisible();
    expect(screen.getByText('1')).toBeVisible();
  });
});
