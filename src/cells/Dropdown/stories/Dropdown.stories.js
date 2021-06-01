import React from 'react';
import { Dropdown } from '..';
import { ConfigProvider } from '../../../providers';

export default {
  title: 'Andamio/Cells/Dropdown',
  component: Dropdown,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    family: {
      description: 'Set the font family',
      type: { summary: 'String', required: false },
      control: 'text',
    },
    activeColor: {
      description: 'Set a color when an option is selected',
      type: { summary: 'String', required: false },
      table: {
        defaultValue: { summary: '#ffd6ce' },
      },
      control: 'color',
    },
    size: {
      description: 'Set size (height) of the component',
      type: { summary: 'String', required: false },
      table: {
        defaultValue: { summary: 'default' },
      },
      control: 'select',
      options: ['default', 'small', 'large'],
    },
    border: {
      description: 'Set the border(s) of the component',
      type: { summary: 'Object(top, bottom, left, right)', required: false },
      table: {
        defaultValue: { summary: 'none' },
      },
    },
    defaultText: {
      description: 'Set the defalut text (acting like placeholder)',
      type: { summary: 'String', required: false },
      table: {
        defaultValue: { summary: null },
      },
    },
    options: {
      description: 'Set the options to choose in the component',
      type: { summary: 'String[]', required: true },
      table: {
        defaultValue: { summary: '[]' },
      },
    },
    height: {
      description: 'Overrides the height of the component',
      type: { summary: 'String', required: false },
      table: {
        defaultValue: { summary: null },
      },
    },
  },
};

const Template = (args) => (
  <ConfigProvider>
    <div
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
      }}
    >
      <Dropdown {...args} />
    </div>
  </ConfigProvider>
);

export const Default = Template.bind({});

Default.args = {
  border: {
    top: '1px solid black',
    right: '1px solid black',
    bottom: '1px solid black',
    left: '1px solid black',
  },
  defaultText: 'Buscar por...',
  options: ['Razón Social', 'RFC', 'Nombre Comercial'],
  activeColor: '#ffd6ce',
  height: '',
};
