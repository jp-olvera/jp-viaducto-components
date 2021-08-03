/* eslint-env jest */

import React from 'react';
import { render, fireEvent, axe } from '../../../test-utils';
import { Breadcrums, Breadcrum } from '..';

describe('<Breadcrums/>', () => {
  test('should render empty component', async () => {
    const { container } = render(
      <Breadcrums
        family={undefined}
        fontSize={undefined}
        separatorSpacing={undefined}
      >
        {null}
      </Breadcrums>,
    );
    expect(container).toBeInTheDocument();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('Should all children be visible', async () => {
    const { container, getByText } = render(
      <Breadcrums separatorSpacing='nullable'>
        <Breadcrum label='1' href='#' active />
        <Breadcrum label='2' href='#' />
      </Breadcrums>,
    );
    expect(getByText('1')).toBeInTheDocument();
    expect(getByText('2')).toBeInTheDocument();
    expect(await axe(container)).toHaveNoViolations();
  });
  test('Should call function when clicking on a option with onClick', async () => {
    const myFunc = jest.fn();
    const { container, getByText } = render(
      <Breadcrums>
        <Breadcrum label='1' href='#' />;
        <Breadcrum label='2' onClick={myFunc} />;
      </Breadcrums>,
    );

    fireEvent.click(getByText('2'));
    expect(myFunc).toBeCalledTimes(1);
    expect(await axe(container)).toHaveNoViolations();
  });
  test('Should check the anchor ref is correct', async () => {
    const { container, getByRole } = render(
      <Breadcrums>
        <Breadcrum label='Go back' href='https://google.com' />;
      </Breadcrums>,
    );
    expect(getByRole('link')).toHaveAttribute('href', 'https://google.com');
    expect(await axe(container)).toHaveNoViolations();
  });
  test('should hide options 2 and 3 and show 3 dots instead', async () => {
    const { container, queryByText, getByText } = render(
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
    expect(await axe(container)).toHaveNoViolations();
  });
  test('should show options 2 and 3 after clicking on the 3 dots', async () => {
    const { container, getByText } = render(
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
    expect(await axe(container)).toHaveNoViolations();
  });
  test('should show options with active attribute', async () => {
    const { container } = render(
      <Breadcrums family='Roboto' separatorSpacing='aaaa'>
        <Breadcrum label='1' href='https://google.com' />;
        <Breadcrum label='2' href='https://google.com' />;
        <Breadcrum label='3' href='https://google.com' />;
        <Breadcrum label='4' href='https://google.com' />;
        <Breadcrum label='5' href='https://google.com' />;
        <Breadcrum label='6' href='https://google.com' />;
      </Breadcrums>,
    );
    expect(container).toBeInTheDocument();
    expect(await axe(container)).toHaveNoViolations();
  });
});
