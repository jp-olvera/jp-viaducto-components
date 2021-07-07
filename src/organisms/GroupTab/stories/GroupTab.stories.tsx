import React from 'react';
import { SBConfigI } from '../../../sb';
import { ConfigProvider } from '../../../providers';
import { GroupTab } from '..';
import { Container, Tab } from '../../../cells';

const config: SBConfigI = {
  title: 'Andamio/Organisms/GroupTab',
  component: GroupTab,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    position: {
      description: 'Set the line in the position selected',
      type: { summary: 'String', required: false },
      table: { defaultValue: { summary: 'bottom' } },
      control: 'select',
      options: ['bottom', 'top'],
    },
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
      <GroupTab {...args}>
        <Tab text='Zombie' />
        <Tab text='Patrol' />
        <Tab text='Group' />
        <Tab text='Tab' />
      </GroupTab>
    </Container>
  </ConfigProvider>
);

export const Default = Template.bind({});

Default.args = {
  type: 'success',
  horizontalSpacing: 'md',
  verticalSpacing: 'sm',
  fontSize: 'md',
  position: 'bottom',
};
