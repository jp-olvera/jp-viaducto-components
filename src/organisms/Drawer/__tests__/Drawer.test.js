import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '../../../test-utils';
import { Drawer } from '..';

jest.mock('../../../cells/Dropdown/sorting.svg', () => null);

describe('<Drawer/>', () => {
  test('should be visible', () => {
    render(<Drawer active><h1>Title</h1></Drawer>);
    expect(screen.getByText('Title')).toBeVisible();
  });
});
