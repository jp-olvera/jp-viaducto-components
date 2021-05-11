import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '../../../test-utils';
import { Toaster } from '..';

describe('<Toaster/>', () => {
  test('should be visible', () => {
    render(<Toaster text="Mensaje" active />);
    expect(screen.getByText('Mensaje')).toBeVisible();
  });
  test('click close button should close the toaster', () => {
    render(<Toaster text="Mensaje" active />);
    fireEvent.click(screen.getByTestId('close-button'));
    expect(screen.getByText('Mensaje')).not.toBeVisible();
  });
});
