import React from 'react';
import { ConfigProvider } from '../../../providers';
import { Avatar } from '../index';

export default {
  title: 'Andamio/Cells/Avatar',
  component: Avatar,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
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
      options: ['large', 'default'],
      control: 'select',
    },
    alt: {
      description: 'alt attribute for avatar',
      type: { summary: 'string', required: false },
      table: {
        defaultValue: { summary: 'src atrtribute' },
      },
    },
  },
};

const Template = (args) => (
  <ConfigProvider>
    <Avatar {...args} />
  </ConfigProvider>
);

export const Default = Template.bind({});

Default.args = {
  src: 'https://i.mdel.net/i/db/2020/4/1332723/1332723-500w.jpg',
  alt: 'Avatar',
  size: 'default',
};
export const Large = Template.bind({});

Large.args = {
  src: 'https://i.mdel.net/i/db/2020/4/1332723/1332723-500w.jpg',
  alt: 'Avatar',
  size: 'large',
};
