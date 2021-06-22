/* eslint-env jest */

import React from 'react';
import { render, fireEvent } from '../../../test-utils';
import '@testing-library/jest-dom/extend-expect';
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
        size='large'
        border={{ top: '1px solid red' }}
        fontSize='lg'
        fontFamily='Arial'
        background='blue'
        color='white'
        radius={2}
        title={{ label: 'a', position: 'in' }}
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
          size='small'
          border={{ top: '1px solid red' }}
          fontSize='lg'
          fontFamily='Arial'
          background='blue'
          color='white'
          radius={2}
          title={null}
        >
          <option value='B'>B</option>
        </Select>,
      );
      expect(container).toBeInTheDocument();
    });
    test('should render with lg size', () => {
      const { container } = render(
        <Select
          size='aaaa'
          border={{ top: '1px solid red' }}
          fontSize='lg'
          fontFamily='Arial'
          background='blue'
          color='white'
          radius={2}
          title={null}
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
        size='xsmall'
        border={{ top: '1px solid red' }}
        height={undefined}
        fontSize='lg'
        fontFamily='Arial'
        background='blue'
        color='white'
        radius={2}
        title={{ label: 'a', position: 'on' }}
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
        size='small'
        height='2rem'
        title={{ label: 'a', position: 'over' }}
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
      <Select radius='2rem' size='small' title={{ label: 'a', position: 'in' }}>
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
