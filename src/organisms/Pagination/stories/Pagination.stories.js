import React from 'react';
import { ConfigProvider } from '../../../providers';

import { Pagination } from '..';

export default {
  title: 'Andamio/Organisms/Pagination',
  component: Pagination,
  parameters: {
    controls: { sort: 'requiredFirst' },
  },
  argTypes: {
    totalPages: {
      description: 'Set the total number pages',
      type: { summary: 'number', required: true },
      table: { defaultValue: null },
      control: 'number',
    },
    sibilings: {
      description:
        'Set the number of pages rendering as sibilings of the active page',
      type: { summary: 'number (0,1)', required: true },
      table: { defaultValue: 0 },
      control: 'select',
      options: [0, 1],
    },
    iconLeft: {
      description: 'Change the default icon left',
      type: { summary: 'JSX Element/any', required: false },
      table: { defaultValue: null },
      control: 'text',
    },
    iconRight: {
      description: 'Change the default icon right',
      type: { summary: 'JSX Element/any', required: false },
      table: { defaultValue: null },
      control: 'text',
    },
    family: {
      description: 'Set the font family',
      type: { summary: 'string', required: false },
      table: { defaultValue: null },
      control: 'text',
    },
    fontSize: {
      description: 'Set the font size',
      type: { summary: 'string', required: false },
      table: { defaultValue: 'md' },
      control: 'select',
      options: ['xxs', 'xs', 'sm', 'md', 'lg'],
    },
    activeColor: {
      description: 'Set the active color of the page selected',
      type: { summary: 'string', required: false },
      table: { defaultValue: '#bdbdbd' },
      control: 'color',
    },
    hoverColor: {
      description: 'Set the hover color of the page item',
      type: { summary: 'string', required: false },
      table: { defaultValue: '#acacac' },
      control: 'color',
    },
    textColor: {
      description: 'Set one of our defined text color or HEX value',
      type: { summary: 'string', required: false },
      table: { defaultValue: 'dark' },
      control: 'text',
    },
    radius: {
      description:
        'Set border radius for the page element. If it is a String value, will be set as you defined, if it is number this value will be set as REM value',
      type: { summary: 'string', required: false },
      table: { defaultValue: 0 },
      control: 'text',
    },
    spacing: {
      description: 'Set the padding for the page item',
      type: { summary: 'string', required: true },
      table: { defaultValue: 'xs' },
      options: [
        'none',
        'nano',
        'micro',
        'tiny',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        'xxl',
      ],
      control: {
        type: 'select',
      },
    },
    onPageChange: {
      description: 'Triggers an action when the page is changed',
      type: { summary: 'Function', required: true },
      table: { defaultValue: () => {} },
    },
  },
};

const Template = (args) => (
  <ConfigProvider>
    <Pagination {...args} />
  </ConfigProvider>
);

export const Default = Template.bind({});

Default.args = {
  totalPages: 10,
  sibilings: 1,
  iconLeft: null,
  iconRight: null,
  family: null,
  fontSize: 'md',
  activeColor: '#bdbdbd',
  hoverColor: '#acacac',
  textColor: 'dark',
  radius: 0,
  spacing: 'xs',
  onPageChange: () => {},
};
