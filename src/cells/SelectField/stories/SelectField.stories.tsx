import React from 'react';
import { ConfigProvider } from '../../../providers';
import { SelectField } from '..';

const config: any = {
  title: 'Ballena/Cells/FormFields/SelectField',
  component: SelectField,
  parameters: { controls: { sort: 'requiredFirst' } },
};

export default config;

const Template = ({...args}:any) => (
  <ConfigProvider>
    <SelectField {...args}>
      <option> </option>
      <option value='male'>male</option>
      <option value='female'>female</option>
      <option value='other'>other</option>
    </SelectField>
  </ConfigProvider>
);

export const Default = Template.bind({});

Default.args = {
  label: 'Label:',
};
