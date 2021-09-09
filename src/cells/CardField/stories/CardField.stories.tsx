import React from 'react';
import { ConfigProvider } from '../../../providers';
import { CardField } from '..';

const config: any = {
  title: 'Ballena/Cells/FormFields/CardField',
  component: CardField,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    border: {
      description: 'Set the border for the input',
      type: { summary: 'String', required: false },
      table: {
        defaultValue: { summary: 'default' },
      },
      options: ['outside', 'overlap', 'bottom', 'none', 'default'],
      control: {
        type: 'select',
      },
    },
    inputSize: {
      description: 'Set the size (height) of the input',
      type: { summary: 'String', required: false },
      table: {
        defaultValue: { summary: 'default' },
      },
      control: 'select',
      options: ['xsmall', 'small', 'default', 'large'],
    },
    disabled: {
      description: 'Disables the input',
      type: { summary: 'Boolean', required: false },
      table: {
        defaultValue: { summary: false },
      },
    },
    label: {
      description: 'Set the label of the input',
      type: { summary: 'String', required: true },
      table: {
        defaultValue: { summary: '' },
      },
    },
    required: {
      description: 'Set an icon to indicate the input as required',
      type: { summary: 'Boolean', required: false },
      table: {
        defaultValue: { summary: false },
      },
    },
    borderColor: {
      description: 'Set the border color (if the border is defined)',
      type: { summary: 'String', required: false },
      table: {
        defaultValue: { summary: null },
      },
      control: 'color',
    },
  },
};

export default config;

const Template = ({...args}:any) => (
  <ConfigProvider>
    <CardField {...args} />
  </ConfigProvider>
);

export const Default = Template.bind({});

Default.args = {
  border: 'default',
  borderColor: '#001D48',
  disabled: false,
  family: '',
  inputSize: 'default',
  label: 'Your payment card:',
  placeholder: 'XXXX - XXXX - XXXX - XXXX',
  required: true,
  type: 'text',
  readOnly: false,
};
