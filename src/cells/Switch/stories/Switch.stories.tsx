import React from 'react';
import { SBConfigI } from '../../../sb';
import { Switch } from '..';
import { ConfigProvider } from '../../../providers';

const config: SBConfigI = {
  title: 'FronteraUI/Controls/Inputs/Switch',
  component: Switch,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    color: {
      control: 'color',
    },
    fontSize: { control: 'text' },
    label: { control: 'text' },
    onChange: {
      description: 'Trigger an action when switch changes',
      type: { summary: 'Function', required: false },
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

Default.args = {};
