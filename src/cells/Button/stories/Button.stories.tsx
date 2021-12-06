import React from 'react';
import { SBConfigI } from '../../../sb';
import { Button } from '..';
import { ConfigProvider } from '../../../providers';

const config: SBConfigI = {
  title: 'Ballena/Controls/Button',
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
    shapeColor: {
      description: 'Button shapeColor (color)',
      type: { summary: 'string', required: false },
      table: {
        defaultValue: { summary: 'primary' },
      },
      options: ['primary', 'secondary', 'info', 'success', 'danger', 'warning'],
      control: {
        type: 'select',
      },
    },
    variant: {
      description: 'Defines the visual style of the button.',
      type: { summary: 'string', required: false },
      table: {
        defaultValue: { summary: 'solid' },
      },
      options: ['solid', 'outline', 'ghost'],
      control: {
        type: 'select',
      },
    },
    colors: {
      description: 'Overrides the shapeColor color type',
      type: {
        summary: 'Object = {default, text, hover, click}',
        required: false,
      },
      table: {
        defaultValue: { summary: null },
      },
    },
    iconSpacing: {
      description: 'The horizontal spacing between the label and icon (if both are defined)',
      type: {
        summary: 'string',
        required: false,
      },
      table: {
        defaultValue: { summary: 'none' },
      },
      options: ['none', 'nano', 'micro', 'tiny', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
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
      options: [null, 'none', 'nano', 'micro', 'tiny', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'],
      control: {
        type: 'select',
      },
    },
    radius: {
      description: 'Radius size',
      type: {
        summary: 'string',
        required: false,
      },
      table: {
        defaultValue: { summary: 'md' },
      },
      options: ['none', 'sm', 'md', 'lg'],
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
      options: [null, 'none', 'nano', 'micro', 'tiny', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'],
      control: {
        type: 'select',
      },
    },
    icon: {
      description: 'Set an icon with the label',
      type: { summary: 'JSX Element / String', required: false },
      table: {
        defaultValue: { summary: null },
      },
      control: null,
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
      type: { summary: 'boolean', required: false },
      table: {
        defaultValue: { summary: false },
        type: { summary: 'boolean' },
      },
    },
    block: {
      description: 'Set button with as 100% of the container',
      type: { summary: 'boolean', required: false },
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
    isLoading: {
      description: 'Set the button disabled with an icon',
      type: { summary: 'boolean', required: false },
      table: {
        defaultValue: { summary: false },
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
    useLongLoading: {
      description: 'Set the long loading bar if it is true or circle loading when it is false',
      type: { summary: 'Boolean', required: false },
      table: {
        defaultValue: { summary: false },
        type: { summary: 'boolean' },
      },
    },
    onClick: {
      description: 'Trigger an action when button is clicked',
      type: { summary: 'Function(void)', required: false },
      table: {
        defaultValue: { summary: null },
      },
    },
  },
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
  isValid: true,
};
