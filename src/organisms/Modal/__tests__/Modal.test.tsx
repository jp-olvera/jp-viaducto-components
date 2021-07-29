/* eslint-env jest */

import React from 'react';
import { render, screen, fireEvent } from '../../../test-utils';
import { Modal } from '..';

jest.useFakeTimers();
describe('<Modal></Modal>', () => {
  test('should not be visible', () => {
    render(<Modal allowClickOutside={false} />);
    expect(screen.queryByTestId('overlay')).toBe(null);
    expect(screen.queryByTestId('modal')).toBe(null);
  });
  test('should be visible', () => {
    render(<Modal active />);
    expect(screen.getByTestId('overlay')).toBeVisible();
    expect(screen.getByTestId('modal')).toBeVisible();
  });
  test('click on the overlay should call handleActive function', () => {
    const handleActive = jest.fn();
    render(<Modal active handleActive={handleActive} />);
    fireEvent.click(screen.getByTestId('overlay'));
    jest.runOnlyPendingTimers();
    expect(handleActive).toBeCalledTimes(1);
    jest.useRealTimers();
  });
});
