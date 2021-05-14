/* eslint-env jest */

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/react';
import { Help } from 'react-ikonate';
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
        verticalSpacing='sm'
        icon={<Help />}
      />,
    );
    expect(screen.queryByText('Tab')).toBeVisible();
  });

  test('should call function', () => {
    const { getByText } = render(
      <Tab
        text='tab'
        onClick={handleFn}
        icon={<Help />}
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
});
