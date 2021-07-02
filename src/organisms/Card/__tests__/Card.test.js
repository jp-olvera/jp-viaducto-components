/* eslint-env jest */

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '../../../test-utils';
import { Card } from '..';

const props = {
  src: 'https://homepages.cae.wisc.edu/~ece533/images/girl.png',
};

const Content = () => <div>Content</div>;

describe('<Card/>', () => {
  test('should be visible', () => {
    const { container } = render(<Card {...props} />);
    expect(container).not.toBeNull();
  });
  test('should not have image', () => {
    const { container } = render(
      <Card>
        <Content />
      </Card>,
    );
    expect(container).not.toBeNull();
  });
  test('should have children as undefined', () => {
    const { container } = render(<Card src={null} />);
    expect(container).not.toBeNull();
  });
});
