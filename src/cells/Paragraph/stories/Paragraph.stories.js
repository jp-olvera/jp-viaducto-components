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
};
