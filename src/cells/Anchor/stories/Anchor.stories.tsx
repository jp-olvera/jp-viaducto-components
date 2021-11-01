import React from 'react';
import { SBConfigI } from '../../../sb';
import { ConfigProvider } from '../../../providers';
import { Anchor } from '../index';

const config: SBConfigI = {
  title: 'Ballena/Navigation/Anchor',
  component: Anchor,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    label: {
      description: 'Title or content of the component',
      type: { summary: 'string', required: true },
      table: {
        defaultValue: { summary: null },
      },
    },
    href: {
      description: 'The path of the page to visit',
      type: { summary: 'string', required: true },
      table: {
        defaultValue: { summary: null },
      },
    },
    color: {
      description:
        'The font color of the anchor, it could be one of our design colors or HEX value',
      type: { summary: 'string', required: false },
      table: {
        defaultValue: { summary: 'dark' },
      },
      control: 'color',
    },
    size: {
      description: 'The font size of the anchor',
      type: { summary: 'string', required: false },
      table: {
        defaultValue: { summary: 'md' },
      },
      options: ['xxs', 'xs', 'sm', 'md', 'lg'],
      control: 'select',
    },
    family: {
      description: 'The font family of the anchor',
      type: { summary: 'string', required: false },
      table: {
        type: { summary: 'string' },
      },
      control: 'text',
    },
    icon: {
      description: 'Set an icon with the label',
      type: { summary: 'JSX Element / String', required: false },
      table: {
        defaultValue: { summary: 'null' },
      },
    },
    lead: {
      description:
        'Set the icon (if it is provided) at the begining of the component (before the label)',
      type: { summary: 'Boolean', required: false },
      table: {
        defaultValue: { summary: false },
      },
    },
  },
};

export default config;

const Template = (args: typeof Default) => (
  <ConfigProvider>
    <Anchor {...args} />
  </ConfigProvider>
);

export const Default: any = Template.bind({});

Default.args = {
  label: 'Link',
  href: '#',
  color: '#ff8c69',
  icon: '😎',
  family: 'Manrope',
  size: 'md',
  lead: false,
  transition: 'ease',
};

export const Lead: any = Template.bind({});

Lead.args = {
  label: 'Link',
  href: '#',
  color: '#ff8c69',
  icon: '🥵',
  lead: true,
  size: 'md',
};

export const NoIcon: any = Template.bind({});

NoIcon.args = {
  label: 'Link',
  href: '#',
  color: '#ff8c69',
  size: 'md',
  lead: false,
  icon: '',
  verticalAlign: 'baseline',
};
