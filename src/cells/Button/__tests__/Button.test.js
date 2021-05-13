/* eslint-env jest */

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { Help } from 'react-ikonate';
import { render, screen, fireEvent } from '../../../test-utils';
import { Button } from '..';

describe('<Button/>', () => {
  test('should render properly', () => {
    render(<Button label='Continue' size='large' />);
  });

  test('should have focus', () => {
    render(<Button label='Accept' size='small' horizontalSpacing='sm' />);
    const button = screen.getByRole('button');
    button.focus();
    expect(button).toHaveFocus();
  });

  test('should call onClick function', () => {
    const handleClick = jest.fn();
    const Icon = 'Icon';
    render(
      <Button label='Accept' size='small' onClick={handleClick} icon={Icon} />,
    );
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalled();
  });

  test('should not call onClick function when is disabled', () => {
    const handleClick = jest.fn();
    const Icon = 'Icon';
    render(<Button onClick={handleClick} disabled icon={Icon} size='large' />);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).not.toHaveBeenCalled();
  });

  test('should render button with label and sm padding props', () => {
    const mockFn = jest.fn();
    const IconButton = 'IconButton';
    render(
      <Button
        onClick={mockFn}
        label='Button Test'
        icon={IconButton}
        horizontalSpacing='small'
      />,
    );
    expect(screen.queryByText('Button Test')).toBeInTheDocument();
  });

  test('should render button with isIconOnly props and lg padding props', () => {
    const OnlyIcon = 'OnlyIcon';
    render(<Button icon={OnlyIcon} horizontalSpacing='large' size='large' height='48px' />);
    expect(screen.queryByRole('button')).toBeInTheDocument();
  });

  test('should render button with label props and small padding props', () => {
    render(<Button icon={<Help />} size='small' label='Not only Icon' />);
    expect(screen.queryByRole('button')).toBeInTheDocument();
  });
});
