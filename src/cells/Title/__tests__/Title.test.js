import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/react';
import { render, screen } from '../../../test-utils';
import { Title } from '../';

describe('<Title/>', () => {
  test('should render properly', () => {
    render(<Title>Dummy text</Title>);
    expect(screen.queryByText('Dummy text')).toBeVisible();
  });
  test('should render another text', () => {
    render(<Title>Another text</Title>);
    expect(screen.queryByText('Another text')).toBeVisible();
  });
});
