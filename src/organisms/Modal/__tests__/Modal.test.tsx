/* eslint-env jest */

import React from 'react';
import ReactDOM from 'react-dom';
import {
  render, screen, fireEvent, act,
} from '../../../test-utils';
import { Modal } from '..';

let container;

describe('<Modal></Modal>', () => {
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });
  test('should not be visible', () => {
    act(() => {
      ReactDOM.render(<Modal allowClickOutside={false} />, container);
    });
    expect(screen.queryByTestId('overlay')).toBe(null);
    expect(screen.queryByTestId('modal')).toBe(null);
  });
  test('should be visible', () => {
    render(<Modal active />);
    expect(screen.getByTestId('overlay')).toBeVisible();
    expect(screen.getByTestId('modal')).toBeVisible();
  });
  test('click on the overlay should call handleActive function', () => {
    jest.useFakeTimers();

    const handleActive = jest.fn();
    act(() => {
      ReactDOM.render(<Modal active handleActive={handleActive} />, container);
    });
    act(() => {
      fireEvent.click(screen.getByTestId('overlay'));
    });
    jest.runOnlyPendingTimers();
    expect(handleActive).toBeCalledTimes(1);
    jest.useRealTimers();
  });

  test('ev', async () => {});
});
