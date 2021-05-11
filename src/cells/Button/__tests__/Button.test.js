import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '../../../test-utils';
import { Button } from '..';

describe('<Button/>', () => {
  test('should render properly', () => {
    render(<Button label="Continue" />);
  });

  test('should have focus', () => {
    render(<Button label="Accept" />);
    const button = screen.getByRole('button');
    button.focus();
    expect(button).toHaveFocus();
  });
});
