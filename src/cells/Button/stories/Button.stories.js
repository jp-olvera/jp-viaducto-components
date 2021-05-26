import React from 'react';
import { Play } from 'react-ikonate';
import { Button } from '..';
import { ConfigProvider } from '../../../providers';

export default {
  title: 'Andamio/Cells/Controls/Button',
  component: Button,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    label: {
      description: 'Title or content of the component',
      type: { summary: 'string', required: false },
      table: {
        defaultValue: { summary: null },
      },
    },
    size: {
      description: 'Size (large) of the button',
      type: { summary: 'string', required: false },
      table: {
        defaultValue: { summary: 'default' },
      },
      options: ['small', 'default', 'large'],
      control: {
        type: 'select',
      },
    },
    variant: {
      description: 'Button variant (color)',
      type: { summary: 'string', required: false },
      table: {
        defaultValue: { summary: 'primary' },
      },
      options: ['primary', 'secondary', 'info', 'success', 'danger', 'warning'],
      control: {
        type: 'select',
      },
    },
    colors: {
      description: 'Overrides the variant color type',
      type: {
        summary: 'Object = {default, text, hover, click}',
        required: false,
      },
      table: {
        defaultValue: { summary: null },
      },
    },
    iconSpacing: {
      description:
        'The horizontal spacing between the label and icon (if both are defined)',
      type: {
        summary: 'string',
        required: false,
      },
      table: {
        defaultValue: { summary: 'none' },
      },
      options: [
        'none',
        'nano',
        'micro',
        'tiny',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        'xxl',
      ],
      control: {
        type: 'select',
      },
    },
    leftSpacing: {
      description: 'Left spacing between the content and the button',
      type: {
        summary: 'string',
        required: false,
      },
      table: {
        defaultValue: { summary: 'none' },
      },
      options: [
        null,
        'none',
        'nano',
        'micro',
        'tiny',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        'xxl',
        'xxxl',
      ],
      control: {
        type: 'select',
      },
    },
    rightSpacing: {
      description: 'Right spacing between the content and the button',
      type: {
        summary: 'string',
        required: false,
      },
      table: {
        defaultValue: { summary: null },
      },
      options: [
        null,
        'none',
        'nano',
        'micro',
        'tiny',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        'xxl',
        'xxxl',
      ],
      control: {
        type: 'select',
      },
    },
    transition: {
      description: 'Set the transitionTimingFunction',
      type: {
        summary: 'string',
        required: false,
      },
      table: {
        defaultValue: { summary: 'ease' },
      },
    },
    icon: {
      description: 'Set an icon with the label',
      type: { summary: 'JSX Element / String', required: false },
      table: {
        defaultValue: { summary: 'null' },
      },
    },
    height: {
      description: 'Set button height',
      type: { summary: 'string', required: false },
      table: {
        defaultValue: { summary: 'null' },
      },
    },
    disabled: {
      description: 'Set the button as disabled',
      type: { summary: 'Boolean', required: false },
      table: {
        defaultValue: { summary: false },
      },
    },
    block: {
      description: 'Set button with as 100% of the container',
      type: { summary: 'Boolean', required: false },
      table: {
        defaultValue: { summary: false },
      },
    },
    lead: {
      description:
        'Set the icon (if it is provided) at the begining of the component (before the label)',
      type: { summary: 'Boolean', required: false },
      table: {
        defaultValue: { summary: false },
      },
    },
    onClick: {
      description: 'Handles the action to take when the button is pressed',
      type: { summary: 'Function', required: false },
      table: {
        defaultValue: { summary: null },
      },
    },
    isLoading: {
      description: 'Set the button disabled with an icon',
      type: { summary: 'boolean', required: false },
      table: {
        type: { summary: 'boolean|string' },
      },
    },
    isValid: {
      description: 'Set the button with green border and Ok icon',
      type: { summary: 'Boolean', required: false },
      table: {
        defaultValue: { summary: null },
        type: { summary: 'boolean' },
      },
      options: [null, true, false],
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

const Icon = ({ icon }) => <p>{icon}</p>;

export const Default = Template.bind({});

Default.args = {
  label: 'Button',
  size: 'default',
  lead: false,
  icon: Icon({ icon: <Play /> }).props.children,
  height: '',
  variant: 'primary',
  colors: null,
  disabled: false,
  block: false,
  transition: 'ease',
  onClick: () => {},
};
export const Custom = Template.bind({});

Custom.args = {
  label: 'Button',
  size: 'default',
  lead: false,
  icon: Icon({ icon: <Play /> }).props.children,
  height: '',
  variant: 'primary',
  colors: null,
  disabled: false,
  iconSpace: 'xs',
  transition: 'ease',
  onClick: () => {},
};
export const Small = Template.bind({});

Small.args = {
  label: 'Button',
  size: 'small',
  lead: false,
  icon: Icon({ icon: <Play /> }).props.children,
  height: '',
  variant: 'primary',
  transition: 'ease',
  onClick: () => {},
};

export const IconOnly = Template.bind({});

IconOnly.args = {
  size: 'large',
  icon: Icon({ icon: <Play /> }).props.children,
  height: '',
  lead: false,
  variant: 'primary',
  transition: 'ease',
  onClick: () => {},
};
export const CustomHeight = Template.bind({});

CustomHeight.args = {
  size: 'default',
  label: 'Button',
  height: '3.4rem',
  lead: false,
  variant: 'primary',
  transition: 'ease',
  onClick: () => {},
};
export const LoadingButton = Template.bind({});

LoadingButton.args = {
  size: 'large',
  label: 'Button',
  lead: false,
  variant: 'primary',
  transition: 'ease',
  onClick: () => {},
  isLoading: true,
};

export const StateButton = Template.bind({});

StateButton.args = {
  size: 'large',
  label: 'Button',
  lead: false,
  variant: 'primary',
  transition: 'ease',
  onClick: () => {},
  isLoading: false,
  isValid: true,
};
