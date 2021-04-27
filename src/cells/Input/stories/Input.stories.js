import React from 'react';
import { A } from '..';

export default {
  title: 'Andamio/Cells/Input',
  component: A,
  argTypes: {
    border: {
      options: ['overlap', 'bottom', 'default'],
      control: {
        type: 'radio',
      },
    },
    type: {
      options: ['text', 'password'],
      control: {
        type: 'select',
      },
    },
    size: {
      options: ['default', 'sm', 'md', 'lg', 'full'],
      control: {
        type: 'select',
      },
    },
    iconHelper: {
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
  },
};

const Template = (args) => <A {...args} />;

export const Default = Template.bind({});

Default.args = {
  size: 'default',
  label: 'Label',
  iconRequired: false,
  border: 'default',
  disabled: false,
  type: 'text',
  iconHelper: null,
  id: 'input',
};
