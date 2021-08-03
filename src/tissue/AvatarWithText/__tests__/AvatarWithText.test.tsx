/* eslint-env jest */

import React from 'react';
import { render, axe } from '../../../test-utils';
import { AvatarWithText } from '..';

describe('<AvatarWithText/>', () => {
  const avatarProps = {
    src: 'aaa',
    alt: 'alt_test',
  };
  test('should render with default values', async () => {
    const { container, getByAltText } = render(
      <AvatarWithText avatar={avatarProps}>
        <p>Hi, Hello</p>
      </AvatarWithText>,
    );
    expect(getByAltText('alt_test')).toBeVisible();
    expect(await axe(container)).toHaveNoViolations();
  });
  test('should render with reverse prop', async () => {
    const { container, getByAltText } = render(
      <AvatarWithText avatar={avatarProps} reverse>
        <p>John Doe</p>
      </AvatarWithText>,
    );
    expect(getByAltText('alt_test')).toBeVisible();
    expect(await axe(container)).toHaveNoViolations();
  });
});
