import React from 'react';
import { render, screen } from '@testing-library/react';
import Hideable from '../';

describe('<Hideable/>', () => {
  test('text inside should not be visible', () => {
    render(<Hideable>Hidden</Hideable>);
    expect(screen.getByText('Hidden')).not.toBeVisible();
  });
  test('text inside should be visible', () => {
    render(<Hideable after={false}>Hidden</Hideable>);
    expect(screen.getByText('Hidden')).toBeVisible();
  });
  test('text inside should not be visible', () => {
    render(<Hideable visibleOn="sm">Hidden</Hideable>);
    expect(screen.getByText('Hidden')).not.toBeVisible();
  });
  test('text inside should be visible', () => {
    render(
      <Hideable after={false} visibleOn="lg">
        Hidden
      </Hideable>,
    );
    expect(screen.getByText('Hidden')).toBeVisible();
  });
});
