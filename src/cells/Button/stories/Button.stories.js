import React from 'react';
import { Button } from '..';
import { ConfigProvider } from '../../../providers';

export default {
  title: 'Andamio/Cells/Controls/Button',
  component: Button,
  argTypes: {
    size: {
      options: ['small', 'default', 'large'],
      control: {
        type: 'select',
      },
    },
    variant: {
      options: ['primary', 'secondary', 'info', 'success', 'danger', 'warning'],
      control: {
        type: 'select',
      },
    },
  },
};

const Template = (args) => (
  <ConfigProvider>
    <Button {...args} />
  </ConfigProvider>
);

const Icon = ({ icon }) => <p>{ icon }</p>;

export const Default = Template.bind({});

Default.args = {
  label: 'Button',
  size: 'default',
  lead: false,
  icon: Icon({ icon: '🥵' }).props.children,
  height: '',
  variant: 'primary',
  colors: null,
  disabled: false,
};
export const Custom = Template.bind({});

Custom.args = {
  label: 'Button',
  size: 'default',
  lead: false,
  icon: Icon({ icon: '🥵' }).props.children,
  height: '',
  variant: 'primary',
  colors: null,
  disabled: false,
};
export const Small = Template.bind({});

Small.args = {
  label: 'Button',
  size: 'small',
  lead: false,
  icon: Icon({ icon: '🥵' }).props.children,
  height: '',
  variant: 'primary',
};

export const IconOnly = Template.bind({});

IconOnly.args = {
  size: 'large',
  icon: Icon({ icon: '🥵' }).props.children,
  height: '',
  lead: false,
  variant: 'primary',
};
export const CustomHeight = Template.bind({});

CustomHeight.args = {
  size: 'default',
  label: 'Button',
  height: '3.4rem',
  lead: false,
  variant: 'primary',
};
