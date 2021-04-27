import React from 'react';
import { Hideable } from '..';

export default {
  title: 'Andamio/Cells/Hideable',
  component: Hideable,
  argTypes: {
    visibleOn: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: {
        type: 'radio',
      },
    },
    after: {
      options: [true, false],
      control: {
        type: 'radio',
      },
    },
  },
};

const Template = (args) => (
  <Hideable {...args}>
    <p>🥵😈 (resize your window)</p>
  </Hideable>
);

export const Default = Template.bind({});

Default.args = {
  visibleOn: 'xs',
};
