/* eslint-env jest */

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/react';
import { render } from '../../../test-utils';
import { Popover } from '..';

describe('<Popover/>', () => {
  test('should render properly', () => {
    const { container } = render(
      <div style={{ height: '500rem', width: '50rem' }}>
        <Popover elevation='1' elevationDirection='top' />
      </div>,
    );
    expect(container).toBeVisible();
  });
  test('should render with top drop', () => {
    const { container } = render(
      <div style={{ height: '500rem', width: '50rem' }}>
        <Popover elevation={1} elevationDirection='top' position='top' />
      </div>,
    );
    expect(container).toBeVisible();
  });
});
