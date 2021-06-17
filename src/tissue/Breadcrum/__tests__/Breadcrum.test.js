/* eslint-env jest */

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '../../../test-utils';
import { Breadcrums, Breadcrum } from '..';

describe('<Breadcrums/>', () => {
  test('should render empty component', () => {
    const { container } = render(
      <Breadcrums family={null} fontSize={null} separatorSpacing={null} />,
    );
    expect(container).toBeInTheDocument();
  });
  test('Should all children be visible', () => {
    const { getByText } = render(
      <Breadcrums>
        <Breadcrum label='1' href='#' />;
        <Breadcrum label='2' href='#' />;
      </Breadcrums>,
    );
    expect(getByText('1')).toBeInTheDocument();
    expect(getByText('2')).toBeInTheDocument();
  });
  test('Should call function when clicking on a option with onClick', () => {
    const myFunc = jest.fn();
    const { getByText } = render(
      <Breadcrums>
        <Breadcrum label='1' href='#' />;
        <Breadcrum label='2' onClick={myFunc} />;
      </Breadcrums>,
    );

    fireEvent.click(getByText('2'));
    expect(myFunc).toBeCalledTimes(1);
  });
  test('Should check the anchor ref is correct', () => {
    const { getByRole } = render(
      <Breadcrums>
        <Breadcrum label='Go back' href='https://google.com' />;
      </Breadcrums>,
    );
    expect(getByRole('link')).toHaveAttribute('href', 'https://google.com');
  });
  test('should hide options 2 and 3 and show 3 dots instead', () => {
    const { queryByText, getByText } = render(
      <Breadcrums>
        <Breadcrum label='1' href='https://google.com' />;
        <Breadcrum label='2' href='https://google.com' />;
        <Breadcrum label='3' href='https://google.com' />;
        <Breadcrum label='4' href='https://google.com' />;
        <Breadcrum label='5' href='https://google.com' />;
        <Breadcrum label='6' href='https://google.com' />;
      </Breadcrums>,
    );

    expect(queryByText('2')).toBeNull();
    expect(queryByText('3')).toBeNull();
    expect(getByText('...')).toBeInTheDocument();
  });
  test('should show options 2 and 3 after clicking on the 3 dots', () => {
    const { getByText } = render(
      <Breadcrums>
        <Breadcrum label='1' href='https://google.com' />;
        <Breadcrum label='2' href='https://google.com' />;
        <Breadcrum label='3' href='https://google.com' />;
        <Breadcrum label='4' href='https://google.com' />;
        <Breadcrum label='5' href='https://google.com' />;
        <Breadcrum label='6' href='https://google.com' />;
      </Breadcrums>,
    );

    fireEvent.click(getByText('...'));

    expect(getByText('2')).toBeInTheDocument();
    expect(getByText('3')).toBeInTheDocument();
  });
  test('should show options with active attribute', () => {
    const { container } = render(
      <Breadcrums family='Roboto' separatorSpacing={null}>
        <Breadcrum label='1' href='https://google.com' />;
        <Breadcrum label='2' href='https://google.com' />;
        <Breadcrum label='3' href='https://google.com' />;
        <Breadcrum label='4' href='https://google.com' />;
        <Breadcrum label='5' href='https://google.com' />;
        <Breadcrum label='6' href='https://google.com' />;
      </Breadcrums>,
    );
    expect(container).toBeInTheDocument();
  });
});
