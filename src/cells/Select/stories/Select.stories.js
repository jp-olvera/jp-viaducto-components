import React from 'react';
import { Select } from '..';
import { ConfigProvider } from '../../../providers';

export default {
  title: 'Andamio/Cells/Controls/Select',
  component: Select,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    size: {
      description: 'Set size of the select component',
      type: { summary: 'String', required: false },
      table: {
        defaultValue: { summary: 'sm' },
      },
      control: 'select',
      options: ['sm', 'md', 'lg'],
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
      description:
        'Set border radius property (if is a number, border radius will be set as "rem", if it is a string will be set as marked)',
      type: { summary: 'Number/String', required: false },
      table: {
        defaultValue: { summary: 0 },
      },
    },
    border: {
      description: 'Set the border(s) of the component',
      type: { summary: 'Object(top, bottom, left, right)', required: false },
      table: {
        defaultValue: { summary: 'none' },
      },
    },
  },
};

const Template = (args) => (
  <ConfigProvider>
    <Select {...args}>
      <option>Check out this select</option>
      <option value='1'>1</option>
      <option value='2'>2</option>
      <option value='3'>3</option>
    </Select>
  </ConfigProvider>
);

export const Default = Template.bind({});

Default.args = {
  size: 'sm',
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
  radius: '',
};
