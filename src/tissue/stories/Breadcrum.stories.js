/* eslint-disable no-alert */
import React from 'react';
import { Breadcrums } from '..';
import { ConfigProvider } from '../../providers';

export default {
  title: 'Andamio/Tissues/Breadcrum',
  component: Breadcrums,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    separatorSpacing: {
      description: 'The horizontal spacing between the label and the diagonal',
      type: {
        summary: 'string',
        required: false,
      },
      table: {
        defaultValue: { summary: 'sm' },
      },
      options: [
        'none',
        'nano',
        'micro',
        'tiny',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        'xxl',
      ],
      control: {
        type: 'select',
      },
    },
    family: {
      type: {
        summary: 'string',
        required: false,
      },
      control: {
        type: 'text',
      },
    },
    fontSize: {
      type: {
        summary: 'string',
        required: false,
      },
      control: {
        type: 'text',
      },
    },
  },
};

const options = [
  { label: '1', href: '#' },
  {
    label: '2',
    onClick: () => {
      alert('3');
    },
  },
  {
    label: '3',
    onClick: () => {
      alert('hola2');
    },
  },
  { label: '4', href: '#' },
  { label: '5', href: '#' },
  {
    label: '6',
    onClick: () => {
      alert('hola1');
    },
    active: true,
  },
];

const Template = (args) => (
  <ConfigProvider>
    <Breadcrums {...args}>
      {/* <Breadcrum label='Parent' href='#' />
      <Breadcrum label='Parent' onClick={() => {}} />
      <Breadcrum label='Parent' onClick={() => {}} />
      <Breadcrum label='Parent' href='#' active /> */}
    </Breadcrums>
  </ConfigProvider>
);

export const Default = Template.bind({});

Default.args = {
  options,
  separatorSpacing: 'sm',
  fontSize: '16px',
};
