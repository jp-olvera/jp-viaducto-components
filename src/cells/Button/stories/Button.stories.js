import React from 'react';
import { Button } from '..';
import { ConfigProvider } from '../../../providers';

export default {
  title: 'Andamio/Cells/Button',
  component: Button,
  argTypes: {
    size: {
      options: ['small', 'default', 'large'],
      control: {
        type: 'radio',
      },
    },
  },
};

const Template = (args) => (
  <ConfigProvider>
    <Button {...args} />
  </ConfigProvider>
);

const Icon = ({ icon = '🥵' }) => <p>{icon}</p>;

export const Default = Template.bind({});

Default.args = {
  label: 'Button',
  size: 'default',
  lead: false,
  icon: Icon({ icon: '🥵' }).props.children,
};
export const Small = Template.bind({});

Small.args = {
  label: 'Button',
  size: 'small',
  lead: false,
  icon: Icon({ icon: '🥵' }).props.children,
};

export const IconOnly = Template.bind({});

IconOnly.args = {
  size: 'small',
  icon: Icon({ icon: '🥵' }).props.children,
  lead: false,
};
