import React from 'react';
import { render, fireEvent, axe } from '../../../test-utils';
import { Input } from '..';
import { mask } from '../Input';

describe('<Input/>', () => {
  test('should render input', async () => {
    const { container } = render(
      <Input
        inputSize='default'
        label='Im the input tested'
        family={null}
        type='card'
        icon='💳'
        id='card'
      />,
    );
    const input = container.querySelector('.input');
    fireEvent.change(input, { target: { value: '999999' } });
    expect(input).toBeInTheDocument();
    expect(await axe(container)).toHaveNoViolations();
  });

  test('should render input another value', async () => {
    const { container } = render(
      <Input
        inputSize='small'
        label='Im the input tested'
        type='phone'
        defaultValue='555555'
        border='overlap'
        id='phone'
      />,
    );
    const input = container.querySelector('input');
    fireEvent.keyDown(input, { target: { value: '5255' } });
    expect(input?.value).not.toBe('New value');
    expect(await axe(container)).toHaveNoViolations();
  });

  test('should render input xsmall border overlap', async () => {
    const { container } = render(
      <Input
        inputSize='xsmall'
        border='overlap'
        label='a'
        defaultValue='a'
        id='a'
      />,
    );
    const input = container.querySelector('input');
    fireEvent.focus(input || window);
    expect(input?.value).not.toBeNull();
    expect(await axe(container)).toHaveNoViolations();
  });

  test('should render input and change the value', async () => {
    const { container } = render(
      <Input
        inputSize='xsmall'
        label='Master'
        type='card'
        border='overlap'
        defaultValue='55555555555'
        getCardType='american-express'
        required
        onKeyUp={jest.fn}
        id='card'
      />,
    );
    const input = container.querySelector('input');
    fireEvent.click(input || window);
    fireEvent.change(input || window || window, {
      target: { value: '555555' },
    });
    fireEvent.keyUp(input || window, { keyCode: 13, key: 13, code: 13 });
    expect(input?.value).not.toBeNull();
    expect(await axe(container)).toHaveNoViolations();
  });
  test('should render input and change the value with other border', async () => {
    const { container } = render(
      <Input
        inputSize='xsmall'
        label='Master'
        icon='❤'
        type='card'
        border='overlap'
        defaultValue='55555555555'
        id='card'
      />,
    );
    const input = container.querySelector('input');
    fireEvent.change(input || window || window, {
      target: { value: '555555' },
    });
    expect(input?.value).not.toBeNull();
    expect(await axe(container)).toHaveNoViolations();
  });

  test('should render input and change the value with amex card', async () => {
    const { container } = render(
      <Input
        inputSize='large'
        label='Amex'
        type='card'
        border='overlap'
        id='Amex'
      />,
    );
    const input = container.querySelector('input');
    fireEvent.change(input || window || window, {
      target: { value: '37021458745698745' },
    });
    expect(input?.value).not.toBeNull();
    expect(await axe(container)).toHaveNoViolations();
  });
  test('should render input and change the value with no svg card', async () => {
    const { container } = render(
      <Input
        inputSize='small'
        label='Im the input tested'
        border='outside'
        type='card'
        defaultValue='65432165'
        id='input'
      />,
    );
    const input = container.querySelector('.input');
    fireEvent.change(input || window || window, {
      target: { value: 'aaaaaaaaaaa' },
    });
    expect(input).not.toBeNull();
    expect(await axe(container)).toHaveNoViolations();
  });
  test('should render input and change the value with no svg card no border', async () => {
    const { container } = render(
      <Input
        inputSize='xsmall'
        label='Im the input tested'
        border='bottom'
        type='card'
        icon='@'
        required
        iconRequired='!'
        defaultValue='65432165'
        id='input'
      />,
    );
    const input = container.querySelector('.input');
    fireEvent.change(input || window, { target: { value: 'aaaaaaaaaaa' } });
    fireEvent.focus(input);
    expect(input).not.toBeNull();
    expect(await axe(container)).toHaveNoViolations();
  });

  test('should render input with label', async () => {
    const { container } = render(
      <Input inputSize='default' label='Input' id='input' />,
    );
    const label = container.querySelector('.label');
    expect(label?.innerHTML).toContain('Input');
    expect(await axe(container)).toHaveNoViolations();
  });

  test('should render a simple disabled input', async () => {
    const { container } = render(
      <Input
        label='label'
        height={null}
        inputSize={null}
        disabled
        type='card'
        border='overlap'
        id='input'
      />,
    );
    expect(container).not.toBeNull();
    expect(await axe(container)).toHaveNoViolations();
  });
  test('should render a simple card input', async () => {
    const { container } = render(<Input label='card' type='card' id='card' />);
    const input = container.querySelector('input');
    fireEvent.change(input || window, { target: { value: 345 } });
    expect(input?.value).toBe('345');
    expect(await axe(container)).toHaveNoViolations();
  });
  test('should render a simple date input', async () => {
    const { container } = render(<Input label='label' type='date' id='date' />);
    const { container: div } = render(
      <Input label='label' type='datetime-local' />,
    );
    expect(container).not.toBeNull();
    expect(div).not.toBeNull();
    expect(await axe(container)).toHaveNoViolations();
  });
  test('should render a simple time input', async () => {
    const { container } = render(<Input label='label' type='time' id='time' />);
    expect(container).not.toBeNull();
    expect(await axe(container)).toHaveNoViolations();
  });
  test('should render a simple color input', async () => {
    const { container } = render(
      <Input label='label' type='color' id='color' />,
    );
    expect(container).not.toBeNull();
    expect(await axe(container)).toHaveNoViolations();
  });
  test('should render a simple phone input', async () => {
    const { container } = render(
      <Input
        label='label'
        type='phone'
        border='overlap'
        inputSize='xsmall'
        id='phone'
      />,
    );
    const input = container.querySelector('input');
    fireEvent.change(input || window, { target: { value: 3654 } });
    fireEvent.change(input || window, { target: { value: 454 } });
    fireEvent.change(input || window, { target: { value: 5654 } });
    fireEvent.select(input);
    expect(input?.value).not.toBe(345);

    expect(container).not.toBeNull();
    expect(await axe(container)).toHaveNoViolations();
  });
  test('should render simple input', async () => {
    const { container } = render(
      <Input
        label={null}
        border='overlap'
        type='card'
        required
        icon='card'
        iconColor='#000'
        placeholder='Placeholder'
        id='card'
      />,
    );
    expect(container).not.toBeNull();
    expect(await axe(container)).toHaveNoViolations();
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
