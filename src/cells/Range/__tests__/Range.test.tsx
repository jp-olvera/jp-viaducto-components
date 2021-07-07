/* eslint-env jest */

import React from 'react';
import { render, fireEvent } from '../../../test-utils';
import { Range } from '..';
import '@testing-library/jest-dom/extend-expect';

describe('<Range/> component', () => {
  const mockFn = jest.fn();

  test('should render properly', () => {
    const { getByText } = render(<Range min={0} max={100} />);
    expect(getByText('0')).toBeInTheDocument();
  });
  test('should render with props', () => {
    const { getByText } = render(
      <Range
        min={50}
        max={100}
        color='hshshs'
        fontSize='lg'
        family={null}
        textColor='info'
        double={false}
      />,
    );
    expect(getByText('50')).toBeInTheDocument();
  });
  test('should render the max value', () => {
    const { getByText } = render(
      <Range
        min={50}
        max={100}
        color='oosaoa'
        fontSize='lg'
        family='Fira Code'
        textColor='info'
        double
      />,
    );
    expect(getByText('50')).toBeInTheDocument();
  });
  test('should change the input double range value', () => {
    const { container } = render(
      <Range
        min={0}
        max={2000}
        color='#dd5588'
        fontSize='sm'
        textColor='info'
        double
        onChange={mockFn}
      />,
    );
    const slider = container.querySelectorAll('input')[1];
    fireEvent.change(slider, { target: { value: 39 } });
    expect(slider.value).toBe('39');
    expect(mockFn).toHaveBeenCalled();
  });
  test('should change the input single range value', () => {
    const { container } = render(
      <Range
        min={0}
        max={10}
        color='#dd5588'
        fontSize='sm'
        textColor='info'
        double={false}
        onChange={mockFn}
      />,
    );
    const slider = container.querySelector('input');
    fireEvent.change(slider || window, { target: { value: 5 } });
    expect(slider?.value).toBe('5');
    expect(mockFn).toHaveBeenCalled();
  });
});
