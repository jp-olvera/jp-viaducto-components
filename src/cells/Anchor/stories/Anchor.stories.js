import React from 'react';
import { ConfigProvider } from '../../../providers';
import { Anchor } from '../index';

export default {
  title: 'Andamio/Cells/Anchor',
  component: Anchor,
  argTypes: {
    color: {
      control: 'color',
    },
    size: {
      options: ['xxs', 'xs', 'sm', 'md', 'lg'],
      control: 'select',
    },
    verticalAlign: {
      control: { type: 'select' },
      options: ['baseline', 'top', 'bottom', 'middle'],
    },
  },
};

const Template = (args) => (
  <ConfigProvider>
    <Anchor {...args} />
  </ConfigProvider>
);

export const Default = Template.bind({});

Default.args = {
  label: 'Link',
  href: '#',
  color: '#ff8c69',
  icon: '😎',
  family: 'Manrope',
  size: 'md',
  lead: false,
  verticalAlign: 'baseline',
  transition: 'ease'
};

export const Lead = Template.bind({});

Lead.args = {
  label: 'Link',
  href: '#',
  color: '#ff8c69',
  icon: '🥵',
  lead: true,
  family: 'Manrope',
  size: 'md',
  verticalAlign: 'baseline',
  transition: 'ease'
};

export const NoIcon = Template.bind({});

NoIcon.args = {
  label: 'Link',
  href: '#',
  color: '#ff8c69',
  family: 'Manrope',
  size: 'md',
  lead: false,
  icon: '',
  verticalAlign: 'baseline',
  transition: 'ease'
};
