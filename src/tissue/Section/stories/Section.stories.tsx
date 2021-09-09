import React from 'react';
import { SBConfigI } from '../../../sb';
import { ConfigProvider } from '../../../providers';
import { Section } from '..';
import { Container, Paragraph, Title } from '../../../cells';
import { SideToSide } from '../../../organs';

const config: SBConfigI = {
  title: 'Ballena/Tissues/Section',
  component: Section,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    top: { control: 'select', options: [null, 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'] },
    bottom: { control: 'select', options: [null, 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'] },
    vertical: { control: 'select', options: [null, 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'] },
  },
};

export default config;
const Media = (
  <div
    style={{
      width: '100%',
      height: '500px',
      backgroundImage: `url('https://i.pravatar.cc/1000')`,
      backgroundSize: 'cover',
    }}
  />
);
const Template = (args: typeof Default) => (
  <ConfigProvider>
    <Paragraph>Here we have two sections:</Paragraph>
    <Paragraph>
      <code>
        <pre>{`
        sections:{[
          { background: 'red' },
          { background: 'green' }
        ]}`}</pre>
      </code>
    </Paragraph>
    <Paragraph>
      We need, at least, one section but we can add more if we want. We can set any CSS
      <code> background </code> properties (<code>size, position, image, color, etc.</code>)
    </Paragraph>
    <br />
    <Section {...args}>
      <SideToSide media={Media}>
        <Title color='white'>SideToSide component in Section</Title>
      </SideToSide>
      <SideToSide media={Media} reverse columnAlignment={false}>
        <Title color='white'>SideToSide component in Section</Title>
      </SideToSide>
      <SideToSide media={Media}>
        <Title color='white'>SideToSide component in Section</Title>
      </SideToSide>
    </Section>
  </ConfigProvider>
);

export const Default = Template.bind({});

Default.args = {
  sections: [{ background: 'red' }, { background: 'green' }],
  top: null,
  bottom: null,
  childMaxWidth: '1136px',
  vertical: 'lg',
};
