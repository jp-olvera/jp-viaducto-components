import React from 'react';
import { Select } from '..';
import { ConfigProvider } from '../../../providers';

export default {
  title: 'Andamio/Cells/Controls/Select',
  component: Select,
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    fontSize: {
      options: ['xxs', 'xs', 'sm', 'md', 'lg'],
      control: {
        type: 'select',
      },
    },
    background: {control: 'color'},
    color: { control: 'color' },
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
  radius: null,
};
