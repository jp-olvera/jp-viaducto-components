/* eslint-env jest */

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/react';
import { render } from '../../../test-utils';
import { Container } from '..';

describe('<Container/>', () => {
  test('should render properly', () => {
    const { container } = render(<Container />);
    expect(container).toBeVisible();
  });
  test('should render expanded container', () => {
    const { container } = render(
      <Container vertical='sm' expandVertical expandHorizontal />,
    );
    expect(container).toBeInTheDocument();
  });
  test('should render with all props', () => {
    const { container } = render(
      <Container
        expandVertical
        expandHorizontal
        horizontal='sm'
        vertical='sm'
        top='sm'
        bottom='sm'
        left='sm'
        right='sm'
      />,
    );
    expect(container).not.toBeNull();
  });
});
