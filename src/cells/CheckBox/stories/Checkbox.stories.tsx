import React from 'react';
import { SBConfigI } from '../../../sb';
import { Checkbox } from '..';
import { ConfigProvider } from '../../../providers';

const config: SBConfigI = {
  title: 'Ballena/Controls/Inputs/Checkbox',
  component: Checkbox,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    color: {
      control: 'color',
    },
  },
};

export default config;

const Template = (args: typeof Default) => (
  <ConfigProvider>
    <Checkbox {...args} />
  </ConfigProvider>
);

export const Default = Template.bind({});

Default.args = {
  label: 'Label',
  disabled: false,
  inputSize: 'lg',
  spacing: 'none',
  fontSize: 'md',
  id: 'check',
};
