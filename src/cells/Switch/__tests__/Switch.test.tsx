/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-env jest */

import React from 'react';

import { render, screen, fireEvent, axe } from '../../../test-utils';
import { Switch } from '..';

describe('<Switch/>', () => {
  test('should render properly', async () => {
    const { container } = render(
      <label htmlFor='Switch'>
        Swicth
        <Switch id='Switch' inputSize='large' />
      </label>
    );
    expect(screen.getByTestId('Switch')).toBeVisible();
    expect(await axe(container)).toHaveNoViolations();
  });

  test('should be selected', async () => {
    const { container, getByTestId } = render(
      <label htmlFor='Switch'>
        Swicth
        <Switch id='Switch' />
      </label>
    );
    const input = getByTestId('Switch');
    const selector = input.querySelector('input');
    fireEvent.click(selector || window);
    expect(selector?.checked).toEqual(true);
    expect(await axe(container)).toHaveNoViolations();
  });

  test('should be not checked', async () => {
    const { container, getByTestId } = render(
      <label htmlFor='switch1'>
        Swicth
        <Switch id='switch1' />
      </label>
    );
    const input = getByTestId('switch1');
    const selector = input.querySelector('input');
    expect(selector?.checked).toEqual(false);
    fireEvent.click(selector || window);
    expect(selector?.checked).toEqual(true);
    expect(await axe(container)).toHaveNoViolations();
  });

  test('should be disabled', async () => {
    const { container, getByTestId } = render(
      <label htmlFor='Switch1'>
        Switch
        <Switch id='Switch1' inputSize='small' disabled />,
      </label>
    );
    expect(getByTestId('Switch1').querySelector('input')?.hasAttribute('disabled')).toEqual(true);
    expect(await axe(container)).toHaveNoViolations();
  });

  test('should not be disabled', async () => {
    const mock = jest.fn();
    const { container, getByTestId } = render(
      <label htmlFor='Switch1'>
        Swicth
        <Switch id='Switch1' inputSize='default' disabled={false} onChange={mock} />,
      </label>
    );
    fireEvent.click(getByTestId('Switch1').querySelector('input'));
    expect(getByTestId('Switch1').querySelector('input')?.hasAttribute('disabled')).toEqual(false);
    expect(await axe(container)).toHaveNoViolations();
  });
  test('should fire hover event', async () => {
    const { getByTestId, container } = render(
      <label htmlFor='Switch1'>
        Switch
        <Switch disabled={false} circular={false} id='Switch1' />,
      </label>
    );
    fireEvent.mouseOver(getByTestId('slider'));
    expect(container).toMatchSnapshot();
    expect(await axe(container)).toHaveNoViolations();
  });
});
