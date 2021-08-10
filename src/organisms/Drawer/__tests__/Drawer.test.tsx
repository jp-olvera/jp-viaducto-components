/* eslint-env jest */

import React from 'react';

import { render, screen, fireEvent } from '../../../test-utils';
import { Drawer } from '..';

describe('<Drawer/>', () => {
  test('should be visible', () => {
    render(
      <Drawer
        active
        onClose={() => {}}
        size='lg'
        transition={null}
        placement='right'
      >
        <h1>Title</h1>
      </Drawer>,
    );
    expect(screen.getByText('Title')).toBeVisible();
  });
  test('should no be visible', () => {
    render(
      <Drawer onClose={() => {}}>
        <h1>Title</h1>
      </Drawer>,
    );
    expect(screen.queryByText('Title')).toMatchSnapshot();
  });
  test('should call onClose when clicking the overlay', () => {
    jest.useFakeTimers();
    const onClose = jest.fn();
    const { getByTestId } = render(
      <Drawer onClose={onClose} active placement='top'>
        <h1>Title</h1>
      </Drawer>,
    );
    fireEvent.click(getByTestId('overlay'));
    jest.runOnlyPendingTimers();
    expect(onClose).toBeCalledTimes(1);
    jest.useRealTimers();
  });
  test('should click drawer', () => {
    const onClose = jest.fn();
    const { getByTestId } = render(
      <Drawer onClose={onClose} active placement='bottom'>
        <h1>Title</h1>
      </Drawer>,
    );
    const drawer = getByTestId('drawer');
    fireEvent.click(drawer);
    expect(drawer).toMatchSnapshot();
  });
  test('should call keyup action drawer', () => {
    const onClose = jest.fn();
    const { getByTestId } = render(
      <Drawer onClose={onClose} active size='sm' placement='left'>
        <h1>Title</h1>
      </Drawer>,
    );
    const drawer = getByTestId('overlay');
    fireEvent.keyUp(drawer, { key: 'Escape' });
    expect(drawer).toMatchSnapshot();
  });
});
