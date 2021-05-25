import React from 'react';
import { Switch } from '..';
import { ConfigProvider } from '../../../providers';

export default {
  title: 'Andamio/Cells/Controls/Switch',
  component: Switch,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    size: {
      description: 'Set the size of the component',
      type: { summary: 'String', required: false },
      table: {
        defaultValue: { summary: 'lg' },
      },
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'select',
      },
    },
    color: {
      description: 'Set the color when the switch is active',
      type: { summary: 'String', required: false },
      table: {
        defaultValue: { summary: '#9060EB' },
      },
      control: 'color',
    },
    disabled: {
      description: 'Set the component disabled/enabled',
      type: { summary: 'String', required: false },
      table: {
        defaultValue: { summary: false },
      },
    },
    transition: {
      description: 'Defines the transitionTimingFunction',
      type: { summary: 'String', required: false },
      table: {
        defaultValue: { summary: 'ease' },
      },
    },
  },
};

const Template = (args) => (
  <ConfigProvider>
    <Switch {...args} />
  </ConfigProvider>
);

export const Default = Template.bind({});

Default.args = {
  size: 'lg',
  disabled: false,
  transition: 'ease',
  color: '#9060EB',
};
