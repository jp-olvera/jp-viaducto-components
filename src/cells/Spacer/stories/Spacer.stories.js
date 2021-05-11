import React from 'react';
import { Spacer } from '..';
import { ConfigProvider } from '../../../providers';

export default {
  title: 'Andamio/Cells/Spacer',
  component: Spacer,
  argTypes: {
    direction: {
      options: ['vertical', 'horizontal'],
      control: {
        type: 'radio',
      },
    },
    size: {
      options: ['none', 'nano', 'micro', 'tiny', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
      control: {
        type: 'select',
      },
    },
    sb: {
      control: {
        type: 'color',
      },
    },
  },
};

const Template = (args) => <ConfigProvider><Spacer {...args} /></ConfigProvider>;

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
