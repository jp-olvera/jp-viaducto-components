import React from 'react';
import { SBConfigI } from '../../../sb';
import { ConfigProvider } from '../../../providers';
import { List } from '../index';
import ListItem from '../ListItem';
import { ArrowRight } from 'phosphor-react';
import { Container, Paragraph, Title } from '../../..';

const config: SBConfigI = {
  title: 'Ballena/Tissues/List',
  component: List,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    markerColor: { control: 'color' },
  },
};

export default config;

const Template = (args: typeof Default) => (
  <ConfigProvider>
    <Container>
      <Paragraph>
        You can choose the default list-type for list or place any content (spacing will affect only
        in custom list item; color market will affect only in default list item):
      </Paragraph>
    </Container>
    <List {...args} listStyle={<ArrowRight />}>
      <ListItem>
        <Paragraph>List item with custom list-type</Paragraph>
      </ListItem>
      <ListItem>
        <Paragraph>List item with custom list-type</Paragraph>
      </ListItem>
    </List>
    <List {...args} listStyle='lower-roman'>
      <ListItem>
        <Title level='3'>List item with Title Component (lower-roman style)</Title>
      </ListItem>
      <ListItem>
        <Title level='3'>List item with Title Component (lower-roman style)</Title>
      </ListItem>
    </List>
  </ConfigProvider>
);

export const Default = Template.bind({});

Default.args = {
  verticalSpacing: 'xs',
  horizontalSpacing: 'xs',
  markerColor: 'dark',
};

const listTypes = [
  'disc',
  'circle',
  'square',
  'decimal',
  'decimal-leading-zero',
  'lower-roman',
  'upper-roman',
  'lower-greek',
  'lower-latin',
  'upper-latin',
  'armenian',
  'georgian',
  'lower-alpha',
  'upper-alpha',
];

const AllList = (args) => (
  <ConfigProvider>
    <Container vertical='md'>
      <Paragraph>The complete default lists-styles are:</Paragraph>
    </Container>
    <Container>
      {listTypes.map((item: string) => (
        <List key={item} listStyle={item} {...args}>
          <ListItem>
            <Paragraph>{item}</Paragraph>
          </ListItem>
        </List>
      ))}
    </Container>
  </ConfigProvider>
);

export const AllListProps = AllList.bind({});

AllListProps.args = {
  verticalSpacing: 'xs',
  horizontalSpacing: 'xs',
  markerColor: 'dark',
};
