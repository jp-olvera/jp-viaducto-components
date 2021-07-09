/* eslint-env jest */

import React from 'react';
import { render, fireEvent } from '../../../test-utils';
import { GroupTab } from '..';
import { Tab } from '../../../cells';

describe('<GroupTab/>', () => {
  const Tabs = () => (
    <>
      <Tab text='Tab' />
      <Tab text='Testing' />
      <Tab text='Love' />
    </>
  );
  test('should render properly', () => {
    const { container } = render(
      <GroupTab>
        <Tabs />
      </GroupTab>,
    );
    expect(container).toBeVisible();
  });
  test('should render with top line', () => {
    const { container } = render(
      <GroupTab position='top'>
        <Tabs />
      </GroupTab>,
    );
    expect(container).toBeVisible();
  });
  test('should change tab', () => {
    const { container, queryByText } = render(
      <GroupTab position='top'>
        <Tab text='Zombie' />
        <Tab text='Act' />
        <Tab text='Dinner' />
      </GroupTab>,
    );
    const tab = queryByText('Dinner');
    fireEvent.click(tab);
    const line: HTMLDivElement = container.querySelector('.line');
    expect(line).toHaveStyle('transform:translateX(200%)');
  });
});
