/* eslint-env jest */

import React from 'react';
import { render, screen } from '../../../test-utils';
import { Title } from '..';

describe('<Title/>', () => {
  test('should render properly', () => {
    render(
      <Title level='2' color='green'>
        Dummy text
      </Title>,
    );
    expect(screen.queryByText('Dummy text')).toBeVisible();
  });
  test('should render level D1', () => {
    render(
      <Title level='D1' color='green'>
        D1
      </Title>,
    );
    expect(screen.queryByText('D1')).toBeVisible();
  });
  test('should render level D2', () => {
    render(
      <Title level='D2' color='green'>
        D2
      </Title>,
    );
    expect(screen.queryByText('D2')).toBeVisible();
  });
  test('should render level D3', () => {
    render(
      <Title level='D3' color='green'>
        D3
      </Title>,
    );
    expect(screen.queryByText('D3')).toBeVisible();
  });
  test('should render level D4', () => {
    render(
      <Title level='D4' color='green'>
        D4
      </Title>,
    );
    expect(screen.queryByText('D4')).toBeVisible();
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
