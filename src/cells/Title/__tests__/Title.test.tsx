/* eslint-env jest */

import React from 'react';
import { render, screen } from '../../../test-utils';
import { Title } from '..';

describe('<Title/>', () => {
  test('should render properly', () => {
    render(<Title color='green'>Dummy text</Title>);
    expect(screen.queryByText('Dummy text')).toBeVisible();
  });
  test('should render another text without family', () => {
    render(<Title family={null}>Another text</Title>);
    expect(screen.queryByText('Another text')).toBeVisible();
  });
  test('should render another text without color', () => {
    render(<Title color={undefined}>Another color</Title>);
    expect(screen.queryByText('Another color')).toBeVisible();
  });
  test('should render with font family', () => {
    render(
      <Title color='red' family='Arial'>
        ...with font family
      </Title>,
    );
    expect(screen.queryByText('...with font family')).toBeVisible();
  });
});
