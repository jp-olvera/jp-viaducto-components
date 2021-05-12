import React from 'react';
import { Checkbox } from '..';
import { ConfigProvider } from '../../../providers';

export default {
  title: 'Andamio/Cells/Controls/Checkbox',
  component: Checkbox,
  argTypes: {
    color: {
      control: 'color',
    },
    family: {
      options: ['Manrope', 'Roboto', 'DM Sans'],
      control: { type: 'select' },
    },
    size: {
      options: ['sm', 'md', 'lg', 'xl'],
      control: {
        type: 'select',
      },
    },
    spacing: {
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
        'xxxl',
      ],
      control: 'select',
    },
  },
};

const Template = (args) => (
  <ConfigProvider>
    <Checkbox {...args} />
  </ConfigProvider>
);

export const Default = Template.bind({});

Default.args = {
  label: 'Label',
  disabled: false,
  family: 'Manrope',
  size: 'xl',
};
