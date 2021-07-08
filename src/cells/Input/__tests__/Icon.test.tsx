/* eslint-env jest */

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '../../../test-utils';
import { Icon } from '..';

describe('<Icon/>', () => {
  test('should render null icon', () => {
    const { container } = render(<Icon icon='aaaaaaa' />);
    expect(container).toMatchSnapshot();
  });
  describe('render cards svgs', () => {
    test('should render visa svg', () => {
      const { container } = render(<Icon icon='visa' />);
      expect(container).not.toBeNull();
    });
    test('should render mastercard svg', () => {
      const { container } = render(<Icon icon='mastercard' />);
      expect(container).not.toBeNull();
    });
    test('should render american-express svg', () => {
      const { container } = render(<Icon icon='american-express' />);
      expect(container).not.toBeNull();
    });
  });
});
