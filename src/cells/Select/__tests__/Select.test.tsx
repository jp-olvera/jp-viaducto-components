/* eslint-env jest */

import React from 'react';
import { render, fireEvent } from '../../../test-utils';
import { Select } from '..';

describe('<Select/>', () => {
  const options = ['option1', 'option2', 'option3', 'option4'];
  test('should render properly with default attributes', () => {
    const { container } = render(
      <Select multiple>
        <option value='A'>A</option>
      </Select>,
    );
    expect(container).toBeInTheDocument();
  });
  test('should render properly with custom attributes', () => {
    const { container } = render(
      <Select
        inputSize='large'
        border={{ top: '1px solid red' }}
        fontSize='lg'
        fontFamily='Arial'
        background='blue'
        color='white'
        radius={2}
        titleProps={{ label: 'a', position: 'in' }}
      >
        <option value='B'>B</option>
      </Select>,
    );
    expect(container).toBeInTheDocument();
  });
  describe('without title with size prop', () => {
    test('should render with sm size', () => {
      const { container } = render(
        <Select
          inputSize='small'
          border={{ top: '1px solid red' }}
          fontSize='lg'
          fontFamily='Arial'
          background='blue'
          color='white'
          radius={2}
          titleProps={null}
        >
          <option value='B'>B</option>
        </Select>,
      );
      expect(container).toBeInTheDocument();
    });
    test('should render with lg size', () => {
      const { container } = render(
        <Select
          inputSize='aaaa'
          border={{ top: '1px solid red' }}
          fontSize='lg'
          fontFamily='Arial'
          background='blue'
          color='white'
          radius={2}
          titleProps={null}
        >
          <option value='B'>B</option>
        </Select>,
      );
      expect(container).toBeInTheDocument();
    });
  });
  test('should render properly with some custom setting', () => {
    const { container } = render(
      <Select
        inputSize='xsmall'
        border={{ top: '1px solid red' }}
        height={undefined}
        fontSize='lg'
        fontFamily='Arial'
        background='blue'
        color='white'
        radius={2}
        titleProps={{ label: 'a', position: 'on' }}
      >
        <option value='B'>B</option>
      </Select>,
    );
    expect(container).toBeInTheDocument();
  });
  test('should show the options', () => {
    const { getByTestId, queryByText } = render(
      <Select
        radius='2rem'
        inputSize='small'
        height='2rem'
        titleProps={{ label: 'a', position: 'over' }}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Select>,
    );
    const select = getByTestId('select');
    fireEvent.click(select);
    expect(queryByText('option1')).toBeVisible();
  });
  test('should render select component with style props', () => {
    const { getByTestId, queryByText } = render(
      <Select
        radius='2rem'
        inputSize='small'
        titleProps={{ label: 'a', position: 'in' }}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Select>,
    );
    const select = getByTestId('select');
    fireEvent.click(select);
    expect(queryByText('option1')).toBeVisible();
  });
});
