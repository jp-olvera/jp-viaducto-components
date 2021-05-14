/* eslint-env jest */

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { Help } from 'react-ikonate';
import { render, screen, fireEvent } from '../../../test-utils';
import { Button } from '..';

describe('<Button/>', () => {
  test('should render properly', () => {
    render(<Button label='Continue' />);
  });

  test('should have focus', () => {
    render(<Button label='Accept' size='large' />);
    const button = screen.getByRole('button');
    button.focus();
    expect(button).toHaveFocus();
  });

  test('should call onClick function', () => {
    const handleClick = jest.fn();
    const Icon = 'Icon';
    render(
      <Button label='Accept' size='small' onClick={handleClick} icon={Icon} colors={null} block leftSpacing={null} />,
    );
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalled();
  });

  test('should not call onClick function when is disabled', () => {
    const handleClick = jest.fn();
    const Icon = 'Icon';
    render(<Button onClick={handleClick} disabled label='label' size='default' leftSpacing={null} icon={Icon} />);
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
        leftSpacing='sm'
        size='small'
        colors={{
          default: '#937B3D',
          hover: '#AD9043',
          click: '#C3A24A',
          text: '#000',
        }}
        height={undefined}
        rightSpacing='sm'
      />,
    );
    expect(screen.queryByText('Button Test')).toBeInTheDocument();
  });

  test('should render button with isIconOnly props and lg padding props', () => {
    const OnlyIcon = 'OnlyIcon';
    render(<Button icon={OnlyIcon} leftSpacing='large' height={undefined} size='default' />);
    expect(screen.queryByRole('button')).toBeInTheDocument();
  });

  test('should render button with isIconOnly props and lg padding props', () => {
    const OnlyIcon = 'OnlyIcon';
    render(<Button icon={OnlyIcon} leftSpacing='large' size='small' height='48px' />);
    expect(screen.queryByRole('button')).toBeInTheDocument();
  });

  test('should render button with isIconOnly props and small props', () => {
    const OnlyIcon = 'OnlyIcon';
    render(<Button icon={OnlyIcon} size='large' />);
    expect(screen.queryByRole('button')).toBeInTheDocument();
  });

  test('should render button with isIconOnly props and default props', () => {
    const OnlyIcon = 'OnlyIcon';
    render(<Button icon={OnlyIcon} size='large' />);
    expect(screen.queryByRole('button')).toBeInTheDocument();
  });

  test('should render button with label props and small padding props', () => {
    render(<Button icon={<Help />} size='small' label='Not only Icon' />);
    expect(screen.queryByRole('button')).toBeInTheDocument();
  });
});
