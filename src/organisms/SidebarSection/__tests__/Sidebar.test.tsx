/* eslint-env jest */

import React from 'react';
import {
  render, screen, fireEvent, axe,
} from '../../../test-utils';
import { SidebarSection, MenuItem } from '..';

describe('<SidebarSection/>', () => {
  test('should be visible', async () => {
    const { container } = render(
      <SidebarSection
        separator
        title='Comida'
        isDropdown
        isMenu={false}
        icon='😊'
      />,
    );
    expect(screen.getByText('Comida')).toBeVisible();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should render with default props', async () => {
    const { container } = render(
      <SidebarSection separator title='Comida' icon='😊' />,
    );
    expect(screen.getByText('Comida')).toBeVisible();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should render option of SidebarSection', async () => {
    const { container } = render(
      <SidebarSection
        separator
        title='Comida'
        isDropdown={false}
        isMenu={false}
        icon='😊'
      >
        <MenuItem href='#' label='menu' nested active={false} />
      </SidebarSection>,
    );
    expect(screen.getByText('menu')).toBeVisible();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should render option after dropdown click', async () => {
    const { container } = render(
      <SidebarSection separator title='Comida' isDropdown isMenu={false}>
        <MenuItem href='#' label='menu' nested icon='❤' lead />
      </SidebarSection>,
    );
    expect(screen.queryByText('menu')).not.toBeInTheDocument();
    fireEvent.click(screen.getByText('Comida'));
    expect(screen.getByText('menu')).toBeVisible();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should render option after menu keycode 13 press', async () => {
    const { container } = render(
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
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test('should render option after menu keycode 32 press', async () => {
    const { getByTestId, container } = render(
      <SidebarSection
        separator
        title='Comida'
        isDropdown={false}
        isMenu
        transition=''
      >
        <MenuItem href='#' label='menu' nested active={false} />
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
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should render with default props', async () => {
    const { container } = render(
      <SidebarSection isDropdown={false} isMenu={false} title='' />,
    );
    expect(container).toMatchSnapshot();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
