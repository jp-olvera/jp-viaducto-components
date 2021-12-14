/* eslint-env jest */

import React from 'react';

import { render, screen, fireEvent, act } from '../../../test-utils';
import { Drawer } from '..';

describe('<Drawer/>', () => {
  test('should be visible', () => {
    render(
      <Drawer active handleActive={() => {}} size='lg' transition={null} placement='right'>
        <h1>Title</h1>
      </Drawer>
    );
    expect(screen.getByText('Title')).toBeVisible();
  });
  test('should no be visible', () => {
    render(
      <Drawer handleActive={() => {}}>
        <h1>Title</h1>
      </Drawer>
    );
    expect(screen.queryByText('Title')).toMatchSnapshot();
  });
  test('should call handleActive when clicking the overlay', () => {
    jest.useFakeTimers();
    const handleActive = jest.fn();
    const { getByTestId } = render(
      <Drawer handleActive={handleActive} active placement='top'>
        <h1>Title</h1>
      </Drawer>
    );
    fireEvent.click(getByTestId('overlay'));
    act(() => {
      jest.advanceTimersByTime(230);
    });
    expect(handleActive).toBeCalledTimes(1);
  });
  test('should click drawer', () => {
    const handleActive = jest.fn();
    const { getByTestId } = render(
      <Drawer handleActive={handleActive} active placement='bottom'>
        <h1>Title</h1>
      </Drawer>
    );
    const drawer = getByTestId('drawer');
    fireEvent.click(drawer);
    expect(drawer).toMatchSnapshot();
  });
  test('should call keyup action drawer', () => {
    const handleActive = jest.fn();
    const { getByTestId } = render(
      <Drawer handleActive={handleActive} active size='sm' placement='left'>
        <h1>Title</h1>
      </Drawer>
    );
    const drawer = getByTestId('overlay');
    fireEvent.keyUp(drawer, { key: 'Escape' });
    expect(drawer).toMatchSnapshot();
  });
});
