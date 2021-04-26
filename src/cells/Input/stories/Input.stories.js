import React from "react";
import { A } from '..';

export default {
  title: "Andamio/Cells/Input",
  component: A
};

const Template = args => <A {...args} />


export const Default = Template.bind({});

Default.args = {
  size: "sm",
  value: "Value (Disabled)",
  label: "sm disabled with value",
  iconRequired: false,
  label: null,
  border: "default",
  disabled: false,
  size: "default",
  type: "text",
  iconHelper: null,
  displayName: "",
  id: "input",
  defaultValue: "hola"
}