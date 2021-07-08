import React from 'react';
import { SBConfigI } from '../../../sb';
import { Progress } from '..';
import { ConfigProvider } from '../../../providers';

const config: SBConfigI = {
  title: 'Andamio/Cells/Progress',
  component: Progress,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    loader: {
      description: 'Set the progress indicator',
      type: { summary: 'String', required: true },
      table: {
        defaultValue: { summary: 'circle' },
      },
      control: 'select',
      options: ['circle', 'progress', 'steps'],
    },
    completedSteps: {
      description: 'Indicates the number of completed steps as a light green',
      type: { summary: 'Number', required: true },
      table: {
        defaultValue: { summary: 0 },
      },
    },
    currentStep: {
      description: 'Indicates actual step as a dark green',
      type: { summary: 'Number', required: true },
      table: {
        defaultValue: { summary: 0 },
      },
    },
    totalSteps: {
      description:
        'Indicates (and divides the progress indicator) the total steps',
      type: { summary: 'Number', required: true },
      table: {
        defaultValue: { summary: 0 },
      },
    },
    transition: {
      description: 'Set the color of the component',
      type: { summary: 'String', required: false },
      table: {
        defaultValue: { summary: 'ease' },
      },
    },
    color: {
      description: 'Set the color of the component',
      type: { summary: 'String', required: false },
      table: {
        defaultValue: { summary: '#3AE25F' },
      },
      control: 'color',
    },
  },
};

export default config;

const Template = (args: typeof Default) => (
  <ConfigProvider>
    <Progress {...args} />
  </ConfigProvider>
);

export const Default = Template.bind({});

Default.args = {
  totalSteps: 5,
  completedSteps: 4,
  currentStep: 2,
  loader: 'circle',
  transition: 'ease',
  color: '#3AE25F',
};

export const ProgressBar = Template.bind({});

ProgressBar.args = {
  totalSteps: 5,
  completedSteps: 4,
  loader: 'progress',
  transition: 'ease',
  color: '#3AE25F',
};

export const Steps = Template.bind({});

Steps.args = {
  totalSteps: 5,
  completedSteps: 4,
  loader: 'steps',
  transition: 'ease',
  color: '#3AE25F',
  finishTextColor: 'red',
  family: 'Roboto',
  titleLevel: '4',
};
