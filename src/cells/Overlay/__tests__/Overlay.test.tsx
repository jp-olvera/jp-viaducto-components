import React from 'react';

import '@testing-library/react';
import { render } from '../../../test-utils';
import { Overlay } from '..';

describe('<Overlay />', () => {
  test('should render', () => {
    const container = render(
      <Overlay data-testid='overlay'>
        <div>sjsjs</div>
      </Overlay>,
    );
    expect(container).toMatchSnapshot();
  });
});
