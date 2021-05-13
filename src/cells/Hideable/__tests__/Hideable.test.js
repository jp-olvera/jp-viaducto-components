/* eslint-env jest */

import React from 'react';
import { render, screen } from '../../../test-utils';
import '@testing-library/jest-dom/extend-expect';
import { Hideable } from '..';

describe('<Hideable/>', () => {
  test('text inside should not be visible', () => {
    render(<Hideable>Hidden</Hideable>);
    expect(screen.getByText('Hidden')).not.toBeVisible();
  });
  test('text inside should be visible', () => {
    render(<Hideable after={false}>Not Hidden</Hideable>);
    expect(screen.getByText('Not Hidden')).toBeVisible();
  });
  test('text inside should not be visible with breakpoint passed', () => {
    render(<Hideable visibleOn='sm'>Also Hidden</Hideable>);
    expect(screen.getByText('Also Hidden')).not.toBeVisible();
  });
  test('text inside should be visible with breakpoint passed', () => {
    render(
      <Hideable after={false} visibleOn='lg'>
        Hidden
      </Hideable>,
    );
    expect(screen.getByText('Hidden')).toBeVisible();
  });
});
