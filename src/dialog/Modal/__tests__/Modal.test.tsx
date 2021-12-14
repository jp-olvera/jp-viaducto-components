/* eslint-env jest */

import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen, fireEvent, act } from '../../../test-utils';
import { Modal } from '..';

let container;

describe('<Modal></Modal>', () => {
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.innerHTML = '';
    container = null;
  });
  test('should not be visible', () => {
    jest.useFakeTimers();

    ReactDOM.render(<Modal allowClickOutside={false} backgroundColor={null} />, container);
    act(() => {
      jest.advanceTimersByTime(230);
    });

    expect(screen.queryByTestId('overlay')).toBe(null);
    expect(screen.queryByTestId('modal')).toBe(null);
  });
  test('should be visible', () => {
    jest.useFakeTimers();

    ReactDOM.render(<Modal active />, container);

    act(() => {
      jest.advanceTimersByTime(230);
    });
    expect(screen.getByTestId('overlay')).toBeVisible();
    expect(screen.getByTestId('modal')).toBeVisible();
  });
  test('click on the overlay should call handleActive function', () => {
    jest.useFakeTimers();

    const handleActive = jest.fn();
    ReactDOM.render(<Modal active handleActive={handleActive} backgroundColor='red' />, container);

    act(() => {
      jest.advanceTimersByTime(230);
    });
    fireEvent.click(screen.getByTestId('overlay'));

    act(() => {
      jest.advanceTimersByTime(230);
    });
    expect(handleActive).toBeCalledTimes(1);
  });
  test('onEsc should call handleACtive', () => {
    jest.useFakeTimers();

    const handleActive = jest.fn();
    ReactDOM.render(
      <Modal active handleActive={handleActive} backgroundColor='red'>
        <span>content</span>
      </Modal>,
      container
    );

    act(() => {
      jest.advanceTimersByTime(230);
    });
    fireEvent.keyDown(screen.getByText('content'), { keyCode: 27 });
    act(() => {
      jest.advanceTimersByTime(230);
    });
    expect(handleActive).toBeCalledTimes(1);
  });
  test('onEsc should not call handleAc when allowClickOutside is disabled', () => {
    jest.useFakeTimers();

    const handleActive = jest.fn();
    ReactDOM.render(
      <Modal active handleActive={handleActive} backgroundColor='red' allowClickOutside={false}>
        <span>content</span>
      </Modal>,
      container
    );
    act(() => {
      jest.advanceTimersByTime(230);
    });
    fireEvent.keyDown(screen.getByText('content'), { keyCode: 27 });
    act(() => {
      jest.advanceTimersByTime(230);
    });
    expect(handleActive).toBeCalledTimes(0);
  });
});
