import React from 'react';
import { Card } from '..';
import { ConfigProvider } from '../../../providers';

export default {
  title: 'Andamio/Organisms/Card',
  component: Card,
  argTypes: {
    elevationDirection: {
      options: [
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
    elevation: {
      options: [1, 2, 3],
      control: {
        type: 'select',
      },
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
  transition: 'ease'
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
  transition: 'ease'
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
  transition: 'ease'
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
  transition: 'ease'
};
