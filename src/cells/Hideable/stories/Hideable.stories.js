import React from 'react';
import { Hideable } from '..';
import { ConfigProvider } from '../../../providers';

export default {
  title: 'Andamio/Cells/Hideable',
  component: Hideable,
  argTypes: {
    visibleOn: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: {
        type: 'select',
      },
    },
  },
};

const Template = (args) => (
  <ConfigProvider>
    <Hideable {...args}>
      <p>🥵😈 (resize your window)</p>
    </Hideable>
  </ConfigProvider>
);

export const Default = Template.bind({});

Default.args = {
  visibleOn: 'xs',
  after: false
};
