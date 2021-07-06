import React from 'react';
import { SBConfigI } from 'sb';
import { ConfigProvider } from '../../../providers';

import { Notification } from '..';

const config: SBConfigI = {
  title: 'Andamio/Organisms/Notification',
  component: Notification,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    type: {
      description: 'One of success/danger/warning/info',
      type: { name: 'string' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'success' },
      },
      options: ['success', 'warning', 'info', 'danger'],
      control: {
        type: 'select',
      },
    },
    elevation: {
      description: 'The elevation level it should take, one of 1/2/3',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 1 },
      },
      options: [1, 2, 3],
      control: {
        type: 'select',
      },
    },
    elevationDirection: {
      description: "The elevation direction, if '' direction goes everywhere",
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "''" },
      },
      options: [
        '',
        'top',
        'right',
        'bottom',
        'left',
        'topRight',
        'topLeft',
        'bottomRight',
        'bottomLeft',
      ],
      control: {
        type: 'select',
      },
    },
    text: {
      description: 'Text label for the notification',
      type: { name: 'string', required: true },
      table: { type: { summary: 'string' } },
    },
    active: {
      description: 'Attribute for shown/hide component',
      type: { name: 'boolean' },
      table: { type: { summary: 'boolean' } },
    },
    top: {
      description: 'Set to true for stick at top or false to stick in bottom',
      type: { name: 'boolean' },
      table: { type: { summary: 'boolean' } },
    },
    transition: {
      description: 'Linear transition to use',
      type: { name: 'string' },
      table: { type: { summary: 'string' }, defaultValue: { summary: 'ease' } },
    },
  },
};

export default config;

const Template = (args: typeof Default) => (
  <ConfigProvider>
    <Notification {...args} />
  </ConfigProvider>
);

export const Default = Template.bind({});

Default.args = {
  text: 'Notification content',
  active: true,
  type: 'success',
  top: true,
  elevation: 1,
  elevationDirection: 'top',
  transition: 'ease',
};
