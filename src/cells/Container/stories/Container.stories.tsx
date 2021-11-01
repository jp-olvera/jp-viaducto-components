import React from 'react';
import { SBConfigI } from '../../../sb';
import { Container } from '..';
import { ConfigProvider } from '../../../providers';

const commonOptions = {
  type: {
    summary: 'string',
    required: false,
  },
  table: {
    defaultValue: { summary: null },
  },
  options: [null, 'none', 'nano', 'micro', 'tiny', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'],
  control: {
    type: 'select',
  },
};

const config: SBConfigI = {
  title: 'Ballena/Layout/Container',
  component: Container,
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
    expandHorizontal: {
      description: 'width 100%',
      type: { summary: 'boolean', required: false },
      table: {
        defaultValue: { summary: false },
        type: { summary: 'boolean' },
      },
      control: {
        type: 'boolean',
      },
    },
    expandVertical: {
      description: 'height 100%',
      type: { summary: 'boolean', required: false },
      table: {
        defaultValue: { summary: false },
        type: { summary: 'boolean' },
      },
      control: {
        type: 'boolean',
      },
    },
  },
};

export default config;

const Template = (args: typeof Default) => (
  <ConfigProvider>
    <div style={{ width: '600px', height: '300px' }}>
      <Container {...args} style={{ border: '1px solid black' }}>
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'lightgrey',
          }}
        >
          Hola
        </div>
      </Container>
    </div>
  </ConfigProvider>
);

export const Default = Template.bind({});

Default.args = {
  top: null,
  right: null,
  bottom: null,
  left: null,
  vertical: null,
  expandHorizontal: false,
  expandVertical: false,
  horizontal: null,
};
