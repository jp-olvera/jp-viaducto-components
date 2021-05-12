import React from 'react';
import { ConfigProvider } from '../../../providers';
import { Tab } from '..';

export default {
  title: 'Andamio/Cells/Tab',
  component: Tab,
  argTypes: {
    type: {
      options: ['primary', 'secondary', 'info', 'success', 'warning', 'danger', 'tab'],
      control: 'select',
    },
    horizontalSpacing: {
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
  },
};

const Template = (args) => (
  <ConfigProvider>
    <Tab {...args} />
  </ConfigProvider>
);

const Icon = ({ icon }) => <p>{icon}</p>;

export const Default = Template.bind({});

Default.args = {
  text: 'Zombie Patrol',
  onClick: () => { },
  horizontalSpacing: 'sm',
  verticalSpacing: 'sm',
  type: 'tab',
};
export const WithIcon = Template.bind({});

WithIcon.args = {
  text: 'Zombie Patrol',
  onClick: () => { },
  horizontalSpacing: 'sm',
  verticalSpacing: 'sm',
  type: 'tab',
  icon: Icon({ icon: '🥵' }).props.children,
  lead: false,
  iconSpacing: 'xs',
};
