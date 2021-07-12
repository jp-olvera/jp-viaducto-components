import React from 'react';
import { render, fireEvent } from '../../../test-utils';
import { Input } from '..';
import { mask } from '../Input';

describe('<Input/>', () => {
  test('should render input', () => {
    const { container } = render(
      <Input
        inputSize='default'
        label='Im the input tested'
        family={null}
        type='card'
      />,
    );
    const input = container.querySelector('.input');
    expect(input).toBeInTheDocument();
  });

  test('should render input another value', () => {
    const { container } = render(
      <Input
        inputSize='small'
        label='Im the input tested'
        type='card'
        defaultValue={555555}
        border='overlap'
      />,
    );
    const input = container.querySelector('input');
    expect(input?.value).not.toBe('New value');
  });

  test('should render input xsmall border overlap', () => {
    const { container } = render(
      <Input inputSize='xsmall' border='overlap' label='a' defaultValue='a' />,
    );
    const input = container.querySelector('input');
    fireEvent.focus(input || window);
    expect(input?.value).not.toBeNull();
  });

  test('should render input and change the value', () => {
    const { container } = render(
      <Input
        inputSize='xsmall'
        label='Master'
        type='card'
        border='overlap'
        defaultValue='55555555555'
        required
        onKeyUp={jest.fn}
      />,
    );
    const input = container.querySelector('input');
    fireEvent.click(input || window);
    fireEvent.change(input || window || window, {
      target: { value: '555555' },
    });
    fireEvent.keyUp(input || window, { keyCode: 13, key: 13, code: 13 });
    expect(input?.value).not.toBeNull();
  });
  test('should render input and change the value with other border', () => {
    const { container } = render(
      <Input
        inputSize='xsmall'
        label='Master'
        iconHelper='❤'
        type='card'
        border='overlap'
        defaultValue='55555555555'
      />,
    );
    const input = container.querySelector('input');
    fireEvent.change(input || window || window, {
      target: { value: '555555' },
    });
    expect(input?.value).not.toBeNull();
  });

  test('should render input and change the value with amex card', () => {
    const { container } = render(
      <Input inputSize='large' label='Amex' type='card' border='overlap' />,
    );
    const input = container.querySelector('input');
    fireEvent.change(input || window || window, {
      target: { value: '37021458745698745' },
    });
    expect(input?.value).not.toBeNull();
  });
  test('should render input and change the value with no svg card', () => {
    const { container } = render(
      <Input
        inputSize='small'
        label='Im the input tested'
        border='outside'
        type='card'
        defaultValue='65432165'
      />,
    );
    const input = container.querySelector('.input');
    fireEvent.change(input || window || window, {
      target: { value: 'aaaaaaaaaaa' },
    });
    expect(input).not.toBeNull();
  });
  test('should render input and change the value with no svg card no border', () => {
    const { container } = render(
      <Input
        inputSize='xsmall'
        label='Im the input tested'
        border='bottom'
        type='card'
        iconHelper='@'
        required
        iconRequired='!'
        defaultValue='65432165'
      />,
    );
    const input = container.querySelector('.input');
    fireEvent.change(input || window, { target: { value: 'aaaaaaaaaaa' } });
    fireEvent.focus(input);
    expect(input).not.toBeNull();
  });

  test('should render input with label', () => {
    const { container } = render(<Input inputSize='default' label='Input' />);
    const label = container.querySelector('.label');
    expect(label?.innerHTML).toContain('Input');
  });

  test('should render a simple disabled input', () => {
    const { container } = render(
      <Input
        label='label'
        height={null}
        inputSize={null}
        disabled
        type='card'
        border='overlap'
      />,
    );
    expect(container).not.toBeNull();
  });
  test('should render a simple card input', () => {
    const { container } = render(<Input label={null} type='card' />);
    const input = container.querySelector('input');
    fireEvent.change(input || window, { target: { value: 345 } });
    expect(input?.value).toBe('345');
  });
  test('should render a simple date input', () => {
    const { container } = render(<Input label='label' type='date' />);
    const { container: div } = render(
      <Input label='label' type='datetime-local' />,
    );
    expect(container).not.toBeNull();
    expect(div).not.toBeNull();
  });
  test('should render a simple time input', () => {
    const { container } = render(<Input label='label' type='time' />);
    expect(container).not.toBeNull();
  });
  test('should render a simple color input', () => {
    const { container } = render(<Input label='label' type='color' />);
    expect(container).not.toBeNull();
  });
  test('should render a simple phone input', () => {
    const { container } = render(
      <Input label='label' type='phone' border='overlap' inputSize='xsmall' />,
    );
    const input = container.querySelector('input');
    fireEvent.change(input || window, { target: { value: 3654 } });
    fireEvent.change(input || window, { target: { value: 454 } });
    fireEvent.change(input || window, { target: { value: 5654 } });
    fireEvent.select(input);
    expect(input?.value).not.toBe(345);

    expect(container).not.toBeNull();
  });
  test('should render simple input', () => {
    const { container } = render(
      <Input
        label={null}
        border='overlap'
        type='card'
        required
        icon='card'
        iconColor='#000'
        placeholder='Placeholder'
      />,
    );
    expect(container).not.toBeNull();
  });

  describe('mask function', () => {
    test('should return data', () => {
      const data = mask('444444', 3);
      expect(data).not.toBeNull();
    });
    test('should return data with another separator', () => {
      const data = mask('5555555555555', 4, ' ');
      expect(data).not.toBeNull();
    });
  });
});
