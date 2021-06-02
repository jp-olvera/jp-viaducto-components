/* eslint-env jest */

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '../../../test-utils';
import { SidebarSection } from '..';

describe('<SidebarSection/>', () => {
  const items = [
    {
      label: 'title',
      url: 'url',
    },
    {
      label: 'section',
      url: 'google',
    },
    {
      label: 'menu',
      url: 'youtube',
    },
  ];
  test('should be visible', () => {
    render(
      <SidebarSection
        items={items}
        separator
        title='Comida'
        isDropdown
        isMenu={false}
        lead
        icon='😊'
      />,
    );
    expect(screen.getByText('Comida')).toBeVisible();
  });
  test('should render option of SidebarSection', () => {
    render(
      <SidebarSection
        items={items}
        separator
        title='Comida'
        isDropdown={false}
        isMenu={false}
        lead={false}
        icon='😊'
      />,
    );
    expect(screen.getByText('menu')).toBeVisible();
  });
  test('should render option after dropdown click', () => {
    render(
      <SidebarSection
        items={items}
        separator
        title='Comida'
        isDropdown
        isMenu={false}
        lead
      />,
    );
    expect(screen.queryByText('menu')).not.toBeInTheDocument();
    fireEvent.click(screen.getByText('Comida'));
    expect(screen.getByText('menu')).toBeVisible();
  });
  test('should render option after menu keycode 13 press', () => {
    render(
      <SidebarSection
        items={items}
        separator
        title='Comida'
        isDropdown={false}
        isMenu
        lead
      />,
    );
    fireEvent.keyUp(screen.getByText('Comida'), {
      key: '13',
      code: '13',
      keyCode: '13',
    });
    expect(screen.getByText('Comida')).toBeVisible();
  });

  test('should render option after menu keycode 32 press', () => {
    render(
      <SidebarSection
        items={items}
        separator
        title='Comida'
        isDropdown={false}
        isMenu
      />,
    );
    fireEvent.keyUp(screen.getByText('Comida'), {
      key: '32',
      code: '32',
      keyCode: '32',
    });
    expect(screen.getByText('Comida')).toBeVisible();
  });
  test('should render with default props', () => {
    const { container } = render(<SidebarSection lead={false} />);
    expect(container).toMatchSnapshot();
  });
});
