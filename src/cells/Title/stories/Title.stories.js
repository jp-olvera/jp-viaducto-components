import React from "react";
import { Title } from "..";

export default {
  title: "Andamio/Cells/Title",
  component: Title,
};

const Template = (args) => <Title {...args}>The quick brown fox jumps over the lazy dog</Title>;

export const Heading = Template.bind({});

Heading.args = {
};

export const HeadingCustom = Template.bind({});

HeadingCustom.args = {
  level: "1",
  family: "DM Sans",
  weight: "400",
  fontStyle: "normal",
  margin: "0",
  align: "left",
  spacing: "normal",
  lineHeight: "",
  color: "",
};


export const Display = Template.bind({});

Display.args = {
  level: "d1",
};
export const DisplayCustom = Template.bind({});

DisplayCustom.args = {
  level: "d1",
  family: "DM Sans",
  weight: "400",
  fontStyle: "normal",
  margin: "0",
  align: "left",
  spacing: "normal",
  lineHeight: "",
  color: "",
};
