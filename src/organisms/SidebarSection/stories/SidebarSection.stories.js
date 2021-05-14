import React from 'react';
import { SidebarSection } from '..';
import { ConfigProvider } from '../../../providers';

export default {
  title: 'Andamio/Organisms/SidebarSection',
  component: SidebarSection,
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
};
