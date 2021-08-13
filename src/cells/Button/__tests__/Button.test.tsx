/* eslint-env jest */

import React from 'react';
import {
  render, screen, fireEvent, axe,
} from '../../../test-utils';

import { Button } from '..';

describe('<Button/>', () => {
  test('should render properly without violations', async () => {
    const { container } = render(
      <Button
        label='Continue'
        variant='ghost'
        useLongLoading
        lead
        isLoading
        isValid={null}
        shapeColor={null}
        radius={null}
      />,
    );
    expect(container).toBeDefined();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test('should have focus', () => {
    render(<Button label='Accept' size='large' isValid />);
    const button = screen.getByRole('button');
    button.focus();
    expect(button).toHaveFocus();
  });

  test('should call onClick function', () => {
    const handleClick = jest.fn();
    const Icon = 'Icon';
    render(
      <Button
        isValid={false}
        label='Accept'
        size='small'
        onClick={handleClick}
        icon={Icon}
        colors={null}
        block
        leftSpacing={null}
      />,
    );
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalled();
  });

  test('should not call onClick function when is disabled', () => {
    const handleClick = jest.fn();
    const Icon = 'Icon';
    render(
      <Button
        onClick={handleClick}
        isLoading
        disabled
        isValid
        label='label'
        size='default'
        leftSpacing={null}
        icon={Icon}
      />,
    );
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
        isLoading
        isValid={null}
        size='large'
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
    render(
      <Button
        icon={OnlyIcon}
        leftSpacing='lg'
        height={undefined}
        size='default'
      />,
    );
    expect(screen.queryByRole('button')).toBeInTheDocument();
  });

  test('should render button with isIconOnly props and lg padding props', () => {
    const OnlyIcon = 'OnlyIcon';
    render(
      <Button icon={OnlyIcon} leftSpacing='lg' size='large' height='48px' />,
    );
    expect(screen.queryByRole('button')).toBeInTheDocument();
  });

  test('should render button with isIconOnly props and small props', () => {
    const OnlyIcon = 'OnlyIcon';
    render(
      <Button
        icon={OnlyIcon}
        size='small'
        label={null}
        leftSpacing={null}
        rightSpacing={null}
      />,
    );
    expect(screen.queryByRole('button')).toBeInTheDocument();
  });

  test('should render button with isIconOnly props and default props', () => {
    const OnlyIcon = 'OnlyIcon';
    render(<Button icon={OnlyIcon} size='large' />);
    expect(screen.queryByRole('button')).toBeInTheDocument();
  });

  test('should render button with label props and small padding props', () => {
    render(
      <Button icon='❤' size='small' label='Not only Icon' height={undefined} />,
    );
    expect(screen.queryByRole('button')).toBeInTheDocument();
  });

  test('should render button with no padding lateral large and default', () => {
    const props = {
      label: null,
      leftSpacing: null,
      rightSpacing: null,
      height: undefined,
      colors: null,
      variant: null,
    };
    render(<Button icon='❤' size='large' {...props} />);
    expect(screen.queryByRole('button')).toBeInTheDocument();
    const { container } = render(<Button icon='❤' size='default' {...props} />);
    expect(container).toBeInTheDocument();
  });
  test('should render button with height null', () => {
    const { container } = render(<Button icon='❤' height={null} />);
    expect(container).toBeInTheDocument();
  });
});
