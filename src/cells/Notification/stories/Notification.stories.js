import React from 'react';
import { ConfigProvider } from '../../../providers';

import { Notification } from '..';

export default {
  title: 'Andamio/cells/Notification',
  component: Notification,
  argTypes: {
    type: {
      options: ['success', 'warning', 'error'],
      control: {
        type: 'select',
      },
    },
  },
};

const Template = (args) => {
  return (
    <ConfigProvider>
      <Notification {...args} />
    </ConfigProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  text: 'Notification content',
  active: true,
  type: 'success',
};
