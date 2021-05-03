import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '../../../test-utils';
import { Radio } from '../';

describe('<Radio/>', () => {
  test('should render properly', () => {
    render(<Radio label="Radio" data-testid="aa"></Radio>);
    expect(screen.getByText('Radio')).toBeVisible();
  });

  test('should be selected', () => {
    const { getByTestId } = render(<Radio label="Yes" id="radio" />);
    const input = getByTestId('radio');
    fireEvent.click(input.querySelector('input'));
    expect(input.querySelector('input').checked).toEqual(true);
  });

  test('should be disabled', () => {
    const { getByTestId } = render(
      <Radio label="Yes" id="radio" disabled={true} />
    );
    expect(
      getByTestId('radio').querySelector('input').hasAttribute('disabled')
    ).toEqual(true);
  });
});
