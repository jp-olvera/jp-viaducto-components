import React from 'react';
import { Checkbox } from '..';
import { ConfigProvider } from '../../../providers';

export default {
  title: 'Andamio/Cells/Checkbox',
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
      options: ['lg', 'md', 'sm'],
      control: {
        type: 'select',
      },
    },
  }
};

const Template = (args) => {
  return (
    <ConfigProvider>
      <Checkbox {...args} />
    </ConfigProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  label: 'Label',
  disabled: false,
  family: 'Manrope',
  size: 'md'
};
