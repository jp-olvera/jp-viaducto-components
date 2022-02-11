import React from 'react';
import { SBConfigI } from '../../../sb';
import { Title } from '..';
import { ConfigProvider } from '../../../providers';

const config: SBConfigI = {
  title: 'FronteraUI/Typography/Title',
  component: Title,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    level: {
      description: 'value for title size, values between 1 - 6 or D1 - D4',
      table: {
        defaultValue: { summary: '1' },
        type: { summary: 'string' },
      },
      options: ['D1', 'D2', 'D3', 'D4', '1', '2', '3', '4', '5', '6'],
      control: {
        type: 'select',
      },
    },
    family: {
      description: 'Font family',
      table: {
        type: { summary: 'string' },
      },
      control: 'text',
    },
    fontStyle: {
      description: 'value for font-style property',
      table: {
        defaultValue: { summary: 'normal' },
        type: { summary: 'string' },
      },
      options: ['normal', 'italic'],
      control: {
        type: 'select',
      },
    },
    lineHeight: {
      description:
        'Size variation for line-height property, could be "xs", "sm", "md", "lg" or set your preferred value',
      table: {
        defaultValue: { summary: 'md' },
        type: { summary: 'string' },
      },
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
    },
    margin: {
      description: 'Value for margin property',
      table: {
        defaultValue: { summary: '0' },
        type: { summary: 'string' },
      },
    },
    spacing: {
      description: 'Value for letter-spacing property',
      table: {
        defaultValue: { summary: 'normal' },
        type: { summary: 'string' },
      },
    },
    weight: {
      description: 'value for font-weight property',
      table: {
        defaultValue: { summary: 'normal' },
        type: { summary: 'string' },
      },
      options: ['normal', 'bold'],
      control: {
        type: 'select',
      },
    },
    align: {
      description: 'value for text-align property',
      table: {
        defaultValue: { summary: 'left' },
        type: { summary: 'string' },
      },
      options: ['left', 'right', 'center'],
      control: {
        type: 'select',
      },
    },
    color: {
      description: 'value for color property',
      table: {
        defaultValue: { summary: '#050505' },
        type: { summary: 'string' },
      },
      control: {
        type: 'color',
      },
    },
  },
};

export default config;

const Template = (args: typeof Heading) => (
  <ConfigProvider>
    <Title {...args}>The quick brown fox jumps over the lazy dog</Title>
  </ConfigProvider>
);

export const Heading = Template.bind({});

Heading.args = {
  level: '1',
  weight: '400',
  fontStyle: 'normal',
  margin: '0',
  align: 'left',
  spacing: 'normal',
  lineHeight: 'md',
  color: '#050505',
  verticalAlign: 'baseline',
};
export const Display = Template.bind({});

Display.args = {
  level: 'D1',
  weight: '400',
  fontStyle: 'normal',
  margin: '0',
  align: 'left',
  spacing: 'normal',
  lineHeight: 'md',
  color: '#050505',
  verticalAlign: 'baseline',
};
