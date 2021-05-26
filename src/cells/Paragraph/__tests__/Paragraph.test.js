/* eslint-env jest */

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/react';
import { render, screen } from '../../../test-utils';
import { Paragraph } from '..';

describe('<Paragraph/>', () => {
  test('should render properly', () => {
    render(
      <Paragraph color='green' family={null}>
        Dummy text
      </Paragraph>,
    );
    expect(screen.queryByText('Dummy text')).toBeVisible();
  });
  test('should render another text', () => {
    render(<Paragraph color='info'>Another text</Paragraph>);
    expect(screen.queryByText('Another text')).toBeVisible();
  });
  test('should render another text with default props', () => {
    render(<Paragraph color={null}>Text with default props</Paragraph>);
    expect(screen.queryByText('Text with default props')).toBeVisible();
  });
});
