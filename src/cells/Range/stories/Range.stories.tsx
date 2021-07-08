import React from 'react';
import { SBConfigI } from '../../../sb';
import { Range } from '..';
import { ConfigProvider } from '../../../providers';

const config: SBConfigI = {
  title: 'Andamio/Cells/Controls/Range',
  component: Range,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    min: {
      description: 'The min value for the input.',
      type: { summary: 'number', required: true },
      table: {
        defaultValue: { summary: 0 },
      },
    },
    max: {
      description: 'The max value for the input.',
      type: { summary: 'number', required: true },
      table: {
        defaultValue: { summary: 100 },
      },
    },
    double: {
      description:
        'Set the input with double range slider if it is set to true',
      type: { summary: 'boolean', required: true },
      table: {
        defaultValue: { summary: false },
      },
    },
    color: {
      description: 'Set the background color for the slider',
      type: { summary: 'string', required: false },
      table: {
        defaultValue: { summary: '#9fe5e1' },
      },
      control: 'color',
    },
    fontSize: {
      description: 'Set our font size for the value',
      type: { summary: 'string', required: false },
      table: {
        defaultValue: { summary: 'md' },
      },
      control: 'select',
      options: ['xxs', 'xs', 'sm', 'md', 'lg'],
    },
    textColor: {
      description:
        'Set the text color for the value. Could be one of the configuration or HEX value',
      type: { summary: 'string', required: false },
      table: {
        defaultValue: { summary: 'dark' },
      },
    },
    family: {
      description: 'Set the font family for the value',
      type: { summary: 'string', required: false },
      table: {
        defaultValue: { summary: null },
      },
    },
    size: {
      description: 'Set the size of the range slider',
      type: { summary: 'string', required: false },
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    onChange: {
      description: 'Triggers an action when the value changes',
      type: { summary: 'function', required: false },
      table: {
        defaultValue: { summary: null },
      },
    },
  },
};

export default config;

const Template = (args: typeof Single) => (
  <ConfigProvider>
    The change between <code>true/false</code> in <b>DOUBLE</b> prop will fail
    because it is going to take the actual value as total. It is better if you
    change to ne next page to see thye diference between double and single Range
    component
    <br />
    <br />
    <br />
    <br />
    <Range {...args} />
  </ConfigProvider>
);

export const Double = Template.bind({});

Double.args = {
  min: 0,
  max: 100,
  color: null,
  fontSize: 'md',
  textColor: 'dark',
  family: 'null',
  size: 'lg',
  onChange: () => {},
  double: true,
};
export const Single = Template.bind({});

Single.args = {
  min: 0,
  max: 100,
  color: null,
  fontSize: 'md',
  textColor: 'dark',
  family: 'null',
  size: 'lg',
  onChange: () => {},
  double: false,
};
