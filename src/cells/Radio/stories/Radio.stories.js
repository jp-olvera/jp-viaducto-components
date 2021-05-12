import React from 'react';
import { Radio } from '..';
import { ConfigProvider } from '../../../providers';

export default {
  title: 'Andamio/Cells/Controls/Radio',
  component: Radio,
  argTypes: {
    color: {
      control: 'color',
    },
    family: {
      options: ['Manrope', 'Roboto', 'DM Sans'],
      control: { type: 'select' },
    },
    size: {
      options: ['lg', 'md', 'sm'],
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
    <Radio {...args} />
  </ConfigProvider>
);

export const Default = Template.bind({});

Default.args = {
  label: 'Label',
  disabled: false,
  name: 'radio',
  family: 'Manrope',
  size: 'lg',
};
