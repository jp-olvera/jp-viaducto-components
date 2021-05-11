import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '../../../test-utils';
// import { render } from '@testing-library/react';
import { Drawer } from '..';

jest.mock('../../../cells/Dropdown/sorting.svg', () => null);

describe('<Drawer/>', () => {
  test('should be visible', () => {
    render(<Drawer active children={<h1>Title</h1>} />);
    expect(screen.getByText('Title')).toBeVisible();
  });
});
