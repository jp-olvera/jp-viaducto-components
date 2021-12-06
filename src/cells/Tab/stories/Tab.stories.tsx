import React from 'react';
import { SBConfigI } from '../../../sb';
import { ConfigProvider } from '../../../providers';
import { Tab } from '..';
import { Container } from '../..';

const config: SBConfigI = {
  title: 'Ballena/Navigation/Tab',
  component: Tab,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    position: {
      description: 'Set the line in the position selected',
      type: { summary: 'String', required: false },
      table: { defaultValue: { summary: 'bottom' } },
      control: 'select',
      options: ['bottom', 'top', 'right', 'left'],
    },
    lineWidth: {
      description: 'Set the line width',
      type: { summary: 'String', required: false },
      table: { defaultValue: { summary: 0 } },
      control: 'text',
    },
    index: {
      description: 'Defines an index to helper functions',
      type: { summary: 'Number', required: false },
      table: { defaultValue: { summary: '100%' } },
      control: 'number',
    },
    type: {
      description: 'Set the color variant (type definition colors) for the tab',
      type: { summary: 'String', required: true },
      table: {
        defaultValue: { summary: 'tab' },
      },
      options: ['primary', 'secondary', 'info', 'success', 'warning', 'danger', 'tab'],
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
      control: 'boolean',
    },
    horizontalSpacing: {
      description: 'Set the horizontal spacing taking the tab content as reference',
      type: { summary: 'String', required: false },
      table: {
        defaultValue: { summary: 'sm' },
      },
      options: ['none', 'nano', 'micro', 'tiny', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'],
      control: {
        type: 'select',
      },
    },
    verticalSpacing: {
      description: 'Set the vertical spacing taking the tab content as reference',
      type: { summary: 'String', required: false },
      table: {
        defaultValue: { summary: 'sm' },
      },
      options: ['none', 'nano', 'micro', 'tiny', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'],
      control: {
        type: 'select',
      },
    },
    iconSpacing: {
      description: 'Set the horizontal spacing taking the icon as reference (if it is defined)',
      type: { summary: 'String', required: false },
      table: {
        defaultValue: { summary: 'none' },
      },
      options: ['none', 'nano', 'micro', 'tiny', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
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
      type: { summary: 'boolean', required: true },
      table: {
        defaultValue: { summary: false },
      },
      control: 'boolean',
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
  },
};

export default config;

const Template = (args: typeof Default) => (
  <ConfigProvider>
    <p style={{ fontFamily: 'Arial' }}>
      <b>Note</b>: set <code>left</code>/<code>right</code> position will invert{' '}
      <code style={{ color: '#0050B3', margin: '0 .2rem' }}>horizontalSpacing</code> and{' '}
      <code style={{ color: '#0050B3', margin: '0 .2rem' }}>verticalSpacing</code>
      props
    </p>
    <Container horizontal='md' top='sm'>
      <Tab {...args} />
    </Container>
  </ConfigProvider>
);

const Icon = ({ icon }) => <p>{icon}</p>;

export const Default = Template.bind({});

Default.args = {
  text: 'Zombie Patrol',
  horizontalSpacing: 'sm',
  verticalSpacing: 'sm',
  type: 'tab',
  icon: null,
  lead: false,
  iconSpacing: 'none',
  fontSize: 'lg',
  active: false,
  position: 'bottom',
};
export const WithIcon = Template.bind({});

WithIcon.args = {
  text: 'Zombie Patrol',
  horizontalSpacing: 'sm',
  verticalSpacing: 'sm',
  type: 'tab',
  icon: Icon({ icon: '🥵' }).props.children,
  lead: false,
  iconSpacing: 'xs',
  fontSize: 'lg',
  active: false,
  position: 'bottom',
};
