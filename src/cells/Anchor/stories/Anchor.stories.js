import React from "react";
import { Anchor } from "../index";

export default {
  title: "Andamio/Cells/Anchor",
  component: Anchor,
};

const Template = args => <Anchor {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: "Link",
  href: "#",
  color: '#ff8c69',
  icon: "😎",
};

export const Lead = Template.bind({});

Lead.args = {
  label: "Link",
  href: "#",
  color: '#ff8c69',
  icon: "🥵",
  lead: true
};

export const NoIcon = Template.bind({});

NoIcon.args = {
  label: "Link",
  href: "#",
  color: '#ff8c69'
};