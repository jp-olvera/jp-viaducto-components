import React from 'react';
import { SBConfigI } from 'sb';
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
      options: ['outside', 'overlap', 'bottom', 'default'],
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
      options: [
        'text',
        'number',
        'card',
        'date',
        'color',
        'phone',
        'time',
        'datalist',
      ],
      control: {
        type: 'select',
      },
    },
    icon: {
      description: 'Add an icon helper',
      type: { summary: 'String', required: false },
      table: {
        defaultValue: { summary: 'null' },
      },
      options: [
        null,
        'card',
        'color',
        'upload',
        'date',
        'search',
        'data',
        'phone',
        'mail',
        'data',
        'time',
        'grid',
        'visa',
        'mastercard',
        'american-express',
      ],
      control: {
        type: 'select',
      },
    },
    size: {
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
    isInvalid: {
      description: 'Set an icon to indicate invalid input',
      type: { summary: 'Boolean', required: false },
      table: {
        defaultValue: { summary: false },
      },
    },
    isValid: {
      description: 'Set an icon to indicate valid input',
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
    borderColor: {
      description: 'Set the border color (if the border is defined)',
      type: { summary: 'String', required: false },
      table: {
        defaultValue: { summary: null },
      },
      control: 'color',
    },
    iconColor: {
      description: 'Set the icon color (if the border is defined)',
      type: { summary: 'String', required: false },
      table: {
        defaultValue: { summary: null },
      },
      control: 'color',
    },
    dataListConfiguration: {
      description:
        'Set the configuration (options and pill color) if the datalist type is selected',
      type: {
        summary:
          '{options: any[], pillColor: string, pillTextColor:string}/null, selected:[]',
        required: false,
      },
      table: {
        defaultValue: { summary: null },
      },
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
  isInvalid: false,
  isValid: false,
  required: true,
  disabled: false,
  transition: 'ease',
  borderColor: null,
  iconColor: null,
  icon: 'grid',
  size: 'small',
};

export const Card = Template.bind({});

Card.args = {
  label: 'Card',
  type: 'card',
  icon: null,
  isInvalid: false,
  isValid: false,
  required: true,
  disabled: false,
  transition: 'ease',
  borderColor: null,
  iconColor: null,
  size: 'small',
};

export const Date = Template.bind({});

Date.args = {
  label: 'Date',
  type: 'date',
  icon: null,
  isInvalid: false,
  isValid: false,
  required: true,
  disabled: false,
  transition: 'ease',
  borderColor: null,
  iconColor: null,
  size: 'small',
};

export const Color = Template.bind({});

Color.args = {
  label: 'Color',
  type: 'color',
  icon: null,
  border: 'default',
  isInvalid: false,
  isValid: false,
  required: false,
  disabled: false,
  transition: 'ease',
  size: 'small',
  borderColor: null,
  iconColor: null,
};
export const Phone = Template.bind({});

Phone.args = {
  label: 'Phone',
  type: 'phone',
  icon: null,
  border: 'default',
  isInvalid: false,
  isValid: false,
  required: false,
  disabled: false,
  transition: 'ease',
  size: 'small',
  borderColor: null,
  iconColor: null,
};
export const Time = Template.bind({});

Time.args = {
  label: 'Time',
  type: 'time',
  icon: null,
  border: 'default',
  isInvalid: false,
  isValid: false,
  required: false,
  disabled: false,
  transition: 'ease',
  size: 'small',
  borderColor: null,
  iconColor: null,
};

export const Datalist = Template.bind({});

Datalist.args = {
  label: 'Choose your options',
  type: 'datalist',
  icon: null,
  border: 'default',
  isInvalid: false,
  isValid: false,
  required: false,
  disabled: false,
  transition: 'ease',
  size: 'small',
  id: 'data',
  borderColor: null,
  iconColor: null,
  dataListConfiguration: {
    options: ['Javascript', 'Dart', 'Python', 'Java', 'Ruby', 'PHP'],
    pillTextColor: '#000',
    pillColor: '#FFF0A5',
  },
};