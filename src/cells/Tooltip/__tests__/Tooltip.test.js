/* eslint-env jest */

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '../../../test-utils';
import { Tooltip } from '..';

const props = {
  label: 'This is a tooltip',
  active: true,
  position: 'top',
  color: '#f1f1f1',
  textColor: '#000',
  family: 'Manrope',
};

const Container = () => <div>Container who has the tooltip</div>;

describe('<Tooltip/>', () => {
  test('should be visible', () => {
    render(
      <Tooltip {...props}>
        <Container />
      </Tooltip>,
    );
    expect(screen.queryByText(props.label)).toBeVisible();
  });

  test('should not be visible', () => {
    render(
      <Tooltip {...props} family={null} active={false}>
        <Container />
      </Tooltip>,
    );
    expect(screen.queryByText(props.label)).not.toBeVisible();
  });
  test('should render bottom tooltip', () => {
    render(
      <Tooltip {...props} position='bottom'>
        <Container />
      </Tooltip>,
    );
    expect(screen.queryByText(props.label)).toBeVisible();
  });
  test('should render left tooltip', () => {
    render(
      <Tooltip {...props} position='left'>
        <Container />
      </Tooltip>,
    );
    expect(screen.queryByText(props.label)).toBeVisible();
  });
  test('should render right tooltip', () => {
    render(
      <Tooltip {...props} position='right'>
        <Container />
      </Tooltip>,
    );
    expect(screen.queryByText(props.label)).toBeVisible();
  });
  test('should render default tooltip', () => {
    const { container } = render(
      <Tooltip>
        <Container />
      </Tooltip>,
    );
    expect(container).toBeVisible();
  });
});
