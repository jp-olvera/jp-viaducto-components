import React from "react";
import { Anchor } from "../index";

export default {
  title: "Andamio/Cells/Anchor",
  component: Anchor,
  argTypes: {
    color: {
      control: 'color',
    },
    size: {
      options: ['xxs', 'xs', 'sm', 'md', 'lg'],
      control: 'select'
    },
  },
};

const Template = args => <Anchor {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: "Link",
  href: "#",
  color: '#ff8c69',
  icon: "😎",
  family: "Manrope",
  size: "md",
  lead: false
};

export const Lead = Template.bind({});

Lead.args = {
  label: "Link",
  href: "#",
  color: '#ff8c69',
  icon: "🥵",
  lead: true,
  family: "Manrope",
  size: "md"
};

export const NoIcon = Template.bind({});

NoIcon.args = {
  label: "Link",
  href: "#",
  color: '#ff8c69',
  family: "Manrope",
  size: "md",
  lead: false,
  icon: ''
};