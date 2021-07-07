/* eslint-env jest */

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '../../../test-utils';
import { Drawer } from '..';

describe('<Drawer/>', () => {
  test('should be visible', () => {
    render(
      <Drawer active onClose={() => {}}>
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
      <Drawer onClose={onClose} active>
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
      <Drawer onClose={onClose} active>
        <h1>Title</h1>
      </Drawer>,
    );
    const drawer = getByTestId('drawer');
    fireEvent.click(drawer);
    expect(drawer).toMatchSnapshot();
  });
  test('should fire keydown on overlay', () => {
    const onClose = jest.fn();
    const { getByTestId } = render(
      <Drawer onClose={onClose} active>
        <h1>Title</h1>
      </Drawer>,
    );
    const overlay = getByTestId('overlay');
    fireEvent.keyDown(overlay, { key: 'Enter', code: 'Enter' });
    expect(overlay).toMatchSnapshot();
  });
});
