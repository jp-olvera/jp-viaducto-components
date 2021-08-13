/* eslint-env jest */

import React from 'react';
import { render, screen, fireEvent } from '../../../test-utils';
import { Snackbar } from '..';

describe('<Snackbar/>', () => {
  test('should not be visible', () => {
    render(<Snackbar text='Mensaje' active={false} icon='❤' />);
    expect(screen.getByText('Mensaje')).not.toBeVisible();
  });

  test('should close the Snackbar when clicking the button', () => {
    render(<Snackbar text='Mensaje' active top={false} />);
    expect(screen.getByText('Mensaje')).toBeVisible();
    fireEvent.click(screen.getByTestId('close-button'));
    expect(screen.getByText('Mensaje')).not.toBeVisible();
  });
});
