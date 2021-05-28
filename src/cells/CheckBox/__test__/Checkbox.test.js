/* eslint-env jest */

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '../../../test-utils';
import { Checkbox } from '..';

describe('<Checkbox/>', () => {
  test('should render properly', () => {
    render(<Checkbox label='Checkbox' data-testid='aa' family='Roboto' />);
    expect(screen.getByText('Checkbox')).toBeVisible();
  });

  test('should be checked', () => {
    const { getByTestId } = render(<Checkbox label='Yes' id='checkbox' />);
    const input = getByTestId('checkbox');
    const selector = input.querySelector('input');
    fireEvent.click(selector);
    expect(selector.checked).toEqual(true);
  });

  test('should not be checked', () => {
    const { getByTestId } = render(
      <Checkbox label='Yes' id='checkbox1' family={null} size='lg' />,
    );
    const input = getByTestId('checkbox1');
    const selector = input.querySelector('input');
    expect(selector.checked).toEqual(false);
    fireEvent.click(selector);
    expect(selector.checked).toEqual(true);
  });

  test('should be disabled', () => {
    const { getByTestId } = render(
      <Checkbox label='Yes' id='checkbox2' disabled size='xl' />,
    );
    expect(
      getByTestId('checkbox2').querySelector('input').hasAttribute('disabled'),
    ).toEqual(true);
  });
  test('should be render withour label', () => {
    const { getByTestId } = render(<Checkbox id='checkboxNoLabel' disabled />);
    expect(
      getByTestId('checkboxNoLabel')
        .querySelector('input')
        .hasAttribute('disabled'),
    ).toEqual(true);
  });
});
