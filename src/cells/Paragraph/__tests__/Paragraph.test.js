import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/react';
import { render, screen } from '../../../test-utils';
import { Paragraph } from '..';

describe('<Paragraph/>', () => {
  test('should render properly', () => {
    render(<Paragraph>Dummy text</Paragraph>);
    expect(screen.queryByText('Dummy text')).toBeVisible();
  });
  test('should render another text', () => {
    render(<Paragraph>Another text</Paragraph>);
    expect(screen.queryByText('Another text')).toBeVisible();
  });
});
