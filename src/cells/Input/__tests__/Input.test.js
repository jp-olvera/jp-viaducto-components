import React from 'react';
import { render, fireEvent, screen } from '../../../test-utils';
import '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Input } from '..';
import { mask } from '../Input';
import ProgressBar from '../ProgressBar';

describe('<Input/>', () => {
  test('should render input', () => {
    const { container } = render(
      <Input size='md' label='Im the input tested' family={null} type='card' />,
    );
    const input = container.querySelector('.input');
    expect(input).toBeInTheDocument();
  });

  test('should render input another value', () => {
    const { container } = render(
      <Input
        size='md'
        label='Im the input tested'
        type='card'
        value={555555}
        isValid
      />,
    );
    const input = container.querySelector('.input');
    expect(input.value).not.toBe('New value');
  });

  test('should render input and change the value', () => {
    const { container } = render(
      <Input size='md' label='Master' isInvalid type='card' />,
    );
    const input = container.querySelector('.input');
    fireEvent.change(input, { target: { value: '555555' } });
    expect(input.value).not.toBeNull();
  });

  test('should render input and change the value with amex card', () => {
    const { container } = render(
      <Input size='md' label='Amex' isInvalid type='card' />,
    );
    const input = container.querySelector('.input');
    fireEvent.change(input, { target: { value: '37021458745698745' } });
    expect(input.value).not.toBeNull();
  });
  test('should render input and change the value with no svg card', () => {
    const { container } = render(
      <Input size='md' label='Im the input tested' isInvalid type='card' />,
    );
    const input = container.querySelector('.input');
    fireEvent.change(input, { target: { value: 'aaaaaaaaaaa' } });
    expect(input).not.toBeNull();
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
        required
      />,
    );
    const input = container.querySelector('.input');
    const passReveal = screen.getByTestId('type-switch');
    fireEvent.keyUp(passReveal, { key: 'a', code: 'KeyA', keyCode: 'KeyA' });
    expect(input.type).toBe('password');
  });

  test('should render simple disabled input', () => {
    const { container } = render(<Input label='label' disabled type='card' />);
    expect(container).not.toBeNull();
  });
  test('should render simple input', () => {
    const { container } = render(
      <Input
        label='label'
        border='overlap'
        type='card'
        required
        icon='card'
        iconColor='#000'
      />,
    );
    expect(container).not.toBeNull();
  });

  describe('mask function', () => {
    test('should return data', () => {
      const data = mask('444444', '3');
      expect(data).not.toBeNull();
    });
    test('should return data with another separator', () => {
      const data = mask('5555555555555', '4', ' ');
      expect(data).not.toBeNull();
    });
  });

  test('should be <ProgressBar/> rendered', () => {
    const { container } = render(<ProgressBar />);
    expect(container).toBeDefined();
  });
  test('should be <ProgressBar/> rendered with Color', () => {
    const { container } = render(<ProgressBar currentProgress={3} />);
    expect(container).toBeDefined();
  });
});
