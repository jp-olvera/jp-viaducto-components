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
    const { container, queryByText } = render(
      <GroupTab position='top' spacing='lg'>
        <Tab text='Zombie' />
        <Tab text='Act' />
        <Tab text='Dinner' />
      </GroupTab>,
    );
    const tab = queryByText('Dinner');
    fireEvent.click(tab);
    fireEvent.click(queryByText('Zombie'));
    const line: HTMLDivElement = container.querySelector('.line');
    expect(line).toHaveStyle('marginLeft: 0rem');
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
          'lg',
          { spacing: { lg: '1rem' } },
          () => {},
          () => {},
        ),
      ).not.toBeNaN();
    });
    test('should call function with none spacing', () => {
      expect(
        onload(
          A.bind({}),
          0,
          'none',
          { spacing: { lg: '1rem', none: '0rem' } },
          () => {},
          () => {},
        ),
      ).not.toBeNaN();
    });
    test('should call function with undefined spacing', () => {
      expect(
        onload(
          A.bind({}),
          0,
          'aaaa',
          { spacing: { lg: '1rem', none: '0rem' } },
          () => {},
          () => {},
        ),
      ).not.toBeNaN();
    });
  });
});
