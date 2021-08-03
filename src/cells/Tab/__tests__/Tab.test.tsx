/* eslint-env jest */

import React from 'react';
import {
  render, screen, fireEvent, axe,
} from '../../../test-utils';
import { Tab } from '..';

describe('<Tab/>', () => {
  const handleFn = jest.fn();

  test('should render properly', async () => {
    const { container } = render(
      <Tab
        text='Tab'
        tabType='warning'
        horizontalSpacing='sm'
        verticalSpacing='aaaa'
        icon='❤'
        active
      />,
    );
    expect(screen.queryByText('Tab')).toBeVisible();
    expect(await axe(container)).toHaveNoViolations();
  });

  test('should call function', async () => {
    const { container, getByText } = render(
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
    expect(await axe(container)).toHaveNoViolations();
  });

  test('should render default props', async () => {
    const { container } = render(<Tab text='Tab' />);
    expect(container).toMatchSnapshot();
    expect(await axe(container)).toHaveNoViolations();
  });

  test('should render with top line', async () => {
    const { container } = render(<Tab text='top' position='top' />);
    expect(container).toMatchSnapshot();
    expect(await axe(container)).toHaveNoViolations();
  });

  test('should render with left line', async () => {
    const { container } = render(<Tab text='left' position='left' />);
    expect(container).toMatchSnapshot();
    expect(await axe(container)).toHaveNoViolations();
  });

  test('should render with right line', async () => {
    const { container } = render(<Tab text='right' position='right' />);
    expect(container).toMatchSnapshot();
    expect(await axe(container)).toHaveNoViolations();
  });
});
