/* eslint-disable no-alert */
import React from 'react';
import { SBConfigI } from '../../../sb';
import { Breadcrums, Breadcrum } from '..';
import { ConfigProvider } from '../../../providers';

const config: SBConfigI = {
  title: 'Ballena/Tissues/Breadcrum',
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

export default config;

const Template = (args: typeof Default) => (
  <ConfigProvider>
    <Breadcrums {...args}>
      <Breadcrum label='1' href='#' />
      <Breadcrum label='2' onClick={() => {}} />
      <Breadcrum label='3' onClick={() => {}} />
      <Breadcrum label='4' href='#' />
      <Breadcrum label='5' href='#' />
      <Breadcrum label='6' href='#' />
      <Breadcrum label='7' href='#' />
      <Breadcrum label='8' href='#' />
      <Breadcrum label='9' href='#' active separator={false} />
    </Breadcrums>
  </ConfigProvider>
);

export const Default = Template.bind({});

Default.args = {
  separatorSpacing: 'sm',
  fontSize: 'md',
};

const Template2 = (args: typeof ExternalWrapper) => (
  <ConfigProvider>
    <Breadcrums {...args}>
      <Breadcrum label='1' href='#' />
      <Breadcrum label='2' onClick={() => {}} />
      <Breadcrum label='3' onClick={() => {}} />
      <Breadcrum label='4' href='#' />
      <Breadcrum label='5' href='#' />
      <Breadcrum label='6' href='#' />
      <Breadcrum label='7' href='#' />
      <Breadcrum label='8' href='#' />
      <Breadcrum label='9' href='#' />
      <button
        type='button'
        onClick={() => {
          alert('You clicked');
        }}
        style={{ padding: '0', margin: '0', border: 'none' }}
      >
        <Breadcrum
          label='This could be the Router Link'
          active
          separator={false}
        />
      </button>
    </Breadcrums>
  </ConfigProvider>
);

export const ExternalWrapper = Template2.bind({});

ExternalWrapper.args = {
  separatorSpacing: 'sm',
  fontSize: 'md',
};

const Template3 = (args: typeof Individual) => (
  <ConfigProvider>
    <Breadcrums {...args}>
      <Breadcrum label='Visit google' href='https://www.google.com' />
    </Breadcrums>
  </ConfigProvider>
);

export const Individual = Template3.bind({});

Individual.args = {
  separatorSpacing: 'sm',
  fontSize: 'md',
};
