import React from 'react';
import { Spacer } from '..';

export default {
    title: 'Andamio/Cells/Spacer',
    component: Spacer,
}

const Template = (args) => <Spacer {...args} />

export const Vertical = Template.bind({});

Vertical.args = {
    size: "sm",
}
export const Horiontal = Template.bind({});

Horiontal.args = {
    size: "sm",
    direction: "horizontal"
}
