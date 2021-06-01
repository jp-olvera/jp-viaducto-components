import React from 'react';
import { Range } from '..';
import { ConfigProvider } from '../../../providers';

export default {
  title: 'Andamio/Cells/Controls/Range',
  component: Range,
  parameters: { controls: { sort: 'requiredFirst' } },
  // argTypes: {
  //   transition: {
  //     description: 'Set transitionTimingFunction',
  //     type: { summary: 'String', required: false },
  //     table: {
  //       defaultValue: { summary: 'ease' },
  //     },
  //   },
  // },
};

const Template = (args) => (
  <ConfigProvider>
    <Range {...args} />
  </ConfigProvider>
);

export const Default = Template.bind({});

Default.args = {
  // totalSteps: 5,
  // completedSteps: 4,
  // currentStep: 2,
  // loader: 'circle',
  // transition: 'ease',
};
