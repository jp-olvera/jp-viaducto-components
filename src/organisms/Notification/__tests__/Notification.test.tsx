/* eslint-env jest */

import React from 'react';
import { render, screen, fireEvent } from '../../../test-utils';
import { Notification } from '..';

describe('<Notification/>', () => {
  test('should not be visible', () => {
    render(<Notification text='Mensaje' active={false} icon='❤' />);
    expect(screen.getByText('Mensaje')).not.toBeVisible();
  });

  test('should close the notification when clicking the button', () => {
    render(<Notification text='Mensaje' active top={false} />);
    expect(screen.getByText('Mensaje')).toBeVisible();
    fireEvent.click(screen.getByTestId('close-button'));
    expect(screen.getByText('Mensaje')).not.toBeVisible();
  });
});
