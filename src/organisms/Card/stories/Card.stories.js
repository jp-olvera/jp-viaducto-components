import React from 'react';
import { Card } from '..';
import { ConfigProvider } from '../../../providers';

export default {
  title: 'Andamio/Organisms/Card',
  component: Card,
  argTypes: {
    elevation: {
      description: 'The elevation level it should take, one of 1/2/3',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 1 },
      },
      options: [1, 2, 3],
      control: {
        type: 'select',
      },
    },
    elevationDirection: {
      description: "The elevation direction, if '' direction goes everywhere",
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "''" },
      },
      options: [
        '',
        'top',
        'right',
        'bottom',
        'left',
        'topRight',
        'topLeft',
        'bottomRight',
        'bottomLeft',
      ],
      control: {
        type: 'select',
      },
    },
    src: {
      description: 'Source of the image of top image',
      type: { name: 'string' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: null },
      },
    },
    collapsible: {
      description: 'Attribute for render large/short card',
      type: { name: 'boolean', required: true },
      table: {
        type: { summary: 'boolean' },
      },
    },
    collapse: {
      description: 'Attribute for collapse card',
      type: { name: 'boolean', required: true },
      table: {
        type: { summary: 'boolean' },
      },
    },
    content: {
      description: 'Body component',
      type: { required: true },
      table: {
        defaultValue: { summary: null },
      },
    },
    footer: {
      description: 'Footer component',
      type: { required: true },
      table: {
        defaultValue: { summary: null },
      },
    },
    onlyImage: {
      description: 'Footer component',
      table: {
        defaultValue: { summary: null },
        type: { summary: 'boolean' },
      },
    },
    transition: {
      description: 'Linear transition to use',
      type: { name: 'string' },
      table: { type: { summary: 'string' }, defaultValue: { summary: 'ease' } },
    },
  },
};

const Template = (args) => (
  <ConfigProvider>
    <Card {...args} />
  </ConfigProvider>
);

export const Default = Template.bind({});
export const NoImage = Template.bind({});
export const OnlyImage = Template.bind({});
export const Collapsible = Template.bind({});

Default.args = {
  src: 'https://homepages.cae.wisc.edu/~ece533/images/girl.png',
  collapsible: false,
  collapse: false,
  content: '',
  footer: '',
  onlyImage: false,
  elevation: 1,
  elevationDirection: 'radial',
  transition: 'ease',
};

NoImage.args = {
  src: null,
  collapsible: false,
  collapse: false,
  content: '',
  footer: '',
  onlyImage: false,
  elevation: 1,
  elevationDirection: 'radial',
  transition: 'ease',
};

OnlyImage.args = {
  src: 'https://homepages.cae.wisc.edu/~ece533/images/girl.png',
  collapsible: false,
  collapse: false,
  content: null,
  footer: null,
  onlyImage: true,
  elevation: 1,
  elevationDirection: 'radial',
  transition: 'ease',
};

Collapsible.args = {
  src: 'https://homepages.cae.wisc.edu/~ece533/images/girl.png',
  collapsible: true,
  collapse: false,
  content: '',
  footer: '',
  onlyImage: false,
  elevation: 1,
  elevationDirection: 'radial',
  transition: 'ease',
};
