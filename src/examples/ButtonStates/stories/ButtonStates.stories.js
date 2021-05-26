import React from 'react';
import ButtonStates from '../ButtonStates';

export default {
  title: 'Andamio/Examples/ButtonStates',
  component: ButtonStates,
};

export const Template = (args) => <ButtonStates {...args} />;

Template.bind({});
Template.parameters = {
  controls: { hideNoControlsWarning: true },
  options: { showPanel: false },
};
Template.args = {};
