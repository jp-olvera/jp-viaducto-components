import React from 'react';
import UserManagement from '../UserManagement';

export default {
  title: 'Examples/UserManagement',
  component: UserManagement,
};

export const Template = (args: any) => <UserManagement {...args} />;

Template.bind({});

Template.args = {};
