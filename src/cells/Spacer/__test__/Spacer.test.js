import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import Spacer from '../';

describe('<Spacer/>', () => {
  test('render', () => {
    render(<Spacer />);
  });
});
