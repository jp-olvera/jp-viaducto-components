import React from 'react';
import { ConfigProvider } from '../../../providers';
import { TextField } from '..';

const config: any = {
  title: 'Ballena/Cells/FormFields/TextField',
  component: TextField,
  parameters: { controls: { sort: 'requiredFirst' } },
};

export default config;

const Template = ({...args}:any) => (
  <ConfigProvider>
    <TextField {...args} />
  </ConfigProvider>
);

export const Default = Template.bind({});

Default.args = {
  label: 'Username:',
  placeholder: 'Enter your username',
  required: true,
};
