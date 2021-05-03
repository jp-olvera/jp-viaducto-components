import React from 'react';
import { Dropdown } from '..';
import { ConfigProvider } from '../../../providers';

export default {
  title: 'Andamio/Cells/Dropdown',
  component: Dropdown,
  argTypes: {
    family: {
      options: ['Manrope', 'Roboto', 'DM Sans'],
      control: { type: 'select' },
    },
  },
};

const Template = (args) => {
  return (
    <ConfigProvider>
      <Dropdown {...args} />
    </ConfigProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  border: {
    top: '1px solid black',
    right: '1px solid black',
    bottom: '1px solid black',
    left: '1px solid black',
  },
  defaultText: 'Buscar por...',
  options: ['Razón Social', 'RFC', 'Nombre Comercial'],
};
