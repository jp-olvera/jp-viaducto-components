/* eslint-env jest */

import React from 'react';
import { render, axe } from '../../../test-utils';
import { SideToSide } from '..';

describe('<SideToSide/>', () => {
  const Media = (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundImage: `url('https://i.pravatar.cc/1000')`,
        backgroundSize: 'cover',
      }}
    />
  );
  const Children = () => (
    <>
      <p>Children</p>
    </>
  );
  test('should render properly', async () => {
    const { container } = render(
      <SideToSide media={Media}>
        <Children />
      </SideToSide>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should render with props', () => {
    const { container } = render(
      <SideToSide media={Media} reverse columnAlignment={false}>
        <Children />
      </SideToSide>
    );
    expect(container).not.toBeNull();
  });
  test('should render with columnAlignment true and reverse props', () => {
    const { container } = render(
      <SideToSide media={Media} reverse columnAlignment>
        <Children />
      </SideToSide>
    );
    expect(container).not.toBeNull();
  });
});
