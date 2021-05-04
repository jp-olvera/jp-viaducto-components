import React from 'react';
import { Switch } from '..';
import { ConfigProvider } from '../../../providers';

export default {
  title: 'Andamio/Cells/Controls/Switch',
  component: Switch,
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'select',
      },
    },
    color: {
      control: 'color',
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
  disabled: true,
};
