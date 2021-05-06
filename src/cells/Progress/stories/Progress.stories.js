import React from 'react';
import { Progress } from '..';
import { ConfigProvider } from '../../../providers';

export default {
  title: 'Andamio/Cells/Progress',
  component: Progress,
  argTypes: {
    loader: {
      control: 'select',
      options: ['circle', 'progress', 'steps'],
    },
  },
};

const Template = (args) => {
  return (
    <ConfigProvider>
      <Progress {...args} />
    </ConfigProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  totalSteps: 5,
  completedSteps: 4,
  currentStep: 2,
  loader: 'circle',
};
