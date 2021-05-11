import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '../../../test-utils';
import { Notification } from '..';

describe('<Notification/>', () => {
  test('should not be visible', () => {
    render(<Notification text="Mensaje" />);
    expect(screen.getByText('Mensaje')).not.toBeVisible();
  });

  test('should close the notification when clicking the button', () => {
    render(<Notification text="Mensaje" active />);
    expect(screen.getByText('Mensaje')).toBeVisible();
    fireEvent.click(screen.getByTestId('close-button'));
    expect(screen.getByText('Mensaje')).not.toBeVisible();
  });
});
