import React from 'react';
import { render, fireEvent, screen } from '../../../test-utils';
import '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Input } from '..';
import ProgressBar from '../ProgressBar';

describe('<Input/>', () => {
  test('should render input', () => {
    const { container } = render(
      <Input size='md' label='Im the input tested' />,
    );
    const input = container.querySelector('.input');
    expect(input).toBeInTheDocument();
  });

  test('should render input another value', () => {
    const { container } = render(
      <Input size='md' label='Im the input tested' type='text' isValid />,
    );
    const input = container.querySelector('.input');
    expect(input.value).not.toBe('New value');
  });

  test('should render input and change the value', () => {
    const { container } = render(
      <Input size='md' label='Im the input tested' isInvalid />,
    );
    const input = container.querySelector('.input');
    fireEvent.change(input, { target: { value: 'New Value' } });
    expect(input.value).toBe('New Value');
  });

  test('should render input with label', () => {
    const { container } = render(<Input size='md' label='Input' />);
    const label = container.querySelector('.label');
    expect(label.innerHTML).toContain('Input');
  });

  test('should render input type password and reveal value after click', () => {
    const { container } = render(
      <Input
        type='password'
        placeholder='Im the input tested'
        label='password'
        border={null}
      />,
    );
    const input = container.querySelector('.input');
    fireEvent.change(input, { target: { value: '1' } });
    fireEvent.change(input, { target: { value: '12' } });
    fireEvent.change(input, { target: { value: '123' } });
    fireEvent.change(input, { target: { value: '1234' } });
    fireEvent.change(input, { target: { value: '12345' } });
    const passReveal = screen.getByTestId('type-switch');
    fireEvent.click(passReveal);
    expect(input.type).toBe('text');
    fireEvent.click(passReveal);
    expect(input.type).toBe('password');
  });

  test('should change type password to text with enter keyUp', () => {
    const { container } = render(
      <Input
        type='password'
        placeholder='Im the input tested'
        label='password'
        border='bottom'
        size='large'
      />,
    );
    const input = container.querySelector('.input');
    const passReveal = screen.getByTestId('type-switch');
    fireEvent.keyUp(passReveal, { key: '13', code: '13', keyCode: '13' });
    expect(input.type).toBe('text');
  });

  test('should not change type password if keyUp is not enter or space', () => {
    const { container } = render(
      <Input
        type='password'
        placeholder='Im the input tested'
        border='outside'
        size='large'
        icon='IconCool'
      />,
    );
    const input = container.querySelector('.input');
    const passReveal = screen.getByTestId('type-switch');
    fireEvent.keyUp(passReveal, { key: 'a', code: 'KeyA', keyCode: 'KeyA' });
    expect(input.type).toBe('password');
  });

  test('should render input disabled', () => {
    const { container } = render(<Input disabled label='disabled' icon='Icon' border='overlap' />);
    expect(container).toBeDefined();
  });

  test('should be <ProgressBar/> rendered', () => {
    const { container } = render(<ProgressBar />);
    expect(container).toBeDefined();
  });
});
