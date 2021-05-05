import React from 'react';
import { Toaster } from '..';
import ConfigProvider from '../../../providers/ConfigProvider';

export default {
  title: 'Andamio/Organisms/Toaster',
  component: Toaster,
  argTypes: {
    type: {
      options: ['success', 'warning', 'info', 'danger'],
      control: {
        type: 'select',
      },
    },
  },
};

const Template = (args) => {
  return (
    <ConfigProvider>
      <Toaster {...args} />
    </ConfigProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  text: 'El mensaje del Toaster',
  title: 'Success',
  active: true,
  top: true,
  right: true,
  type: 'success',
};
