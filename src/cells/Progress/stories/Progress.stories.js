import React from 'react';
import { Progress } from '..';
import { ConfigProvider } from '../../../providers';

export default {
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
      description: 'Set transitionTimingFunction',
      type: { summary: 'String', required: false },
      table: {
        defaultValue: { summary: 'ease' },
      },
    },
  },
};

const Template = (args) => (
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
};
