/* eslint-env jest */

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/react';
import { render, screen } from '../../../test-utils';
import { Avatar } from '..';

describe('<Container/>', () => {
  test('should render with default values', () => {
    render(<Avatar src='123' />);
    expect(screen.queryByAltText('123')).toBeVisible();
  });
  test('should render with large size', () => {
    render(<Avatar src='pathtofile' size='large' />);
    expect(screen.queryByAltText('pathtofile')).toBeVisible();
  });
  test('should render with small size', () => {
    render(<Avatar src='pathtofile' size='small' />);
    expect(screen.queryByAltText('pathtofile')).toBeVisible();
  });
  test('should render with custom height', () => {
    render(<Avatar src='pathtofile' height='50px' />);
    expect(screen.getByTestId('avatar')).toHaveStyle('height: 50px');
  });
  test('should render with custom width', () => {
    render(<Avatar src='pathtofile' width='50px' />);
    expect(screen.getByTestId('avatar')).toHaveStyle('width: 50px');
  });
  test('should render with custom clip path', () => {
    render(
      <Avatar src='pathtofile' clipPath='ellipse(67% 100% at 50% 100%)' />,
    );
    expect(screen.getByTestId('avatar')).toHaveStyle(
      'clip-path: ellipse(67% 100% at 50% 100%)',
    );
  });
});
