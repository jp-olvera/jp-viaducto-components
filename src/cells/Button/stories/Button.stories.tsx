import React from 'react';
import { SBConfigI } from '../../../sb';
import { Button } from '..';
import { ConfigProvider } from '../../../providers';

const config: SBConfigI = {
  title: 'Ballena/Controls/Button',
  component: Button,
  parameters: { controls: { sort: 'requiredFirst' } },
};

export default config;

const Template = (args: typeof Default) => (
  <ConfigProvider>
    <Button {...args} />
  </ConfigProvider>
);

const Icon = ({ icon }) => <p>{icon}</p>;

export const Default = Template.bind({});

Default.args = {
  useLongLoading: false,
  label: 'Button',
  size: 'default',
  lead: false,
  icon: Icon({ icon: '👁‍🗨' }).props.children,
  height: '',
  shapeColor: 'primary',
  variant: 'solid',
  colors: null,
  disabled: false,
  block: false,
  isLoading: false,
};

export const Outline = Template.bind({});

Outline.args = {
  useLongLoading: false,
  label: 'Button',
  size: 'default',
  lead: false,
  icon: Icon({ icon: '❤' }).props.children,
  height: '',
  shapeColor: 'secondary',
  variant: 'outline',
  colors: null,
  disabled: false,
  block: false,
  isLoading: false,
};
export const Ghost = Template.bind({});

Ghost.args = {
  useLongLoading: false,
  label: 'Button',
  size: 'default',
  lead: false,
  icon: Icon({ icon: '❤' }).props.children,
  height: '',
  shapeColor: 'danger',
  variant: 'ghost',
  colors: null,
  disabled: false,
  block: false,
  isLoading: false,
};

export const Custom = Template.bind({});

Custom.args = {
  useLongLoading: false,
  label: 'Button',
  size: 'default',
  lead: false,
  icon: Icon({ icon: '❤' }).props.children,
  height: '',
  shapeColor: 'primary',
  variant: 'solid',
  colors: null,
  disabled: false,
  isLoading: false,
  iconSpace: 'xs',
};
export const Small = Template.bind({});

Small.args = {
  useLongLoading: false,
  label: 'Button',
  size: 'small',
  lead: false,
  icon: Icon({ icon: '❤' }).props.children,
  height: '',
  shapeColor: 'primary',
  variant: 'solid',
  isLoading: false,
};

export const IconOnly = Template.bind({});

IconOnly.args = {
  useLongLoading: false,
  size: 'large',
  icon: Icon({ icon: '❤' }).props.children,
  height: '',
  lead: false,
  shapeColor: 'primary',
  variant: 'solid',
  isLoading: false,
};
export const CustomHeight = Template.bind({});

CustomHeight.args = {
  useLongLoading: false,
  size: 'default',
  label: 'Button',
  height: '3.4rem',
  lead: false,
  shapeColor: 'primary',
  variant: 'solid',
  isLoading: false,
};
export const LoadingButton = Template.bind({});

LoadingButton.args = {
  useLongLoading: false,
  size: 'large',
  label: 'Button',
  lead: false,
  shapeColor: 'primary',
  variant: 'solid',
  isLoading: true,
  icon: Icon({ icon: '⭕' }),
};

export const StateButton = Template.bind({});

StateButton.args = {
  useLongLoading: false,
  size: 'large',
  label: 'Button',
  lead: false,
  shapeColor: 'primary',
  variant: 'solid',
  isLoading: false,
};
export const CustomColors = Template.bind({});

CustomColors.args = {
  useLongLoading: false,
  size: 'large',
  label: 'custom colors',
  lead: false,
  shapeColor: null,
  variant: 'solid',
  isLoading: false,
  colors: { default: 'orange', hover: 'blue', click: 'black', text: '#cecece', shadow: '#ffde' },
};
