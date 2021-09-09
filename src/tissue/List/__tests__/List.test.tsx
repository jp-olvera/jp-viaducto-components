/* eslint-env jest */

import React from 'react';
import { render, axe } from '../../../test-utils';
import { List, ListItem } from '..';

describe('<List/>', () => {
  test('should render properly', async () => {
    const { container } = render(
      <List>
        <ListItem key='1'>Item 1</ListItem>
        <ListItem key='2'>Item 2</ListItem>
        <ListItem key='3'>Item 3</ListItem>
        <ListItem key='4'>Item 4</ListItem>
      </List>
    );
    expect(container).toBeVisible();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should render properly with green marker color', async () => {
    const { container, getAllByText } = render(
      <List markerColor='green'>
        <ListItem key='1'>Item 1.1</ListItem>
      </List>
    );
    expect(container).toBeVisible();
    expect(getAllByText('Item 1.1')).not.toBeNull();
  });
  test('should render properly with custom list item style', async () => {
    const { container, getAllByText } = render(
      <List listStyle={'•'}>
        <ListItem key='1'>Item A</ListItem>
        <ListItem key='4'>Item B</ListItem>
      </List>
    );
    expect(container).toBeVisible();
    expect(getAllByText('•')).not.toBeNull();
  });
});
