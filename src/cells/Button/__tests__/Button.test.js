import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent } from '@testing-library/dom';
import { render, screen } from '../../../test-utils';
import { Button } from '..';

describe('<Button/>', () => {
  test('should render properly', () => {
    render(<Button label="Continue" size="large" />);
  });

  test('should have focus', () => {
    render(<Button label="Accept" size="small" horizontalSpacing="sm" />);
    const button = screen.getByRole('button');
    button.focus();
    expect(button).toHaveFocus();
  });

  test('should call onClick function', () => {
    const handleClick = jest.fn();
    const Icon = 'Icon';
    render(<Button label="Accept" onClick={handleClick} icon={Icon} />);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalled();
  });

  test('should not call onClick function when is disabled', () => {
    const handleClick = jest.fn();
    const Icon = 'Icon';
    render(<Button onClick={handleClick} disabled icon={Icon} />);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).not.toHaveBeenCalled();
  });
});
