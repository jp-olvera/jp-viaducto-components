import React from 'react';
import { Spacer } from '..';
import { ConfigProvider } from '../../../providers';

export default {
  title: 'Andamio/Cells/Spacer',
  component: Spacer,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    direction: {
      description:
        'Set direction to place the container to fill the parent wrapper',
      type: { summary: 'String', required: true },
      table: {
        defaultValue: { summary: 'vertical' },
      },
      options: ['vertical', 'horizontal'],
      control: {
        type: 'select',
      },
    },
    size: {
      description: 'Set the size of the component',
      type: { summary: 'String', required: true },
      table: {
        defaultValue: { summary: 'none' },
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
      control: {
        type: 'select',
      },
    },
    sb: {
      description: 'Set a border color to see the component',
      type: { summary: 'String', required: false },
      table: {
        defaultValue: { summary: 'null' },
      },
      control: {
        type: 'color',
      },
    },
  },
};

const Template = (args) => (
  <ConfigProvider>
    <Spacer {...args} />
  </ConfigProvider>
);

export const Vertical = Template.bind({});

Vertical.args = {
  size: 'sm',
  sb: '#000',
};
export const Horizontal = Template.bind({});

Horizontal.args = {
  size: 'sm',
  direction: 'horizontal',
  sb: '#000',
};
