import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/react';
import { render, screen, fireEvent } from '../../../test-utils';
import { Tab } from '..';

describe('<Tab/>', () => {
  const handleFn = jest.fn();

  test('should render properly', () => {
    render(<Tab text="Tab" />);
    expect(screen.queryByText('Tab')).toBeVisible();
  });

  test('should call function', () => {
    const { getByText } = render(<Tab text="tab" onClick={handleFn} />);
    fireEvent.click(getByText('tab'));
    expect(handleFn).toHaveBeenCalled();
  });
});
