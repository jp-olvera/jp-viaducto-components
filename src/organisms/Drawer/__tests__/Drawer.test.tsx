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
      <Drawer active={false} onClose={() => {}}>
        <h1>Title</h1>
      </Drawer>,
    );
    expect(screen.queryByText('Title')).toMatchSnapshot();
  });
  test('should call onClose when clicking the overlay', () => {
    jest.useFakeTimers();
    const onClose = jest.fn();
    render(
      <Drawer onClose={onClose} active>
        <h1>Title</h1>
      </Drawer>,
    );
    fireEvent.click(screen.getByTestId('overlay'));
    jest.runOnlyPendingTimers();
    expect(onClose).toBeCalledTimes(1);
    jest.useRealTimers();
  });
});
