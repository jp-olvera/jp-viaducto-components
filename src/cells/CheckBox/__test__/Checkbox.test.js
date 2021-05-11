import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '../../../test-utils';
import { Checkbox } from '..';

describe('<Checkbox/>', () => {
  test('should render properly', () => {
    render(<Checkbox label="Checkbox" data-testid="aa" />);
    expect(screen.getByText('Checkbox')).toBeVisible();
  });

  test('should be checked', () => {
    const { getByTestId } = render(<Checkbox label="Yes" id="checkbox" />);
    const input = getByTestId('checkbox');
    fireEvent.click(input.querySelector('input'));
    expect(input.querySelector('input').checked).toEqual(true);
  });

  test('should be not checked', () => {
    const { getByTestId } = render(<Checkbox label="Yes" id="checkbox" />);
    const input = getByTestId('checkbox');
    expect(input.querySelector('input').checked).toEqual(false);
    fireEvent.click(input.querySelector('input'));
    expect(input.querySelector('input').checked).toEqual(true);
    fireEvent.click(input.querySelector('input'));
    expect(input.querySelector('input').checked).toEqual(false);
  });

  test('should be disabled', () => {
    const { getByTestId } = render(
      <Checkbox label="Yes" id="checkbox" disabled />,
    );
    expect(
      getByTestId('checkbox').querySelector('input').hasAttribute('disabled'),
    ).toEqual(true);
  });
});
