import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '../../../test-utils';

import { Spacer } from '../';

describe('<Spacer/>', () => {
  test('should render properly', () => {
    const { container } = render(<Spacer sb={'#000'} />);
    expect(container).not.toBeNull();
  });

  test('should render without border', () => {
    const { container } = render(<Spacer />);
    expect(container).not.toBeNull();
  });

  test('should render Spacer horizontal', () => {
    const { container } = render(<Spacer direction="horizontal" />);
    expect(container).not.toBeNull();
  });
});
