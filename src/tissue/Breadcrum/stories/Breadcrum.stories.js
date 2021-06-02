/* eslint-disable no-alert */
import React from 'react';
import { Breadcrums } from '../..';
import { ConfigProvider } from '../../../providers';

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
        type: 'select',
      },
      options: ['xxs', 'xs', 'sm', 'md', 'lg'],
    },
  },
};

const options = [
  { label: 'Home', href: '#' },
  {
    label: 'Introducción',
    onClick: () => {
      alert('3');
    },
  },
  {
    label: 'Section 1',
    onClick: () => {
      alert('hola2');
    },
  },
  { label: 'Chapter 1', href: '#' },
  { label: 'The 5', href: '#' },
  {
    label: 'Page 4',
    onClick: () => {
      alert('hola1');
    },
    active: true,
  },
];
// const options = [
//   {
//     label: 'Go back',
//     href: 'https://google.com',
//     onClick: undefined,
//     target: undefined,
//   },
// ];

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
  fontSize: 'md',
};
