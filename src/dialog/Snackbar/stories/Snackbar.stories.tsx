import React from 'react';
import { SBConfigI } from '../../../sb';
import { ConfigProvider } from '../../../providers';

import { Snackbar } from '..';

const config: SBConfigI = {
  title: 'FronteraUI/Dialog/Snackbar',
  component: Snackbar,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    elevation: {
      description: 'The elevation level it should take, one of 1/2/3',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 1 },
      },
      options: [0, 1, 2, 3],
      control: {
        type: 'select',
      },
    },
    elevationDirection: {
      description: "The elevation direction, if 'radial' direction goes everywhere",
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'radial' },
      },
      options: [
        'radial',
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
      description: 'Text label for the snackbar',
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
    <Snackbar {...args} />
  </ConfigProvider>
);

export const Default = Template.bind({});

Default.args = {
  text: 'Snackbar content',
  active: true,
  type: 'success',
  top: true,
  elevation: 1,
  elevationDirection: 'top',
  transition: 'ease',
};
