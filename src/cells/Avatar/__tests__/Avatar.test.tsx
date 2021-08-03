/* eslint-env jest */

import React from 'react';
import { render, axe } from '../../../test-utils';
import { Avatar } from '..';

describe('<Avatar/>', () => {
  const alt: string = 'avatar';
  test('should render with default values', async () => {
    const { container, getByAltText } = render(<Avatar src='123' alt={alt} />);
    expect(getByAltText('avatar')).toBeVisible();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should render with large size', async () => {
    const { container } = render(
      <Avatar src='pathtofile' size='large' alt={alt} />,
    );
    expect(container.querySelector('img')).toBeVisible();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should render with small size', async () => {
    const { container } = render(
      <Avatar src='pathtofile' size='small' alt={alt} />,
    );
    expect(container).toBeInTheDocument();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should render with custom height', async () => {
    const { getByTestId, container } = render(
      <Avatar src='pathtofile' height='50px' alt={alt} />,
    );
    expect(getByTestId('avatar')).toHaveStyle('height: 50px');
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should render with custom width', async () => {
    const { container, getByTestId } = render(
      <Avatar src='pathtofile' width='50px' alt={alt} />,
    );
    expect(getByTestId('avatar')).toHaveStyle('width: 50px');
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should render with custom clip path', async () => {
    const { container, getByTestId } = render(
      <Avatar
        src='pathtofile'
        clipPath='ellipse(67% 100% at 50% 100%)'
        alt={alt}
      />,
    );
    expect(getByTestId('avatar')).toHaveStyle(
      'clip-path: ellipse(67% 100% at 50% 100%)',
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
