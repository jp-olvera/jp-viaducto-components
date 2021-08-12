import React from 'react';
import { SBConfigI } from '../../../sb';
import { Switch } from '..';
import { ConfigProvider } from '../../../providers';

const config: SBConfigI = {
  title: 'Ballena/Cells/Controls/Inputs/Switch',
  component: Switch,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    inputSize: {
      description: 'Set the size of the component',
      type: { summary: 'String', required: false },
      table: {
        defaultValue: { summary: 'default' },
      },
      options: ['xsmall', 'small', 'default', 'large'],
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
      type: { summary: 'boolean', required: false },
      table: {
        defaultValue: { summary: false },
      },
    },
    circular: {
      description: 'Set circular/rectangular switch',
      type: { summary: 'boolean', required: false },
      table: {
        defaultValue: { summary: true },
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

export default config;

const Template = (args: typeof Default) => (
  <ConfigProvider>
    <Switch {...args} />
  </ConfigProvider>
);

export const Default = Template.bind({});

Default.args = {
  inputSize: 'default',
  disabled: false,
  color: null,
  circular: true,
  change: () => {},
};
