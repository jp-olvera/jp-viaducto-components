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
        href='#'
        label='First item in the menu with a large text'
        nested
      />
      <a href='http://www.google.com' target='_blank' rel='noreferrer'>
        <MenuItem label='Wrap with an anchor or Link' nested />
      </a>
      <button
        type='button'
        onClick={() => {
          alert('You clicked!');
        }}
        style={{
          appearance: 'none',
          border: 'none',
          width: '100%',
          background: 'inherit',
          textAlign: 'left',
          fontSize: 'inherit',
          margin: '0',
          padding: '0',
          fontFamily: 'inherit',
        }}
      >
        <MenuItem label='Maybe use a button' nested />
      </button>
    </SidebarSection>
    <MenuItem label='Use an icon' href='' icon={<Settings />} />
    <MenuItem
      label='Change icon position'
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
  icon: <Settings />,
};

Submenu.args = {
  separator: true,
  title: 'Section title',
  isDropdown: false,
  isMenu: true,
  transition: 'ease',
  icon: <Settings />,
};
