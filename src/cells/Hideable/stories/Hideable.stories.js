import React from "react";
import { Hideable } from '..';

export default {
  title: "Andamio/Cells/Hideable",
  component: Hideable,
  argTypes: {
    visibleOn: {
      control: {
        type: 'radio',
        options: ['xs', 'sm', 'md', 'lg', 'xl']
      }
    },
    after: {
      control: {
        type: 'radio',
        options: [true, false]
      }
    }
  }
};

const Template = args => (
  <Hideable {...args}>
    <p>🥵😈 (resize your window)</p>
  </Hideable>
);

export const Default = Template.bind({});

Default.args = {
  visibleOn: "xs",
}