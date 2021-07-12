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
      type: { summary: 'Object(top, bottom, left, right)', required: false },
      table: {
        defaultValue: { summary: 'none' },
      },
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
    titleProps: {
      description:
        'If it is defined, set a title in/on/over the select wrapper (affects the height)',
      type: { summary: '{label:string; position: string}', required: false },
      table: { defaultValue: { summary: null } },
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
  border: {
    top: '1px solid black',
    right: '1px solid black',
    bottom: '1px solid black',
    left: '1px solid black',
  },
  fontSize: 'md',
  fontFamily: 'Roboto',
  background: '#fff',
  color: '#000',
  radius: 'none',
  onChange: () => {},
  multiple: false,
  titleProps: null,
};

export const Multiple = Template.bind({});

Multiple.args = {
  inputSize: 'default',
  border: {
    top: '1px solid black',
    right: '1px solid black',
    bottom: '1px solid black',
    left: '1px solid black',
  },
  fontSize: 'md',
  fontFamily: 'Roboto',
  background: '#fff',
  color: '#000',
  radius: 'md',
  onChange: () => {},
  multiple: true,
};

const withTitleTemplate = (args: typeof withTitle) => (
  <ConfigProvider>
    Set in the Controls <code>in</code>/<code>on</code>/<code>over</code> to
    place the title
    <br />
    <br />
    <Select {...args}>
      <option value='1'>Change in control section</option>
      <option value='2'>Here it is just a option</option>
      <option value='3'>Hello World</option>
    </Select>
  </ConfigProvider>
);

export const withTitle = withTitleTemplate.bind({});

withTitle.args = {
  inputSize: 'default',
  border: {
    top: '1px solid black',
    right: '1px solid black',
    bottom: '1px solid black',
    left: '1px solid black',
  },
  fontSize: 'md',
  fontFamily: 'Roboto',
  background: '#fff',
  color: '#000',
  radius: 'lg',
  onChange: () => {},
  multiple: false,
  titleProps: { label: 'Title', position: 'in' },
};
