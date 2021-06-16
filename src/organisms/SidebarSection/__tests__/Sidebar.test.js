/* eslint-env jest */

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '../../../test-utils';
import { SidebarSection, MenuItem } from '..';

describe('<SidebarSection/>', () => {
  test('should be visible', () => {
    render(
      <SidebarSection
        separator
        title='Comida'
        isDropdown
        isMenu={false}
        icon='😊'
      />,
    );
    expect(screen.getByText('Comida')).toBeVisible();
  });
  test('should render option of SidebarSection', () => {
    render(
      <SidebarSection
        separator
        title='Comida'
        isDropdown={false}
        isMenu={false}
        icon='😊'
      >
        <MenuItem url='#' label='menu' nested />
      </SidebarSection>,
    );
    expect(screen.getByText('menu')).toBeVisible();
  });
  test('should render option after dropdown click', () => {
    render(
      <SidebarSection separator title='Comida' isDropdown isMenu={false}>
        <MenuItem url='#' label='menu' nested />
      </SidebarSection>,
    );
    expect(screen.queryByText('menu')).not.toBeInTheDocument();
    fireEvent.click(screen.getByText('Comida'));
    expect(screen.getByText('menu')).toBeVisible();
  });
  test('should render option after menu keycode 13 press', () => {
    render(
      <SidebarSection separator title='Comida' isDropdown={false} isMenu>
        <MenuItem url='#' label='menu' nested />
      </SidebarSection>,
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
      <SidebarSection separator title='Comida' isDropdown={false} isMenu>
        <MenuItem url='#' label='menu' nested />
      </SidebarSection>,
    );
    fireEvent.keyUp(screen.getByText('Comida'), {
      key: '32',
      code: '32',
      keyCode: '32',
    });
    expect(screen.getByText('Comida')).toBeVisible();
  });
  test('should render with default props', () => {
    const { container } = render(<SidebarSection />);
    expect(container).toMatchSnapshot();
  });
});
