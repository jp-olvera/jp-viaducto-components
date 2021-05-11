import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '../../../test-utils';
import { SidebarSection } from '..';

jest.mock('../../../cells/Dropdown/sorting.svg', () => null);

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
        title="Comida"
        isDropdown
        isMenu={false}
        lead
      />,
    );
    expect(screen.getByText('Comida')).toBeVisible();
  });
  test('should render option of SidebarSection', () => {
    render(
      <SidebarSection
        items={items}
        separator
        title="Comida"
        isDropdown={false}
        isMenu={false}
        lead
      />,
    );
    expect(screen.getByText('menu')).toBeVisible();
  });
  test('should render option after dropdown click', () => {
    render(
      <SidebarSection
        items={items}
        separator
        title="Comida"
        isDropdown
        isMenu={false}
        lead
      />,
    );
    expect(screen.queryByText('menu')).not.toBeInTheDocument();
    fireEvent.click(screen.getByText('Comida'));
    expect(screen.getByText('menu')).toBeVisible();
  });
  test('should render option after menu click', () => {
    render(
      <SidebarSection
        items={items}
        separator
        title="Comida"
        isDropdown={false}
        isMenu
        lead
      />,
    );
    expect(screen.queryByText('menu')).not.toBeInTheDocument();
    fireEvent.click(screen.getByText('Comida'));
    expect(screen.getByText('menu')).toBeVisible();
  });
});
