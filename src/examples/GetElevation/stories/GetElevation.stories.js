import React from 'react';
import GetElevation from '../GetElevation';

export default {
  title: 'Andamio/Examples/GetElevation',
  component: GetElevation,
  argTypes: {
    elevation: {
      options: [1, 2, 3],
      control: {
        type: 'radio',
      },
    },
  },
};

const Template = (args) => <GetElevation {...args} />;

export const Default = Template.bind({});

Default.args = {};
