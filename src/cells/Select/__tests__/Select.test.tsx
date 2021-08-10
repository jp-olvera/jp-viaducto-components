/* eslint-env jest */

import React from 'react';
import { render, fireEvent } from '../../../test-utils';
import { Select } from '..';

describe('<Select/>', () => {
  const options = ['option1', 'option2', 'option3', 'option4'];
  test('should render default select', () => {
    const { container } = render(
      <Select multiple labelPosition='overlap'>
        <option value='B'>B</option>
      </Select>,
    );
    expect(container).toBeInTheDocument();
  });
  test('should render properly with default attributes', () => {
    const { container } = render(
      <Select multiple inputSize='large' labelPosition='overlap'>
        <option value='A'>A</option>
      </Select>,
    );
    expect(container).toBeInTheDocument();
  });
  test('should render properly with custom attributes', () => {
    const { container } = render(
      <Select
        inputSize='large'
        border='all'
        fontSize='lg'
        fontFamily='Arial'
        background='blue'
        color='white'
        radius='md'
        label='Title'
        labelPosition='overlap'
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
          border='all'
          fontSize='lg'
          fontFamily='Arial'
          background='blue'
          color='white'
          radius='sm'
        >
          <option value='B'>B</option>
        </Select>,
      );
      expect(container).toBeInTheDocument();
    });
    test('should render with lg size', () => {
      const { container } = render(
        <Select
          inputSize='default'
          border='all'
          labelPosition='overlap'
          fontSize='lg'
          fontFamily='Arial'
          background='blue'
          color='white'
          radius='lg'
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
        border='all'
        height={undefined}
        fontSize='lg'
        fontFamily='Arial'
        background='blue'
        color='white'
        label='a'
        labelPosition='overlap'
      >
        <option value='B'>B</option>
      </Select>,
    );
    expect(container).toBeInTheDocument();
  });
  test('should show the options', () => {
    const { getByTestId, queryByText } = render(
      <Select
        radius='none'
        inputSize='small'
        height='2rem'
        label='a'
        labelPosition='overlap'
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
        radius='md'
        inputSize='small'
        label='Title'
        labelPosition='outside'
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
