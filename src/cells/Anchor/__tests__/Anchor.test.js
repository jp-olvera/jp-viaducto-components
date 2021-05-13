/* eslint-env jest */

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/react';
import { Help } from 'react-ikonate';
import { render, screen } from '../../../test-utils';
import { Anchor } from '..';

describe('<Anchor/>', () => {
  test('should render properly', () => {
    render(
      <Anchor
        label='Link'
        href='#'
        color='red'
        icon={<Help />}
        family='Manrope'
        size='md'
        lead
      />,
    );
    expect(screen.getByText(/Link/g)).toBeVisible();
  });

  test('render with no icon', () => {
    render(
      <Anchor
        label='Link'
        href='#'
        color='red'
        family='Manrope'
        size='md'
        lead={false}
      />,
    );
    expect(screen.queryByText('😎')).not.toBeInTheDocument();
  });
});
