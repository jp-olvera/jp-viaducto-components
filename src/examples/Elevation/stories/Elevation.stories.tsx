import React from 'react';
import Elevation from '../Elevation';

export default {
  title: 'Examples/Elevation',
  component: Elevation,
};

export const Template = (args: any) => <Elevation {...args} />;

Template.bind({});

Template.parameters = {
  previewTabs: {
    'storybook/docs/panel': {
      hidden: true,
    },
  },
};
