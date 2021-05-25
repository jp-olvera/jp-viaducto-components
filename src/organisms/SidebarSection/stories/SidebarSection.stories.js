import React from 'react';
import { SidebarSection } from '..';
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
    items: {
      description: 'A list of of objects with a label and a url',
      type: { required: true },
      table: {
        type: { summary: '{ label: string; url: string }[]', required: true },
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
    lead: {
      description: 'Attribute for place icon first',
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
    <SidebarSection {...args} />
  </ConfigProvider>
);

export const Default = Template.bind({});

const itemsExample = [
  {
    url: '/path/to/place',
    label: 'Home',
    icon: 'HomeMajor',
  },
  {
    url: '/path/to/place',
    label: 'Orders',
    icon: 'OrdersMajor',
    badge: '15',
  },
  {
    url: '/path/to/place',
    label: 'Products',
    icon: 'ProductsMajor',
  },
];

Default.args = {
  items: itemsExample,
  separator: true,
  title: 'Menu title',
  isDropdown: false,
  isMenu: false,
  lead: false,
  transition: 'ease',
  icon: '🎈',
};
