/* eslint-env jest */

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/react';
import { render, screen, fireEvent } from '../../../test-utils';
import { Tab } from '..';

describe('<Tab/>', () => {
  const handleFn = jest.fn();

  test('should render properly', () => {
    render(
      <Tab
        text='Tab'
        type='warning'
        horizontalSpacing='sm'
        verticalSpacing='aaaa'
        icon='❤'
        active
      />,
    );
    expect(screen.queryByText('Tab')).toBeVisible();
  });

  test('should call function', () => {
    const { getByText } = render(
      <Tab
        text='tab'
        onClick={handleFn}
        icon='❤'
        lead
        verticalSpacing={null}
        horizontalSpacing={null}
      />,
    );
    fireEvent.click(getByText('tab'));
    expect(handleFn).toHaveBeenCalled();
  });

  test('should render default props', () => {
    const { container } = render(<Tab />);
    expect(container).toMatchSnapshot();
  });

  test('should render with top line', () => {
    const { container } = render(<Tab text='top' position='top' />);
    expect(container).toMatchSnapshot();
  });

  test('should render with left line', () => {
    const { container } = render(<Tab text='left' position='left' />);
    expect(container).toMatchSnapshot();
  });

  test('should render with right line', () => {
    const { container } = render(<Tab text='right' position='right' />);
    expect(container).toMatchSnapshot();
  });
});
