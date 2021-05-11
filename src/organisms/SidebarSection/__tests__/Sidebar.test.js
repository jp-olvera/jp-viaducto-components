import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '../../../test-utils';
import { SidebarSection } from '..';

jest.mock('../../../cells/Dropdown/sorting.svg', () => null);

describe('<SidebarSection/>', () => {
  let items = [
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
        separator={true}
        title={'Comida'}
        isDropdown={true}
        isMenu={false}
        lead={true}
      />
    );
    expect(screen.getByText('Comida')).toBeVisible();
  });
  test('should render option of SidebarSection', () => {
    render(
      <SidebarSection
        items={items}
        separator={true}
        title={'Comida'}
        isDropdown={false}
        isMenu={false}
        lead={true}
      />
    );
    expect(screen.getByText('menu')).toBeVisible();
  });
  test('should render option after dropdown click', () => {
    render(
      <SidebarSection
        items={items}
        separator={true}
        title={'Comida'}
        isDropdown={true}
        isMenu={false}
        lead={true}
      />
    );
    expect(screen.queryByText('menu')).not.toBeInTheDocument();
    fireEvent.click(screen.getByText('Comida'));
    expect(screen.getByText('menu')).toBeVisible();
  });
  test('should render option after menu click', () => {
    render(
      <SidebarSection
        items={items}
        separator={true}
        title={'Comida'}
        isDropdown={false}
        isMenu={true}
        lead={true}
      />
    );
    expect(screen.queryByText('menu')).not.toBeInTheDocument();
    fireEvent.click(screen.getByText('Comida'));
    expect(screen.getByText('menu')).toBeVisible();
  });
});
