/* eslint-env jest */

import React from 'react';

import { render, screen, fireEvent } from '../../../test-utils';
import { Radio } from '..';

describe('<Radio/>', () => {
  test('should render properly', () => {
    render(<Radio label='Radio' data-testid='aa' name='name' />);
    expect(screen.getByText('Radio')).toBeVisible();
  });

  test('should be selected', () => {
    const { getByTestId } = render(
      <Radio
        label='Yes'
        id='radio'
        family='Roboto'
        name='red'
        onChange={jest.fn}
        onClick={jest.fn}
      />,
    );
    const input = getByTestId('radio');
    fireEvent.click(input.querySelector('input') || window);
    fireEvent.change(input.querySelector('input') || window, {
      target: { value: true },
    });
    expect(input.querySelector('input')?.checked).toEqual(true);
  });

  test('should be disabled', () => {
    const { getByTestId } = render(
      <Radio
        label='Yes'
        id='radio'
        disabled
        name='green'
        onChange={jest.fn}
        onClick={jest.fn}
      />,
    );
    const input = getByTestId('radio');
    fireEvent.click(input.querySelector('input') || window);
    fireEvent.change(input.querySelector('input') || window, {
      target: { value: true },
    });
    expect(input.querySelector('input')?.hasAttribute('disabled')).toEqual(
      true,
    );
  });

  test('should render without label', () => {
    const { getByTestId } = render(
      <Radio id='radio' disabled family={null} name='radio' />,
    );
    const input = getByTestId('radio');
    fireEvent.click(input || window);
    expect(input.querySelector('input')?.hasAttribute('disabled')).toEqual(
      true,
    );
  });
});
