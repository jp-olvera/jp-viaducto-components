import React from 'react';
import { Radio } from '..';
import { ConfigProvider } from '../../../providers';

export default {
  title: 'FronteraUI/Controls/Inputs/Radio',
  component: Radio,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    color: {
      control: 'color',
    },
  },
};

const Template = (args) => (
  <ConfigProvider>
    <Radio {...args} />
    <Radio {...args} />
  </ConfigProvider>
);

export const Default = Template.bind({});

Default.args = {
  label: 'Label',
  disabled: false,
  name: 'radio',
  inputSize: 'lg',
  fontSize: 'md',
  spacing: 'none',
};
