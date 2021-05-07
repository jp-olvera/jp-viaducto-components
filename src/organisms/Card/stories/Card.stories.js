import React from 'react';
import { Card } from '../';
import { ConfigProvider } from '../../../providers';

export default {
  title: 'Andamio/Organisms/Card',
  component: Card,
};

const Template = (args) => {
  return (
    <ConfigProvider>
      <Card {...args} />
    </ConfigProvider>
  );
};

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
};

NoImage.args = {
  src: null,
  collapsible: false,
  collapse: false,
  content: '',
  footer: '',
  onlyImage: false,
};

OnlyImage.args = {
  src: 'https://homepages.cae.wisc.edu/~ece533/images/girl.png',
  collapsible: false,
  collapse: false,
  content: null,
  footer: null,
  onlyImage: true,
};

Collapsible.args = {
  src: 'https://homepages.cae.wisc.edu/~ece533/images/girl.png',
  collapsible: true,
  collapse: false,
  content: '',
  footer: '',
  onlyImage: false,
};
