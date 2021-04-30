import React from 'react';
import { Title } from '..';
import { ConfigProvider } from '../../../providers';

export default {
  title: 'Andamio/Cells/Title',
  component: Title,
  argTypes: {
    level: {
      options: ['D1', 'D2', 'D3', 'D4', '1', '2', '3', '4', '5', '6'],
      control: {
        type: 'select',
      },
    },
    fontStyle: {
      options: ['normal', 'italic'],
      control: {
        type: 'select',
      },
    },
    lineHeight: {
      options: ['xs', 'sm', 'md', 'lg'],
      control: {
        type: 'select',
      },
    },
    weight: {
      options: ['normal', 'bold'],
      control: {
        type: 'select',
      },
    },
    align: {
      options: ['left', 'right', 'center'],
      control: {
        type: 'select',
      },
    },
    color: {
      control: {
        type: 'color',
      },
    },
  },
};

const Template = (args) => (
  <ConfigProvider>
    <Title {...args}>The quick brown fox jumps over the lazy dog</Title>
  </ConfigProvider>
);

export const Heading = Template.bind({});

Heading.args = {};

export const HeadingCustom = Template.bind({});

HeadingCustom.args = {
  level: '1',
  family: 'DM Sans',
  weight: '400',
  fontStyle: 'normal',
  margin: '0',
  align: 'left',
  spacing: 'normal',
  lineHeight: 'md',
  color: '#000',
};

export const Display = Template.bind({});

Display.args = {
  level: 'D1',
};
export const DisplayCustom = Template.bind({});

DisplayCustom.args = {
  level: 'D1',
  family: 'DM Sans',
  weight: 'normal',
  fontStyle: 'normal',
  margin: '0',
  align: 'left',
  spacing: 'normal',
  lineHeight: 'lg',
  color: '',
};
