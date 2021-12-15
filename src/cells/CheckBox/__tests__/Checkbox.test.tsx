/* eslint-env jest */

import React from 'react';
import { render, screen, fireEvent, axe } from '../../../test-utils';
import { Checkbox } from '..';

describe('<Checkbox/>', () => {
  test('should render properly', async () => {
    const { container } = render(<Checkbox label='Checkbox' data-testid='aa' family='Roboto' />);
    expect(screen.getByText('Checkbox')).toBeVisible();
    expect(await axe(container)).toHaveNoViolations();
  });

  test('should be checked', async () => {
    const { container, getByTestId } = render(<Checkbox label='Yes' id='checkbox' />);
    const input = getByTestId('checkbox');
    const selector = input.querySelector('input');
    fireEvent.click(selector || window);
    expect(selector?.checked).toEqual(true);
    expect(await axe(container)).toHaveNoViolations();
  });

  test('should not be checked', async () => {
    const { container, getByTestId } = render(
      <Checkbox label='Yes' id='checkbox1' family={null} inputSize='lg' />
    );
    const input = getByTestId('checkbox1');
    const selector = input.querySelector('input');
    expect(selector?.checked).toEqual(false);
    fireEvent.click(selector || window);
    expect(selector?.checked).toEqual(true);
    expect(await axe(container)).toHaveNoViolations();
  });

  test('should be disabled', async () => {
    const { container, getByTestId } = render(
      <Checkbox label='Yes' id='checkbox2' disabled inputSize='xl' />
    );
    expect(getByTestId('checkbox2').querySelector('input')?.hasAttribute('disabled')).toEqual(true);
    expect(await axe(container)).toHaveNoViolations();
  });
  test('should be render withour label', async () => {
    const mock = jest.fn();
    const { container } = render(
      <Checkbox id='checkboxNoLabel' disabled label='check' onChange={mock} />
    );
    fireEvent.click(container.querySelector('input'));
    expect(container.querySelector('input')?.hasAttribute('disabled')).toEqual(true);
    expect(await axe(container)).toHaveNoViolations();
  });
});
