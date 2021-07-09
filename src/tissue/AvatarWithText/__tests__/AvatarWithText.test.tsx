/* eslint-env jest */

import React from 'react';
import { render } from '../../../test-utils';
import { AvatarWithText } from '..';

describe('<AvatarWithText/>', () => {
  const avatarProps = {
    src: 'aaa',
    alt: 'alt_test',
  };
  test('should render with default values', () => {
    const { getByAltText } = render(
      <AvatarWithText avatar={avatarProps}>
        <p>Hi, Hello</p>
      </AvatarWithText>,
    );
    expect(getByAltText('alt_test')).toBeVisible();
  });
  test('should render with reverse prop', () => {
    const { getByAltText } = render(
      <AvatarWithText avatar={avatarProps} reverse>
        <p>John Doe</p>
      </AvatarWithText>,
    );
    expect(getByAltText('alt_test')).toBeVisible();
  });
});
