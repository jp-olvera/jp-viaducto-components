import React from "react";
import { Paragraph } from "..";

export default {
  title: "Andamio/Cells/Paragraph",
  component: Paragraph,
  argTypes: {
    color: {
      control: {
        type: 'color',
      },
    },
    lineHeight: {
      options: ['xs', 'sm', 'md', 'lg'],
      control: {
        type: 'select',
      },
    },
    fontStyle: {
      options: ['normal', 'italic'],
      control: {
        type: 'select',
      },
    },
    weight: {
      options: ['normal', 'bold'],
      control: {
        type: 'select'
      }
    },
    align: {
      options: ['left', 'right', 'center'],
      control: {
        type: 'select'
      }
    },
    size: {
      options: ['xxs', 'xs', 'sm', 'md', 'lg'],
      control: {
        type: 'select'
      }
    },
  }
};

const Template = args => (
  <Paragraph {...args}>
    This is a paragraph example, please write everything you need. Greetings.
    Bye.
  </Paragraph>
);

export const Default = Template.bind({});

Default.args = {};

export const Custom = Template.bind({});

Custom.args = {
  size: "sm",
  align: "left",
  family: "DM Sans",
  fontStyle: "normal",
  margin: "0",
  weight: "normal",
  spacing: "normal",
  color: "#000",
  lineHeight: "md"
};
