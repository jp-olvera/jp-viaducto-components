import React from 'react';
import { SBConfigI } from '../../../sb';
import { Hideable } from '..';
import { ConfigProvider } from '../../../providers';

const config: SBConfigI = {
  title: 'Ballena/Layout/Hideable',
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

export default config;

const Template = (args: typeof Default) => (
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
