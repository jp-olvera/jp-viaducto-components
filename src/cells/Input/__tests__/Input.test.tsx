/* eslint-env jest */

import React from 'react';
import { render, axe, fireEvent } from '../../../test-utils';
import { ArrowLeft, ArrowRight } from 'phosphor-react';
import { Input } from '..';

describe('<Input/>', () => {
  test('should render properly', async () => {
    const { container, getByTestId } = render(<Input id='testing' label='Axe testing' />);
    const input = getByTestId('testing').querySelector('input');
    expect(getByTestId('testing')).toBeVisible();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    const res = await axe(input);
    expect(res).toHaveNoViolations();
  });
  test('should render with suffix', async () => {
    const { container } = render(
      <Input id='testing' label='Axe testing' suffix={<ArrowRight />} darkDecoration />
    );
    expect(container).toBeVisible();
  });
  test('should render with preffix and outside border', async () => {
    const { container } = render(
      <Input
        id='testing'
        label='Axe testing'
        preffix={<ArrowLeft />}
        border='none'
        inputSize='xsmall'
        darkDecoration
      />
    );
    expect(container).toBeVisible();
  });
  test('should focus and blur on input', async () => {
    const { container } = render(<Input id='testing' color='red' />);
    const input = container.querySelector('input');
    input.focus();
    fireEvent.change(input, { target: { value: 'Test' } });
    fireEvent.blur(input);
    expect(input.value).toBe('Test');
  });
  test('should render disabled input', async () => {
    const { container } = render(
      <Input id='testing' backgroundColor='red' disabled border='overlap' label='disabled' />
    );
    const input = container.querySelector('input');
    expect(input.disabled).toBe(true);
  });
  test('should render input without background', async () => {
    const { container } = render(
      <Input id='testing' backgroundColor={null} border='overlap' preffix={null} />
    );
    const input = container.querySelector('input');
    expect(input).toBeVisible();
  });
  test('should render input with bottom border', async () => {
    const { container } = render(
      <Input id='testing' borderColor='red' border='bottom' label='Default label' />
    );
    const input = container.querySelector('input');
    expect(input).toBeVisible();
  });
  test('should render valid input with none border', async () => {
    const { container } = render(
      <Input id='testing' isValid border='none' label='Default label' />
    );
    const input = container.querySelector('input');
    expect(input).toBeVisible();
  });
  test('should render  invalid input with none border', async () => {
    const { container } = render(
      <Input id='testing' isValid={false} border='none' label='Default label' />
    );
    const input = container.querySelector('input');
    expect(input).toBeVisible();
  });
  test('should render inputs with different sizes', async () => {
    const { container } = render(
      <>
        <Input
          id='testing'
          isValid={false}
          radius='sm'
          inputSize='small'
          border='overlap'
          label='Default label'
        />
        <Input
          id='testing2'
          isValid={false}
          border='none'
          inputSize='large'
          label='Default label 2'
        />
        <Input id='testing3' isValid={false} border='none' label='Default label 3' />
      </>
    );
    expect(container).toBeVisible();
  });
});
