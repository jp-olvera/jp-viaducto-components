import React from 'react';
import { Paragraph } from '..';
import { ConfigProvider } from '../../../providers';

export default {
  title: 'Andamio/Cells/Paragraph',
  component: Paragraph,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    color: {
      description: 'It defines the paragraph color',
      type: { summary: 'String', required: false },
      table: {
        defaultValue: { summary: '#000' },
      },
      control: {
        type: 'color',
      },
    },
    lineHeight: {
      description: 'Defines the line height of the paragraph',
      type: { summary: 'String', required: false },
      table: {
        defaultValue: { summary: 'md' },
      },
      options: ['xs', 'sm', 'md', 'lg'],
      control: {
        type: 'select',
      },
    },
    fontStyle: {
      description: 'Defines the style of the letter',
      type: { summary: 'String', required: false },
      table: {
        defaultValue: { summary: 'normal' },
      },
      options: ['normal', 'italic'],
      control: {
        type: 'select',
      },
    },
    weight: {
      description: 'Set the bold (font weight) of the letter',
      type: { summary: 'String/number', required: false },
      table: {
        defaultValue: { summary: 'normal' },
      },
      options: ['normal', 'bold'],
      control: {
        type: 'select',
      },
    },
    align: {
      description: 'Aligns the text',
      type: { summary: 'String', required: false },
      table: {
        defaultValue: { summary: 'left' },
      },
      options: ['left', 'right', 'center'],
      control: {
        type: 'select',
      },
    },
    size: {
      description: 'Set the font size',
      type: { summary: 'String', required: false },
      table: {
        defaultValue: { summary: 'md' },
      },
      options: ['xxs', 'xs', 'sm', 'md', 'lg'],
      control: {
        type: 'select',
      },
    },
    spacing: {
      description: 'Set the letter spacing',
      type: { summary: 'String', required: false },
      table: {
        defaultValue: { summary: 'normal' },
      },
    },
    margin: {
      description: 'Set the margin taking the paragraph as reference',
      type: { summary: 'String', required: false },
      table: {
        defaultValue: { summary: '0' },
      },
    },
    family: {
      description: 'Set the font family',
      type: { summary: 'String', required: false },
      table: {
        defaultValue: { summary: 'DM Sans' },
      },
    },
  },
};

const Template = (args) => (
  <ConfigProvider>
    <Paragraph {...args}>
      This is a paragraph example, please write everything you need. Greetings.
      Bye.
    </Paragraph>
  </ConfigProvider>
);

export const Default = Template.bind({});

Default.args = {
  size: 'md',
  align: 'left',
  family: 'DM Sans',
  fontStyle: 'normal',
  margin: '0',
  weight: 'normal',
  spacing: 'normal',
  color: '#000',
  lineHeight: 'md',
};
