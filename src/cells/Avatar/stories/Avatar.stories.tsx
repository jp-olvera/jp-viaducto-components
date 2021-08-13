import React from 'react';
import { SBConfigI } from '../../../sb';
import { ConfigProvider } from '../../../providers';
import { Avatar } from '../index';

const config: SBConfigI = {
  title: 'Ballena/Cells/Info/Avatar',
  component: Avatar,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    alt: {
      description: 'alt attribute for avatar',
      type: { summary: 'string', required: false },
      table: {
        defaultValue: { summary: 'src atrtribute' },
      },
    },
    clipPath: {
      description: 'Your own clip-path polygon',
      type: { summary: 'string', required: false },
      table: {
        defaultValue: { summary: 'undefined' },
      },
      control: 'text',
    },
    height: {
      description: 'Custom height',
      type: { summary: 'string', required: false },
      table: {
        defaultValue: { summary: 'undefined' },
      },
      control: 'text',
    },
    src: {
      description: 'Source content for the avatar',
      type: { summary: 'string', required: true },
      table: {
        defaultValue: { summary: null },
      },
    },
    size: {
      description: 'Size of the avatar',
      type: { summary: 'string', required: false },
      table: {
        defaultValue: { summary: 'default' },
      },
      options: ['large', 'default', 'small'],
      control: 'select',
    },
    width: {
      description: 'Custom width',
      type: { summary: 'string', required: false },
      table: {
        defaultValue: { summary: 'undefined' },
      },
      control: 'text',
    },
  },
};

export default config;

const Template = (args: typeof Default) => (
  <ConfigProvider>
    <Avatar {...args} />
  </ConfigProvider>
);

export const Default = Template.bind({});

Default.args = {
  src: 'https://i.mdel.net/i/db/2020/4/1332723/1332723-500w.jpg',
  alt: 'Avatar',
};
export const Large = Template.bind({});

Large.args = {
  src: 'https://i.mdel.net/i/db/2020/4/1332723/1332723-500w.jpg',
  alt: 'Avatar',
  size: 'large',
};
export const ClipPath = Template.bind({});

ClipPath.args = {
  src: 'https://i.mdel.net/i/db/2020/4/1332723/1332723-500w.jpg',
  alt: 'Avatar',
  size: 'large',
  clipPath: 'ellipse(67% 100% at 50% 100%)',
};
