/* eslint-env jest */

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '../../../test-utils';
import { Breadcrums } from '..';

describe('<Breadcrums/>', () => {
  test('Should all children be visible', () => {
    const options = [
      { label: '1', href: '#' },
      {
        label: '2',
        href: '#',
      },
    ];
    const { getByText } = render(<Breadcrums options={options} />);
    expect(getByText('1')).toBeInTheDocument();
    expect(getByText('2')).toBeInTheDocument();
  });
  test('Should call function when clicking on a option with onClick', () => {
    const myFunc = jest.fn();
    const options = [
      { label: '1', href: '#' },
      {
        label: '2',
        onClick: myFunc,
      },
    ];
    const { getByText } = render(<Breadcrums options={options} />);
    fireEvent.click(getByText('2'));
    expect(myFunc).toBeCalledTimes(1);
  });
  test('Should check the anchor ref is correct', () => {
    const options = [{ label: 'Go back', href: 'https://google.com' }];
    const { getByText } = render(<Breadcrums options={options} />);
    expect(getByText('Go back').href).toBe('https://google.com');
  });
  test('should options 2 and 3 be hidden', () => {
    const options = [
      { label: 'Go back', href: 'https://google.com' },
      { label: '2', href: 'https://google.com' },
      { label: '3', href: 'https://google.com' },
      { label: 'Go back', href: 'https://google.com' },
      { label: 'Go back', href: 'https://google.com' },
      { label: 'Go back', href: 'https://google.com' },
    ];
    const { getByText } = render(<Breadcrums options={options} />);

    expect(getByText('2')).not.toBeInTheDocument();
    expect(getByText('3')).not.toBeInTheDocument();
  });
});
