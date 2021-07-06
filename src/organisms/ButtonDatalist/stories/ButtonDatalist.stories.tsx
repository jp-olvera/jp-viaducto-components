/* eslint-disable no-console */
import React from 'react';
import { SBConfigI } from 'sb';
import { ButtonDatalist } from '..';

import { ConfigProvider } from '../../../providers';

const config: SBConfigI = {
  title: 'Andamio/Organisms/ButtonDatalist',
  component: ButtonDatalist,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    options: {
      description: 'Set the options for the datalist',
      table: {
        type: { summary: 'string[]', required: true },
      },
    },
    buttonLabel: {
      description: ' Set the button label',
      table: {
        type: { summary: 'string', required: false },
        defaultValue: 'Save',
      },
      control: 'text',
    },
    titleComponent: {
      description: 'Set the title fot the component',
      table: {
        type: { summary: 'string', required: false },
        defaultValue: 'Title',
      },
      control: 'text',
    },
    family: {
      description: ' Set font family',
      table: {
        type: { summary: 'string', required: false },
      },
    },
    onClick: {
      description: 'Triggers and action',
      table: {
        type: { summary: 'Function', required: false },
        defaultValue: null,
      },
    },
    selectedOptionsList: {
      description: 'Use in case of pre-selected options',
      table: {
        type: { summary: 'string[]', required: false },
        defaultValue: null,
      },
    },
  },
};

export default config;

const Template = (args: typeof Default) => (
  <ConfigProvider>
    <ButtonDatalist {...args} />
  </ConfigProvider>
);

export const Default = Template.bind({});

Default.args = {
  options: ['Safari', 'Chrome', 'Opera', 'Explorer', 'Edge'],
  buttonLabel: 'Assign to Access Groups',
  titleComponent: 'Access Groups',
  family: 'Roboto',
  onClick: () => {},
  selectedOptionsList: ['Safari', 'Chrome'],
};
