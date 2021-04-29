import React from 'react';
import { Input, Icon } from '..';

export default {
  title: 'Andamio/Cells/Input',
  component: Input,
  argTypes: {
    border: {
      options: ['overlap', 'bottom', 'default'],
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
      options: ['default', 'large']
    }
  },
};

const Template = (args) => {
  return (
    <Input {...args} />
  )
};

export const Default = Template.bind({});

Default.args = {
  label: 'Label',
  id: "nombre",
  icon: 'time',
  isInvalid: false,
  isValid: false,
  required: true
};