import React from 'react';
import { Radio } from '..';
import { ConfigProvider } from '../../../providers';

export default {
  title: 'Andamio/Cells/Controls/Radio',
  component: Radio,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    color: {
      description: 'Set the active/checked color',
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
      description: 'Set the size of the component',
      type: { summary: 'String', required: true },
      table: {
        defaultValue: { summary: 'lg' },
      },
      options: ['lg', 'md', 'sm'],
      control: {
        type: 'select',
      },
    },
    spacing: {
      description:
        'Set the horizontal spacing between the label (if it is defined) and the radio',
      type: { summary: 'String', required: false },
      table: {
        defaultValue: { summary: 'none' },
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
    disabled: {
      description: 'Set the radio as disabled',
      type: { summary: 'Boolean', required: false },
      table: {
        defaultValue: { summary: false },
      },
    },
    label: {
      description: 'Set a label for the radio',
      type: { summary: 'String', required: false },
      table: {
        defaultValue: { summary: null },
      },
    },
    name: {
      description: 'Set a name for many radio components',
      type: { summary: 'String', required: true },
      table: {
        defaultValue: { summary: 'radio' },
      },
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
