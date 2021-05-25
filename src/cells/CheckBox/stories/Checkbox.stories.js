import React from 'react';
import { Checkbox } from '..';
import { ConfigProvider } from '../../../providers';

export default {
  title: 'Andamio/Cells/Controls/Checkbox',
  component: Checkbox,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    label: {
      description: 'Set the label for the checkbox',
      type: { summary: 'String', required: false },
      table: {
        defaultValue: { summary: null },
      },
    },
    disabled: {
      description: 'Set the checkbox disabled/enabled',
      type: { summary: 'Boolean', required: false },
      table: {
        defaultValue: { summary: false },
      },
    },
    color: {
      description: 'Set th switch active color',
      type: { summary: 'String', required: false },
      table: {
        defaultValue: { summary: '#9060EB' },
      },
      control: 'color',
    },
    family: {
      description: 'Set the font family',
      type: { summary: 'String', required: false },
      table: {
        defaultValue: { summary: 'Manrope' },
      },
    },
    size: {
      description: 'Set size of the checkbox',
      type: { summary: 'String', required: false },
      table: {
        defaultValue: { summary: 'lg' },
      },
      options: ['sm', 'md', 'lg', 'xl'],
      control: {
        type: 'select',
      },
    },
    spacing: {
      description:
        'Set horizontal spacing between the checkbox and the label (if it is defined)',
      type: { summary: 'string', required: false },
      table: {
        defaultValue: { summary: 'xxl' },
      },
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
  color: '#9060EB',
};
