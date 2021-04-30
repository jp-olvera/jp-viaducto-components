import React from "react";
import { ConfigProvider } from "../../../providers";
import { Avatar } from "../index";

export default {
  title: "Andamio/Cells/Avatar",
  component: Avatar,
  argTypes: {
    size: {
      options: ['large', 'default'],
      control: 'select'
    },
  },
};

const Template = args => <ConfigProvider><Avatar {...args} /></ConfigProvider>;

export const Default = Template.bind({});

Default.args = {
  src: "https://i.mdel.net/i/db/2020/4/1332723/1332723-500w.jpg",
  alt: "Avatar",
};
export const Large = Template.bind({});

Large.args = {
  src: "https://i.mdel.net/i/db/2020/4/1332723/1332723-500w.jpg",
  alt: "Avatar",
  size: "large",
};
