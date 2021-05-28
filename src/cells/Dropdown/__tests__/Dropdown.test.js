/* eslint-env jest */

import React from 'react';
import { render, screen } from '../../../test-utils';
import '@testing-library/jest-dom/extend-expect';
import { Dropdown } from '..';

const options = ['1', '2', '3'];

describe('<Dropdown/>', () => {
  test('should render an focusable activator to toggle the dropdown', () => {
    const dropdown = render(<Dropdown options={options} family={null} />);
    expect(dropdown.getByTestId('dropdown-activator')).toBeInTheDocument();
    const activator = dropdown.getByTestId('dropdown-activator');
    activator.focus();
    expect(activator).toHaveFocus();
  });
  test('should not display popup', () => {
    const { getByTestId } = render(<Dropdown options={options} />);
    expect(getByTestId('dropdown-itemList')).not.toBeVisible();
  });
  test('should display popup', () => {
    const dropdown = render(<Dropdown options={options} />);
    const activator = dropdown.getByTestId('dropdown-activator');
    activator.click();
    expect(dropdown.getByTestId('dropdown-itemList')).toBeVisible();
    expect(screen.getByText('1')).toBeVisible();
  });
  test('should click item', () => {
    const dropdown = render(<Dropdown options={options} family='Roboto' />);
    const activator = dropdown.getByTestId('dropdown-activator');
    activator.click();
    const optionSelected = screen.getByText('1').click();
    expect(optionSelected).toMatchSnapshot();
  });
  test('should render with default props and borders', () => {
    const borders = {
      top: '1px solid black',
      bottom: '1px solid black',
      left: '1px solid black',
      right: '1px solid black',
    };
    const { container } = render(<Dropdown border={borders} />);
    expect(container).toMatchSnapshot();
  });
  test('should render with default props and border left none', () => {
    const bordersNoLeft = {
      top: '1px solid black',
      bottom: '1px solid black',
      right: '1px solid black',
    };
    const { container } = render(<Dropdown border={bordersNoLeft} />);
    expect(container).toMatchSnapshot();
  });
});
