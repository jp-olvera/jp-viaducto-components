import React from 'react';
import { SBConfigI } from '../../../sb';
import { Paragraph } from '..';
import { ConfigProvider } from '../../../providers';

const config: SBConfigI = {
  title: 'Ballena/Typography/Paragraph',
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
      description:
        'Size variation for line-height property, could be "xs", "sm", "md", "lg" or set your preferred value',
      table: {
        defaultValue: { summary: 'md' },
        type: { summary: 'string' },
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
        type: { summary: 'string' },
      },
      control: 'text',
    },
  },
};

export default config;

const Template = (args: typeof Default) => (
  <ConfigProvider>
    <Paragraph {...args}>
      This is a paragraph example, please write everything you need. Greetings. Bye.
    </Paragraph>
    <div style={{ maxWidth: 140, border: '1px dashed #d9d9d9', marginTop: 20 }}>
      <Paragraph {...args}>
        This is an example to test <code>ellipsis</code> prop, mark it as <code>true</code> in the
        controls
      </Paragraph>
    </div>
  </ConfigProvider>
);

export const Default = Template.bind({});

Default.args = {
  size: 'md',
  align: 'left',
  fontStyle: 'normal',
  margin: '0',
  weight: 'normal',
  spacing: 'normal',
  color: '',
  lineHeight: 'md',
};
