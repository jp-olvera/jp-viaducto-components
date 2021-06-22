/* eslint-env jest */

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/react';
import { render, screen } from '../../../test-utils';
import { Avatar } from '..';

describe('<Container/>', () => {
  test('should render properly', () => {
    render(<Avatar src='123' />);
    expect(screen.queryByAltText('123')).toBeVisible();
  });
  test('should render another image', () => {
    render(<Avatar src='pathtofile' size='large' />);
    expect(screen.queryByAltText('pathtofile')).toBeVisible();
  });
});
