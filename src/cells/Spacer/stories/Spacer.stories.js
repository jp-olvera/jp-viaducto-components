import React from 'react';
import { Spacer } from '..';

export default {
  title: 'Andamio/Cells/Spacer',
  component: Spacer,
  argTypes: {
    direction: {
      control: {
        type: 'radio',
        options: ['vertical', 'horizontal']
      }
    },
    sb: {
      control: {
        type: 'color',
      }
    }
  }
}

const Template = (args) => <Spacer {...args} />

export const Vertical = Template.bind({});

Vertical.args = {
  size: "sm",
  sb: '#000'
}
export const Horizontal = Template.bind({});

Horizontal.args = {
  size: "sm",
  direction: "horizontal",
  sb: '#000'
}
