import React from 'react';
import { Hideable } from '..';
import { ConfigProvider } from '../../../providers';

export default {
  title: 'Andamio/Cells/Hideable',
  component: Hideable,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    visibleOn: {
      description: 'Breakpoint from which it is gonna be visible',
      type: { summary: 'String', required: false },
      table: {
        defaultValue: { summary: null },
      },
      options: [null, 'xs', 'sm', 'md', 'lg', 'xl'],
      control: {
        type: 'select',
      },
    },
    after: {
      description: 'Indicates if visible after the breakpoint selected',
      type: { summary: 'Boolean', required: false },
      table: {
        defaultValue: { summary: true },
      },
    },
    children: {
      description:
        'The Element to be wrapped, this element will be invisible when the screen hits the breakpoint',
      type: { summary: 'JSX Element', required: true },
      table: {
        defaultValue: { summary: null },
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
  after: false,
};
