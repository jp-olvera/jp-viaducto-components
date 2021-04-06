import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../';

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

  test('should call onClick function once', () => {
    const handleClick = jest.fn();
    render(<Button label="Continue" onClick={handleClick} />);
    fireEvent.click(screen.getByText('Continue'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('should not call onClick function', () => {
    const handleClick = jest.fn();
    render(<Button label="Continue" onClick={handleClick} disabled={true} />);
    const button = screen.getByRole('button');
    button.focus();
    expect(button).not.toHaveFocus();
    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });
});
