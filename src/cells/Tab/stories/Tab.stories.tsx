import React from 'react';
import { SBConfigI } from 'sb';
import { ConfigProvider } from '../../../providers';
import { Tab } from '..';
import { Container } from '../..';

const config: SBConfigI = {
  title: 'Andamio/Cells/Tab',
  component: Tab,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    type: {
      description: 'Set the color variant (type definition colors) for the tab',
      type: { summary: 'String', required: true },
      table: {
        defaultValue: { summary: 'tab' },
      },
      options: [
        'primary',
        'secondary',
        'info',
        'success',
        'warning',
        'danger',
        'tab',
      ],
      control: 'select',
    },
    fontSize: {
      description: 'Set the font size',
      type: { summary: 'String', required: false },
      table: {
        defaultValue: { summary: 'lg' },
      },
      options: ['xxs', 'xs', 'sm', 'md', 'lg'],
      control: {
        type: 'select',
      },
    },
    active: {
      description: 'Set active props',
      type: { summary: 'boolean', required: true },
      table: {
        defaultValue: { summary: false },
      },
    },
    horizontalSpacing: {
      description:
        'Set the horizontal spacing taking the tab content as reference',
      type: { summary: 'String', required: false },
      table: {
        defaultValue: { summary: 'sm' },
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
        'xxxl',
      ],
      control: {
        type: 'select',
      },
    },
    verticalSpacing: {
      description:
        'Set the vertical spacing taking the tab content as reference',
      type: { summary: 'String', required: false },
      table: {
        defaultValue: { summary: 'sm' },
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
        'xxxl',
      ],
      control: {
        type: 'select',
      },
    },
    iconSpacing: {
      description:
        'Set the horizontal spacing taking the icon as reference (if it is defined)',
      type: { summary: 'String', required: false },
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
    icon: {
      description: 'Defines the icon in the tab',
      type: { summary: 'JSX Element/String', required: false },
      table: {
        defaultValue: { summary: null },
      },
    },
    lead: {
      description:
        'Set the icon as main children and it will be place before the label (if it is defined)',
      type: { summary: 'Boolean', required: false },
      table: {
        defaultValue: { summary: false },
      },
    },
    onClick: {
      description: 'Handles the action to take when the tab is selected',
      type: { summary: 'Function', required: false },
      table: {
        defaultValue: { summary: null },
      },
    },
    text: {
      description: 'Set the label or text in the tab',
      type: { summary: 'String', required: false },
      table: {
        defaultValue: { summary: null },
      },
    },
    transition: {
      description: 'Defines the transitionTimingFunction',
      type: { summary: 'String', required: false },
      table: {
        defaultValue: { summary: 'ease' },
      },
    },
  },
};

export default config;

const Template = (args: typeof Default) => (
  <ConfigProvider>
    <Container horizontal='md' top='sm'>
      <Tab {...args} />
    </Container>
  </ConfigProvider>
);

const Icon = ({ icon }) => <p>{icon}</p>;

export const Default = Template.bind({});

Default.args = {
  text: 'Zombie Patrol',
  onClick: () => {},
  horizontalSpacing: 'sm',
  verticalSpacing: 'sm',
  type: 'tab',
  icon: null,
  lead: false,
  transition: 'ease',
  iconSpacing: 'none',
  fontSize: 'lg',
  active: false,
};
export const WithIcon = Template.bind({});

WithIcon.args = {
  text: 'Zombie Patrol',
  onClick: () => {},
  horizontalSpacing: 'sm',
  verticalSpacing: 'sm',
  type: 'tab',
  icon: Icon({ icon: '🥵' }).props.children,
  lead: false,
  transition: 'ease',
  iconSpacing: 'xs',
  fontSize: 'lg',
  active: false,
};
