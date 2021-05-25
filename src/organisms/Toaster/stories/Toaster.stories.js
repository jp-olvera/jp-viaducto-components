import React from 'react';
import { Toaster } from '..';
import ConfigProvider from '../../../providers/ConfigProvider';

export default {
  title: 'Andamio/Organisms/Toaster',
  component: Toaster,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    active: {
      description: 'Toaster status tha indicates if it should be shown',
      type: { name: 'boolean', required: true },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    elevation: {
      description: 'The elevation level it should take, one of 1/2/3',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 1 },
      },
      options: [1, 2, 3],
      control: {
        type: 'select',
      },
    },
    elevationDirection: {
      description: "The elevation direction, if '' direction goes everywhere",
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "''" },
      },
      options: [
        '',
        'top',
        'right',
        'bottom',
        'left',
        'topRight',
        'topLeft',
        'bottomRight',
        'bottomLeft',
      ],
      control: {
        type: 'select',
      },
    },
    right: {
      description: 'Boolean that indicates if it should appear on the right',
      type: { name: 'boolean', required: true },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
    },
    text: {
      description: 'Text to be shown',
      type: { name: 'string', required: true },
      table: {
        type: { summary: 'string' },
      },
    },
    title: {
      description: 'Title to be shown',
      type: { name: 'string', required: true },
      table: {
        type: { summary: 'string' },
      },
    },
    top: {
      description: 'Boolean that indicates if it should appear on the top',
      type: { name: 'boolean', required: true },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
    },
    type: {
      description: 'One of success/danger/warning/info',
      type: { name: 'string' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'success' },
      },
      options: ['success', 'warning', 'info', 'danger'],
      control: {
        type: 'select',
      },
    },
    transition: {
      description: 'Linear transition to use',
      type: { name: 'string' },
      table: { type: { summary: 'string' }, defaultValue: { summary: 'ease' } },
    },
  },
};

const Template = (args) => (
  <ConfigProvider>
    <Toaster {...args} />
  </ConfigProvider>
);

export const Default = Template.bind({});

Default.args = {
  text: 'El mensaje del Toaster',
  title: 'Success',
  active: true,
  top: true,
  right: true,
  type: 'success',
  elevation: 1,
  elevationDirection: 'top',
  transition: 'ease',
};
