/* eslint-env jest */

import React from 'react';
import { render, axe, fireEvent } from '../../../test-utils';
import { SelectItem, Option } from '..';

describe('<SelectItem/> component', () => {
  test('should render properly', async () => {
    const { container } = render(
      <SelectItem label='Names' id='names'>
        <Option value='Juan'>Juan</Option>
      </SelectItem>
    );
    expect(container).toBeVisible();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should render with all not default props ', () => {
    const mockFn = jest.fn();
    const { container } = render(
      <SelectItem
        label='Names'
        id='names'
        border='outside'
        borderColor='blue'
        darkDecoration
        family='Arial'
        inputSize='large'
        isValid
        onChange={mockFn}
        padding='0 0'
        placeholder='Testing'
        prefix={<div>prefix</div>}
        suffix={<div>suffix</div>}
        radius='lg'
        value='Juan'
      >
        <Option value='Juan'>Juan</Option>
      </SelectItem>
    );
    expect(container).toBeVisible();
  });
  test('should call function', () => {
    const mock = jest.fn(),
      mockFn = jest.fn();
    const { container, getByText } = render(
      <SelectItem label='Names' id='names' onChange={mock} suffix={<div>suffix</div>}>
        <Option value='Juan'>Juan</Option>
        <hr />
        <Option value='Jorge' handleChange={mockFn}>
          Jorge
        </Option>
      </SelectItem>
    );
    const input = container.querySelector('input');
    fireEvent.focus(input);
    expect(getByText('Jorge')).toBeVisible();
    fireEvent.click(getByText('Jorge'));
    fireEvent.click(getByText('suffix'));
    fireEvent.click(getByText('Juan'));
    fireEvent.change(input, { target: { value: 'Juan' } });
    expect(mock).toHaveBeenCalled();
    expect(input.value).toEqual('Juan');
  });
  describe('<Option/> component', () => {
    test('should render properly', async () => {
      const { container } = render(<Option value='Juan'>Juan</Option>);
      expect(container).toBeVisible();
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
