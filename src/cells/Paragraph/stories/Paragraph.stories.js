import React from "react";
import { Paragraph } from "..";

export default {
  title: "Andamio/Cells/Paragraph",
  component: Paragraph,
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
  weight: "400",
  spacing: "normal",
  size: "1rem",
  color: "#000",
  lineHeight: ""
};
