import React from "react";
import { Title } from "..";

export default {
	title: "Andamio/Cells/Title",
	component: Title,
};

const Template = args => <Title {...args}>Title example</Title>;

export const Heading = Template.bind({});

Heading.args = {
	level: "1",
};

export const Display = Template.bind({});

Display.args = {
	level: "d1",
};
