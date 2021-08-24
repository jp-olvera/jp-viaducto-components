import React from 'react';
import { SBConfigI } from '../../../sb';
import { DatePicker } from '..';
import { ConfigProvider } from '../../../providers';

const config: SBConfigI = {
  title: 'Ballena/Cells/Controls/Inputs/DatePicker',
  component: DatePicker,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {},
};

export default config;

const Template = (args: typeof Default) => (
  <ConfigProvider>
    <DatePicker {...args} />
  </ConfigProvider>
);

export const Default = Template.bind({});

Default.args = {};
