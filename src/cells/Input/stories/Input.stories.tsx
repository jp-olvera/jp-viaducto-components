import React from 'react';
import { SBConfigI } from '../../../sb';
import { Input } from '..';
import { ConfigProvider } from '../../../providers';

const config: SBConfigI = {
  title: 'Andamio/Cells/Controls/Input',
  component: Input,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    border: {
      description: 'Set the border for the input',
      type: { summary: 'String', required: false },
      table: {
        defaultValue: { summary: 'default' },
      },
      options: ['outside', 'overlap', 'bottom', 'none', 'default'],
      control: {
        type: 'select',
      },
    },
    type: {
      description: 'Set input type',
      type: { summary: 'String', required: true },
      table: {
        defaultValue: { summary: 'text' },
      },
      options: ['text', 'number', 'card', 'date', 'color', 'time'],
      control: {
        type: 'select',
      },
    },
    icon: {
      description: 'Add an icon helper',
      type: { summary: 'String', required: false },
      table: {
        defaultValue: { summary: null },
      },
      control: null,
    },
    iconRequired: {
      description: 'Add an icon helper for required inputs',
      type: { summary: 'String', required: false },
      table: {
        defaultValue: { summary: null },
      },
      control: null,
    },
    inputSize: {
      description: 'Set the size (height) of the input',
      type: { summary: 'String', required: false },
      table: {
        defaultValue: { summary: 'default' },
      },
      control: 'select',
      options: ['xsmall', 'small', 'default', 'large'],
    },
    disabled: {
      description: 'Disables the input',
      type: { summary: 'Boolean', required: false },
      table: {
        defaultValue: { summary: false },
      },
    },
    label: {
      description: 'Set the label of the input',
      type: { summary: 'String', required: true },
      table: {
        defaultValue: { summary: '' },
      },
    },
    required: {
      description: 'Set an icon to indicate the input as required',
      type: { summary: 'Boolean', required: false },
      table: {
        defaultValue: { summary: false },
      },
    },
    transition: {
      description: 'Set the transitionTimingFunction',
      type: { summary: 'String', required: false },
      table: {
        defaultValue: { summary: 'ease' },
      },
    },
    caption: {
      description: 'Set caption message',
      type: { summary: 'String', required: false },
      table: {
        defaultValue: { summary: '' },
      },
      control: 'text',
    },
    borderColor: {
      description: 'Set the border color (if the border is defined)',
      type: { summary: 'String', required: false },
      table: {
        defaultValue: { summary: null },
      },
      control: 'color',
    },
    iconColor: {
      description: 'Set the icon color ',
      type: { summary: 'String', required: false },
      table: {
        defaultValue: { summary: null },
      },
      control: 'color',
    },
    iconColorRequired: {
      description: 'Set the icon color required',
      type: { summary: 'String', required: false },
      table: {
        defaultValue: { summary: null },
      },
      control: 'color',
    },
  },
};

export default config;

const Template = (args: typeof Text) => (
  <ConfigProvider>
    <div style={{ margin: '2rem 0' }}>
      <Input {...args} />
    </div>
  </ConfigProvider>
);

export const Text = Template.bind({});

Text.args = {
  label: 'Text',
  border: 'default',
  type: 'text',
  required: true,
  disabled: false,
  transition: 'ease',
  borderColor: null,
  iconColor: null,
  icon: '❤',
  iconRequired: '⭕',
  inputSize: 'small',
  caption: 'Caption: this message has .caption className',
  readOnly: false,
};

export const Card = Template.bind({});

Card.args = {
  label: 'Card',
  type: 'card',
  icon: null,
  required: true,
  disabled: false,
  transition: 'ease',
  borderColor: null,
  iconColor: null,
  inputSize: 'small',
  readOnly: false,
};

export const Date = Template.bind({});

Date.args = {
  label: 'Date',
  type: 'date',
  icon: '❤',
  required: true,
  disabled: false,
  transition: 'ease',
  borderColor: null,
  iconColor: null,
  inputSize: 'small',
  readOnly: false,
};

export const Color = Template.bind({});

Color.args = {
  label: 'Color',
  type: 'color',
  icon: '❤',
  border: 'default',
  required: false,
  disabled: false,
  transition: 'ease',
  inputSize: 'small',
  borderColor: null,
  iconColor: null,
  readOnly: false,
};

export const Time = Template.bind({});

Time.args = {
  label: 'Time',
  type: 'time',
  icon: '❤',
  border: 'default',
  required: false,
  disabled: false,
  transition: 'ease',
  inputSize: 'small',
  borderColor: null,
  iconColor: null,
  readOnly: false,
};
