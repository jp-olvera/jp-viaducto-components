import React from 'react';
import { SBConfigI } from '../../../sb';
import { ConfigProvider } from '../../../providers';
import { AvatarWithText } from '../index';
import { Container, Paragraph } from '../../../cells';

const config: SBConfigI = {
  title: 'Andamio/Tissues/AvatarWithText',
  component: AvatarWithText,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    avatar: {
      description: 'Avatar component props',
      type: {
        summary: '{src: string; alt: string; size?: string; height?: string; width?: string; clipPath?: string | null;}',
        required: true,
      },
      table: {
        defaultValue: { summary: null },
      },
      control: null,
    },
    spacing: {
      description: 'Horizontal Spacing between Avatar and children',
      type: {
        summary: 'string',
        required: false,
      },
      table: {
        defaultValue: { summary: 'sm' },
      },
      options: [
        null,
        'none',
        'nano',
        'micro',
        'tiny',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        'xxl',
        'xxxl',
      ],
      control: {
        type: 'select',
      },
    },
    reverse: {
      description: 'Set row-reverse property',
      type: { summary: 'Boolean', required: false },
      table: {
        defaultValue: { summary: false },
      },
      control: 'boolean',
    },
  },
};

export default config;

const Template = (args: typeof Default) => (
  <ConfigProvider>
    <Container
      vertical='md'
      horizontal='xxl'
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        fontFamily: 'Arial',
      }}
    >
      <AvatarWithText {...args}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Paragraph color='dark'>John Doe</Paragraph>
          <Paragraph color='darkGray' size='xs'>
            john@ballena.com
          </Paragraph>
        </div>
      </AvatarWithText>
      <AvatarWithText {...args}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Paragraph color='dark'>Adam Cruz</Paragraph>
          <Paragraph color='success'>34 years</Paragraph>
        </div>
      </AvatarWithText>
      <AvatarWithText {...args}>
        <Paragraph color='#0050B3' size='lg'>
          Join for free
        </Paragraph>
      </AvatarWithText>
    </Container>
  </ConfigProvider>
);

export const Default = Template.bind({});

Default.args = {
  avatar: {
    src: 'https://picsum.photos/1000',
    alt: 'AvatarWithText',
  },
  spacing: 'md',
  reverse: false,
};
