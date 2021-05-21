/* eslint-env jest */

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '../../../test-utils';
import { Card } from '..';

jest.mock('../../../cells/Dropdown/sorting.svg', () => null);
const props = {
  collapsible: false,
  collapse: true,
  src: 'https://homepages.cae.wisc.edu/~ece533/images/girl.png',
  content: <h1>Body</h1>,
  footer: <h2>Footer</h2>,
  onlyImage: false,
};
describe('<Card/>', () => {
  test('should be visible', () => {
    render(<Card {...props} />);
    expect(screen.queryByText('45 min')).toBeInTheDocument();
  });
  test('render Card collapsible (large)', () => {
    render(<Card {...props} collapsible />);
    expect(screen.queryByText('Designer')).toBeInTheDocument();
  });
  test('render Card with default props and create snapshot', () => {
    const { container } = render(<Card collapse />);
    expect(container).toMatchSnapshot();
  });
  test('render Card with onlyImage', () => {
    const { container } = render(
      <Card
        footer={null}
        contet={null}
        onlyImage={false}
        src='https://homepages.cae.wisc.edu/~ece533/images/girl.png'
        collapse={false}
      />,
    );
    expect(container).toBeInTheDocument();
  });
  test('render Card with noImage', () => {
    const { container } = render(
      <Card footer={null} contet={null} collapse={false} src={null} />,
    );
    expect(container).toBeInTheDocument();
  });
  test('render Card with props and collapse false', () => {
    const { container } = render(
      <Card {...props} collapse={false} onlyImage />,
    );
    expect(container).toBeInTheDocument();
  });
});
