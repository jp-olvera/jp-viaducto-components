/* eslint-env jest */

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '../../../test-utils';
import { Badge } from '..';
import { alignContent, getBadgeSize, getClipPath } from '../StyledBadge';

describe('<Badge /> component', () => {
  test('should render propertly', () => {
    const { getByText } = render(
      <Badge content='Badge' size='md' family={null} src={null} />,
    );
    expect(getByText('Badge')).toBeInTheDocument();
  });
  test('should render with no default props', () => {
    const { getByText } = render(
      <Badge
        content='no default'
        clipPath='circle'
        size='lg'
        family='Roboto'
        color='red'
        align='top-center'
      />,
    );
    expect(getByText('no default')).toBeInTheDocument();
  });
  test('should render with different sizes', () => {
    const { getByText } = render(
      <Badge
        content='sizes'
        clipPath='circle'
        size={{ width: '2rem', height: '5rem' }}
      />,
    );
    expect(getByText('sizes')).toBeInTheDocument();
  });
  describe('helper functions', () => {
    describe('alignContent', () => {
      test('should return vertical center value with horizontal start and end', () => {
        expect(alignContent('center-right')).toContain('flex-end');
        expect(alignContent('center-left')).toContain('flex-start');
      });
      test('should return horizontal center value with vertical start and end', () => {
        expect(alignContent('bottom-right')).toContain('flex-end');
        expect(alignContent('top-left')).toContain('flex-start');
      });
    });
    describe('getBadgeSize', () => {
      test('should return different sizes', () => {
        expect(getBadgeSize('xxs')).not.toBeNull();
        expect(getBadgeSize('xs')).not.toBeNull();
        expect(getBadgeSize('sm')).not.toBeNull();
        expect(getBadgeSize('xl')).not.toBeNull();
        expect(getBadgeSize('xxl')).not.toBeNull();
        expect(getBadgeSize()).not.toBeNull();
      });
    });
    describe('getClipPath', () => {
      test('should return different shapes', () => {
        expect(getClipPath('hexagon')).not.toBeNull();
        expect(getClipPath('pentagon')).not.toBeNull();
        expect(getClipPath('rhombus')).not.toBeNull();
        expect(getClipPath('ellipse')).not.toBeNull();
        expect(getClipPath('rabbet')).not.toBeNull();
        expect(getClipPath('star')).not.toBeNull();
        expect(getClipPath('triangle')).not.toBeNull();
      });
    });
  });
});
