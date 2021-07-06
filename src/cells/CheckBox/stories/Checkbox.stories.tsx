import React from 'react';
import { SBConfigI } from 'sb';
import { Checkbox } from '..';
import { ConfigProvider } from '../../../providers';

const config: SBConfigI = {
  title: 'Andamio/Cells/Controls/Checkbox',
  component: Checkbox,
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
    checkSize: {
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
      description:
        'Set the horizontal spacing between the label (if it is defined) and the checkbox',
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
      description: 'Set the checkbox as disabled',
      type: { summary: 'Boolean', required: false },
      table: {
        defaultValue: { summary: false },
      },
    },
    label: {
      description: 'Set a label for the checkbox',
      type: { summary: 'String', required: false },
      table: {
        defaultValue: { summary: null },
      },
    },
    onChange: {
      description: 'Trigger an action when checkbox changes the state',
      type: { summary: 'Function(void)', required: false },
      table: {
        defaultValue: { summary: null },
      },
    },
  },
};

export default config;

const Template = (args: typeof Default) => (
  <ConfigProvider>
    <Checkbox {...args} />
  </ConfigProvider>
);

export const Default = Template.bind({});

Default.args = {
  label: 'Label',
  disabled: false,
  checkSize: 'lg',
  spacing: 'none',
  color: '#9060EB',
  fontSize: 'md',
  onChange: () => {},
};
