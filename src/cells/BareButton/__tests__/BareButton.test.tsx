/* eslint-env jest */

import React from 'react';
import { render } from '../../../test-utils';
import { BareButton } from '..';

describe('<BareButton/>', () => {
  test('should render properly', () => {
    const { container } = render(
      <BareButton>
        <div>s</div>
      </BareButton>,
    );
    expect(container).not.toBeNull();
  });
  test('should render with children', () => {
    const { container } = render(
      <BareButton close={false}>
        <div>ss</div>
      </BareButton>,
    );
    expect(container).not.toBeNull();
  });
});
