import React from 'react';
import { SBConfigI } from '../../../sb';
import { ConfigProvider } from '../../../providers';
import { Textarea } from '..';

const config: SBConfigI = {
  title: 'Andamio/Cells/Controls/Textarea',
  component: Textarea,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    resizable: {
      description: 'Set text area with resizable props',
      type: { summary: 'boolean', required: false },
      table: {
        defaultValue: { summary: false },
      },
    },
    border: {
      description: 'Set the border(s) of the component',
      type: {
        summary: 'Object(top, bottom, left, right)/String',
        required: false,
      },
      table: {
        defaultValue: { summary: 'none' },
      },
    },
    borderColor: {
      description: 'Overrides the border color (if it is defined)',
      type: 'String',
      table: {
        defaultValue: { summary: null },
      },
      control: 'color',
    },
    radius: {
      description:
        'Set the border radius (if the border it is defined). If is a provides a string, this value will set as you writted, if is a number, this value will be a REM size',
      type: 'string/number',
      table: {
        defaultValue: { summary: null },
      },
    },
    placeholder: {
      description: 'HTML Placeholder attribute',
      type: 'string',
      table: {
        defaultValue: { summary: null },
      },
    },
    family: {
      description: 'Sets the font family',
      type: 'string',
      table: {
        defaultValue: { summary: null },
      },
    },
    textColor: {
      description: 'Set the font color, could be one of ours or HEX value',
      type: 'string',
      table: {
        defaultValue: { summary: 'dark' },
      },
    },
    fontSize: {
      description: 'Set our defined font size',
      type: 'string',
      table: {
        defaultValue: { summary: 'md' },
      },
      control: 'select',
      options: ['xxs', 'xs', 'sm', 'md', 'lg'],
    },
    disabled: {
      description: 'Set text area disabled',
      type: 'boolean',
      table: {
        defaultValue: { summary: false },
      },
    },
    lateralPadding: {
      description: 'Set lateral padding',
      type: 'string',
      table: {
        defaultValue: { summary: 'sm' },
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
      ],
      control: 'select',
    },
    verticalPadding: {
      description: 'Set vertical padding',
      type: 'string',
      table: {
        defaultValue: { summary: 'sm' },
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
      ],
      control: 'select',
    },
    rows: {
      description: 'Set text area rows attribute (makes taller)',
      type: 'number',
      table: {
        defaultValue: { summary: 1 },
      },
    },
  },
};

export default config;

const Template = (args: typeof Default) => (
  <ConfigProvider>
    <Textarea {...args} />
  </ConfigProvider>
);

export const Default = Template.bind({});

Default.args = {
  resizable: false,
  border: {
    top: '1px solid black',
    right: '1px solid black',
    bottom: '1px solid black',
    left: '1px solid black',
  },
  borderColor: null,
  radius: null,
  placeholder: 'Write here ',
  family: '',
  textColor: 'dark',
  fontSize: 'md',
  disabled: false,
  lateralPadding: 'sm',
  verticalPadding: 'sm',
  rows: 1,
};
