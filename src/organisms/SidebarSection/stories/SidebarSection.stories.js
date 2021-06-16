import React from 'react';
import { Settings } from 'react-ikonate';
import { SidebarSection, MenuItem } from '..';
import { ConfigProvider } from '../../../providers';

export default {
  title: 'Andamio/Organisms/SidebarSection',
  component: SidebarSection,
  argTypes: {
    title: {
      description: 'A title',
      type: { name: 'string', required: true },
      table: {
        type: { summary: 'string' },
      },
    },
    separator: {
      description:
        'A boolean to put a horizontal separator at the beginning of the section',
      table: {
        type: { summary: 'boolean', defaultValue: false },
      },
    },
    isMenu: {
      description: 'Attribute for clickable section left/right',
      table: {
        type: { summary: 'boolean', defaultValue: false },
      },
    },
    isDropdown: {
      description: 'Attribute for clickable section top/bottom',
      table: {
        type: { summary: 'boolean', defaultValue: false },
      },
    },
    icon: {
      description: 'Icon',
      table: {
        type: { summary: 'any', defaultValue: null },
      },
    },
  },
};

const Template = (args) => (
  <ConfigProvider>
    <SidebarSection {...args}>
      <MenuItem
        url='#'
        label='First item in the list for this example'
        nested
      />
      <MenuItem url='#' label='Second item in' nested />
      <MenuItem url='#' label='Third item in' nested />
    </SidebarSection>
    <MenuItem url='#' label='Infrastructure' icon={<Settings />} />
    <MenuItem
      url='#'
      label='Org Settings'
      active
      icon={<Settings />}
      lead={false}
    />
  </ConfigProvider>
);

export const Default = Template.bind({});
export const Submenu = Template.bind({});

Default.args = {
  separator: true,
  title: 'Section title',
  isDropdown: false,
  isMenu: false,
  transition: 'ease',
  icon: '🎈',
};

Submenu.args = {
  separator: true,
  title: 'Section title',
  isDropdown: false,
  isMenu: true,
  transition: 'ease',
  icon: '🎈',
};
