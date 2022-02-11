import React from 'react';
import { SBConfigI } from '../../../sb';
import { ConfigProvider } from '../../../providers';
import { GroupTab } from '..';
import { Tab } from '../../../cells';

const config: SBConfigI = {
  title: 'FronteraUI/Navigation/GroupTab',
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
    tabType: {
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
    spacing: {
      description: 'Set the spacing between tabs',
      type: { summary: 'String', required: false },
      table: {
        defaultValue: { summary: 'none' },
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
    transition: {
      description: 'Defines the transitionTimingFunction',
      type: { summary: 'String', required: false },
      table: {
        defaultValue: { summary: 'ease' },
      },
    },
    onTabChange: {
      description: 'Triggers an action on tab changes',
      type: { summary: 'Function', required: false },
      table: {
        defaultValue: { summary: null },
      },
    },
    base: {
      description: 'REM base to match any change, base 16',
      type: { summary: 'number', required: false },
      table: {
        defaultValue: { summary: 16 },
      },
      control: 'number',
    },
  },
};

export default config;

const Template = (args: typeof Default) => (
  <ConfigProvider>
    <GroupTab {...args}>
      <Tab text='Store' onClick={console.log} />
      <Tab text='My apps' />
      <Tab text='Organization Settings' />
      <Tab text='Very large tab name but sill works' />
      <Tab text='Market' />
      <Tab text='Last Mile' />
    </GroupTab>
  </ConfigProvider>
);

export const Default = Template.bind({});

Default.args = {
  tabType: 'tab',
  horizontalSpacing: 'none',
  verticalSpacing: 'sm',
  fontSize: 'md',
  position: 'bottom',
  spacing: 'md',
  transition: 'ease',
  base: 16,
};
