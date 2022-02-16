import React from 'react';
import { SBConfigI } from '../../../sb';
import { Card } from '..';
import { ConfigProvider } from '../../../providers';

const config: SBConfigI = {
  title: 'FronteraUI/Content/Card',
  component: Card,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    elevation: {
      description: 'The elevation level it should take, one of 1/2/3',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 1 },
      },
      options: [0, 1, 2, 3],
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
        'radial',
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
    children: {
      description: 'Children component',
      type: { sumary: null, required: true },
      table: {
        defaultValue: { summary: null },
      },
      control: null,
    },
    radius: {
      description: 'Set border radius',
      type: { name: 'string' },
      table: { type: { summary: 'string' }, defaultValue: { summary: 'none' } },
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
    },
    family: {
      description: 'Set font family',
      type: { name: 'string' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'inherit' },
      },
    },
  },
};

export default config;

const Template = (args: typeof Default) => (
  <ConfigProvider>
    <Card {...args}>
      <FakeContent />
    </Card>
  </ConfigProvider>
);
const Image = (args: typeof OnlyImage) => (
  <ConfigProvider>
    <Card {...args} />
  </ConfigProvider>
);

export const Default = Template.bind({});
export const NoImage = Template.bind({});
export const OnlyImage = Image.bind({});

const FakeContent = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    }}
  >
    <p>
      This is a <b>content</b> and could be anything
    </p>
    <p>Any component is permitted</p>
    <p>Put your imagination here</p>
  </div>
);

Default.args = {
  src: 'https://images.freeimages.com/images/large-previews/478/jack-o-lanterns-1326113.jpg',
  elevation: 1,
  elevationDirection: 'radial',
  radius: 'none',
};

NoImage.args = {
  src: null,
  elevation: 1,
  elevationDirection: 'radial',
  radius: 'none',
};

OnlyImage.args = {
  src: 'https://homepages.cae.wisc.edu/~ece533/images/girl.png',
  onlyImage: true,
  elevation: 1,
  elevationDirection: 'radial',
  radius: 'none',
};
