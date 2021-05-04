import React from 'react';
import { render, fireEvent, screen } from '../../../test-utils';
import '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Input } from '../';

describe('<Input/>', () => {
  test('should render input', () => {
    const { container } = render(
      <Input size="md" label="Im the input tested" />
    );
    const input = container.querySelector('.input');
    expect(input).toBeInTheDocument();
  });

  test('should render input another value', () => {
    const { container } = render(
      <Input size="md" label="Im the input tested" />
    );
    const input = container.querySelector('.input');
    expect(input.value).not.toBe('New value');
  });

  test('should render input and change the value', () => {
    const { container } = render(
      <Input size="md" label="Im the input tested" />
    );
    const input = container.querySelector('.input');
    fireEvent.change(input, { target: { value: 'New Value' } });
    expect(input.value).toBe('New Value');
  });

  test('should render input with label', () => {
    const { container } = render(<Input size="md" label="Input" />);
    const label = container.querySelector('.label');
    expect(label.innerHTML).toContain('Input');
  });

  test('should render input type password and reveal value after click', () => {
    const { container } = render(
      <Input type="password" placeholder="Im the input tested" />
    );
    const input = container.querySelector('.input');
    expect(input.type).toBe('password');
    const passReveal = screen.getByTitle('Hidden (closed eye)');
    fireEvent.click(passReveal);
    expect(input.type).toBe('text');
  });
});
