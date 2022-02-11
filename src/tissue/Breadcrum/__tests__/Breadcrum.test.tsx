/* eslint-env jest */

import React from 'react';
import { render, fireEvent, axe } from '../../../test-utils';
import { Breadcrums, Breadcrum } from '..';

describe('<Breadcrums/>', () => {
  test('Should all children be visible', async () => {
    const { container, getByText } = render(
      <Breadcrums separatorSpacing='none'>
        <Breadcrum href='#'>
          1
        </Breadcrum>
        <Breadcrum href='#' active >
          2
        </Breadcrum>
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
        <Breadcrum href='#' >
          1
        </Breadcrum>
        <Breadcrum href='#' active  onClick={myFunc}>
          2
        </Breadcrum>
      </Breadcrums>,
    );

    fireEvent.click(getByText('2'));
    expect(myFunc).toBeCalledTimes(1);
    expect(await axe(container)).toHaveNoViolations();
  });
  test('Should check the anchor ref is correct', async () => {
    const { container, getByRole } = render(
      <Breadcrums>
        <Breadcrum href='https://google.com' >
        Go back
        </Breadcrum>

      </Breadcrums>,
    );
    expect(getByRole('link')).toHaveAttribute('href', 'https://google.com');
    expect(await axe(container)).toHaveNoViolations();
  });
  test('should show 4 elements and hide options 4 and 5 and show 3 dots instead', async () => {
    const { container, queryByText, getByText } = render(
      <Breadcrums>
        <Breadcrum href='https://google.com'>1</Breadcrum>
        <Breadcrum href='https://google.com'>2</Breadcrum>
        <Breadcrum href='https://google.com'>3</Breadcrum>
        <Breadcrum href='https://google.com'>4</Breadcrum>
        <Breadcrum href='https://google.com'>5</Breadcrum>
        <Breadcrum href='https://google.com'>6</Breadcrum>
      </Breadcrums>,
    );

    expect(queryByText('4')).toBeNull();
    expect(queryByText('5')).toBeNull();
    expect(getByText('...')).toBeInTheDocument();
    expect(await axe(container)).toHaveNoViolations();
  });
  test('should show 2 elements and hide options 2 and 3 and show 3 dots instead', async () => {
    const { container, queryByText, getByText } = render(
      <Breadcrums itemsToShow={2}>
        <Breadcrum href='https://google.com'>1</Breadcrum>
        <Breadcrum href='https://google.com'>2</Breadcrum>
        <Breadcrum href='https://google.com'>3</Breadcrum>
        <Breadcrum href='https://google.com'>6</Breadcrum>
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
        <Breadcrum href='https://google.com'>1</Breadcrum>
        <Breadcrum href='https://google.com'>2</Breadcrum>
        <Breadcrum href='https://google.com'>3</Breadcrum>
        <Breadcrum href='https://google.com'>4</Breadcrum>
        <Breadcrum href='https://google.com'>5</Breadcrum>
        <Breadcrum href='https://google.com'>6</Breadcrum>
      </Breadcrums>,
    );

    fireEvent.click(getByText('...'));

    expect(getByText('2')).toBeInTheDocument();
    expect(getByText('3')).toBeInTheDocument();
    expect(await axe(container)).toHaveNoViolations();
  });
  test('should show options with active attribute', async () => {
    const { container } = render(
      <Breadcrums family='Roboto' separatorSpacing='sm'>
        <Breadcrum href='https://google.com'>1</Breadcrum>
        <Breadcrum href='https://google.com'>2</Breadcrum>
        <Breadcrum href='https://google.com'>3</Breadcrum>
        <Breadcrum href='https://google.com'>4</Breadcrum>
        <Breadcrum href='https://google.com'>5</Breadcrum>
        <Breadcrum href='https://google.com'>6</Breadcrum>
      </Breadcrums>,
    );
    expect(container).toBeInTheDocument();
    expect(await axe(container)).toHaveNoViolations();
  });
});
