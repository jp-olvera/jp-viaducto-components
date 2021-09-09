/* eslint-env jest */

import React from 'react';

import { render, screen, fireEvent } from '../../../test-utils';
import { Tooltip } from '..';

const Container = () => <div>Container who has the tooltip</div>;

describe('<Tooltip/>', () => {
  test('label should be visible when mouseEnter Container', () => {
    render(
      <Tooltip family={undefined} label='a'>
        <Container />
      </Tooltip>,
    );
    fireEvent.mouseEnter(screen.getByTestId('tooltip'));
    expect(screen.queryByText('a')).toBeVisible();
  });

  test('tooltip should not be rendered by default', () => {
    render(
      <Tooltip label='a'>
        <Container />
      </Tooltip>,
    );
    expect(screen.queryByText('a')).toBe(null);
  });

  test('should render left tooltip', () => {
    render(
      <Tooltip label='tooltip' position='left'>
        <Container />
      </Tooltip>,
    );
    fireEvent.mouseEnter(screen.getByTestId('tooltip'));

    expect(screen.queryByText('tooltip')).toBeVisible();
  });

  test('should render top tooltip', () => {
    render(
      <Tooltip label='tooltip' position='top' color='white'>
        <Container />
      </Tooltip>,
    );
    fireEvent.mouseEnter(screen.getByTestId('tooltip'));
    expect(screen.queryByText('tooltip')).toBeVisible();
  });

  test('should render bottom tooltip', () => {
    render(
      <Tooltip label='tooltip' position='bottom' color='white'>
        <Container />
      </Tooltip>,
    );
    fireEvent.mouseEnter(screen.getByTestId('tooltip'));

    expect(screen.queryByText('tooltip')).toBeVisible();
  });
});
