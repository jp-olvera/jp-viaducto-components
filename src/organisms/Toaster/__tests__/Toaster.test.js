/* eslint-env jest */

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '../../../test-utils';
import { Toaster } from '..';

describe('<Toaster/>', () => {
  test('should be visible', () => {
    render(<Toaster text='Mensaje 1' active top={false} right={false} elevation={3} />);
    expect(screen.getByText('Mensaje 1')).toBeVisible();
  });
  test('click close button should close the toaster', () => {
    render(<Toaster text='Mensaje 2' active right={false} type='danger' elevation={3} />);
    fireEvent.click(screen.getByTestId('close-button'));
    expect(screen.getByText('Mensaje 2')).not.toBeVisible();
  });
  test('render with default props', () => {
    render(<Toaster text='Mensaje 3' type='noExist' />);
    fireEvent.click(screen.getByTestId('close-button'));
    expect(screen.getByText('Mensaje 3')).not.toBeVisible();
  });
});
