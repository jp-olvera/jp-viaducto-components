import React, { useState } from 'react';
import { SBConfigI } from '../../../sb';
import { ConfigProvider } from '../../../providers';

import { Pagination } from '..';
import { Button, Paragraph } from '../../..';

const config: { actions?: any } & SBConfigI = {
  title: 'Ballena/Navigation/Pagination',
  component: Pagination,
  parameters: {
    controls: { sort: 'requiredFirst' },
    actions: { argTypesRegex: '^on.*' },
  },
  argTypes: {
    onPageChange: { action: 'changed' },
  },
};

export default config;
const CustomRender = (
  current: number,
  type: any,
  element: any,
  extra: { disabled: boolean; isActive: boolean }
) => {
  return element === '...' ? (
    <span style={{ padding: '0 5px', marginRight: 8 }}>{element}</span>
  ) : (
    <Button
      label={element}
      size='small'
      variant={extra?.isActive ? 'solid' : 'outline'}
      disabled={extra?.disabled}
      style={{ marginRight: 8 }}
    />
  );
};
const Template = (args: typeof Default) => {
  const pageChange = (number: number) => {
    setState(number);
    console.log('page changed to: ' + number);
  };
  const [state, setState] = useState(1);
  return (
    <ConfigProvider>
      <Pagination itemRender={CustomRender} {...args} onPageChange={pageChange} />
      <Paragraph>Page: {state}</Paragraph>
    </ConfigProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  totalPages: 10,
  siblings: 1,
};
