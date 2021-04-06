import React from 'react';
import { Button } from '..';

export default {
    title: 'Andamio/Cells/Button',
    component: Button,
}

const Template = (args) => <Button {...args} />

export const Default = Template.bind({});

Default.args = {
    label: "Button",
    size: "large"
}
export const Small = Template.bind({});

Small.args = {
    label: "Button",
    size: "small"
}
