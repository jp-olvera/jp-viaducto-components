import React from 'react';
import { Pill } from '..';

export default {
  title: 'Andamio/Cells/Pill',
  component: Pill,
  argTypes: {
    color: {
      control: { type: 'color' },
    },
    background: {
      control: { type: 'color' },
    },
    size: {
      control: { type: 'select' },
      options: ['xxs', 'xs', 'sm', 'md', 'lg'],
    },
  },
};

const Template = (args) => <Pill {...args} />;

const Icon = ({ icon = '🥵' }) => <p>{icon}</p>;
const IconLead = ({ icon = '🥵' }) => <p>{icon}</p>;

export const Default = Template.bind({});

Default.args = {
  label: 'Pill',
  icon: Icon({ icon: '🥵' }).props.children,
  iconLead: IconLead({ icon: '😈' }).props.children,
  family: "Manrope"
};
