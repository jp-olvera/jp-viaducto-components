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
        lead
        icon='😊'
      />,
    );
    expect(screen.getByText('Comida')).toBeVisible();
  });
  test('should render with default props', () => {
    render(<SidebarSection separator title='Comida' lead icon='😊' />);
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
        active={false}
      >
        <MenuItem href='#' label='menu' nested active={false} />
      </SidebarSection>,
    );
    expect(screen.getByText('menu')).toBeVisible();
  });
  test('should render option after dropdown click', () => {
    render(
      <SidebarSection separator title='Comida' isDropdown isMenu={false}>
        <MenuItem href='#' label='menu' nested icon='❤' lead />
      </SidebarSection>,
    );
    expect(screen.queryByText('menu')).not.toBeInTheDocument();
    fireEvent.click(screen.getByText('Comida'));
    expect(screen.getByText('menu')).toBeVisible();
  });
  test('should render option after menu keycode 13 press', () => {
    render(
      <SidebarSection separator title='Comida' isDropdown={false} isMenu>
        <MenuItem href={undefined} label='menu' icon='❤' lead={false} active />
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
    const { getByTestId } = render(
      <SidebarSection
        separator
        title='Comida'
        isDropdown={false}
        isMenu
        transition={null}
      >
        <MenuItem href='#' label='menu' nested active />
      </SidebarSection>,
    );
    fireEvent.keyUp(screen.getByText('Comida'), {
      key: '32',
      code: '32',
      keyCode: '32',
    });
    const button = getByTestId('button');
    fireEvent.click(button);
    expect(screen.getByText('Comida')).toBeVisible();
  });
  test('should render with default props', () => {
    const { container } = render(
      <SidebarSection isDropdown={false} isMenu={false} />,
    );
    expect(container).toMatchSnapshot();
  });
});
