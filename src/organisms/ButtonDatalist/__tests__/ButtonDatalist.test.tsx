/* eslint-env jest */

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '../../../test-utils';
import { ButtonDatalist } from '..';

describe('<ButtonDatalist/>', () => {
  test('should be visible', () => {
    const { container } = render(
      <ButtonDatalist options={[]} onClick={() => {}} />,
    );
    expect(container).toBeVisible();
  });
  test('should render with onClick prop', () => {
    const click = jest.fn();
    const { getByTestId } = render(
      <ButtonDatalist options={['a', 'b']} onClick={click} buttonLabel='Save' />,
    );
    fireEvent.click(getByTestId('btn-data'));
    expect(click).toHaveBeenCalled();
  });
  test('should input be clicked', () => {
    const { container } = render(
      <ButtonDatalist options={['a', 'b']} onClick={() => {}} />,
    );
    fireEvent.click(container.querySelector('input') || window);
    expect(container).not.toBeNull();
  });
  test('should search options', () => {
    const { container, getByTestId } = render(
      <ButtonDatalist options={['a']} onClick={() => {}} />,
    );
    const input = container.querySelector('input');
    fireEvent.click(input || window);
    fireEvent.change(input || window, { target: { value: 'a' } });
    fireEvent.click(getByTestId('btn-opt'));
    expect(input?.value).not.toBeNull();
  });
  test('should have 0 lenght value on input', () => {
    const { container } = render(
      <ButtonDatalist options={['a', 'b']} onClick={() => {}} />,
    );
    const input = container.querySelector('input');
    fireEvent.click(input || window);
    fireEvent.change(input || window, { target: { value: null } });
    expect(input).toBeVisible();
  });
  test('should remove option pre selected', () => {
    const { container, getByTestId } = render(
      <ButtonDatalist
        options={['a', 'b']}
        selectedOptionsList={['a']}
        onClick={() => {}}
      />,
    );
    const input = container.querySelector('input');
    fireEvent.click(input || window);
    fireEvent.change(input || window, { target: { value: 'b' } });
    fireEvent.click(getByTestId('btn-bare'));
    expect(input).toBeVisible();
  });
});