/* eslint-env jest */

import React from 'react';

import { render, screen, fireEvent } from '../../../test-utils';
import { Switch } from '..';

describe('<Switch/>', () => {
  test('should render properly', () => {
    render(<Switch id='Switch' inputSize='large' />);
    expect(screen.getByTestId('Switch')).toBeVisible();
  });

  test('should be selected', () => {
    const { getByTestId } = render(<Switch id='Switch' />);
    const input = getByTestId('Switch');
    const selector = input.querySelector('input');
    fireEvent.click(selector || window);
    expect(selector?.checked).toEqual(true);
  });

  test('should be not checked', () => {
    const { getByTestId } = render(<Switch id='switch1' />);
    const input = getByTestId('switch1');
    const selector = input.querySelector('input');
    expect(selector?.checked).toEqual(false);
    fireEvent.click(selector || window);
    expect(selector?.checked).toEqual(true);
  });

  test('should be disabled', () => {
    const { getByTestId } = render(
      <Switch id='Switch1' inputSize='small' disabled />,
    );
    expect(
      getByTestId('Switch1').querySelector('input')?.hasAttribute('disabled'),
    ).toEqual(true);
  });

  test('should not be disabled', () => {
    const { getByTestId } = render(
      <Switch id='Switch1' inputSize='default' disabled={false} />,
    );
    expect(
      getByTestId('Switch1').querySelector('input')?.hasAttribute('disabled'),
    ).toEqual(false);
  });
  test('should fire hover event', () => {
    const { getByTestId, container } = render(
      <Switch disabled={false} circular={false} />,
    );
    fireEvent.mouseOver(getByTestId('slider'));
    expect(container).toMatchSnapshot();
  });
});
