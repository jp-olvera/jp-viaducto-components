import React from 'react';
import { ConfigProvider } from '../../../providers';

import { Notification } from '..';

export default {
  title: 'Andamio/Organisms/Notification',
  component: Notification,
  argTypes: {
    type: {
      options: ['success', 'warning', 'danger', 'info'],
      control: {
        type: 'select',
      },
    },
    elevation: {
      options: [1, 2, 3],
      control: {
        type: 'select',
      },
    },
    elevationDirection: {
      options: [
        'top',
        'right',
        'bottom',
        'left',
        'topRight',
        'topLeft',
        'bottomRight',
        'bottomLeft',
      ],
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
  top: true,
  elevation: 1,
  elevationDirection: 'top',
};
