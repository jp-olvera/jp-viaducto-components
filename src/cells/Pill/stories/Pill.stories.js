import React from 'react';
import { Pill } from '..';
import { ConfigProvider } from '../../../providers';

export default {
  title: 'Andamio/Cells/Pill',
  component: Pill,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    background: {
      description: 'Set background color for the pill',
      type: { summary: 'String', required: true },
      table: {
        defaultValue: { summary: '#C4C4C4' },
      },
      control: { type: 'color' },
    },
    circleBorder: {
      description: 'Set circular border',
      type: { summary: 'Boolean', required: false },
      table: {
        defaultValue: { summary: true },
      },
    },
    color: {
      description: 'Set font color ',
      type: { summary: 'String', required: false },
      table: {
        defaultValue: { summary: '#000' },
      },
      control: { type: 'color' },
    },
    borderColor: {
      description: 'Set border color ',
      type: { summary: 'String', required: false },
      table: {
        defaultValue: { summary: null },
      },
      control: { type: 'color' },
    },
    family: {
      description: 'Set the font family',
      type: { summary: 'String', required: false },
      control: 'text',
    },
    handleAction: {
      description:
        'Defines an action to take while close (X) button is pressed',
      type: { summary: 'Function', required: false },
      table: {
        defaultValue: { summary: null },
      },
    },
    iconLead: {
      description: 'Set the icon defined before the label (if it is defined)',
      type: { summary: 'JSX Element/String', required: false },
      table: {
        defaultValue: { summary: false },
      },
    },
    label: {
      description:
        'Set the the label inside the pill as the principal children component',
      type: { summary: 'String', required: true },
      table: {
        defaultValue: { summary: null },
      },
    },
    size: {
      description: 'Set the font size of the pill',
      type: { summary: 'String', required: false },
      table: {
        defaultValue: { summary: 'md' },
      },
      control: { type: 'select' },
      options: ['xxs', 'xs', 'sm', 'md', 'lg'],
    },
  },
};

const Template = (args) => (
  <ConfigProvider>
    <Pill {...args} />
  </ConfigProvider>
);

const IconLead = ({ icon }) => <p>{icon}</p>;

export const Default = Template.bind({});

Default.args = {
  label: 'Pill',
  background: '#C4C4C4',
  color: '#000',
  size: 'md',
  iconLead: IconLead({ icon: '😈' }).props.children,
  handleAction: () => {},
  circleBorder: true,
};
