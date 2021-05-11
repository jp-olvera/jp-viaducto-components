import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '../../../test-utils';
import { Card } from '..';

jest.mock('../../../cells/Dropdown/sorting.svg', () => null);

describe('<Card/>', () => {
  test('should be visible', () => {
    render(
      <Card
        collapsible={false}
        collapse={false}
        src="https://homepages.cae.wisc.edu/~ece533/images/girl.png"
        content={<h1>Body</h1>}
        footer={<h2>Footer</h2>}
        onlyImage={false}
      />,
    );
    expect(screen.queryByText('45 min')).toBeInTheDocument();
  });
  test('render Card collapsible (large)', () => {
    render(
      <Card
        collapsible
        collapse={false}
        src="https://homepages.cae.wisc.edu/~ece533/images/girl.png"
        content={<h1>Body</h1>}
        footer={<h2>Footer</h2>}
        onlyImage={false}
      />,
    );
    expect(screen.queryByText('Designer')).toBeInTheDocument();
  });
});
