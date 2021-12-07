import React from 'react';
import { Radio } from '..';
import { ConfigProvider } from '../../../providers';

export default {
  title: 'Ballena/Controls/Inputs/Radio',
  component: Radio,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    color: {
      description: 'Set the active/checked color',
      type: { summary: 'String', required: false },
      control: 'color',
    },
    family: {
      description: 'Set the font family',
      type: { summary: 'String', required: false },
      control: 'text',
    },
    fontSize: {
      description: 'Set a font size for the label (if it is defined)',
      type: { summary: 'String', required: false },
      table: {
        defaultValue: { summary: 'md' },
      },
      options: ['xxs', 'xs', 'sm', 'md', 'lg'],
      control: {
        type: 'select',
      },
    },
    radioSize: {
      description: 'Set the size of the component',
      type: { summary: 'String', required: true },
      table: {
        defaultValue: { summary: 'lg' },
      },
      options: ['xl', 'lg', 'md', 'sm'],
      control: {
        type: 'select',
      },
    },
    spacing: {
      description: 'Set the horizontal spacing between the label (if it is defined) and the radio',
      type: { summary: 'String', required: false },
      table: {
        defaultValue: { summary: 'none' },
      },
      options: ['none', 'nano', 'micro', 'tiny', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'],
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
    onChange: {
      description: 'Trigger an action when radio changes the state',
      type: { summary: 'Function(void)', required: false },
      table: {
        defaultValue: { summary: null },
      },
    },
    onClick: {
      description: 'Trigger an action when radio is clicked',
      type: { summary: 'Function(void)', required: false },
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
    <Radio {...args} />
  </ConfigProvider>
);

export const Default = Template.bind({});

Default.args = {
  label: 'Label',
  disabled: false,
  name: 'radio',
  radioSize: 'lg',
  fontSize: 'md',
  spacing: 'none',
};
