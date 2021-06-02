/* eslint-env jest */

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '../../../test-utils';
import { Breadcrums } from '..';

describe('<Breadcrums/>', () => {
  test('should render empty component', () => {
    const { container } = render(
      <Breadcrums family={null} fontSize={null} separatorSpacing={null} />,
    );
    expect(container).toBeInTheDocument();
  });
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
    const { getByRole } = render(<Breadcrums options={options} />);
    expect(getByRole('link')).toHaveAttribute('href', 'https://google.com');
  });
  test('should hide options 2 and 3 and show 3 dots instead', () => {
    const options = [
      { label: '1', href: 'https://google.com' },
      { label: '2', href: 'https://google.com' },
      { label: '3', href: 'https://google.com' },
      { label: '4', href: 'https://google.com' },
      { label: '5', href: 'https://google.com' },
      { label: '6', href: 'https://google.com' },
    ];
    const { queryByText, getByText } = render(
      <Breadcrums options={options} fontSize='' />,
    );

    expect(queryByText('2')).toBeNull();
    expect(queryByText('3')).toBeNull();
    expect(getByText('...')).toBeInTheDocument();
  });
  test('should show options 2 and 3 after clicking on the 3 dots', () => {
    const options = [
      { label: '1', href: 'https://google.com' },
      { label: '2', href: 'https://google.com' },
      { label: '3', href: 'https://google.com' },
      { label: '4', href: 'https://google.com' },
      { label: '5', href: 'https://google.com' },
      { label: '6', href: 'https://google.com' },
    ];
    const { getByText } = render(
      <Breadcrums options={options} separatorSpacing='xxxxxxxxxxl' />,
    );
    fireEvent.click(getByText('...'));

    expect(getByText('2')).toBeInTheDocument();
    expect(getByText('3')).toBeInTheDocument();
  });
  test('should show options with active attribute', () => {
    const options = [
      { label: '1', href: 'https://google.com', active: true },
      { label: '2', href: 'https://google.com', active: true },
      { label: '3', href: 'https://google.com', active: true },
      { label: '4', href: 'https://google.com', active: true },
      { label: '5', href: 'https://google.com', active: true },
      { label: '6', href: 'https://google.com', active: true },
    ];
    const { container } = render(
      <Breadcrums options={options} family='Roboto' separatorSpacing={null} />,
    );
    expect(container).toBeInTheDocument();
  });
});
