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
        size='sm'
        border={{ top: '1px solid red' }}
        height='2rem'
        fontSize='lg'
        fontFamily='Arial'
        background='blue'
        color='white'
        radius={2}
      >
        <option value='B'>B</option>
      </Select>,
    );
    expect(container).toBeInTheDocument();
  });
  test('should render properly with some custom setting', () => {
    const { container } = render(
      <Select
        size='md'
        border={{ top: '1px solid red' }}
        height={undefined}
        fontSize='lg'
        fontFamily='Arial'
        background='blue'
        color='white'
        radius={2}
      >
        <option value='B'>B</option>
      </Select>,
    );
    expect(container).toBeInTheDocument();
  });
  test('should show the options', () => {
    const { getByTestId, queryByText } = render(
      <Select radius='2rem' size='sm' height={undefined}>
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
