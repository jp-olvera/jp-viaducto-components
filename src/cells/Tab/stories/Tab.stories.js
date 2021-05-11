import React from 'react';
import { ConfigProvider } from '../../../providers';
import { Tab } from '..';

export default {
  title: 'Andamio/Cells/Tab',
  component: Tab,
};

const Template = (args) => (
  <ConfigProvider>
    <Tab {...args} />
  </ConfigProvider>
);

export const Default = Template.bind({});

Default.args = {
  text: 'Zombie Patrol',
  onClick: () => {
    alert('Hi there!');
  },
};
