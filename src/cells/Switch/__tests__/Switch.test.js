import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '../../../test-utils';
import { Switch } from '..';

describe('<Switch/>', () => {
  test('should render properly', () => {
    render(<Switch id="Switch" />);
    expect(screen.getByTestId('Switch')).toBeVisible();
  });

  test('should be selected', () => {
    const { getByTestId } = render(<Switch id="Switch" />);
    const input = getByTestId('Switch');
    fireEvent.click(input.querySelector('input'));
    expect(input.querySelector('input').checked).toEqual(true);
  });

  test('should be not checked', () => {
    const { getByTestId } = render(<Switch id="switch" />);
    const input = getByTestId('switch1');
    expect(input.querySelector('input').checked).toEqual(false);
    fireEvent.click(input.querySelector('input'));
    expect(input.querySelector('input').checked).toEqual(true);
  });

  test('should be disabled', () => {
    const { getByTestId } = render(<Switch id="Switch1" disabled />);
    expect(
      getByTestId('Switch1').querySelector('input').hasAttribute('disabled'),
    ).toEqual(true);
  });
});
