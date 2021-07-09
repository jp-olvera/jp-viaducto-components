import React from 'react';
import UserPageExample from '../UserManagement';

export default {
  title: 'Examples/User page example',
  component: UserPageExample,
  controls: { hideNoControlsWarning: true },
  options: { showPanel: false },
};

export const Template = (args: any) => <UserPageExample {...args} />;

Template.bind({});

Template.args = {
  controls: { hideNoControlsWarning: true },
  options: { showPanel: false },
};
