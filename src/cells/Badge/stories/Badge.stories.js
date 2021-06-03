import React from 'react';
import { Badge } from '..';
import { ConfigProvider } from '../../../providers';

export default {
  title: 'Andamio/Cells/Badge',
  component: Badge,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    background: {
      description:
        'Set background color for the Badge (will not appear if the src is provided)',
      type: { summary: 'String', required: false },
      table: {
        defaultValue: { summary: '#C4C4C4' },
      },
      control: { type: 'color' },
    },
    color: {
      description: 'Set font color ',
      type: { summary: 'String', required: false },
      table: {
        defaultValue: { summary: '#000' },
      },
      control: { type: 'color' },
    },
    family: {
      description: 'Set the font family',
      type: { summary: 'String', required: false },
      control: 'text',
    },
    content: {
      description:
        'Set the the content inside the Badge as the principal children component',
      type: { summary: 'JSX Element', required: true },
      table: {
        defaultValue: { summary: null },
      },
    },
    fontSize: {
      description: 'Set the font size of the Badge',
      type: { summary: 'String', required: false },
      table: {
        defaultValue: { summary: 'md' },
      },
      control: { type: 'select' },
      options: ['xxs', 'xs', 'sm', 'md', 'lg'],
    },
    size: {
      description: 'Set the  Badge size',
      type: {
        summary: 'string/{width: string; height: string}',
        required: true,
      },
      table: {
        defaultValue: { summary: 'md' },
      },
      control: { type: 'select' },
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
    },
    clipPath: {
      description: 'Set the shape for the badge ',
      type: {
        summary: 'string',
        required: true,
      },
      table: {
        defaultValue: { summary: 'circle' },
      },
      control: { type: 'select' },
      options: [
        'hexagon',
        'pentagon',
        'rhombus',
        'ellipse',
        'rabbet',
        'star',
        'triangle',
        'circle',
      ],
    },
    src: {
      description: 'Set the image url for the background',
      type: {
        summary: 'string',
        required: false,
      },
      table: {
        defaultValue: { summary: null },
      },
    },
    align: {
      description: 'Set the content in the place selected',
      type: {
        summary: 'string',
        required: false,
      },
      table: {
        defaultValue: { summary: 'center' },
      },
      control: 'select',
      options: [
        'center',
        'center-right',
        'center-left',
        'top-center',
        'bottom-center',
        'top-right',
        'top-left',
        'bottom-right',
        'bottom-left',
      ],
    },
  },
};

const Template = (args) => (
  <ConfigProvider>
    <Badge {...args} />
  </ConfigProvider>
);

export const Default = Template.bind({});

Default.args = {
  content: 'Badge',
  background: '#C4C4C4',
  color: 'red',
  fontSize: 'md',
  src: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
  size: 'md',
  clipPath: 'circle',
  align: 'center',
};
