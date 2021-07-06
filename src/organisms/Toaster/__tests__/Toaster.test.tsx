/* eslint-env jest */

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '../../../test-utils';
import { Toaster } from '..';
import { getEnteringTranslate, getExitingTranslate } from '../StyledToaster';

describe('<Toaster/>', () => {
  test('should render default toaster properly', () => {
    render(<Toaster elevation={3}>Mensaje 1</Toaster>);
    expect(screen.getByText('Mensaje 1')).toBeVisible();
  });

  test('should call onDismiss function when clicking close button', () => {
    const onDismiss = jest.fn();
    render(
      <Toaster type='danger' elevation={3} onDismiss={onDismiss}>
        Mensaje 2
      </Toaster>,
    );
    fireEvent.click(screen.getByTestId('close-button'));
    expect(onDismiss).toBeCalledTimes(1);
  });

  test('should render danger toaster properly', () => {
    render(
      <Toaster elevation={3} type='danger'>
        Mensaje 1
      </Toaster>,
    );
    expect(screen.getByText('Mensaje 1')).toBeVisible();
  });
  test('should render warning toaster properly', () => {
    render(
      <Toaster elevation={3} type='warning'>
        Mensaje 1
      </Toaster>,
    );
    expect(screen.getByText('Mensaje 1')).toBeVisible();
  });
  test('should render info toaster properly', () => {
    render(
      <Toaster elevation={3} type='info'>
        Mensaje 1
      </Toaster>,
    );
    expect(screen.getByText('Mensaje 1')).toBeVisible();
  });

  test('should render with entering transition state', () => {
    render(
      <Toaster
        elevation={3}
        type='info'
        placement='top-right'
        transitionState='entering'
      >
        Mensaje 1
      </Toaster>,
    );
    expect(screen.getByText('Mensaje 1')).toBeVisible();
  });
  test('should render with entered transition state', () => {
    render(
      <Toaster
        elevation={3}
        type='info'
        placement='top-left'
        transitionState='entered'
      >
        Mensaje 1
      </Toaster>,
    );
    expect(screen.getByText('Mensaje 1')).toBeVisible();
  });
  test('should not be visible with exiting transition state', () => {
    render(
      <Toaster
        elevation={3}
        type='info'
        placement='top-left'
        transitionState='exiting'
      >
        Mensaje 1
      </Toaster>,
    );
    expect(screen.getByText('Mensaje 1')).not.toBeVisible();
  });
  test('should not be visible with exited transition state', () => {
    render(
      <Toaster
        elevation={3}
        type='info'
        placement='top-center'
        transitionState='exited'
      >
        Mensaje 1
      </Toaster>,
    );
    expect(screen.getByText('Mensaje 1')).not.toBeVisible();
  });

  test('should render with default props', () => {
    const { container } = render(
      <Toaster type='thisShouldFallInTheDefault'>Mensaje 3</Toaster>,
    );
    expect(container).not.toBeNull();
  });
  describe('placement functions', () => {
    test('should return data from getEnteringTranslate', () => {
      expect(getEnteringTranslate('top-center')).not.toBeNull();
    });
    test('should return data from getExitingTranslate', () => {
      expect(getExitingTranslate('bottom-center')).not.toBeNull();
    });
  });
});
