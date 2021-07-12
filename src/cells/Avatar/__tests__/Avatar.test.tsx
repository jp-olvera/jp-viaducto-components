/* eslint-env jest */

import React from 'react';
import { render } from '../../../test-utils';
import { Avatar } from '..';

describe('<Avatar/>', () => {
  const alt: string = 'avatar';
  test('should render with default values', () => {
    const { getByAltText } = render(<Avatar src='123' alt={alt} />);
    expect(getByAltText('avatar')).toBeVisible();
  });
  test('should render with large size', () => {
    const { container } = render(
      <Avatar src='pathtofile' size='large' alt={alt} />,
    );
    expect(container.querySelector('img')).toBeVisible();
  });
  test('should render with small size', () => {
    const { container } = render(
      <Avatar src='pathtofile' size='small' alt={alt} />,
    );
    expect(container).toBeInTheDocument();
  });
  test('should render with custom height', () => {
    const { getByTestId } = render(
      <Avatar src='pathtofile' height='50px' alt={alt} />,
    );
    expect(getByTestId('avatar')).toHaveStyle('height: 50px');
  });
  test('should render with custom width', () => {
    const { getByTestId } = render(
      <Avatar src='pathtofile' width='50px' alt={alt} />,
    );
    expect(getByTestId('avatar')).toHaveStyle('width: 50px');
  });
  test('should render with custom clip path', () => {
    const { getByTestId } = render(
      <Avatar
        src='pathtofile'
        clipPath='ellipse(67% 100% at 50% 100%)'
        alt={alt}
      />,
    );
    expect(getByTestId('avatar')).toHaveStyle(
      'clip-path: ellipse(67% 100% at 50% 100%)',
    );
  });
});
