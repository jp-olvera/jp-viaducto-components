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
      options: ['sm', 'md', 'lg', 'xl'],
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
    change: {
      description: 'Trigger an action when switch changes the state',
      type: { summary: 'Function(void)', required: false },
      table: {
        defaultValue: { summary: null },
      },
    },
  },
};

const Template = (args) => (
  <ConfigProvider>
    <div>
      <Switch {...args} />;
    </div>
  </ConfigProvider>
);

export const Default = Template.bind({});

Default.args = {
  size: 'lg',
  disabled: false,
  color: '#9060EB',
  change: () => {},
};
