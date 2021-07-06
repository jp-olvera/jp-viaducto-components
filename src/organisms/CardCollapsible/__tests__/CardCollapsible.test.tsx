/* eslint-env jest */

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '../../../test-utils';
import { CardCollapsible } from '..';

const Content = () => <div>Content</div>;

describe('<CardCollapsible/>', () => {
  test('should be visible', () => {
    const { container } = render(
      <CardCollapsible
        mainContent={<Content />}
        collapse
        collapseContent={<div>asdasd</div>}
      />,
    );
    expect(container).not.toBeNull();
  });
  test('should be collapsed', () => {
    const { container } = render(
      <CardCollapsible mainContent={<Content />} collapse />,
    );
    expect(container).not.toBeNull();
  });
});
