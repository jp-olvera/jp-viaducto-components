import React from 'react';
import { Input } from '..';
import { ConfigProvider } from '../../../providers';

export default {
  title: 'Andamio/Cells/Controls/Input',
  component: Input,
  argTypes: {
    border: {
      options: ['outside', 'overlap', 'bottom', 'default'],
      control: {
        type: 'select',
      },
    },
    type: {
      options: ['text', 'password'],
      control: {
        type: 'select',
      },
    },
    icon: {
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
        'time',
        'grid',
      ],
      control: {
        type: 'select',
      },
    },
    size: {
      control: 'select',
      options: ['default', 'large'],
    },
  },
};

const Template = (args) => (
  <ConfigProvider>
    <Input {...args} />
  </ConfigProvider>
);

export const Text = Template.bind({});

Text.args = {
  label: 'Text',
  id: 'text',
  type: 'text',
  isInvalid: false,
  isValid: false,
  required: false,
  disabled: false,
  transition: 'ease'
};

export const Password = Template.bind({});

Password.args = {
  label: 'Password',
  id: 'Password',
  type: 'password',
  icon: null,
  isInvalid: false,
  isValid: false,
  required: true,
  disabled: false,
  transition: 'ease'
};
