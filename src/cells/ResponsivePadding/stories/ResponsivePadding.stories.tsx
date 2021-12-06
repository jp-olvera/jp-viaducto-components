import React from 'react';
import { ResponsivePadding } from '..';
import { ConfigProvider } from '../../../providers';

const commonOptions = {
  type: {
    summary: 'string',
    required: false,
  },
  table: {
    defaultValue: { summary: null },
  },
  options: [null, 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
  control: {
    type: 'select',
  },
};

const config: any = {
  title: 'Ballena/Layout/ResponsivePadding',
  component: ResponsivePadding,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    top: {
      description: 'padding-top',
      ...commonOptions,
    },
    bottom: {
      description: 'padding-bottom',
      ...commonOptions,
    },
    left: {
      description: 'padding-left',
      ...commonOptions,
    },
    right: {
      description: 'padding-right',
      ...commonOptions,
    },
    vertical: {
      description: 'padding-top/padding-bottom',
      ...commonOptions,
    },
    horizontal: {
      description: 'padding-left/padding-right',
      ...commonOptions,
    },
  },
};

export default config;

const Template = (args: typeof Default) => (
  <ConfigProvider>
    <div style={{ width: '600px', height: '300px' }}>
      <ResponsivePadding {...args} style={{ background: 'pink' }}>
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'lightgrey',
          }}
        >
          Resize the window so you can watch the behaviour
        </div>
      </ResponsivePadding>
    </div>
  </ConfigProvider>
);

export const Default = Template.bind({});

Default.args = {};
