import React from 'react';
import { SBConfigI } from '../../../sb';
import { Select } from '..';
import { ConfigProvider } from '../../../providers';

const config: SBConfigI = {
  title: 'Andamio/Cells/Controls/Select',
  component: Select,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    inputSize: {
      description: 'Set size of the select component',
      type: { summary: 'String', required: false },
      table: {
        defaultValue: { summary: 'default' },
      },
      control: 'select',
      options: ['xsmall', 'small', 'default', 'large'],
    },
    fontSize: {
      description: 'Set the font size',
      type: { summary: 'String', required: false },
      table: {
        defaultValue: { summary: 'md' },
      },
      options: ['xxs', 'xs', 'sm', 'md', 'lg'],
      control: {
        type: 'select',
      },
    },
    background: {
      description: 'Set background color for the select component',
      type: { summary: 'String', required: false },
      table: {
        defaultValue: { summary: '#fff' },
      },
      control: 'color',
    },
    color: {
      description: 'Set font color for the select component',
      type: { summary: 'String', required: false },
      table: {
        defaultValue: { summary: '#000' },
      },
      control: 'color',
    },
    radius: {
      description: 'Set border radius property',
      type: { summary: 'String', required: false },
      table: {
        defaultValue: { summary: 'none' },
      },
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
    },
    border: {
      description: 'Set the border(s) of the component',
      type: { summary: 'String', required: false },
      table: {
        defaultValue: { summary: 'all' },
      },
      control: 'select',
      options: ['none', 'bottom', 'all'],
    },
    multiple: {
      description: 'Set the argument to choose multiple options',
      type: { summary: 'Boolean', required: false },
      table: { defaultValue: { summary: false } },
    },
    onChange: {
      description: 'Trigger an action',
      type: { summary: 'Function', required: false },
      table: { defaultValue: { summary: null } },
    },
    label: {
      description: 'If it is defined, set a label in the select wrapper',
      type: { summary: 'string', required: false },
      table: { defaultValue: { summary: null } },
    },
    labelPosition: {
      description:
        'If it is defined, set a label overlap/outside the select wrapper',
      type: { summary: 'string', required: false },
      table: { defaultValue: { summary: 'outside' } },
      control: 'select',
      options: ['outside', 'overlap'],
    },
  },
};

export default config;

const Template = (args: typeof Default) => (
  <ConfigProvider>
    If <i>multiple</i> sets to <code>true</code>, use ctrl/command (depends on
    your OS) and select the choices
    <br />
    <br />
    <br />
    <Select {...args}>
      <option value='1'>1</option>
      <option value='2'>2</option>
      <option value='3'>3</option>
    </Select>
  </ConfigProvider>
);

export const Default = Template.bind({});

Default.args = {
  inputSize: 'small',
  border: 'all',
  fontSize: 'md',
  fontFamily: 'Roboto',
  background: '#fff',
  color: '#000',
  radius: 'none',
  onChange: () => {},
  multiple: false,
  label: 'Title',
  labelPosition: 'outside',
};

export const Multiple = Template.bind({});

Multiple.args = {
  inputSize: 'default',
  border: 'all',
  fontSize: 'md',
  fontFamily: 'Roboto',
  background: '#fff',
  color: '#000',
  radius: 'none',
  onChange: () => {},
  multiple: true,
};
