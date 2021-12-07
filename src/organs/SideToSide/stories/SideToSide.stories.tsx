import React from 'react';
import { SBConfigI } from '../../../sb';
import { ConfigProvider } from '../../../providers';
import { SideToSide } from '..';
import { Container, Title } from '../../../cells';

const config: SBConfigI = {
  title: 'Recipes/SideToSide',
  component: SideToSide,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    mediaBackgroundColor: { control: 'color' },
    childrenBackgroundColor: { control: 'color' },
  },
};

export default config;

const Media = (
  <div
    style={{
      width: '100%',
      height: '100%',
      backgroundImage: `url('https://i.pravatar.cc/1000')`,
      backgroundSize: 'cover',
    }}
  />
);

const Children = () => (
  <>
    <Title align='center' color='white'>
      Children
    </Title>
    <Title align='center' color='white'>
      Children
    </Title>
    <Title align='center' color='white'>
      Children
    </Title>
    <Title align='center' color='white'>
      Children
    </Title>
    <Title align='center' color='white'>
      Children
    </Title>
  </>
);

const Template = (args: typeof Default) => (
  <ConfigProvider>
    <Container expandHorizontal style={{ height: 500 }}>
      <SideToSide media={Media} {...args}>
        <Children />
      </SideToSide>
    </Container>
  </ConfigProvider>
);

export const Default = Template.bind({});

Default.args = {
  reverse: true,
  columnAlignment: false,
  mediaBackgroundColor: '#89BCC4',
  childrenBackgroundColor: '#264A61',
  childrenMaxWidth: '473px',
  childrenVerticalAlignment: 'center',
};
