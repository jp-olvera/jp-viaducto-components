/* eslint-env jest */

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '../../../test-utils';
import { Badge } from '..';
import { alignContent, getBadgeSize, getClipPath } from '../StyledBadge';

describe('<Badge /> component', () => {
  test('should render propertly', () => {
    const { getByText } = render(
      <Badge content='Badge' clipPath='triangle' size='md' />,
    );
    expect(getByText('Badge')).toBeInTheDocument();
  });
  // describe('helper functions', () => { });
});
