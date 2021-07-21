/* eslint-env jest */

import React from 'react';
import { render, fireEvent } from '../../../test-utils';
import { GroupTab } from '..';
import { onload } from '../GroupTab';
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
    const { queryByText } = render(
      <GroupTab position='top' spacing='none' onTabChange={jest.fn}>
        <Tab text='Zombie' />
        <Tab text='Act' />
        <Tab text='Dinner' />
      </GroupTab>,
    );
    const tab = queryByText('Dinner');
    fireEvent.click(tab);
    expect(tab).toMatchSnapshot();
  });
  test('should change tab and return to first tab', () => {
    const { container, queryByText } = render(
      <GroupTab position='top' spacing='none' onTabChange={jest.fn}>
        <Tab text='Zombie' />
        <Tab text='Act' />
        <Tab text='Dinner' />
      </GroupTab>,
    );
    const tab = queryByText('Dinner');
    fireEvent.click(tab);
    fireEvent.click(queryByText('Zombie'));
    const line: HTMLDivElement = container.querySelector('.line');
    expect(line).toHaveStyle('marginLeft: 0');
  });
  describe('onload function', () => {
    const A = () => {
      const ref = React.useRef<HTMLDivElement>(null);
      return <div ref={ref}>aaaa</div>;
    };
    test('should call function', () => {
      expect(
        onload(
          A.bind({}),
          0,
          { spacing: 'lg' },
          'lg',
          () => {},
          () => {},
        ),
      ).not.toBeNaN();
    });
    test('should call function with base 14', () => {
      expect(
        onload(
          A.bind({}),
          0,
          { spacing: 'lg' },
          'lg',
          () => {},
          () => {},
          14,
        ),
      ).not.toBeNaN();
    });
  });
});
